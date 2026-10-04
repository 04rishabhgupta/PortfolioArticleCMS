'use client'

import { HomeIcon } from '@sanity/icons/Home'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { withAutoSlug } from './sanity/actions'
import { Dashboard } from './sanity/components/Dashboard'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes, SINGLETONS } from './sanity/schemas'
import { defaultDocumentNode, structure } from './sanity/structure'

const isSingleton = (type: string) => (SINGLETONS as readonly string[]).includes(type)

export default defineConfig({
  name: 'default',
  title: 'Nikhil Agarwal',
  basePath: '/studio',
  projectId,
  dataset,

  plugins: [
    structureTool({ title: 'Content', structure, defaultDocumentNode }),
    // The query tool is for developers only, so it's hidden on the live site.
    ...(process.env.NODE_ENV === 'development' ? [visionTool({ defaultApiVersion: apiVersion })] : []),
  ],

  // "Home" is the first thing he sees after signing in.
  tools: (prev) => [{ name: 'home', title: 'Home', icon: HomeIcon, component: Dashboard }, ...prev],

  schema: {
    types: schemaTypes,
    templates: (templates) => [
      ...templates.filter(({ schemaType }) => !isSingleton(schemaType)),
      {
        // Used when a link is shared from his phone (wired up on Day 3).
        id: 'pressMention-from-link',
        title: 'Press coverage from a link',
        schemaType: 'pressMention',
        parameters: [{ name: 'url', type: 'string' }],
        value: (params: { url?: string }) => ({ url: params.url, featured: false }),
      },
    ],
  },

  document: {
    actions: (input, context) => {
      if (isSingleton(context.schemaType)) {
        return input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
      }
      if (context.schemaType === 'article') {
        return input.map((action) => (action.action === 'publish' ? withAutoSlug(action) : action))
      }
      return input
    },
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global'
        ? prev.filter((item) => !isSingleton(item.templateId) && item.templateId !== 'pressMention-from-link')
        : prev,
  },
})
