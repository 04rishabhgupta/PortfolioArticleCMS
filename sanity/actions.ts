import { type DocumentActionComponent, useDocumentOperation } from 'sanity'

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-')
    .slice(0, 80)
    .replace(/-+$/, '')
}

/** Wraps Publish so an article always gets a web address, without him having to click "Generate". */
export function withAutoSlug(original: DocumentActionComponent): DocumentActionComponent {
  const AutoSlugPublish: DocumentActionComponent = (props) => {
    const { patch } = useDocumentOperation(props.id, props.type)
    const result = original(props)
    if (!result) return result
    return {
      ...result,
      onHandle: () => {
        const doc = (props.draft || props.published) as { title?: string; slug?: { current?: string } } | null
        if (doc?.title && !doc.slug?.current) {
          patch.execute([{ set: { slug: { _type: 'slug', current: slugify(doc.title) } } }])
        }
        result.onHandle?.()
      },
    }
  }
  AutoSlugPublish.action = original.action
  return AutoSlugPublish
}
