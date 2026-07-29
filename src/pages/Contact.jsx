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

  return (
    <section className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name" value={form.name} onChange={handleChange} required
          placeholder="Your name"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          name="email" type="email" value={form.email} onChange={handleChange} required
          placeholder="Your email"
          className="w-full border rounded-lg px-4 py-2"
        />
        <textarea
          name="message" value={form.message} onChange={handleChange} required
          placeholder="Tell us about your project"
          rows={5}
          className="w-full border rounded-lg px-4 py-2"
        />
        <button className="bg-black text-white px-6 py-2 rounded-lg">
          Send
        </button>
        {status === 'sent' && <p className="text-green-600">Message sent!</p>}
        {status === 'error' && <p className="text-red-600">Something went wrong.</p>}
      </form>
    </section>
  )
}