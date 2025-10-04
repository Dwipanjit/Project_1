'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsTyping(true)
    
    // Simulate cyberpunk loading
    setTimeout(() => {
      console.log('Form submitted:', { email, message })
      setIsSubmitted(true)
      setEmail('')
      setMessage('')
      setIsTyping(false)
      
      // Reset after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000)
    }, 2000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          CONTACT_INTERFACE.exe
        </h3>
        <p className="text-gray-400 font-mono">
          INITIALIZING COMMUNICATION PROTOCOL...
        </p>
      </div>
      
      {isSubmitted ? (
        <div className="relative bg-green-500/20 border border-green-400/50 text-green-300 px-6 py-4 rounded-lg backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <p className="font-mono text-lg">MESSAGE TRANSMITTED SUCCESSFULLY!</p>
          </div>
          <p className="text-center mt-2 font-mono text-sm">
            RESPONSE INCOMING VIA NEURAL PATHWAYS...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Field */}
          <div className="relative">
            <label className="block text-cyan-300 font-mono text-sm mb-3 tracking-wider">
              EMAIL_ADDRESS:
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-4 bg-black/50 border border-cyan-400/50 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                placeholder="user@domain.com"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Message Field */}
          <div className="relative">
            <label className="block text-purple-300 font-mono text-sm mb-3 tracking-wider">
              MESSAGE_CONTENT:
            </label>
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-4 bg-black/50 border border-purple-400/50 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-400/50 transition-all duration-300 resize-none backdrop-blur-sm"
                placeholder="Enter your message here..."
              />
              <div className="absolute top-4 right-4">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Cyberpunk Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isTyping}
              className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-black text-lg tracking-wider rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-3">
                {isTyping ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <div className="w-5 h-5 bg-black rounded-sm" />
                    <span>SEND_MESSAGE</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </form>
      )}
    </div>
  )
}