import { LinkIcon } from '@sanity/icons/Link'
import { defineField, defineType, getPublishedId } from 'sanity'
import { LinkUnfurlInput } from '../components/LinkUnfurlInput'
import { apiVersion } from '../env'

export const PRESS_CATEGORIES = [
  { title: 'Appointment', value: 'appointment' },
  { title: 'Interview', value: 'interview' },
  { title: 'Feature', value: 'feature' },
  { title: 'Mention', value: 'mention' },
]

export const pressMention = defineType({
  name: 'pressMention',
  title: 'Press coverage',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'url',
      title: 'Article link',
      type: 'url',
      description: 'Paste the link from your browser’s address bar. The details below fill in by themselves.',
      components: { input: LinkUnfurlInput },
      validation: (r) =>
        r.required().custom(async (value, context) => {
          if (!value || !context.document) return true
          const id = getPublishedId(context.document._id)
          const count = await context
            .getClient({ apiVersion })
            .fetch<number>(
              'count(*[_type == "pressMention" && url == $url && !(_id in [$id, $draft])])',
              { url: value, id, draft: `drafts.${id}` },
            )
          return count > 0 ? 'This article has already been added.' : true
        }),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (r) => r.required().error('Add the article’s headline.'),
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'reference',
      to: [{ type: 'publication' }],
      description: 'Matched automatically from the link. Pick another if it’s wrong.',
      validation: (r) => r.required().error('Choose which publication ran this article.'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date published',
      type: 'date',
      options: { dateFormat: 'D MMMM YYYY' },
      validation: (r) =>
        r.required().error('Add the date the article was published.').custom((value) => {
          if (!value) return true
          return new Date(value) > new Date() ? 'This date is in the future.' : true
        }),
    }),
    defineField({
      name: 'category',
      title: 'Type of coverage',
      type: 'string',
      options: { list: PRESS_CATEGORIES, layout: 'radio', direction: 'horizontal' },
      validation: (r) => r.required().error('Choose the type of coverage.'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short excerpt',
      type: 'text',
      rows: 3,
      description: 'Two or three lines shown under the headline. Edit freely.',
      validation: (r) => r.max(320).warning('Shorter excerpts read better. Aim for two or three lines.'),
    }),
    defineField({
      name: 'image',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      description: 'Saved to your site, so it stays even if the news site removes it.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Describe the picture',
          type: 'string',
          description: 'Read aloud to people who can’t see images, e.g. “Dr. Agarwal at the HAL board meeting”.',
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Show on homepage',
      type: 'boolean',
      description: 'Pins this to the “Featured coverage” spot on your homepage.',
      initialValue: false,
    }),
    defineField({
      name: 'archiveUrl',
      title: 'Backup copy',
      type: 'url',
      readOnly: true,
      description: 'Saved automatically on the Internet Archive, in case the original link ever stops working.',
    }),
  ],
  orderings: [
    { title: 'Newest first', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  initialValue: { featured: false },
  preview: {
    select: { title: 'headline', publication: 'publication.name', date: 'publishedAt', media: 'image', url: 'url' },
    prepare: ({ title, publication, date, media, url }) => ({
      title: title || url || 'New press coverage',
      subtitle: [publication, date && new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })]
        .filter(Boolean)
        .join(', '),
      media,
    }),
  },
})
