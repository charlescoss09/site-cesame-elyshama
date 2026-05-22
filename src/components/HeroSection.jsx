import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiSearch, HiLocationMarker } from 'react-icons/hi'

export default function HeroSection(){
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pt-20 pb-20">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={titleVariants} className="text-5xl md:text-6xl font-bold text-dark leading-tight">
              Trouvez votre <span className="text-primary">spécialiste</span>
            </motion.h1>

            <motion.p variants={subtitleVariants} className="mt-6 text-lg text-gray-600 leading-relaxed">
              Accédez à des consultations professionnelles avec une approche holistique et naturelle pour votre bien-être.
            </motion.p>

            {/* Search Form */}
            <motion.div variants={formVariants} className="mt-10 bg-white rounded-2xl shadow-2xl p-8 space-y-4">
              <div className="relative">
                <HiSearch className="absolute left-4 top-4 text-gray-400 text-xl" />
                <input 
                  type="text" 
                  placeholder="Spécialité ou service..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
              
              <div className="relative">
                <HiLocationMarker className="absolute left-4 top-4 text-gray-400 text-xl" />
                <input 
                  type="text" 
                  placeholder="Localisation..." 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>

              <button className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition transform hover:scale-105">
                RECHERCHER
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={formVariants} className="mt-10 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Professionnels</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600">Disponible</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Decorative Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-96">
              {/* Floating cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-0 bg-white rounded-xl p-4 shadow-lg"
              >
                <p className="text-xs text-gray-500">Consultation disponible</p>
                <p className="font-semibold text-primary">Dr. Bien-être</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-0 bg-white rounded-xl p-4 shadow-lg"
              >
                <p className="text-xs text-gray-500">Service recommandé</p>
                <p className="font-semibold text-accent">Régénération +</p>
              </motion.div>

              {/* Center decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20"></div>
              </div>

              <p className="absolute inset-x-0 bottom-0 text-center text-6xl">👨‍⚕️</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
