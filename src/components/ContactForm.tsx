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
      // EmailJS configuration - temporarily hardcoded for testing
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_yrf3s8b'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_hiv4nsv'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'CMbo_BvO5NIwhlePF'

      console.log('EmailJS Config Debug:', {
        serviceId,
        templateId,
        publicKey,
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId,
        hasPublicKey: !!publicKey
      })

      if (!serviceId || !templateId || !publicKey) {
        setError(`EmailJS configuration missing. Service: ${!!serviceId}, Template: ${!!templateId}, Key: ${!!publicKey}. Please check your .env.local file.`)
        setIsLoading(false)
        return
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
      <h3 className="text-2xl font-bold text-white mb-6 text-center animate-fade-in">
        Get In Touch
      </h3>
      
      {isSubmitted ? (
        <div className="bg-green-500/20 border border-green-400/50 text-green-300 px-4 py-3 rounded mb-4 backdrop-blur-sm animate-slide-in">
          <p className="text-center flex items-center justify-center">
            <span className="animate-bounce mr-2">✅</span>
            Thank you for your message! I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          {error && (
            <div className="bg-red-500/20 border border-red-400/50 text-red-300 px-4 py-3 rounded mb-4 backdrop-blur-sm animate-shake">
              <p className="text-center flex items-center justify-center">
                <span className="animate-pulse mr-2">❌</span>
                {error}
              </p>
            </div>
          )}
          
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300 group-focus-within:text-blue-300">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/15 focus:bg-white/15 focus:scale-[1.02] focus:shadow-lg"
                placeholder="your.email@example.com"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
          
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300 group-focus-within:text-blue-300">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={isLoading}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/15 focus:bg-white/15 focus:scale-[1.02] focus:shadow-lg"
                placeholder="Tell me about your project or just say hello!"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:hover:scale-100 disabled:hover:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center">
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="animate-pulse">Sending...</span>
                </>
              ) : (
                <>
                  <span className="group-hover:animate-bounce">Send Message</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </div>
          </button>
        </form>
      )}
    </div>
  )
}
