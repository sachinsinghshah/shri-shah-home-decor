'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Send } from 'lucide-react'
import { motion } from 'motion/react'
import { SERVICES } from '@/lib/constants'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!form.name.trim()) {
      toast.error('Please enter your name.')
      return
    }
    if (!/^\d{10}$/.test(form.phone.trim())) {
      toast.error('Please enter a valid 10-digit phone number.')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      })

      if (res.ok) {
        toast.success(
          "Thank you! We'll contact you within 24 hours for your free consultation.",
          { duration: 6000 },
        )
        setForm({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        toast.error('Something went wrong. Please call us directly at 9548506887.')
      }
    } catch {
      toast.error('Something went wrong. Please call us directly at 9548506887.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[oklch(0.14_0.01_260)] placeholder-[oklch(0.65_0.01_260)] outline-none transition-all duration-200 focus:border-[oklch(0.62_0.14_162)] focus:ring-2 focus:ring-[oklch(0.62_0.14_162)]/20'

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-[oklch(0.25_0.01_260)]"
            >
              Full Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Ramesh Verma"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-[oklch(0.25_0.01_260)]"
            >
              Phone Number <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="9876543210"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-[oklch(0.25_0.01_260)]"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-[oklch(0.25_0.01_260)]"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
            <option value="multiple">Multiple Services</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-[oklch(0.25_0.01_260)]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Describe your requirements – room size, type of work, budget range..."
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[oklch(0.62_0.14_162)] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.54_0.14_162)] disabled:opacity-70"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </>
          )}
        </motion.button>

        <p className="text-center text-xs text-[oklch(0.55_0.01_260)]">
          We respect your privacy. Your details are never shared.
        </p>
      </div>
    </form>
  )
}
