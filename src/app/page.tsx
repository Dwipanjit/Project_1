import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">D</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Dwipanjit Handique
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              FinTech Manager | Algorithmic Trading | Data Analytics
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Banking technologist specializing in algorithmic trading systems, quantitative analysis, and financial data engineering. 
              Building automated trading strategies, risk management algorithms, and crypto trading bots. 
              Passionate about fintech innovation and market data science.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com/in/dwipanjit-handique-5a872521b"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-gray-700 dark:text-gray-300 font-medium">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/Dwipanjit"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 text-gray-900 dark:text-white group-hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-gray-700 dark:text-gray-300 font-medium">GitHub</span>
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="text-center leading-relaxed">
              I&apos;m a fintech engineer with 7+ years building trading systems and financial algorithms. 
              Currently managing digital banking operations at Punjab National Bank, I develop automated trading strategies, 
              risk management models, and crypto trading bots. My tech stack includes Python, R, SQL, and various trading APIs. 
              I&apos;m passionate about machine learning in finance, quantitative analysis, and building scalable fintech solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Dwipanjit. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}
