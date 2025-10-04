'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', { email, message })
    setIsSubmitted(true)
    setEmail('')
    setMessage('')
    setIsLoading(false)
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Let&apos;s discuss your next project or just say hello!
        </p>
      </motion.div>
      
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-200 px-8 py-6 rounded-2xl mb-8 text-center"
        >
          <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <p className="text-xl font-medium">Thank you for your message!</p>
          <p className="text-sm mt-2">I&apos;ll get back to you soon.</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white resize-none"
              placeholder="Tell me about your project, ask a question, or just say hello!"
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </div>
  )
}