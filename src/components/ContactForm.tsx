'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      // Prepare template parameters
      const templateParams = {
        from_email: email,
        message: message,
        to_name: 'Dwipanjit',
        from_name: email.split('@')[0], // Extract name from email
        reply_to: email,
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('Email sent successfully:', result)
      setIsSubmitted(true)
      setEmail('')
      setMessage('')
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setError('Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Get In Touch
      </h3>
      
      {isSubmitted ? (
        <div className="bg-green-500/20 border border-green-400/50 text-green-300 px-4 py-3 rounded mb-4 backdrop-blur-sm">
          <p className="text-center">✅ Thank you for your message! I&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-400/50 text-red-300 px-4 py-3 rounded mb-4 backdrop-blur-sm">
              <p className="text-center">❌ {error}</p>
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isLoading}
              rows={4}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tell me about your project or just say hello!"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  )
}
