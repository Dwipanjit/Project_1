'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Brain, 
  Sparkles, 
  Zap, 
  Eye,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Wand2,
  Star,
  Rocket,
  Atom
} from 'lucide-react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(50)
  const [currentTyping, setCurrentTyping] = useState('')
  const [isAITyping, setIsAITyping] = useState(false)
  
  const textareaRef = useRef(null)
  const recognitionRef = useRef(null)

  // AI-powered suggestions
  const suggestions = [
    "I'm interested in your AI trading algorithms",
    "Can you help me build a portfolio tracker?",
    "I'd like to discuss quantitative finance",
    "Tell me about your machine learning projects",
    "I'm looking for a fintech consultant",
    "Can you help with algorithmic trading strategies?"
  ]

  // Voice recognition setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setMessage(prev => prev + ' ' + transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => {
        setIsListening(false)
      }
    }
  }, [])

  // AI typing effect
  useEffect(() => {
    if (isAITyping && message) {
      let index = 0
      setCurrentTyping('')
      const timer = setInterval(() => {
        if (index < message.length) {
          setCurrentTyping(prev => prev + message[index])
          index++
        } else {
          setIsAITyping(false)
          clearInterval(timer)
        }
      }, typingSpeed)
      return () => clearInterval(timer)
    }
  }, [isAITyping, message, typingSpeed])

  const handleVoiceInput = () => {
    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
    } else {
      recognitionRef.current?.start()
      setIsListening(true)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion)
    setShowSuggestions(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', { email, message })
    setIsSubmitted(true)
    setEmail('')
    setMessage('')
    setCurrentTyping('')
    setIsLoading(false)
    
    // Reset after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
    if (e.target.value.length > 10) {
      setAiSuggestions(suggestions.slice(0, 3))
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mr-4"
          >
            <Atom className="w-12 h-12 text-purple-400" />
          </motion.div>
          <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            QUANTUM CONTACT
          </h3>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-4"
          >
            <Rocket className="w-12 h-12 text-blue-400" />
          </motion.div>
        </div>
        <p className="text-xl text-white/80">
          Connect with the future of finance • AI-powered responses • Neural network analysis
        </p>
      </motion.div>
      
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-green-400/30 text-green-200 px-8 py-8 rounded-3xl mb-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
          </motion.div>
          <p className="text-2xl font-bold mb-2">Message Transmitted to Quantum Network!</p>
          <p className="text-lg">AI analysis complete • Response incoming via neural pathways</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* AI Controls */}
          <div className="flex justify-center space-x-4 mb-8">
            <motion.button
              type="button"
              onClick={() => setIsAITyping(!isAITyping)}
              className={`p-3 rounded-2xl backdrop-blur-lg border transition-all ${
                isAITyping 
                  ? 'bg-purple-600/80 border-purple-400 text-white' 
                  : 'bg-white/10 border-white/20 text-white/60 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              type="button"
              onClick={handleVoiceInput}
              className={`p-3 rounded-2xl backdrop-blur-lg border transition-all ${
                isListening 
                  ? 'bg-red-600/80 border-red-400 text-white' 
                  : 'bg-white/10 border-white/20 text-white/60 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </motion.button>
            
            <motion.button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-2xl backdrop-blur-lg border transition-all ${
                isMuted 
                  ? 'bg-gray-600/80 border-gray-400 text-white' 
                  : 'bg-white/10 border-white/20 text-white/60 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Quantum Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your.email@quantum.com"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80 flex items-center">
                <Wand2 className="w-4 h-4 mr-2" />
                AI Response Speed
              </label>
              <div className="flex items-center space-x-4">
                <span className="text-white/60 text-sm">Slow</span>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={typingSpeed}
                  onChange={(e) => setTypingSpeed(Number(e.target.value))}
                  className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-white/60 text-sm">Fast</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/80 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Neural Message
            </label>
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={isAITyping ? currentTyping : message}
                onChange={handleMessageChange}
                required
                rows={8}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
                placeholder="Transmit your thoughts through the quantum network..."
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                {isAITyping && (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex space-x-1"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* AI Suggestions */}
            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 space-y-2"
                >
                  <p className="text-white/60 text-sm flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Suggestions:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {aiSuggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-left p-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
                <span>Transmitting to Quantum Network...</span>
              </>
            ) : (
              <>
                <Rocket className="w-6 h-6" />
                <span>Launch Message</span>
                <Star className="w-6 h-6" />
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </div>
  )
}