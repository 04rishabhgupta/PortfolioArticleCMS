const IST = 'Asia/Kolkata'

/** "14 March 2026" */
export function formatDate(value?: string, month: 'long' | 'short' = 'long'): string {
  if (!value) return ''
  // Plain dates ("2026-03-14") have no time; read them at noon IST so they never shift a day.
  const date = /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T12:00:00+05:30`) : new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month, year: 'numeric', timeZone: IST }).format(date)
}

export function yearOf(value?: string): string {
  if (!value) return ''
  return value.slice(0, 4)
}

export const CATEGORY_LABEL: Record<string, string> = {
  appointment: 'Appointment',
  interview: 'Interview',
  feature: 'Feature',
  mention: 'Mention',
}

export const PRESS_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'appointment', label: 'Appointments' },
  { value: 'interview', label: 'Interviews' },
  { value: 'feature', label: 'Features' },
  { value: 'mention', label: 'Mentions' },
] as const

export function readingTime(minutes?: number): string {
  return `${Math.max(1, minutes ?? 1)} min read`
}

export const FALLBACK_NAME = 'Dr. Nikhil Agarwal'
