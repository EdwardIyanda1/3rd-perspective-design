import { Link } from 'react-router-dom'

const services = [
  { title: 'Videography', desc: 'Cinematic storytelling for brands and events.' },
  { title: 'Photography', desc: 'Mobile and professional shoots that pop.' },
  { title: 'Graphic Design', desc: 'Visual identity that sticks in people\'s minds.' },
  { title: 'Content Creation', desc: 'Scroll-stopping content across platforms.' },
]

export default function Home() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Stories, Seen From a{' '}
          <span className="text-indigo-600">Third Perspective</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We're a media agency built on video, photography, and design —
          helping brands show up the way they deserve to be seen.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/portfolio"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}