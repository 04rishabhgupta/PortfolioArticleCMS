import { article } from './article'
import { pressMention } from './pressMention'
import { profile } from './profile'
import { publication } from './publication'
import { siteSettings } from './siteSettings'

export const schemaTypes = [pressMention, article, profile, publication, siteSettings]

/** Documents that exist exactly once and can't be created or deleted. */
export const SINGLETONS = ['profile', 'siteSettings'] as const
