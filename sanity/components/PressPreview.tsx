import { createImageUrlBuilder } from '@sanity/image-url'
import { Box, Card, Flex, Stack, Text } from '@sanity/ui'
import { useEffect, useState } from 'react'
import { useClient } from 'sanity'
import { apiVersion, dataset, projectId } from '../env'

const builder = createImageUrlBuilder({ projectId, dataset })

const CATEGORY_LABEL: Record<string, string> = {
  appointment: 'Appointment',
  interview: 'Interview',
  feature: 'Feature',
  mention: 'Mention',
}

type Doc = {
  headline?: string
  excerpt?: string
  publishedAt?: string
  category?: string
  url?: string
  image?: { asset?: { _ref: string } }
  publication?: { _ref: string }
}

/** Shows a press entry the way visitors will see it on the site. */
export function PressPreview(props: { document: { displayed: Doc } }) {
  const doc = props.document.displayed
  const client = useClient({ apiVersion })
  const [publication, setPublication] = useState<string>()

  useEffect(() => {
    if (!doc.publication?._ref) return setPublication(undefined)
    client
      .fetch<string | null>('*[_id == $id][0].name', { id: doc.publication._ref })
      .then((name) => setPublication(name ?? undefined))
  }, [client, doc.publication?._ref])

  const image = doc.image?.asset?._ref ? builder.image(doc.image).width(1200).height(750).fit('crop').url() : undefined
  const date = doc.publishedAt
    ? new Date(doc.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : undefined

  return (
    <Box padding={[3, 4, 5]} style={{ background: '#F7F5F0', minHeight: '100%' }}>
      <Stack gap={3} style={{ maxWidth: 560, margin: '0 auto' }}>
        <Text size={1} muted>How this will look on your site</Text>
        <Card padding={4} radius={3} style={{ background: '#FFFFFF', color: '#15171C' }}>
          <Stack gap={4}>
            <div style={{ aspectRatio: '16 / 10', background: '#E7E2D8', borderRadius: 6, overflow: 'hidden' }}>
              {image && <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
            </div>
            <Flex gap={3} align="center" wrap="wrap">
              <span style={{ fontFamily: 'Georgia, serif', fontVariant: 'small-caps', letterSpacing: '0.04em', fontSize: 17 }}>
                {publication || 'Publication'}
              </span>
              {date && <span style={{ fontSize: 13, color: '#575C66' }}>{date}</span>}
              {doc.category && (
                <span style={{ fontSize: 12, border: '1px solid #1E3A5F', color: '#1E3A5F', borderRadius: 999, padding: '2px 10px' }}>
                  {CATEGORY_LABEL[doc.category] ?? doc.category}
                </span>
              )}
            </Flex>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 26, lineHeight: 1.15 }}>
              {doc.headline || 'Headline will appear here'}
            </div>
            {doc.excerpt && <div style={{ fontSize: 15, lineHeight: 1.6, color: '#3A3F48' }}>{doc.excerpt}</div>}
            {doc.url && (
              <a href={doc.url} target="_blank" rel="noreferrer" style={{ color: '#1E3A5F', fontWeight: 500, fontSize: 14 }}>
                Read on {publication || 'the original site'} ↗
              </a>
            )}
          </Stack>
        </Card>
      </Stack>
    </Box>
  )
}
