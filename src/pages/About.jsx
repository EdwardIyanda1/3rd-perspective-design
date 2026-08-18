import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

const leadership = [
  {
    name: 'Abdullah Nola',
    alias: 'Nola / Noly',
    role: 'Founder & CEO',
    bio: 'Championing the agency vision, collaborative growth, and leading our daily commitment to build an extraordinary media brand.',
    image: './nola.png',
  },
  {
    name: 'Popoola Moyinoluwa Mabel',
    alias: 'Mabel',
    role: 'Co-founder & Creative Director',
    bio: 'Head of Videography & Photography, guiding mobile and professional video, photography, and creative direction.',
    image: './mabel.png',
  },
]

const crew = [
  {
    name: 'Albertine Onabamiro',
    alias: 'AB',
    role: 'Videography & Photography',
    focus: 'Video production, still photography, and visual storytelling.',
    image: './avatar.png',
  },
  {
    name: 'Beecroft Taiwo',
    alias: 'Taiwo',
    role: 'Photography Lead',
    focus: 'Portraiture, event documentation, and lighting craft.',
    image: './avatar.png',
  },
  {
    name: 'Bello Abdul Qoyum Oriola',
    alias: 'Liam',
    role: 'Videography, Photography & Graphics',
    focus: 'Multi-disciplinary visual capture, video editing, and graphic design.',
    image: './liam.png',
  },
  {
    name: 'Edward M. Iyanda',
    alias: 'Edward',
    role: 'Graphic Design & Digital Direction',
    focus: 'Brand identity design, campaign visuals, and creative assets.',
    image: './avatar.png',
  },
]

export default function About() {
  return (
    <div className="bg-canvas">
      {/* Editorial Header & Story */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              The Agency Story
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Cooperation, creativity, and consistent vision.
            </h1>
            <p className="mt-8 text-base leading-relaxed text-charcoal-light sm:text-lg">
              Third Perspective Media was built on a simple, relentless ethos: commit to becoming 1% better every single day to craft something extraordinary.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
              We bring together videographers, photographers, and graphic designers to capture what everyone else sees—and find the perspective nobody has framed yet. From institutional conferences and brand documentaries to bespoke portraits, we tell stories with depth and polish.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xs bg-sand-light shadow-lg">
              <img
                src={heroImg}
                alt="Third Perspective Media Production"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xs border border-sand bg-surface p-6 shadow-md md:block">
              <p className="font-serif text-lg italic text-charcoal">
                &ldquo;Small daily improvements building extraordinary visuals.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-sand bg-canvas-subtle py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Leadership</span>
            <h2 className="mt-2 font-serif text-3xl text-charcoal sm:text-4xl">
              Founders & Creative Directors
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {leadership.map((leader) => (
              <div key={leader.name} className="border border-sand bg-surface p-8 shadow-xs">
                <div className="aspect-[3/2] w-full overflow-hidden bg-sand-light">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover grayscale contrast-105"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl text-charcoal">{leader.name}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-light/60">
                      ({leader.alias})
                    </span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Collective */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">The Collective</span>
            <h2 className="mt-2 font-serif text-3xl text-charcoal sm:text-4xl">
              Our Creative Team
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {crew.map((member) => (
              <div key={member.name} className="group border border-sand bg-surface p-5 text-center shadow-xs">
                <div className="aspect-[4/5] overflow-hidden rounded-xs bg-sand-light">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-serif text-lg text-charcoal">{member.name}</h3>
                <span className="text-[10px] uppercase tracking-wider text-charcoal-light/50">
                  &ldquo;{member.alias}&rdquo;
                </span>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gold">
                  {member.role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-charcoal-light/80">
                  {member.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-sand bg-surface py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Let&rsquo;s Tell Your Story
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
            From official event coverage to brand visuals and motion storytelling, Third Perspective Media brings the full team to execute your vision.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-charcoal px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-white transition-colors hover:bg-gold"
          >
            Inquire About A Project
          </Link>
        </div>
      </section>
    </div>
  )
}