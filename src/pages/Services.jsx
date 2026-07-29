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
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">Our Services</h1>
      <p className="text-gray-600 mb-10">
        Everything you need to look and sound your best, in one place.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="border border-gray-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              {s.items.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}