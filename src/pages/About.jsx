import Sprocket from '../components/Sprocket'

const crew = [
  { name: 'Abdullah Nola', role: 'Founder & CEO' },
  { name: 'Popoola Moyinoluwa Mabel', role: 'Co-founder & Creative Director' },
]

export default function About() {
  return (
    <section className="bg-[#0C0C0D]">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D6293A]">
          Reel 01 — About
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-[#F3F1EC] mt-3 mb-6">
          ABOUT US
        </h1>
        <p className="text-[#B9B7B2] leading-relaxed max-w-2xl mb-16">
          Third Perspective Media is a media agency built on collaboration,
          creativity, and consistency. We believe every brand has a story
          worth telling well — through video, photography, and design that
          moves people.
        </p>

        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-display text-2xl tracking-wide text-[#F3F1EC]">
            CAST & CREW
          </h2>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/10">
          {crew.map((t) => (
            <div key={t.name} className="bg-[#17171B]">
              <Sprocket tone="light" count={10} className="py-2" />
              <div className="p-6">
                <p className="font-display text-2xl tracking-wide text-[#F3F1EC]">
                  {t.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#D6293A] mt-1">
                  {t.role}
                </p>
              </div>
              <Sprocket tone="light" count={10} className="py-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}