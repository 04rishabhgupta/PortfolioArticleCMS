'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImage } from '@/lib/sanity/queries'

type Props = {
  image?: SanityImage | null
  /** Width ÷ height, e.g. 16/9. */
  ratio: number
  sizes: string
  alt?: string
  label?: string
  priority?: boolean
  className?: string
}

/** A Sanity image cropped to a fixed shape, with a soft blurred preview while loading. */
export function SanityImg({ image, ratio, sizes, alt, label, priority, className }: Props) {
  const style = { aspectRatio: String(ratio) }
  if (!image?.asset) {
    return (
      <div className={`img ph ${className ?? ''}`} style={style} role={label ? 'img' : undefined} aria-label={label}>
        {label && <span>{label}</span>}
      </div>
    )
  }
  const lqip = image.asset.metadata?.lqip
  return (
    <div className={`img ${className ?? ''}`} style={style}>
      <Image
        src={urlFor(image).width(1200).height(Math.round(1200 / ratio)).fit('crop').url()}
        loader={({ width }) => urlFor(image).width(width).height(Math.round(width / ratio)).fit('crop').quality(80).url()}
        alt={alt ?? image.alt ?? ''}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={lqip ? 'blur' : 'empty'}
        blurDataURL={lqip}
      />
    </div>
  )
}
