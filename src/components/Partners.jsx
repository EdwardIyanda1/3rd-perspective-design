export default function Partners() {
  const partners = [
    {
      name: 'TEDxLCU',
      descriptor: 'Official Media Partner',
      logoSrc: '/tedx-lcu.png', // adjust filename/extension if needed (e.g. .svg, .jpg)
    },
    {
      name: 'Lead City University',
      descriptor: 'Institutional Partner',
      logoSrc: '/lcu.png',
    },
    {
      name: 'NACOS',
      descriptor: 'Tech & Computing Association',
      logoSrc: '/nacos.png',
    },
    {
      name: 'Lead City Voices',
      descriptor: 'Media & Editorial Network',
      logoSrc: '/lcv.png',
    },
  ]

  return (
    <section className="border-y border-sand bg-surface py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
            Trusted Collaborations & Media Coverage
          </span>
          <p className="mt-1 font-serif text-lg text-charcoal sm:text-xl">
            Partners & Organizations We’ve Documented
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-4 lg:gap-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex h-14 w-full items-center justify-center">
                <img
                  src={p.logoSrc}
                  alt={`${p.name} Logo`}
                  className="max-h-12 w-auto max-w-[140px] object-contain opacity-75 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <span className="mt-3 text-[9px] uppercase tracking-[0.2em] text-charcoal-light/60">
                {p.descriptor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}