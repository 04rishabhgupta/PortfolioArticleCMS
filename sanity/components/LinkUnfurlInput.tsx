import { CheckmarkCircleIcon } from '@sanity/icons/CheckmarkCircle'
import { SyncIcon } from '@sanity/icons/Sync'
import { WarningOutlineIcon } from '@sanity/icons/WarningOutline'
import { Box, Button, Card, Flex, Spinner, Stack, Text } from '@sanity/ui'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getPublishedId, type StringInputProps, useClient, useDocumentOperation, useFormValue } from 'sanity'
import { apiVersion } from '../env'
import {
  fetchArticleDetails,
  findOrCreatePublication,
  guessCategory,
  isProbablyUrl,
  requestArchive,
  savePicture,
} from '../lib/press-fetch'

type Status =
  | { kind: 'idle' }
  | { kind: 'working'; step: string }
  | { kind: 'done'; missing: string[] }
  | { kind: 'duplicate' }
  | { kind: 'error'; message: string }

const FIELD_LABELS: Record<string, string> = {
  headline: 'headline',
  publication: 'publication',
  date: 'date',
  excerpt: 'excerpt',
  picture: 'picture',
}

export function LinkUnfurlInput(props: StringInputProps) {
  const { value, renderDefault } = props
  const client = useClient({ apiVersion })

  const rawId = (useFormValue(['_id']) as string | undefined) ?? ''
  const id = getPublishedId(rawId)
  const { patch } = useDocumentOperation(id, 'pressMention')

  const current = {
    headline: useFormValue(['headline']) as string | undefined,
    publication: useFormValue(['publication']) as unknown,
    publishedAt: useFormValue(['publishedAt']) as string | undefined,
    excerpt: useFormValue(['excerpt']) as string | undefined,
    image: useFormValue(['image']) as unknown,
    category: useFormValue(['category']) as string | undefined,
    archiveUrl: useFormValue(['archiveUrl']) as string | undefined,
  }
  const currentRef = useRef(current)
  currentRef.current = current

  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const lastFetched = useRef<string | undefined>(undefined)

  const run = useCallback(
    async (link: string, replaceExisting: boolean) => {
      lastFetched.current = link
      try {
        setStatus({ kind: 'working', step: 'Checking you haven’t added this already…' })
        const duplicates = await client.fetch<number>(
          'count(*[_type == "pressMention" && url == $url && !(_id in [$id, $draft])])',
          { url: link, id, draft: `drafts.${id}` },
        )
        if (duplicates > 0) {
          setStatus({ kind: 'duplicate' })
          return
        }

        setStatus({ kind: 'working', step: 'Reading the article…' })
        const details = await fetchArticleDetails(link)

        setStatus({ kind: 'working', step: 'Saving the picture and a backup copy…' })
        const has = currentRef.current
        const fill = (existing: unknown) => replaceExisting || !existing

        const [publicationId, imageAssetId, archiveUrl] = await Promise.all([
          fill(has.publication) ? findOrCreatePublication(client, details.publicationName, details.domain) : undefined,
          fill(has.image) && details.imageUrl
            ? savePicture(client, details.imageUrl, details.domain).catch(() => undefined)
            : undefined,
          has.archiveUrl ? undefined : requestArchive(link),
        ])

        const updates: Record<string, unknown> = {}
        if (details.headline && fill(has.headline)) updates.headline = details.headline
        if (details.publishedAt && fill(has.publishedAt)) updates.publishedAt = details.publishedAt
        if (details.excerpt && fill(has.excerpt)) updates.excerpt = details.excerpt
        if (publicationId) updates.publication = { _type: 'reference', _ref: publicationId }
        if (imageAssetId) {
          updates.image = {
            _type: 'image',
            asset: { _type: 'reference', _ref: imageAssetId },
            alt: details.headline || '',
          }
        }
        if (archiveUrl) updates.archiveUrl = archiveUrl
        const category = guessCategory(details.headline)
        if (category && !has.category) updates.category = category

        if (Object.keys(updates).length > 0) patch.execute([{ set: updates }])

        // Only point out gaps that are still empty after filling in.
        const nowFilled: Record<string, unknown> = {
          headline: updates.headline ?? has.headline,
          publication: publicationId ?? has.publication,
          date: updates.publishedAt ?? has.publishedAt,
          excerpt: updates.excerpt ?? has.excerpt,
          picture: imageAssetId ?? has.image,
        }
        const missing = Object.keys(nowFilled).filter((k) => !nowFilled[k])
        setStatus({ kind: 'done', missing })
      } catch (err) {
        setStatus({
          kind: 'error',
          message: err instanceof Error ? err.message : 'The details couldn’t be fetched. You can fill them in by hand.',
        })
      }
    },
    [client, id, patch],
  )

  // Fetch automatically when a link is pasted into an empty entry.
  useEffect(() => {
    if (!isProbablyUrl(value) || value === lastFetched.current || current.headline || !rawId) return
    const timer = setTimeout(() => run(value, false), 500)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, rawId])

  return (
    <Stack gap={3}>
      {renderDefault(props)}

      {status.kind === 'working' && (
        <Card padding={3} radius={2} tone="primary">
          <Flex align="center" gap={3}>
            <Spinner muted />
            <Text size={1}>{status.step}</Text>
          </Flex>
        </Card>
      )}

      {status.kind === 'done' && (
        <Card padding={3} radius={2} tone={status.missing.length ? 'caution' : 'positive'}>
          <Flex align="flex-start" gap={3}>
            <Text size={1}>{status.missing.length ? <WarningOutlineIcon /> : <CheckmarkCircleIcon />}</Text>
            <Stack gap={2} flex={1}>
              <Text size={1} weight="medium">
                {status.missing.length
                  ? 'Most details found. Fill in the rest below, then publish.'
                  : 'Details found. Check them over, then publish.'}
              </Text>
              {status.missing.length > 0 && (
                <Text size={1} muted>
                  Couldn’t find: {status.missing.map((m) => FIELD_LABELS[m] || m).join(', ')}.
                </Text>
              )}
            </Stack>
          </Flex>
        </Card>
      )}

      {status.kind === 'duplicate' && (
        <Card padding={3} radius={2} tone="caution">
          <Flex align="center" gap={3}>
            <Text size={1}><WarningOutlineIcon /></Text>
            <Text size={1}>This article is already on your site. You can delete this entry.</Text>
          </Flex>
        </Card>
      )}

      {status.kind === 'error' && (
        <Card padding={3} radius={2} tone="critical">
          <Flex align="flex-start" gap={3}>
            <Text size={1}><WarningOutlineIcon /></Text>
            <Text size={1}>{status.message}</Text>
          </Flex>
        </Card>
      )}

      {isProbablyUrl(value) && status.kind !== 'working' && (
        <Box>
          <Button
            mode="ghost"
            icon={SyncIcon}
            fontSize={1}
            padding={3}
            text={status.kind === 'idle' ? 'Fetch details' : 'Fetch details again (replaces what’s below)'}
            onClick={() => run(value, status.kind !== 'idle')}
          />
        </Box>
      )}
    </Stack>
  )
}
