import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import Partners from '../components/Partners'

const pillars = [
  {
    category: '01. Videography',
    title: 'Cinematic & Mobile Video',
    desc: 'Event documentation, keynote speaker coverage, short-form reels, and commercial brand films.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: '02. Photography',
    title: 'Portraits & Event Stills',
    desc: 'Editorial portraiture, live conference photojournalism, and studio-grade stills that resonate.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: '03. Graphic Design',
    title: 'Brand Identity & Visuals',
    desc: 'Modern typography, promotional campaign assets, and digital design built to stand out.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Home() {
  return (
    <div className="bg-canvas">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-charcoal">
        <img
          src={heroImg}
          alt="Third Perspective Media Production"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-canvas">
          <p className="text-xs uppercase tracking-[0.45em] text-gold">
            Third Perspective Media
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.15] text-white sm:text-6xl md:text-7xl">
            Stories, Seen From <br />
            <span className="italic font-normal">A Third Perspective.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
            A collaborative media agency specializing in cinematic videography, photography, and brand design that move people.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/portfolio"
              className="w-full bg-gold px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-white transition-colors hover:bg-gold-dark sm:w-auto"
            >
              Explore Portfolio
            </Link>
            <Link
              to="/contact"
              className="w-full border border-sand/40 bg-white/5 px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-xs transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              Book An Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Component (TEDxLCU, Lead City University, NACOS, Lead City Voices) */}
      <Partners />

      {/* Signature Offerings */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">What We Do</span>
          <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
            The Media Capabilities
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.category} className="group relative overflow-hidden bg-charcoal">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                  {item.category}
                </span>
                <h3 className="mt-2 font-serif text-2xl leading-snug">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sand/80 line-clamp-2">
                  {item.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-gold underline underline-offset-4 hover:text-white"
                >
                  Discover More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote / Ethos */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-charcoal px-6 py-24 text-center">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
          alt="Studio Ambiance"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="font-serif text-5xl text-gold sm:text-6xl">&ldquo;</span>
          <blockquote className="font-serif text-2xl italic leading-snug text-canvas sm:text-3xl lg:text-4xl">
            We look at what everyone else sees, then find the angle nobody has shot yet.
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">
            The Third Perspective Standard
          </p>
        </div>
      </section>
    </div>
  )
}