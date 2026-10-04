import { AddIcon } from '@sanity/icons/Add'
import { EditIcon } from '@sanity/icons/Edit'
import { LaunchIcon } from '@sanity/icons/Launch'
import { LinkIcon } from '@sanity/icons/Link'
import { Badge, Box, Button, Card, Container, Flex, Heading, Spinner, Stack, Text, TextInput } from '@sanity/ui'
import { type FormEvent, useEffect, useState } from 'react'
import { getPublishedId, useClient, useCurrentUser } from 'sanity'
import { useRouter } from 'sanity/router'
import { apiVersion, siteUrl } from '../env'
import { isProbablyUrl } from '../lib/press-fetch'

type Row = {
  _id: string
  _type: 'pressMention' | 'article'
  _updatedAt: string
  title?: string
  publishedAt?: string
}

type Item = {
  id: string
  type: Row['_type']
  title: string
  updatedAt: string
  status: 'Published' | 'Draft' | 'Unpublished changes' | 'Scheduled'
}

const STATUS_TONE: Record<Item['status'], 'positive' | 'default' | 'caution' | 'primary'> = {
  Published: 'positive',
  Draft: 'default',
  'Unpublished changes': 'caution',
  Scheduled: 'primary',
}

function greeting() {
  const hour = Number(
    new Intl.DateTimeFormat('en-IN', { hour: 'numeric', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date()),
  )
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

function summarise(rows: Row[]): Item[] {
  const byId = new Map<string, { draft?: Row; published?: Row }>()
  for (const row of rows) {
    const id = getPublishedId(row._id)
    const entry = byId.get(id) ?? {}
    if (row._id.startsWith('drafts.')) entry.draft = row
    else entry.published = row
    byId.set(id, entry)
  }
  return [...byId.entries()]
    .map(([id, { draft, published }]) => {
      const latest = draft ?? published!
      let status: Item['status'] = 'Published'
      if (draft && published) status = 'Unpublished changes'
      else if (draft) status = 'Draft'
      else if (published?.publishedAt && new Date(published.publishedAt) > new Date()) status = 'Scheduled'
      return {
        id,
        type: latest._type,
        title: latest.title || 'Untitled',
        updatedAt: latest._updatedAt,
        status,
      }
    })
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 8)
}

export function Dashboard() {
  const client = useClient({ apiVersion })
  const user = useCurrentUser()
  const router = useRouter()
  const [link, setLink] = useState('')
  const [linkError, setLinkError] = useState<string>()
  const [creating, setCreating] = useState(false)
  const [items, setItems] = useState<Item[] | null>(null)

  useEffect(() => {
    const query = `*[_type in ["pressMention", "article"]] | order(_updatedAt desc)[0...40]{
      _id, _type, _updatedAt, publishedAt, "title": coalesce(headline, title, url)
    }`
    let alive = true
    const load = () => client.fetch<Row[]>(query).then((rows) => alive && setItems(summarise(rows)))
    load()
    const sub = client
      .listen('*[_type in ["pressMention", "article"]]', {}, { visibility: 'query' })
      .subscribe(() => load())
    return () => {
      alive = false
      sub.unsubscribe()
    }
  }, [client])

  const addPress = async (event: FormEvent) => {
    event.preventDefault()
    const trimmed = link.trim()
    if (!isProbablyUrl(trimmed)) {
      setLinkError('That doesn’t look like a web link. Copy it from your browser’s address bar.')
      return
    }
    setCreating(true)
    setLinkError(undefined)
    try {
      const existing = await client.fetch<string | null>(
        '*[_type == "pressMention" && url == $url][0]._id',
        { url: trimmed },
      )
      if (existing) {
        router.navigateIntent('edit', { id: getPublishedId(existing), type: 'pressMention' })
        return
      }
      const id = crypto.randomUUID()
      await client.create({ _id: `drafts.${id}`, _type: 'pressMention', url: trimmed, featured: false })
      router.navigateIntent('edit', { id, type: 'pressMention' })
    } catch {
      setLinkError('Something went wrong creating the entry. Try again.')
      setCreating(false)
    }
  }

  const firstName = user?.name?.split(' ')[0]

  return (
    <Box padding={[3, 4, 5]} style={{ minHeight: '100%', overflow: 'auto' }}>
      <Container width={3}>
        <Stack gap={5}>
          <Flex align="flex-end" justify="space-between" wrap="wrap" gap={3}>
            <Stack gap={3}>
              <Heading as="h1" size={4}>
                {greeting()}
                {firstName ? `, ${firstName}` : ''}
              </Heading>
              <Text muted>Everything on your website, in one place.</Text>
            </Stack>
            <Button as="a" href={siteUrl} target="_blank" rel="noreferrer" mode="ghost" icon={LaunchIcon} text="View live site" />
          </Flex>

          <Flex gap={4} wrap="wrap">
            <Card padding={4} radius={3} shadow={1} style={{ flex: '2 1 420px' }}>
              <form onSubmit={addPress}>
                <Stack gap={4}>
                  <Flex align="center" gap={2}>
                    <Text size={2}><LinkIcon /></Text>
                    <Heading as="h2" size={2}>Add press coverage</Heading>
                  </Flex>
                  <Text muted size={1}>
                    Paste a link to any article about you. The headline, publication, date and picture fill in by themselves.
                  </Text>
                  <Flex gap={2} wrap="wrap">
                    <Box flex={1} style={{ minWidth: 240 }}>
                      <TextInput
                        aria-label="Article link"
                        placeholder="https://"
                        value={link}
                        onChange={(e) => setLink(e.currentTarget.value)}
                        fontSize={2}
                        padding={4}
                        type="url"
                        inputMode="url"
                      />
                    </Box>
                    <Button
                      type="submit"
                      tone="primary"
                      padding={4}
                      text={creating ? 'Opening…' : 'Fetch details'}
                      icon={creating ? Spinner : undefined}
                      disabled={creating || !link.trim()}
                    />
                  </Flex>
                  {linkError && <Text size={1} style={{ color: 'var(--card-badge-critical-fg-color, #b42318)' }}>{linkError}</Text>}
                </Stack>
              </form>
            </Card>

            <Card padding={4} radius={3} shadow={1} style={{ flex: '1 1 260px' }}>
              <Stack gap={4}>
                <Flex align="center" gap={2}>
                  <Text size={2}><EditIcon /></Text>
                  <Heading as="h2" size={2}>Write an article</Heading>
                </Flex>
                <Text muted size={1}>A clean page that saves as you type. Nothing goes live until you press Publish.</Text>
                <Button
                  mode="ghost"
                  icon={AddIcon}
                  padding={4}
                  text="Start writing"
                  onClick={() => router.navigateIntent('create', { type: 'article' })}
                />
              </Stack>
            </Card>
          </Flex>

          <Card radius={3} shadow={1} overflow="hidden">
            <Box padding={4} style={{ borderBottom: '1px solid var(--card-border-color)' }}>
              <Heading as="h2" size={1}>Recent</Heading>
            </Box>
            {items === null && (
              <Flex padding={5} justify="center"><Spinner muted /></Flex>
            )}
            {items?.length === 0 && (
              <Box padding={5}>
                <Text muted size={1}>Nothing here yet. Paste your first article link above to get started.</Text>
              </Box>
            )}
            {items && items.length > 0 && (
              <Stack>
                {items.map((item) => (
                  <Card
                    key={item.id}
                    as="button"
                    padding={4}
                    style={{ borderTop: '1px solid var(--card-border-color)', textAlign: 'left', width: '100%' }}
                    onClick={() => router.navigateIntent('edit', { id: item.id, type: item.type })}
                  >
                    <Flex align="center" gap={3} wrap="wrap">
                      <Box flex={1} style={{ minWidth: 200 }}>
                        <Stack gap={2}>
                          <Text weight="medium" textOverflow="ellipsis">{item.title}</Text>
                          <Text size={1} muted>
                            {item.type === 'pressMention' ? 'Press coverage' : 'Article'} · edited{' '}
                            {new Date(item.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                          </Text>
                        </Stack>
                      </Box>
                      <Badge tone={STATUS_TONE[item.status]} padding={2} fontSize={1}>{item.status}</Badge>
                    </Flex>
                  </Card>
                ))}
              </Stack>
            )}
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}
