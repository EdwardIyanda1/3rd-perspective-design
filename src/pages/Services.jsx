import Sprocket from '../components/Sprocket'

const services = [
  {
    title: 'Videography',
    items: ['Brand films', 'Event coverage', 'Reels & short-form video'],
  },
  {
    title: 'Photography',
    items: ['Product photography', 'Portraits & headshots', 'Event photography'],
  },
  {
    title: 'Graphic Design',
    items: ['Brand identity & logos', 'Social media graphics', 'Print & digital assets'],
  },
  {
    title: 'Content Creation',
    items: ['Content strategy', 'Social media management', 'Copywriting'],
  },
]

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D6293A]">
        Reel 02 — Services
      </span>
      <h1 className="font-display text-5xl md:text-6xl text-[#121214] mt-3 mb-3">
        OUR SERVICES
      </h1>
      <p className="text-[#5C5A56] mb-14 max-w-xl">
        Everything you need to look and sound your best, in one place.
      </p>

      <div className="grid sm:grid-cols-2 gap-px bg-[#0C0C0D]/10">
        {services.map((s) => (
          <div key={s.title} className="bg-[#F3F1EC]">
            <Sprocket tone="dark" count={16} className="py-2" />
            <div className="p-7">
              <h3 className="font-display text-2xl tracking-wide text-[#121214] mb-4">
                {s.title.toUpperCase()}
              </h3>
              <ul className="space-y-2.5">
                {s.items.map((i) => (
                  <li key={i} className="flex items-baseline gap-3 font-mono text-sm text-[#5C5A56]">
                    <span className="text-[#D6293A]">■</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <Sprocket tone="dark" count={16} className="py-2" />
          </div>
        ))}
      </div>
    </section>
  )
}