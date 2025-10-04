import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

export default function Home() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Space Background with Stars */}
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900">
          {/* Starfield */}
          {[...Array(200)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}

          {/* Nebula Clouds */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '20s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '25s', animationDelay: '5s' }} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-pink-500/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '30s', animationDelay: '10s' }} />
          </div>
        </div>

        {/* 3D Space Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Floating Planets */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`planet-${i}`}
              className="absolute rounded-full animate-cosmic-drift animate-planet-rotate"
              style={{
                width: `${60 + Math.random() * 120}px`,
                height: `${60 + Math.random() * 120}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle at 30% 30%, 
                  ${i % 3 === 0 ? 'rgba(255, 165, 0, 0.8)' : i % 3 === 1 ? 'rgba(0, 191, 255, 0.8)' : 'rgba(255, 105, 180, 0.8)'} 0%, 
                  ${i % 3 === 0 ? 'rgba(255, 69, 0, 0.6)' : i % 3 === 1 ? 'rgba(0, 100, 200, 0.6)' : 'rgba(255, 20, 147, 0.6)'} 50%, 
                  ${i % 3 === 0 ? 'rgba(139, 69, 19, 0.4)' : i % 3 === 1 ? 'rgba(25, 25, 112, 0.4)' : 'rgba(75, 0, 130, 0.4)'} 100%)`,
                boxShadow: `0 0 30px ${i % 3 === 0 ? 'rgba(255, 165, 0, 0.5)' : i % 3 === 1 ? 'rgba(0, 191, 255, 0.5)' : 'rgba(255, 105, 180, 0.5)'}`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
              }}
            />
          ))}

          {/* Asteroid Belt */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`asteroid-${i}`}
              className="absolute rounded-full animate-float"
              style={{
                width: `${8 + Math.random() * 20}px`,
                height: `${8 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4)`,
                boxShadow: `0 0 15px rgba(139, 92, 246, 0.6)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}

          {/* Cosmic Dust Particles */}
          {[...Array(80)].map((_, i) => (
            <div
              key={`dust-${i}`}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, #ffffff 0%, #e0e7ff 50%, transparent 100%)`,
                boxShadow: `0 0 8px rgba(255, 255, 255, 0.6)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Energy Orbs */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`energy-${i}`}
              className="absolute rounded-full animate-energy-pulse"
              style={{
                width: `${40 + Math.random() * 80}px`,
                height: `${40 + Math.random() * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `conic-gradient(from 0deg, 
                  rgba(0, 255, 255, 0.3) 0deg, 
                  rgba(255, 0, 255, 0.3) 90deg, 
                  rgba(0, 255, 255, 0.3) 180deg, 
                  rgba(255, 0, 255, 0.3) 270deg, 
                  rgba(0, 255, 255, 0.3) 360deg)`,
                boxShadow: `0 0 25px rgba(0, 255, 255, 0.4), inset 0 0 25px rgba(255, 0, 255, 0.2)`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${12 + Math.random() * 18}s`,
              }}
            />
          ))}

          {/* Shooting Stars */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`shooting-star-${i}`}
              className="absolute animate-shooting-star"
              style={{
                width: '2px',
                height: '2px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'linear-gradient(45deg, #ffffff, #60a5fa)',
                boxShadow: '0 0 10px rgba(96, 165, 250, 0.8)',
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/30">
                <Image
                  src="/profile.jpg"
                  alt="Dwipanjit Handique"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Dwipanjit Handique
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-6 max-w-2xl mx-auto">
                Finance Professional | Quantitative Trading | Tech Builder
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                After nearly a decade of managing portfolios and operations at Punjab National Bank, 
                I&apos;ve transitioned my analytical and market expertise into building data-driven trading 
                and research applications. Focused on blending financial strategy, technical analysis, 
                and algorithmic automation.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://linkedin.com/in/dwipanjit-handique-5a872521b"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white font-medium">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/Dwipanjit"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 text-white group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white font-medium">GitHub</span>
              </a>
            </div>
          </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="text-center leading-relaxed">
              I&apos;m Dwipanjit Handique, a finance professional turned quantitative trading enthusiast and tech builder. 
              With a foundation in Computer Applications and a certification as a NISM Series-XV Research Analyst, 
              I focus on blending financial strategy, technical analysis, and algorithmic automation. My current projects 
              include building AI-assisted market scanning dashboards and exploring full-stack web app development using 
              modern tools like Next.js, Supabase, and Cursor AI IDE.
              </p>
              <p className="text-center leading-relaxed mt-4">
              My goal is to create scalable, production-ready tools that empower traders and investors with 
              institutional-grade insights delivered through intuitive web interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 Dwipanjit. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}
