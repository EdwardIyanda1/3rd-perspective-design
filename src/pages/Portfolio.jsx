import Sprocket from '../components/Sprocket'

const projects = [
  { title: 'Project One', category: 'Videography' },
  { title: 'Project Two', category: 'Photography' },
  { title: 'Project Three', category: 'Graphic Design' },
  { title: 'Project Four', category: 'Content Creation' },
]

export default function Portfolio() {
  return (
    <section className="bg-[#0C0C0D]">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D6293A]">
          Contact Sheet
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-[#F3F1EC] mt-3 mb-3">
          PORTFOLIO
        </h1>
        <p className="text-[#B9B7B2] mb-14 max-w-xl">
          A look at some of our recent work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {projects.map((p, idx) => (
            <div key={p.title} className="bg-[#17171B] group">
              <Sprocket tone="light" count={12} className="py-2" />
              <div className="aspect-video bg-[#0C0C0D] flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-[11px] text-[#5C5A56] absolute top-2 left-2">
                  FRAME {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#5C5A56] group-hover:text-[#D6293A] transition-colors">
                  Media Preview
                </span>
              </div>
              <Sprocket tone="light" count={12} className="py-2" />
              <div className="p-4">
                <p className="font-display text-xl tracking-wide text-[#F3F1EC]">{p.title}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#D6293A] mt-1">
                  {p.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}