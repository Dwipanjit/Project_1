import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

export default function Home() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* 3D Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Floating Bubbles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`bubble-${i}`}
              className="absolute rounded-full opacity-20 animate-float"
              style={{
                width: `${30 + Math.random() * 80}px`,
                height: `${30 + Math.random() * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.2))`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
                boxShadow: `0 0 ${20 + Math.random() * 40}px rgba(59, 130, 246, 0.3)`,
              }}
            />
          ))}

          {/* Floating Dots */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute rounded-full opacity-40 animate-pulse"
              style={{
                width: `${3 + Math.random() * 12}px`,
                height: `${3 + Math.random() * 12}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, #3b82f6, #8b5cf6)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                boxShadow: `0 0 ${5 + Math.random() * 15}px rgba(59, 130, 246, 0.6)`,
              }}
            />
          ))}

          {/* Large Floating Orbs */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full opacity-15 animate-float"
              style={{
                width: `${100 + Math.random() * 150}px`,
                height: `${100 + Math.random() * 150}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.1))`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${15 + Math.random() * 20}s`,
                boxShadow: `0 0 ${50 + Math.random() * 100}px rgba(139, 92, 246, 0.2)`,
              }}
            />
          ))}

          {/* Glowing Particles */}
          {[...Array(60)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full opacity-30 animate-pulse"
              style={{
                width: `${1 + Math.random() * 4}px`,
                height: `${1 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `#60a5fa`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                boxShadow: `0 0 ${3 + Math.random() * 8}px #60a5fa`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/30 animate-float-gentle hover:animate-glow transition-all duration-500">
                  <Image
                    src="/profile.jpg"
                    alt="Dwipanjit Handique"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  Dwipanjit Handique
                </h1>
                <p className="text-xl md:text-2xl text-blue-300 mb-6 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                  Finance Professional | Quantitative Trading | Tech Builder
                </p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
                  After nearly a decade of managing portfolios and operations at Punjab National Bank, 
                  I&apos;ve transitioned my analytical and market expertise into building data-driven trading 
                  and research applications. Focused on blending financial strategy, technical analysis, 
                  and algorithmic automation.
                </p>
              </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <a
                    href="https://www.linkedin.com/in/dwipanjit-handique-5a872521b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-blue-100 transition-colors duration-300 relative z-10">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://github.com/Dwipanjit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-5 h-5 text-white group-hover:text-gray-300 transition-all duration-300 group-hover:scale-110 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-gray-100 transition-colors duration-300 relative z-10">GitHub</span>
                  </a>

                  <a
                    href="https://x.com/dwipanjithandiq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-blue-100 transition-colors duration-300 relative z-10">X (Twitter)</span>
                  </a>

                  <a
                    href="https://www.facebook.com/dwipanjit.handique.3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-blue-100 transition-colors duration-300 relative z-10">Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/being_dwipanjit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-5 h-5 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-pink-100 transition-colors duration-300 relative z-10">Instagram</span>
                  </a>
                </div>
          </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 transition-all duration-500 hover:bg-white/15 hover:shadow-3xl hover:scale-[1.02]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center animate-slide-in">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="text-center leading-relaxed animate-fade-in" style={{animationDelay: '0.8s'}}>
              I&apos;m Dwipanjit Handique, a finance professional turned quantitative trading enthusiast and tech builder. 
              With a foundation in Computer Applications and a certification as a NISM Series-XV Research Analyst, 
              I focus on blending financial strategy, technical analysis, and algorithmic automation. My current projects 
              include building AI-assisted market scanning dashboards and exploring full-stack web app development using 
              modern tools like Next.js, Supabase, and Cursor AI IDE.
              </p>
              <p className="text-center leading-relaxed mt-4 animate-fade-in" style={{animationDelay: '1s'}}>
              My goal is to create scalable, production-ready tools that empower traders and investors with 
              institutional-grade insights delivered through intuitive web interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 transition-all duration-500 hover:bg-white/15 hover:shadow-3xl hover:scale-[1.02]">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg text-white py-8 mt-16 animate-fade-in" style={{animationDelay: '1.4s'}}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 transition-colors duration-300 hover:text-white">
            © 2025 Dwipanjit. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}
