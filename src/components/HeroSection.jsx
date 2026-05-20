import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSection(){
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } }
  }

  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } }
  }

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cesame-dark/20 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 z-10"></div>

      {/* Decorative elements */}
      <motion.div className="absolute -top-20 -right-20 w-96 h-96 bg-cesame-green/10 rounded-full blur-3xl" animate={{ y: [0, 30, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cesame-gold/5 rounded-full blur-3xl" animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} />

      <div className="container relative z-20">
        <motion.div initial="hidden" animate="visible" variants={titleVariants}>
          <h1 className="text-5xl md:text-6xl font-bold text-cesame-dark leading-tight">
            La nature au<br />service de votre<br /><span className="text-cesame-green">santé</span>
          </h1>
        </motion.div>

        <motion.p initial="hidden" animate="visible" variants={subtitleVariants} className="mt-6 text-lg text-gray-700 max-w-2xl leading-relaxed">
          Accompagnement naturel et approche holistique pour favoriser le bien-être, la régénération cellulaire et la sérénité.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={buttonsVariants} className="mt-8 flex gap-4 flex-wrap">
          <Link to="/appointment" className="bg-cesame-green text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
            Prendre rendez-vous
          </Link>
          <Link to="/products" className="border-2 border-cesame-green text-cesame-green px-6 py-3 rounded-full hover:bg-cesame-green/5 transition-all duration-300 font-semibold">
            Découvrir nos produits
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
