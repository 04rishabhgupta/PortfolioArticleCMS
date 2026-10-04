import { CogIcon } from '@sanity/icons/Cog'
import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      description: 'Shown in Google results and browser tabs.',
      initialValue: 'Dr. Nikhil Agarwal',
    }),
    defineField({
      name: 'description',
      title: 'Site description',
      type: 'text',
      rows: 2,
      description: 'The short summary Google shows under your name. Around 150 characters.',
      validation: (r) => r.max(170).warning('Google cuts off descriptions longer than about 160 characters.'),
    }),
    defineField({
      name: 'shareImage',
      title: 'Default share picture',
      type: 'image',
      description: 'Used when someone shares your homepage on LinkedIn or WhatsApp. 1200 × 630 pixels.',
    }),
    defineField({
      name: 'mediaKit',
      title: 'Media kit',
      type: 'file',
      description: 'A PDF or ZIP journalists can download from the Speaking page.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
})
