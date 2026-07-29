import { useState } from 'react'
import client from '../api/client'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await client.post('/inquiries/', form)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full bg-transparent border border-[#3A3A3E] focus:border-[#D6293A] outline-none px-4 py-3 text-[#F3F1EC] placeholder:text-[#5C5A56] transition-colors'
  const labelClass = 'font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8A8E] mb-1.5 block'

  return (
    <section className="bg-[#0C0C0D]">
      <div className="max-w-xl mx-auto px-4 py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D6293A]">
          Slate — Take 01
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-[#F3F1EC] mt-3 mb-10">
          GET IN TOUCH
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={labelClass}>Name</label>
            <input
              name="name" value={form.name} onChange={handleChange} required
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              name="email" type="email" value={form.email} onChange={handleChange} required
              placeholder="Your email"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass}>Message</label>
            <textarea
              name="message" value={form.message} onChange={handleChange} required
              placeholder="Tell us about your project"
              rows={5}
              className={fieldClass}
            />
          </div>

          <button
            disabled={status === 'sending'}
            className="bg-[#D6293A] text-[#F3F1EC] px-8 py-3 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#B71F2E] transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>

          {status === 'sent' && (
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#3FAE6B]">
              Message sent — we'll be in touch.
            </p>
          )}
          {status === 'error' && (
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#D6293A]">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}