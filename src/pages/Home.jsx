import { Link } from 'react-router-dom'
import Sprocket from '../components/Sprocket'
import Timecode from '../components/Timecode'

const services = [
  {
    title: 'Videography',
    desc: 'Cinematic storytelling for brands and events.',
    icon: (
      <path d="M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.2l4.1-2.4A1 1 0 0 1 21.6 6.7v10.6a1 1 0 0 1-1.5.9L16 15.8V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
    ),
  },
  {
    title: 'Photography',
    desc: "Mobile and professional shoots that pop.",
    icon: (
      <>
        <path d="M4 8a2 2 0 0 1 2-2h2l1.2-2h5.6L16 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
        <circle cx="12" cy="13" r="3.3" fill="#0C0C0D" />
      </>
    ),
  },
  {
    title: 'Graphic Design',
    desc: "Visual identity that sticks in people's minds.",
    icon: (
      <path d="M3 21v-4.2L15.6 4.2a1.5 1.5 0 0 1 2.1 0l2.1 2.1a1.5 1.5 0 0 1 0 2.1L7.2 21H3Z" />
    ),
  },
  {
    title: 'Content Creation',
    desc: 'Scroll-stopping content across platforms.',
    icon: (
      <path d="M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-4Z" />
    ),
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero — framed like a camera viewfinder */}
      <section className="relative bg-[#0C0C0D] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-28 md:py-36 relative">
          {/* corner brackets */}
          <span className="hidden sm:block absolute top-6 left-4 w-8 h-8 border-l-2 border-t-2 border-[#D6293A]/70" />
          <span className="hidden sm:block absolute top-6 right-4 w-8 h-8 border-r-2 border-t-2 border-[#D6293A]/70" />
          <span className="hidden sm:block absolute bottom-6 left-4 w-8 h-8 border-l-2 border-b-2 border-[#D6293A]/70" />
          <span className="hidden sm:block absolute bottom-6 right-4 w-8 h-8 border-r-2 border-b-2 border-[#D6293A]/70" />

          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[#8A8A8E] mb-10">
            <span className="flex items-center gap-2">
              <span className="tpm-rec-dot h-1.5 w-1.5 rounded-full bg-[#D6293A]" />
              Rec
            </span>
            <Timecode className="text-[#8A8A8E]" />
          </div>

          <h1 className="font-display text-[15vw] leading-[0.9] sm:text-6xl md:text-7xl text-[#F3F1EC] text-center max-w-4xl mx-auto">
            STORIES, SEEN FROM A
            <span className="block text-[#D6293A]">THIRD PERSPECTIVE</span>
          </h1>

          <p className="text-base md:text-lg text-[#B9B7B2] max-w-xl mx-auto mb-10 mt-6 text-center">
            A media agency built on video, photography, and design —
            helping brands show up the way they deserve to be seen.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/portfolio"
              className="bg-[#D6293A] text-[#F3F1EC] px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#B71F2E] transition-colors"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="border border-[#3A3A3E] text-[#F3F1EC] px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] hover:border-[#D6293A] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <Sprocket tone="light" className="pb-3" />
      </section>

      {/* Services — filmstrip cards */}
      <section className="bg-[#F3F1EC] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-baseline justify-between mb-10 flex-wrap gap-2">
            <h2 className="font-display text-4xl text-[#121214]">WHAT WE DO</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C8A86]">
              4 Reels Loaded
            </span>
          </div>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-[#0C0C0D]/10">
            {services.map((s) => (
              <div key={s.title} className="bg-[#F3F1EC] flex flex-col">
                <Sprocket tone="dark" count={10} className="py-2" />
                <div className="p-6 flex-1 flex flex-col">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 mb-4 fill-[#D6293A]"
                  >
                    {s.icon}
                  </svg>
                  <h3 className="font-display text-xl tracking-wide text-[#121214] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#5C5A56] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <Sprocket tone="dark" count={10} className="py-2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}