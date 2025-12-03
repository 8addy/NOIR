import { useState } from 'react'
import { motion } from 'framer-motion'
import { api } from '../services/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    try {
      await api.submitContact(formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display mb-12 text-center">CONTACT US</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display mb-6">GET IN TOUCH</h2>
              <p className="text-noir-lighter mb-8 leading-relaxed">
                We'd love to hear from you. Whether you have a question about our products, 
                need assistance with an order, or simply want to share your thoughts, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold mb-2 tracking-wider">EMAIL</h3>
                  <a href="mailto:contact@noiratelier.com" className="text-noir-lighter hover:text-white transition-colors">
                    contact@noiratelier.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2 tracking-wider">PHONE</h3>
                  <a href="tel:+1234567890" className="text-noir-lighter hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2 tracking-wider">ADDRESS</h3>
                  <p className="text-noir-lighter">
                    123 Fashion Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display mb-6">SEND US A MESSAGE</h2>
              {submitted && (
                <div className="bg-noir-dark border border-white p-4 mb-6">
                  <p className="text-sm">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white resize-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-white text-black py-4 font-medium hover:bg-noir-lighter transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

