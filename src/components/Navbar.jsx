import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Experiences' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Inquire' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-xs uppercase tracking-[0.25em] transition-colors ${
      isActive ? 'text-gold font-medium' : 'text-charcoal-light hover:text-gold'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-sand/60 bg-canvas/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo with Monogram */}
        <Link to="/" className="flex items-center gap-3.5" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-surface shadow-xs">
            <svg
              viewBox="0 0 40 40"
              className="h-6 w-6 text-gold"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="20" cy="20" r="18" strokeDasharray="2 2" />
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-serif text-[11px] font-semibold tracking-wider fill-gold stroke-none"
              >
                3P
              </text>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.18em] text-charcoal sm:text-2xl">
              THIRD PERSPECTIVE
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold">
              Studios &middot; Lagos / Ibadan
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-9 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="border border-gold bg-transparent px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-gold hover:text-white"
          >
            Book Session
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-charcoal transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="flex flex-col space-y-4 border-b border-sand bg-canvas px-8 py-6 md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 border border-gold bg-gold px-6 py-3 text-center text-xs uppercase tracking-[0.2em] text-white"
          >
            Book Session
          </Link>
        </div>
      )}
    </header>
  )
}