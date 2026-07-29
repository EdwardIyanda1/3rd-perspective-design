// A row of film-sprocket perforations. Used as a top/bottom edge on
// cards and section dividers throughout the site — the one motif
// that repeats everywhere, tying every page back to "film strip".
export default function Sprocket({ tone = 'dark', count = 24, className = '' }) {
  const hole = tone === 'dark' ? 'bg-[#0C0C0D]/70' : 'bg-[#F3F1EC]/70'
  return (
    <div
      className={`flex justify-between px-3 ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`w-1 h-1.5 rounded-[1px] ${hole}`} />
      ))}
    </div>
  )
}