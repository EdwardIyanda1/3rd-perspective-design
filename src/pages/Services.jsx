import { Link } from 'react-router-dom'

const experiences = [
  {
    category: 'The Signature Session',
    title: 'Executive & Personal Branding Portraiture',
    desc: 'An empowerment-first experience designed to build confidence and establish an undeniable executive presence for founders, leaders, and creatives.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    details: [
      'Pre-session styling & mood board consultation',
      'Professional wardrobe and posing direction',
      'In-studio or bespoke architectural location',
      'Master retouched, high-resolution editorial plates',
    ],
  },
  {
    category: 'The Documentary Journey',
    title: 'Luxury Weddings & Milestones',
    desc: 'Artistic documentation that captures genuine emotion, atmosphere, and unscripted intimacy with cinematic elegance.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    details: [
      'Multi-day event coverage & preparation',
      'Hybrid digital & fine-art film aesthetics',
      'Curated heirloom fine-art album design',
      'Cinematic highlight reels and full-length documentary',
    ],
  },
  {
    category: 'Brand Direction',
    title: 'Commercial Campaigns & Visual Identity',
    desc: 'Comprehensive visual storytelling for brands, campaigns, and product launches seeking refined creative direction and high-impact assets.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
    details: [
      'Brand narrative and creative roadmap',
      'Editorial lookbooks and digital product stills',
      'Social-first vertical short films & motion reels',
      'Full commercial usage rights & multi-format delivery',
    ],
  },
]

const steps = [
  {
    number: '01',
    title: 'The Consultation',
    desc: 'We explore your vision, styling palette, and the story you want your portraits to convey.',
  },
  {
    number: '02',
    title: 'The Session Day',
    desc: 'Guided posing and tailored lighting that put you at ease, capturing your most confident, natural self.',
  },
  {
    number: '03',
    title: 'The Reveal & Retouch',
    desc: 'Hand-selected and meticulously retouched plates delivered in your private digital gallery.',
  },
]

export default function Services() {
  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center lg:px-12">
        <span className="text-xs uppercase tracking-[0.35em] text-gold">Offerings</span>
        <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl md:text-6xl">
          The Studio Experiences
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-charcoal-light">
          Each session is curated with intention, providing complete styling guidance, flattering lighting, and an empowering atmosphere.
        </p>
      </section>

      {/* Experiences List */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                <span className="text-xs uppercase tracking-[0.3em] text-gold">
                  {exp.category}
                </span>
                <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
                  {exp.title}
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-charcoal-light">
                  {exp.desc}
                </p>
                <ul className="mt-6 space-y-3 border-t border-sand pt-6">
                  {exp.details.map((item) => (
                    <li key={item} className="flex items-center text-xs tracking-wide text-charcoal-light">
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block border border-gold px-7 py-3 text-xs uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-gold hover:text-white"
                  >
                    Reserve Experience
                  </Link>
                </div>
              </div>

              <div className={`overflow-hidden rounded-xs bg-sand-light shadow-md ${
                idx % 2 === 1 ? 'lg:col-start-1' : ''
              }`}>
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Experience Process */}
      <section className="border-t border-sand bg-canvas-subtle py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Step by Step</span>
            <h2 className="mt-2 font-serif text-3xl text-charcoal sm:text-4xl">
              The Journey With Us
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="border border-sand bg-surface p-8 text-center shadow-xs">
                <span className="font-serif text-4xl text-gold">{step.number}</span>
                <h3 className="mt-4 font-serif text-xl text-charcoal">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}