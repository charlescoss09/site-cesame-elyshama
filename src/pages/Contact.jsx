import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact(){
  const contactInfo = [
    { icon: FaPhone, label: 'Téléphone', value: '+242 XXXXXXXXX' },
    { icon: FaEnvelope, label: 'Email', value: 'contact@cesame-elyshama.org' },
    { icon: FaMapMarkerAlt, label: 'Localisation', value: 'Brazzaville, Congo' }
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-dark">Contactez-nous</h1>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl">Nous sommes là pour répondre à vos questions et discuter de vos besoins en bien-être.</p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, i) => {
            const Icon = info.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition"
              >
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full items-center justify-center mb-4">
                  <Icon className="text-3xl text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{info.label}</h3>
                <p className="text-gray-600">{info.value}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-dark mb-6">Envoyez-nous un message</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Remplissez le formulaire ci-contre et nous vous répondrons dans les plus brefs délais. Vous pouvez également nous contacter directement par téléphone ou email.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⏱️</span>
                </div>
                <div>
                  <p className="font-semibold text-dark">Heures d'ouverture</p>
                  <p className="text-gray-600 text-sm">Lundi - Vendredi: 9h - 18h<br/>Samedi: 10h - 16h</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <p className="font-semibold text-dark">Réponse rapide</p>
                  <p className="text-gray-600 text-sm">Nous vous répondons généralement en 24 heures</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
