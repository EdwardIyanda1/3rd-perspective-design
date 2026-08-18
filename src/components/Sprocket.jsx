// A strip of film-reel perforations, used as a section divider.
// tone="light" -> holes punched in dark ink (for use on paper backgrounds)
// tone="dark"  -> holes punched in paper (for use on ink backgrounds)
export default function Sprocket({ tone = 'dark', count = 24, className = '' }) {
  const hole = tone === 'dark' ? 'bg-ink/20' : 'bg-paper/15'

  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-between gap-[3px] px-3 ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`h-1.5 w-1.5 shrink-0 rounded-[1px] ${hole}`} />
      ))}
    </div>
  )
}
