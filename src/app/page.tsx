'use client'

import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  TrendingUp, 
  Brain, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  Star,
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  
  const texts = [
    'Finance Professional',
    'Quantitative Trading',
    'Tech Builder',
    'Full Stack Developer'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let i = 0
    const currentText = texts[currentTextIndex]
    const typeTimer = setInterval(() => {
      if (i <= currentText.length) {
        setTypedText(currentText.slice(0, i))
        i++
      } else {
        clearInterval(typeTimer)
      }
    }, 100)
    return () => clearInterval(typeTimer)
  }, [currentTextIndex])

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1 })
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.1 })
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 })
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.1 })

  const skills = [
    { name: 'Python', level: 90, icon: Code },
    { name: 'Next.js', level: 85, icon: Code },
    { name: 'React', level: 88, icon: Code },
    { name: 'SQL', level: 92, icon: Database },
    { name: 'Trading APIs', level: 87, icon: TrendingUp },
    { name: 'Machine Learning', level: 80, icon: Brain }
  ]

  const projects = [
    {
      title: 'AI Market Scanner',
      description: 'Real-time market analysis dashboard with AI-powered insights and automated trading signals.',
      tech: ['Python', 'React', 'FastAPI', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      live: '#',
      github: '#'
    },
    {
      title: 'Portfolio Tracker',
      description: 'Comprehensive portfolio management system with risk analysis and performance metrics.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Chart.js'],
      image: '/api/placeholder/400/250',
      live: '#',
      github: '#'
    },
    {
      title: 'Trading Bot',
      description: 'Automated trading system with backtesting capabilities and risk management.',
      tech: ['Python', 'Pandas', 'NumPy', 'Binance API'],
      image: '/api/placeholder/400/250',
      live: '#',
      github: '#'
    }
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Tech Transition',
      company: 'Freelance',
      description: 'Building AI-assisted trading tools and full-stack applications',
      icon: Code
    },
    {
      year: '2017-2024',
      title: 'Manager',
      company: 'Punjab National Bank',
      description: 'Managed portfolios worth Rs. 50-150 Crores, implemented risk management strategies',
      icon: Briefcase
    },
    {
      year: '2014-2017',
      title: 'Credit Officer',
      company: 'Punjab National Bank',
      description: 'Handled credit portfolio analysis and loan processing',
      icon: Award
    },
    {
      year: '2014',
      title: 'MCA Graduate',
      company: 'Sikkim Manipal University',
      description: 'Master of Computer Applications with 66.42%',
      icon: GraduationCap
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            DH
          </motion.div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <a href="#contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/profile.jpg"
                alt="Dwipanjit Handique"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dwipanjit Handique
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-4xl font-semibold mb-8 h-12 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gray-700 dark:text-gray-300">
                {typedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-blue-600"
                >
                  |
                </motion.span>
              </span>
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              After nearly a decade of managing portfolios and operations at Punjab National Bank, 
              I&apos;ve transitioned my analytical and market expertise into building data-driven trading 
              and research applications. Focused on blending financial strategy, technical analysis, 
              and algorithmic automation.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://linkedin.com/in/dwipanjit-handique-5a872521b"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white dark:bg-gray-800 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/Dwipanjit"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white dark:bg-gray-800 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 text-gray-900 dark:text-white group-hover:text-gray-700" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">GitHub</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 dark:text-gray-500"
              >
                <ChevronDown className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="text-center leading-relaxed text-xl">
                  I&apos;m Dwipanjit Handique, a finance professional turned quantitative trading enthusiast and tech builder. 
                  With a foundation in Computer Applications and a certification as a NISM Series-XV Research Analyst, 
                  I focus on blending financial strategy, technical analysis, and algorithmic automation. My current projects 
                  include building AI-assisted market scanning dashboards and exploring full-stack web app development using 
                  modern tools like Next.js, Supabase, and Cursor AI IDE.
                </p>
                <p className="text-center leading-relaxed text-xl mt-6">
                  My goal is to create scalable, production-ready tools that empower traders and investors with 
                  institutional-grade insights delivered through intuitive web interfaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href={project.live} className="text-blue-600 hover:text-blue-700 font-medium">Live Demo</a>
                      <a href={project.github} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium">GitHub</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Career Journey
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20">
                      <div className="flex items-center mb-3">
                        <item.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.company}</p>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full mx-8 flex-shrink-0"></div>
                  <div className="w-32 flex-shrink-0"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20 dark:border-gray-700/20">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://linkedin.com/in/dwipanjit-handique-5a872521b" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Dwipanjit" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:dwipanjit26@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Dwipanjit Handique. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}