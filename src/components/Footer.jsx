import { Link } from 'react-router-dom'

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/thirdperspectivemedia' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-surface text-charcoal-light">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl tracking-[0.1em] text-charcoal">
              THIRD PERSPECTIVE <span className="text-gold">MEDIA</span>
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-light">
              A collaborative media agency delivering cinematic videography, photography, and brand design that tells stories with lasting impact.
            </p>
            <div className="mt-6 flex items-center gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-charcoal-light/70 transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="transition-colors hover:text-gold">
                  About the Agency
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-gold">
                  Services & Experiences
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="transition-colors hover:text-gold">
                  Portfolio Reel
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-gold">
                  Inquire / Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal">
              Connect
            </h4>
            <p className="mt-4 text-sm">Ibadan & Lagos, Nigeria</p>
            <p className="mt-1 text-sm text-gold">hello@thirdperspectivemedia.com</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-charcoal-light/60">
              Official Media Partner &middot; TEDxLCU
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-sand pt-8 text-center text-xs uppercase tracking-[0.2em] text-charcoal-light/50">
          &copy; {new Date().getFullYear()} Third Perspective Media. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}