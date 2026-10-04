import { UserIcon } from '@sanity/icons/User'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'My profile',
  type: 'document',
  icon: UserIcon,
  groups: [
    { name: 'intro', title: 'Introduction', default: true },
    { name: 'career', title: 'Career' },
    { name: 'contact', title: 'Contact' },
  ],
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', group: 'intro', initialValue: 'Dr. Nikhil Agarwal', validation: (r) => r.required() }),
    defineField({
      name: 'positioning',
      title: 'One-line introduction',
      type: 'string',
      group: 'intro',
      description: 'The sentence under your name at the top of the homepage.',
      validation: (r) => r.max(180),
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      group: 'intro',
      options: { hotspot: true },
      description: 'A tall photo works best. Drag the circle to keep your face in frame on every screen size.',
      fields: [defineField({ name: 'credit', title: 'Photo credit', type: 'string' })],
    }),
    defineField({ name: 'shortBio', title: 'Short biography', type: 'text', rows: 4, group: 'intro', description: 'Two or three sentences for the homepage.' }),
    defineField({
      name: 'fullBio',
      title: 'Full biography',
      type: 'array',
      group: 'intro',
      of: [defineArrayMember({ type: 'block', styles: [{ title: 'Paragraph', value: 'normal' }] })],
    }),
    defineField({
      name: 'currentRoles',
      title: 'Current roles',
      type: 'array',
      group: 'career',
      description: 'Shown in the strip under your name. Drag to reorder.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'role',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. “Board”, “Education”.' }),
            defineField({ name: 'title', title: 'Role', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'organisation', title: 'Organisation', type: 'string' }),
          ],
          preview: { select: { title: 'title', subtitle: 'organisation' } },
        }),
      ],
      validation: (r) => r.max(4),
    }),
    defineField({
      name: 'timeline',
      title: 'Career timeline',
      type: 'array',
      group: 'career',
      description: 'Most recent first.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'milestone',
          fields: [
            defineField({ name: 'year', title: 'Year', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Role or milestone', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'organisation', title: 'Organisation', type: 'string' }),
            defineField({ name: 'highlight', title: 'Highlight this one', type: 'boolean', initialValue: false }),
          ],
          preview: {
            select: { year: 'year', title: 'title', organisation: 'organisation' },
            prepare: ({ year, title, organisation }) => ({ title: `${year} · ${title}`, subtitle: organisation }),
          },
        }),
      ],
    }),
    defineField({ name: 'contactEmail', title: 'Email for enquiries', type: 'string', group: 'contact', validation: (r) => r.email() }),
    defineField({
      name: 'socials',
      title: 'Social links',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'linkedin', title: 'LinkedIn', type: 'url' }),
        defineField({ name: 'x', title: 'X (Twitter)', type: 'url' }),
      ],
    }),
  ],
  preview: { select: { title: 'name', media: 'portrait' } },
})
