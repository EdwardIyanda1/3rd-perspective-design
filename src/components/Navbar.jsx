import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
      isActive ? 'text-[#F3F1EC]' : 'text-[#8A8A8E] hover:text-[#F3F1EC]'
    } after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-[#D6293A] after:transition-transform after:origin-left ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    }`

  return (
    <header className="sticky top-0 z-50 bg-[#0C0C0D]/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="tpm-rec-dot absolute inline-flex h-full w-full rounded-full bg-[#D6293A]" />
          </span>
          <span className="font-display text-2xl leading-none text-[#F3F1EC] tracking-wide">
            THIRD PERSPECTIVE <span className="text-[#D6293A]">MEDIA</span>
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-[#F3F1EC] mb-1.5" />
          <span className="block w-6 h-0.5 bg-[#F3F1EC] mb-1.5" />
          <span className="block w-6 h-0.5 bg-[#F3F1EC]" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1 bg-[#0C0C0D] border-t border-white/10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}