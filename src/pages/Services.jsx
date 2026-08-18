import { Link } from 'react-router-dom'

const experiences = [
  {
    category: 'Cinematic & Mobile Motion',
    title: 'Videography & Event Documentaries',
    desc: 'From high-impact speaker keynotes and interviews to commercial brand reels, we document motion with dynamic framing and refined color grading.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
    details: [
      'Conference, symposium & TEDx-style event documentation',
      'Speaker spotlight interviews & narrative video snippets',
      'High-energy short-form vertical reels (TikTok & Instagram)',
      'Cinematic color grading & multi-cam coverage options',
    ],
  },
  {
    category: 'Stills & Portraiture',
    title: 'Editorial Photography & Live Stills',
    desc: 'Empowering portraiture, executive headshots, and authentic photojournalism capturing live energy and genuine emotion.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    details: [
      'Executive, corporate & personal branding portraits',
      'Live stage, audience & red carpet event stills',
      'Mobile & professional studio lighting setups',
      'Meticulously color-corrected and retouched plates',
    ],
  },
  {
    category: 'Brand Architecture',
    title: 'Graphic Design & Visual Identity',
    desc: 'Strategic visual identities, modern typographic systems, and high-impact digital campaign materials crafted to command attention.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    details: [
      'Comprehensive brand identity, logos & brand style guides',
      'Social media promotional assets & event flyers',
      'Print collateral, presentation decks & digital assets',
      'Full commercial usage rights and multi-format delivery',
    ],
  },
]

const steps = [
  {
    number: '01',
    title: 'Creative Briefing',
    desc: 'We define the campaign angle, storyboard requirements, or event timeline to ensure seamless execution.',
  },
  {
    number: '02',
    title: 'On-Set Capture & Direction',
    desc: 'Our videographers, photographers, and directors capture footage and stills with focused intent.',
  },
  {
    number: '03',
    title: 'Post-Production & Delivery',
    desc: 'Every cut is graded and designed into polished, ready-to-publish assets delivered right on schedule.',
  },
]

export default function Services() {
  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center lg:px-12">
        <span className="text-xs uppercase tracking-[0.35em] text-gold">Capabilities</span>
        <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl md:text-6xl">
          Agency Services & Experiences
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-charcoal-light">
          Third Perspective Media delivers end-to-end creative production across video, photography, and digital design.
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
                    Inquire About This Service
                  </Link>
                </div>
              </div>

              <div
                className={`overflow-hidden rounded-xs bg-sand-light shadow-md ${
                  idx % 2 === 1 ? 'lg:col-start-1' : ''
                }`}
              >
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
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Our Workflow</span>
            <h2 className="mt-2 font-serif text-3xl text-charcoal sm:text-4xl">
              How We Execute
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