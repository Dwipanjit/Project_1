'use client'

import { useState, useEffect } from 'react'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20" />
      
      {/* Matrix-style Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Glow */}
      <div
        className="fixed w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            {/* Holographic Profile */}
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/50">
                <Image
                  src="/profile.jpg"
                  alt="Dwipanjit Handique"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-30" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            </div>

            {/* Cyberpunk Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              DWIPANJIT
            </h1>
            
            {/* Neon Subtitle */}
            <div className="relative mb-6">
              <p className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2 tracking-wider">
                FINANCE PROFESSIONAL
              </p>
              <p className="text-xl md:text-2xl text-purple-300 mb-2 tracking-wider">
                QUANTITATIVE TRADING
              </p>
              <p className="text-lg md:text-xl text-pink-300 tracking-wider">
                TECH BUILDER
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl -z-10" />
            </div>

            {/* Cyberpunk Description */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-8 font-mono">
                <span className="text-cyan-400">&gt;</span> After nearly a decade of managing portfolios and operations at Punjab National Bank,<br/>
                <span className="text-cyan-400">&gt;</span> I&apos;ve transitioned my analytical and market expertise into building data-driven trading<br/>
                <span className="text-cyan-400">&gt;</span> and research applications. Focused on blending financial strategy, technical analysis,<br/>
                <span className="text-cyan-400">&gt;</span> and algorithmic automation.
              </p>
            </div>
          </div>

          {/* Neon Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://linkedin.com/in/dwipanjit-handique-5a872521b"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-black/50 border border-cyan-400/50 rounded-lg hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm" />
                <span className="text-cyan-300 font-bold tracking-wider">LINKEDIN</span>
              </div>
            </a>
            
            <a
              href="https://github.com/Dwipanjit"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-black/50 border border-purple-400/50 rounded-lg hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-sm" />
                <span className="text-purple-300 font-bold tracking-wider">GITHUB</span>
              </div>
            </a>
          </div>
        </div>

        {/* Holographic About Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative bg-black/30 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-cyan-400/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-pink-400/5 rounded-2xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ABOUT_ME.exe
              </h2>
              
              <div className="space-y-6 text-gray-300 font-mono">
                <div className="border-l-4 border-cyan-400 pl-6">
                  <p className="text-lg leading-relaxed">
                    <span className="text-cyan-400">I&apos;m Dwipanjit Handique</span>, a finance professional turned quantitative trading enthusiast and tech builder. 
                    With a foundation in Computer Applications and a certification as a NISM Series-XV Research Analyst, 
                    I focus on blending financial strategy, technical analysis, and algorithmic automation.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-6">
                  <p className="text-lg leading-relaxed">
                    My current projects include building AI-assisted market scanning dashboards and exploring full-stack web app development using 
                    modern tools like Next.js, Supabase, and Cursor AI IDE.
                  </p>
                </div>
                
                <div className="border-l-4 border-pink-400 pl-6">
                  <p className="text-lg leading-relaxed">
                    My goal is to create scalable, production-ready tools that empower traders and investors with 
                    institutional-grade insights delivered through intuitive web interfaces.
                  </p>
                </div>
              </div>

              {/* Cyber Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-black/50 border border-cyan-400/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">7+</div>
                  <div className="text-cyan-300 font-mono">YEARS EXPERIENCE</div>
                </div>
                <div className="text-center p-6 bg-black/50 border border-purple-400/30 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">NISM</div>
                  <div className="text-purple-300 font-mono">CERTIFIED ANALYST</div>
                </div>
                <div className="text-center p-6 bg-black/50 border border-pink-400/30 rounded-lg">
                  <div className="text-3xl font-bold text-pink-400 mb-2">AI</div>
                  <div className="text-pink-300 font-mono">TECH BUILDER</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black/30 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-purple-400/20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-cyan-400/5 rounded-2xl" />
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Cyberpunk Footer */}
      <footer className="relative mt-16 bg-black/50 backdrop-blur-lg border-t border-cyan-400/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-gray-400 font-mono">
            © 2025 DWIPANJIT.HANDIQUE | BUILT WITH NEXT.JS & TAILWIND CSS
          </p>
        </div>
      </footer>
    </main>
  )
}