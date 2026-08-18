import { useState } from 'react'
import client from '../api/client'

const sessionTypes = [
  'Videography & Motion Coverage',
  'Photography & Event Stills',
  'Graphic Design & Brand Identity',
  'Full Media Campaign / Partnership',
]

const contactDetails = [
  { label: 'Email Inquiries', value: 'hello@thirdperspectivemedia.com' },
  { label: 'Operating Hubs', value: 'Ibadan & Lagos, Nigeria' },
  { label: 'Consultations', value: 'By Scheduled Appointment' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: 'Videography & Motion Coverage',
    date: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await client.post('/inquiries/', form)
      setStatus('sent')
      setForm({
        name: '',
        email: '',
        phone: '',
        sessionType: 'Videography & Motion Coverage',
        date: '',
        message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-surface border border-sand px-4 py-3.5 text-sm text-charcoal outline-none transition-colors focus:border-gold placeholder:text-charcoal-light/40'
  const labelClass =
    'block text-[11px] uppercase tracking-[0.2em] text-charcoal-light font-medium mb-2'

  return (
    <div className="bg-canvas">
      {/* Editorial Header Banner */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-center">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
          alt="Third Perspective Media Inquiry Header"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            Start A Project
          </span>
          <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
            Inquire & Collaborate
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-sand">
            Tell us about your brand, upcoming event, or creative visual needs. Our team will get back to you within two business days.
          </p>
        </div>
      </section>

      {/* Form & Contact Details Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Column: Image Card & Contact Details */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-sand-light shadow-md">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Third Perspective Media Creative Session"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl italic">
                  &ldquo;Stories, seen from a third perspective.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-6 border-t border-sand pt-8">
              {contactDetails.map((d) => (
                <div key={d.label}>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
                    {d.label}
                  </p>
                  <p className="mt-1 font-serif text-lg text-charcoal">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="border border-sand bg-surface p-8 shadow-xs sm:p-12">
            <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">
              Project Inquiry Form
            </h2>
            <p className="mt-2 text-xs text-charcoal-light">
              Fill in your specifications below to confirm agency availability.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className={labelClass}>Select Service Focus</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {sessionTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, sessionType: type })}
                      className={`border p-3 text-left text-xs transition-colors ${
                        form.sessionType === type
                          ? 'border-gold bg-gold/10 font-medium text-charcoal'
                          : 'border-sand text-charcoal-light hover:border-gold'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Popoola Mabel"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="yourname@domain.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Target Date / Timeline</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Project Vision & Details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Share details about your upcoming campaign, event schedule, interview requirements, or design specifications..."
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-charcoal py-4 text-xs uppercase tracking-[0.25em] text-white transition-colors hover:bg-gold disabled:opacity-50"
              >
                {status === 'sending' ? 'Transmitting...' : 'Send Inquiry'}
              </button>

              {status === 'sent' && (
                <div className="border border-gold bg-gold/10 p-4 text-center text-xs tracking-wide text-charcoal">
                  Thank you. Your inquiry has been received; we will be in touch shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="border border-red-500/30 bg-red-50 p-4 text-center text-xs tracking-wide text-red-700">
                  Something went wrong while submitting. Please try again or reach out directly at hello@thirdperspectivemedia.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}