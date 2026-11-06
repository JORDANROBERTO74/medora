const SKIN = '#f0c39a'
const FACE = '#1f2937'

type Accessory =
  | 'book'
  | 'cap'
  | 'glasses'
  | 'magnifier'
  | 'stethoscope'
  | 'mirror'
  | 'laurel'
  | 'star'

type Palette = {
  from: string
  to: string
  hair: string
  accessory: Accessory
  /** Extra hair shape (bun) for some levels. */
  bun?: boolean
  /** Long hair silhouette instead of the short crop. */
  long?: boolean
}

const PALETTES: readonly Palette[] = [
  { from: '#0f766e', to: '#2dd4bf', hair: '#3b2a20', accessory: 'book' },
  { from: '#1d4ed8', to: '#60a5fa', hair: '#1f2937', accessory: 'cap' },
  { from: '#6d28d9', to: '#a78bfa', hair: '#5b3a29', accessory: 'glasses', bun: true },
  { from: '#b45309', to: '#fbbf24', hair: '#3b2a20', accessory: 'magnifier' },
  { from: '#047857', to: '#34d399', hair: '#1f2937', accessory: 'stethoscope' },
  { from: '#0e7490', to: '#22d3ee', hair: '#3b2a20', accessory: 'mirror', bun: true },
  { from: '#9a3412', to: '#fb923c', hair: '#4b2e1e', accessory: 'laurel', long: true },
  { from: '#a16207', to: '#fde047', hair: '#1f2937', accessory: 'star', long: true },
]

const SHORT_HAIR =
  'M20.5 27c0-7.6 5-12.5 11.5-12.5S43.5 19.4 43.5 27c-1.8-3.4-4-5.2-6.3-5.8-2.6 2.6-8.6 3-11.2-.2-2.2 1.6-4 3.4-5.5 6z'

const LONG_HAIR =
  'M19.5 30c0-9 5.6-14.5 12.5-14.5S44.5 21 44.5 30v10c-1.6-1.4-2.4-3.6-2.6-6.4-2.4 2.2-7.4 2.6-9.9-.4-2.5 3-7.5 2.6-9.9.4-.2 2.8-1 5-2.6 6.4z'

function AccessoryShape({ accessory }: { accessory: Accessory }) {
  switch (accessory) {
    case 'book':
      return (
        <g>
          <rect
            x="25"
            y="46"
            width="14"
            height="9"
            rx="1.4"
            fill="#ffffff"
            stroke="#94a3b8"
            strokeWidth="0.9"
          />
          <path d="M32 46.4v8.2" stroke="#94a3b8" strokeWidth="0.9" />
          <path
            d="M26.4 48.6h4.4M33.2 48.6h4.4"
            stroke="#cbd5e1"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </g>
      )
    case 'cap':
      return (
        <g>
          <path d="M16 21.5 32 15.5l16 6L32 27.5Z" fill="#1f2937" />
          <path d="M32 27.5v5.5" stroke="#fbbf24" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="32" cy="33.6" r="1.4" fill="#fbbf24" />
        </g>
      )
    case 'glasses':
      return (
        <g stroke={FACE} strokeWidth="1.5" fill="none">
          <circle cx="27.6" cy="29.5" r="3.6" />
          <circle cx="36.4" cy="29.5" r="3.6" />
          <path d="M31.2 29.5h1.6" />
        </g>
      )
    case 'magnifier':
      return (
        <g stroke="#1f2937" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <circle cx="38" cy="50" r="3.8" />
          <path d="M40.8 52.8 44 55.8" />
        </g>
      )
    case 'stethoscope':
      return (
        <g>
          <path
            d="M23.5 36c0 8.5 3.6 12.5 8.5 12.5s8.5-4 8.5-12.5"
            stroke={FACE}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="32" cy="50.8" r="2.4" fill={FACE} />
        </g>
      )
    case 'mirror':
      return (
        <g>
          <path d="M21.5 24.5h21" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="32" cy="17.5" r="3.6" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
          <circle cx="32" cy="17.5" r="1.4" fill="#94a3b8" />
        </g>
      )
    case 'laurel':
      return (
        <g stroke="#fbbf24" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <path d="M19 45c0 8.5 5.4 13.5 13 13.5S45 53.5 45 45" />
          <path d="M19.5 49.5 16 47M20.5 54 17 52.6M45 49.5 48.5 47M44 54 47.5 52.6" />
        </g>
      )
    case 'star':
      return (
        <g>
          <path
            d="M32 45.5l2 4.1 4.5.6-3.3 3.1.8 4.5L32 55.7l-4 2.1.8-4.5-3.3-3.1 4.5-.6Z"
            fill="#fde047"
            stroke="#a16207"
            strokeWidth="0.9"
          />
        </g>
      )
  }
}

/**
 * 8 hand-drawn busts, one per level. Same construction and palette rules so the
 * set reads as one family, unlike the achievement emojis.
 */
export function LevelAvatar({
  level,
  className,
}: {
  level: number
  className?: string
}) {
  const palette = PALETTES[Math.min(Math.max(level, 1), PALETTES.length) - 1]
  const gradientId = `level-avatar-${level}`

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={palette.from} />
          <stop offset="1" stopColor={palette.to} />
        </linearGradient>
      </defs>

      <circle cx="32" cy="32" r="32" fill={`url(#${gradientId})`} />

      {/* Coat and neck */}
      <path d="M9 64c0-13 10.5-21 23-21s23 8 23 21z" fill="#f8fafc" />
      <path d="M28.5 45.5 32 52l3.5-6.5z" fill="#e2e8f0" />
      <rect x="28.5" y="38" width="7" height="7" rx="3" fill={SKIN} />

      {/* Head */}
      <circle cx="20.6" cy="30" r="2.3" fill={SKIN} />
      <circle cx="43.4" cy="30" r="2.3" fill={SKIN} />
      <circle cx="32" cy="29" r="11.5" fill={SKIN} />

      {palette.bun ? <circle cx="32" cy="15.5" r="4.2" fill={palette.hair} /> : null}
      <path d={palette.long ? LONG_HAIR : SHORT_HAIR} fill={palette.hair} />

      {/* Face */}
      <circle cx="27.6" cy="29.5" r="1.15" fill={FACE} />
      <circle cx="36.4" cy="29.5" r="1.15" fill={FACE} />
      <path
        d="M29 33.4c1.4 1.7 4.6 1.7 6 0"
        stroke={FACE}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      <AccessoryShape accessory={palette.accessory} />
    </svg>
  )
}
