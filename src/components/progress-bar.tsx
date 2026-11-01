type ProgressBarProps = {
  value: number
  /** true when the bar sits on the dark slate-900 card */
  onDark?: boolean
  className?: string
}

export function ProgressBar({ value, onDark = false, className = '' }: ProgressBarProps) {
  return (
    <div
      className={`h-2 rounded-full ${onDark ? 'overflow-hidden bg-white/10' : 'bg-slate-200'} ${className}`}
    >
      <div className="h-full rounded-full bg-[#FF5216]" style={{ width: `${value}%` }} />
    </div>
  )
}
