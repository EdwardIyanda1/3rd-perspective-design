const team = [
  { name: 'Abdullah Nola', role: 'Founder & CEO' },
  { name: 'Popoola Moyinoluwa Mabel', role: 'Co-founder & Creative Director' },
]

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600 mb-10 leading-relaxed">
        Third Perspective Media is a media agency built on collaboration,
        creativity, and consistency. We believe every brand has a story worth
        telling well — through video, photography, and design that moves people.
      </p>

      <h2 className="text-xl font-semibold mb-4">Leadership</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {team.map((t) => (
          <div key={t.name} className="border border-gray-100 rounded-xl p-5 bg-gray-50">
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-600">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}