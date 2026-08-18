import { useState } from 'react'

const categories = ['All', 'Portraits & Branding', 'Weddings & Stories', 'Creative Direction']

const projects = [
  { title: 'The Executive Presence', category: 'Portraits & Branding' },
  { title: 'Golden Hour Matrimony', category: 'Weddings & Stories' },
  { title: 'Modern Heritage Editorial', category: 'Creative Direction' },
  { title: 'Essence of Lagos', category: 'Portraits & Branding' },
  { title: 'Ceremonial Vows', category: 'Weddings & Stories' },
  { title: 'Contemporary Form', category: 'Creative Direction' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Selected Works</span>
          <h1 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl md:text-6xl">
            The Gallery
          </h1>
          <p className="mt-4 text-sm text-charcoal-light">
            A visual archive of emotion, personal legacy, and distinct elegance.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`border px-6 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                filter === c
                  ? 'border-gold bg-gold text-white'
                  : 'border-sand bg-surface text-charcoal-light hover:border-gold hover:text-gold'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand-light">
                <div className="flex h-full w-full items-center justify-center bg-sand-light text-xs uppercase tracking-[0.25em] text-charcoal-light/40 transition-transform duration-700 group-hover:scale-105">
                  Editorial Plate
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl text-charcoal group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-charcoal-light/60">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}