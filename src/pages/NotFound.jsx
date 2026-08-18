import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const [snapped, setSnapped] = useState(false)

  const triggerSnap = () => {
    setSnapped(true)
    setTimeout(() => setSnapped(false), 800)
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-charcoal px-6 text-center text-canvas">
      {/* Background Ambience Image */}
      <img
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80"
        alt="Vintage Camera Texture"
        className="absolute inset-0 h-full w-full object-cover opacity-15 grayscale"
      />
      <div className="absolute inset-0 bg-radial from-transparent via-charcoal/70 to-charcoal" />

      {/* Camera Flash Overlay */}
      <div
        className={`pointer-events-none fixed inset-0 z-50 bg-white transition-opacity duration-300 ${
          snapped ? 'opacity-90' : 'opacity-0'
        }`}
      />

      <div className="relative z-10 mx-auto max-w-xl">
        {/* Animated Camera Body */}
        <div
          onClick={triggerSnap}
          className="group mx-auto mb-8 flex h-36 w-44 cursor-pointer flex-col items-center justify-center rounded-2xl border border-sand/30 bg-surface/10 p-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-gold hover:scale-105 active:scale-95"
          title="Click to trigger camera shutter"
        >
          {/* Shutter Button & Viewfinder */}
          <div className="flex w-full items-center justify-between px-3">
            <span className="h-2 w-5 rounded-t-sm bg-gold transition-transform group-hover:-translate-y-0.5 group-active:translate-y-1" />
            <span className="h-2 w-3 rounded-full bg-sand/40" />
            <span className="h-2.5 w-6 rounded-xs bg-sand/30" />
          </div>

          {/* Camera Lens */}
          <div className="relative mt-2 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/80 bg-charcoal shadow-inner">
            {/* Iris Aperture Blades Animation */}
            <div
              className={`h-12 w-12 rounded-full border border-dashed border-sand/40 transition-transform duration-700 group-hover:rotate-180 ${
                snapped ? 'scale-0' : 'scale-100'
              }`}
            />
            {/* Center Lens Glass */}
            <div className="absolute h-6 w-6 rounded-full bg-gold/20 backdrop-blur-xs flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-gold animate-ping opacity-75" />
            </div>
          </div>
          <span className="mt-1 text-[9px] uppercase tracking-[0.25em] text-sand/60">
            Click Shutter
          </span>
        </div>

        {/* 404 Headline */}
        <span className="font-serif text-7xl font-normal tracking-wider text-gold sm:text-9xl">
          404
        </span>
        <h1 className="mt-2 font-serif text-2xl text-white sm:text-4xl">
          Out of Frame &middot; Lost Perspective
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-sand/80">
          The requested angle or gallery plate does not exist or has been archived from this production reel.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="w-full bg-gold px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-white transition-colors hover:bg-gold-dark sm:w-auto"
          >
            Return to Studio Home
          </Link>
          <Link
            to="/portfolio"
            className="w-full border border-sand/40 bg-surface/5 px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-xs transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            View Portfolios
          </Link>
        </div>
      </div>
    </section>
  )
}