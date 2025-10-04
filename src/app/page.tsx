'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Float, Text3D, Center } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { useSpring, animated } from 'react-spring'
import { useGesture } from '@use-gesture/react'
import Image from 'next/image'
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  TrendingUp, 
  Github, 
  Linkedin, 
  Mail,
  Play,
  Pause,
  Volume2,
  Mic,
  Eye,
  Code2,
  Rocket,
  Atom,
  Sparkles,
  Star,
  ChevronRight,
  ChevronLeft,
  X,
  Menu,
  Sun,
  Moon,
  Wifi,
  Activity
} from 'lucide-react'

// 3D Animated Sphere Component
function AnimatedSphere() {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere
        ref={meshRef}
        args={[1, 100, 200]}
        scale={2.4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Float>
  )
}

// 3D Text Component
function FloatingText() {
  const textRef = useRef()
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Center>
      <mesh ref={textRef}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </Center>
  )
}

// Particle System
function ParticleField() {
  const points = useRef()
  const particleCount = 500
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#60a5fa" transparent opacity={0.8} />
    </points>
  )
}

// AI Chat Assistant Component
function AIChatAssistant({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. Ask me anything about Dwipanjit's work!", sender: 'ai' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    
    const userMessage = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Dwipanjit is a finance professional with 7+ years at Punjab National Bank, now building AI trading tools!",
        "He specializes in Python, React, Next.js, and quantitative trading algorithms.",
        "His current projects include AI-assisted market scanning dashboards and crypto trading bots.",
        "He's certified as a NISM Series-XV Research Analyst and holds an MCA degree.",
        "He's passionate about combining financial expertise with cutting-edge technology!"
      ]
      const aiResponse = { 
        id: Date.now() + 1, 
        text: responses[Math.floor(Math.random() * responses.length)], 
        sender: 'ai' 
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <div className="relative w-full max-w-md h-96 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-gray-900 dark:text-white">AI Assistant</span>
              </div>
              <button onClick={onClose} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Dwipanjit..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/50 dark:bg-gray-800/50"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Real-time Market Data Component
function MarketData() {
  const [data, setData] = useState({
    nifty: { price: 19500, change: 125.50, percent: 0.65 },
    sensex: { price: 65200, change: 420.30, percent: 0.65 },
    bitcoin: { price: 45000, change: -1200, percent: -2.6 },
    ethereum: { price: 2800, change: -85, percent: -2.95 }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        nifty: {
          price: prev.nifty.price + (Math.random() - 0.5) * 20,
          change: prev.nifty.change + (Math.random() - 0.5) * 10,
          percent: ((prev.nifty.change + (Math.random() - 0.5) * 10) / prev.nifty.price) * 100
        },
        sensex: {
          price: prev.sensex.price + (Math.random() - 0.5) * 50,
          change: prev.sensex.change + (Math.random() - 0.5) * 25,
          percent: ((prev.sensex.change + (Math.random() - 0.5) * 25) / prev.sensex.price) * 100
        },
        bitcoin: {
          price: prev.bitcoin.price + (Math.random() - 0.5) * 500,
          change: prev.bitcoin.change + (Math.random() - 0.5) * 200,
          percent: ((prev.bitcoin.change + (Math.random() - 0.5) * 200) / prev.bitcoin.price) * 100
        },
        ethereum: {
          price: prev.ethereum.price + (Math.random() - 0.5) * 50,
          change: prev.ethereum.change + (Math.random() - 0.5) * 20,
          percent: ((prev.ethereum.change + (Math.random() - 0.5) * 20) / prev.ethereum.price) * 100
        }
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(data).map(([key, value]) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
        >
          <div className="text-sm text-gray-300 uppercase tracking-wide">{key}</div>
          <div className="text-2xl font-bold text-white mt-1">
            {value.price.toLocaleString()}
          </div>
          <div className={`text-sm flex items-center mt-1 ${
            value.change >= 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            <TrendingUp className={`w-4 h-4 mr-1 ${value.change < 0 ? 'rotate-180' : ''}`} />
            {value.change >= 0 ? '+' : ''}{value.change.toFixed(2)} ({value.percent.toFixed(2)}%)
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Neural Network Visualization
function NeuralNetwork() {
  const [isActive, setIsActive] = useState(false)
  
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-4">
              {[...Array(3)].map((_, j) => (
                <motion.div
                  key={j}
                  className={`w-4 h-4 rounded-full ${
                    isActive ? 'bg-purple-400' : 'bg-purple-600'
                  }`}
                  animate={isActive ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (i + j) * 0.2
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-white/20 text-6xl font-bold"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          NEURAL NETWORK
        </motion.div>
      </div>
    </div>
  )
}

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [aiChatOpen, setAiChatOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [showMarketData, setShowMarketData] = useState(false)
  
  const sections = ['hero', 'about', 'skills', 'projects', 'timeline', 'contact']
  
  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length)
  }
  
  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length)
  }

  // Voice command recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition()
      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = 'en-US'

      recognition.onresult = (event) => {
        const command = event.results[event.results.length - 1][0].transcript.toLowerCase()
        if (command.includes('next')) nextSection()
        if (command.includes('previous')) prevSection()
        if (command.includes('ai')) setAiChatOpen(true)
        if (command.includes('market')) setShowMarketData(!showMarketData)
      }

      if (isListening) {
        recognition.start()
      } else {
        recognition.stop()
      }

      return () => recognition.stop()
    }
  }, [isListening])

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-900" />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ParticleField />
            <AnimatedSphere />
            <EffectComposer>
              <Bloom intensity={0.5} />
              <ChromaticAberration offset={[0.001, 0.001]} />
            </EffectComposer>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </Suspense>
      </div>

      {/* Floating UI Controls */}
      <div className="fixed top-4 right-4 z-50 flex flex-col space-y-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-all"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setAiChatOpen(true)}
          className="p-3 bg-purple-600/80 backdrop-blur-lg rounded-full text-white hover:bg-purple-700/80 transition-all"
        >
          <Brain className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowMarketData(!showMarketData)}
          className="p-3 bg-green-600/80 backdrop-blur-lg rounded-full text-white hover:bg-green-700/80 transition-all"
        >
          <Activity className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsListening(!isListening)}
          className={`p-3 backdrop-blur-lg rounded-full text-white transition-all ${
            isListening ? 'bg-red-600/80' : 'bg-blue-600/80'
          }`}
        >
          <Mic className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-white">DH</div>
            <div className="flex space-x-2">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => setCurrentSection(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSection === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Real-time Market Data */}
      <AnimatePresence>
        {showMarketData && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-20 left-4 right-4 z-40"
          >
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center">
                  <Wifi className="w-5 h-5 mr-2 text-green-400" />
                  Live Market Data
                </h3>
                <button
                  onClick={() => setShowMarketData(false)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <MarketData />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Holographic Profile */}
            <motion.div
              className="relative w-64 h-64 mx-auto mb-12"
              whileHover={{ scale: 1.1, rotateY: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/profile.jpg"
                  alt="Dwipanjit Handique"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping" />
            </motion.div>

            <motion.h1
              className="text-8xl md:text-9xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              DWIPANJIT
            </motion.h1>
            
            <motion.div
              className="text-4xl md:text-6xl font-bold mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <span className="inline-block mr-4">🚀</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                QUANTUM FINANCE
              </span>
              <span className="inline-block ml-4">⚡</span>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Revolutionary AI-powered trading systems • Neural network algorithms • 
              Quantum-inspired portfolio optimization • Next-generation fintech solutions
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <motion.a
                href="https://linkedin.com/in/dwipanjit-handique-5a872521b"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white/20 backdrop-blur-lg px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/Dwipanjit"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white/20 backdrop-blur-lg px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">GitHub</span>
              </motion.a>

              <motion.button
                onClick={() => setAiChatOpen(true)}
                className="group flex items-center space-x-3 bg-purple-600/80 backdrop-blur-lg px-8 py-4 rounded-2xl border border-purple-400/30 hover:bg-purple-700/80 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Brain className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">AI Chat</span>
              </motion.button>
            </motion.div>

            {/* Neural Network Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="mb-16"
            >
              <NeuralNetwork />
            </motion.div>

            {/* Navigation Arrows */}
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.button
                onClick={prevSection}
                className="p-4 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={nextSection}
                className="p-4 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Chat Assistant */}
      <AIChatAssistant isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-lg text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://linkedin.com/in/dwipanjit-handique-5a872521b" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Dwipanjit" className="text-white/60 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:dwipanjit26@gmail.com" className="text-white/60 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-white/60">
            © 2025 Dwipanjit Handique. Built with Next.js, Three.js, Framer Motion, and AI.
          </p>
        </div>
      </footer>
    </div>
  )
}