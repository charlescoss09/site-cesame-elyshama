import React from 'react'
import { motion } from 'framer-motion'
import AppointmentForm from '../components/AppointmentForm'
import { HiCheckCircle } from 'react-icons/hi'

export default function Appointment(){
  const benefits = [
    'Consultation entièrement gratuite',
    'Approche holistique personnalisée',
    'Équipe professionnelle et bienveillante',
    'Suivi continu de votre bien-être'
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-secondary/10 to-primary/10 py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-dark">Prendre rendez-vous</h1>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl">Réservez votre consultation gratuite et découvrez comment nous pouvons vous accompagner dans votre bien-être.</p>
          </motion.div>
        </div>
      </section>

      {/* APPOINTMENT SECTION */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-dark mb-8">Pourquoi choisir CESAME ELYSHAMA?</h2>
            
            <div className="space-y-5">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <HiCheckCircle className="text-white text-lg" />
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-primary/10 rounded-2xl p-8">
              <p className="text-dark font-semibold mb-2">✨ Offre spéciale</p>
              <p className="text-gray-700">
                Les <strong>5 premiers rendez-vous</strong> incluent une évaluation complète de vos besoins et un plan personnalisé adapté à votre situation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AppointmentForm />
            
            <p className="text-center text-gray-600 text-sm mt-6">
              💬 Vous avez des questions? <br/>
              <a href="tel:+242xxxxxxxxx" className="text-primary font-semibold hover:text-secondary">Appelez-nous directement</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
