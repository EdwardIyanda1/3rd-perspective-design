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
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to="/" className="font-bold text-lg tracking-tight">
          Third Perspective <span className="text-indigo-600">Media</span>
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
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-800 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-800" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1 bg-white border-t border-gray-100">
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