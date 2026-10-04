type P = { size?: number; className?: string }
const base = (size = 16) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const ArrowUpRight = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
)
export const ArrowRight = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
)
export const Menu = ({ size }: P) => (
  <svg {...base(size)}><path d="M4 8h16" /><path d="M4 16h16" /></svg>
)
export const Close = ({ size }: P) => (
  <svg {...base(size)}><path d="M6 6l12 12" /><path d="M18 6 6 18" /></svg>
)
export const Sun = ({ size }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
)
export const Moon = ({ size }: P) => (
  <svg {...base(size)}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></svg>
)
export const LinkIcon = ({ size }: P) => (
  <svg {...base(size)}><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" /><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" /></svg>
)
export const Check = ({ size }: P) => (
  <svg {...base(size)}><path d="m5 12 5 5 9-10" /></svg>
)
export const Download = ({ size }: P) => (
  <svg {...base(size)}><path d="M12 4v11" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></svg>
)
