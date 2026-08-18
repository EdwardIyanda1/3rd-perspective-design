import { useState } from 'react'

const categories = ['All', 'Videography', 'Photography', 'Graphic Design', 'Keynote & Coverage']

const projects = [
  {
    title: 'TEDxLCU Keynote & Speaker Stills',
    category: 'Keynote & Coverage',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Executive Presence & Portraiture',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fashion Week Motion Reel',
    category: 'Videography',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Modern Brand Identity & Campaign',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'TEDxLCU Backstage & Speaker Interviews',
    category: 'Videography',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Editorial Studio Stills',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
  },
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
            A visual archive of dynamic event coverage, brand design, and editorial motion.
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-sand-light shadow-xs">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl text-charcoal transition-colors group-hover:text-gold">
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