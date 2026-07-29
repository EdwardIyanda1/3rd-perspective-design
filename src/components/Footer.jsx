import Sprocket from './Sprocket'

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0D] text-[#B9B7B2]">
      <Sprocket tone="light" className="pt-3" />
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl text-[#F3F1EC] mb-2">
            THIRD PERSPECTIVE <span className="text-[#D6293A]">MEDIA</span>
          </h3>
          <p className="text-sm text-[#8A8A8E] leading-relaxed">
            Video, photography, and design that tells your story from
            every angle.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3F1EC] mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="hover:text-[#D6293A] transition-colors">Services</a></li>
            <li><a href="/portfolio" className="hover:text-[#D6293A] transition-colors">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-[#D6293A] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3F1EC] mb-3">
            Get in Touch
          </h4>
          <p className="text-sm text-[#8A8A8E] font-mono">hello@thirdperspectivemedia.com</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5A56]">
        © {new Date().getFullYear()} Third Perspective Media — End
      </div>
    </footer>
  )
}