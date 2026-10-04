import { DocumentTextIcon } from '@sanity/icons/DocumentText'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  icon: DocumentTextIcon,
  description: 'A newspaper, magazine or website that has covered you or published your writing.',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'As it should appear on your site, e.g. “The Economic Times”.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'domains',
      title: 'Website addresses',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'e.g. economictimes.indiatimes.com — links from these addresses are matched to this publication automatically.',
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'logo',
      title: 'Logo (optional)',
      type: 'image',
      description: 'Shown in the “As featured in” strip. A transparent PNG or SVG works best.',
    }),
    defineField({
      name: 'showInFeaturedStrip',
      title: 'Show in “As featured in”',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', domains: 'domains', media: 'logo' },
    prepare: ({ title, domains, media }) => ({ title, subtitle: domains?.[0], media }),
  },
})
