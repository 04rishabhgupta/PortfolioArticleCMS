import { CogIcon } from '@sanity/icons/Cog'
import { DocumentTextIcon } from '@sanity/icons/DocumentText'
import { EditIcon } from '@sanity/icons/Edit'
import { LinkIcon } from '@sanity/icons/Link'
import { UserIcon } from '@sanity/icons/User'
import type { DefaultDocumentNodeResolver, StructureResolver } from 'sanity/structure'
import { PressPreview } from './components/PressPreview'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Your website')
    .items([
      S.listItem()
        .title('Press coverage')
        .icon(LinkIcon)
        .child(
          S.documentTypeList('pressMention')
            .title('Press coverage')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),
      S.listItem()
        .title('My articles')
        .icon(EditIcon)
        .child(
          S.documentTypeList('article')
            .title('My articles')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),
      S.divider(),
      S.listItem()
        .title('My profile')
        .icon(UserIcon)
        .child(S.document().schemaType('profile').documentId('profile').title('My profile')),
      S.listItem()
        .title('Publications')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('publication').title('Publications').defaultOrdering([{ field: 'name', direction: 'asc' }])),
      S.listItem()
        .title('Site settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Site settings')),
    ])

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (schemaType === 'pressMention') {
    return S.document().views([
      S.view.form().title('Details'),
      S.view.component(PressPreview).title('Preview'),
    ])
  }
  return S.document()
}
