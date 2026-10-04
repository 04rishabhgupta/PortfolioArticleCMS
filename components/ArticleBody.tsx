import { PortableText, type PortableTextComponents, type PortableTextBlock } from 'next-sanity'
import type { SanityImage } from '@/lib/sanity/queries'
import { SanityImg } from './SanityImg'

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href ?? '#'
      const external = /^https?:\/\//.test(href)
      return (
        <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
          {children}
        </a>
      )
    },
  },
  types: {
    pullQuote: ({ value }: { value: { text?: string } }) =>
      value?.text ? (
        <figure className="pull-quote">
          <blockquote>{value.text}</blockquote>
        </figure>
      ) : null,
    image: ({ value }: { value: SanityImage }) => {
      const dims = value.asset?.metadata?.dimensions
      const ratio = dims ? dims.width / dims.height : 3 / 2
      return (
        <figure className="body-figure">
          <SanityImg image={value} ratio={ratio} sizes="(min-width: 760px) 680px, 100vw" alt={value.alt ?? ''} />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      )
    },
  },
}

export function ArticleBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="prose">
      <PortableText value={value} components={components} />
    </div>
  )
}
