import { BlockquoteIcon } from '@sanity/icons/Blockquote'
import { EditIcon } from '@sanity/icons/Edit'
import { ImageIcon } from '@sanity/icons/Image'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: EditIcon,
  groups: [
    { name: 'writing', title: 'Writing', default: true },
    { name: 'details', title: 'Details' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'writing',
      validation: (r) => r.required().error('Give the article a title.').max(140),
    }),
    defineField({
      name: 'standfirst',
      title: 'Summary',
      type: 'text',
      rows: 2,
      group: 'writing',
      description: 'One or two sentences shown under the title and on article listings.',
      validation: (r) => r.required().error('Add a short summary.').max(280),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover picture',
      type: 'image',
      group: 'writing',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Describe the picture', type: 'string' }),
        defineField({ name: 'caption', title: 'Caption or credit', type: 'string' }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Article',
      type: 'array',
      group: 'writing',
      description: 'Not needed if this was published elsewhere and you only want to link to it.',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Paragraph', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Smaller heading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bulleted list', value: 'bullet' },
            { title: 'Numbered list', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url', title: 'Link address' }],
              },
            ],
          },
        }),
        defineArrayMember({
          name: 'pullQuote',
          title: 'Pull quote',
          type: 'object',
          icon: BlockquoteIcon,
          fields: [defineField({ name: 'text', title: 'Quote', type: 'text', rows: 2 })],
          preview: { select: { title: 'text' }, prepare: ({ title }) => ({ title, subtitle: 'Pull quote' }) },
        }),
        defineArrayMember({
          type: 'image',
          icon: ImageIcon,
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Describe the picture', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'kind',
      title: 'Kind of piece',
      type: 'string',
      group: 'details',
      options: {
        list: ['Essay', 'Opinion', 'Op-ed', 'Speech', 'Interview'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'Essay',
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
      group: 'details',
      description: 'One or two words, e.g. “Aerospace” or “Governance”.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      group: 'details',
      description: 'Pick a future date to schedule it. It appears on the site from then on.',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'originallyPublished',
      title: 'Originally published elsewhere?',
      type: 'object',
      group: 'details',
      description: 'For op-eds that ran in a newspaper. Readers will be linked to the original.',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'publication', title: 'Publication', type: 'reference', to: [{ type: 'publication' }] }),
        defineField({ name: 'url', title: 'Link to the original', type: 'url' }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Show first on homepage',
      type: 'boolean',
      group: 'details',
      initialValue: false,
    }),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      group: 'details',
      description: 'Created from the title automatically when you publish. You rarely need to touch this.',
      options: { source: 'title', maxLength: 80 },
    }),
  ],
  orderings: [{ title: 'Newest first', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', kind: 'kind', date: 'publishedAt', media: 'coverImage' },
    prepare: ({ title, kind, date, media }) => ({
      title: title || 'Untitled article',
      subtitle: [kind, date && new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })]
        .filter(Boolean)
        .join(', '),
      media,
    }),
  },
})
