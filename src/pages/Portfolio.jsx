const projects = [
  { title: 'Project One', category: 'Videography' },
  { title: 'Project Two', category: 'Photography' },
  { title: 'Project Three', category: 'Graphic Design' },
  { title: 'Project Four', category: 'Content Creation' },
]

export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
      <p className="text-gray-600 mb-10">A look at some of our recent work.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-xl overflow-hidden border border-gray-100 group"
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Media Preview
            </div>
            <div className="p-4">
              <p className="font-semibold">{p.title}</p>
              <p className="text-xs text-indigo-600 uppercase tracking-wide">
                {p.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}