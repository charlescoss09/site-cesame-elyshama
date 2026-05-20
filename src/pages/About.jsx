import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

export default function About(){
  const values = [
    { title: 'Santé naturelle', description: 'Approche basée sur les ressources de la nature' },
    { title: 'Humanité', description: 'Écoute attentive et compassion envers chaque patient' },
    { title: 'Bien-être', description: 'Harmonie corps, esprit et âme' },
    { title: 'Innovation', description: 'Méthodes modernes et traditionnelles combinées' },
    { title: 'Confiance', description: 'Transparence et professionnalisme garantis' },
    { title: 'Écoute', description: 'Chaque situation est unique et traitée ainsi' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cesame-dark text-white py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold">À propos de CESAME ELYSHAMA</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Une structure dédiée à la santé naturelle, au bien-être holistique et à l'accompagnement humain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="container py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <SectionTitle title="Notre histoire" subtitle="Fondée sur une passion pour la médecine naturelle" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                CESAME ELYSHAMA est née de la conviction que la nature possède les ressources nécessaires pour favoriser la santé et le bien-être de chacun.
              </p>
              <p>
                Fondée par Ahouandogbo Martin, Président de la fédération de médecine naturelle au Congo Brazzaville, notre structure combine tradition et innovation pour offrir une approche holistique complète.
              </p>
              <p>
                Nous travaillons chaque jour pour accompagner nos patients vers la régénération cellulaire, la purification du corps et l'équilibre naturel.
              </p>
            </div>
            <div className="bg-cesame-gray rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-cesame-green">Depuis 2020</div>
                <p className="text-gray-600 mt-2">Au service de votre santé naturelle</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-cesame-gray py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4">Notre mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Offrir à chacun un accompagnement naturel, professionnel et bienveillant pour retrouver l'équilibre, la santé et le bien-être par des approches holistiques, respectueuses du corps et de l'esprit.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4">Notre vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Devenir un centre de référence en médecine naturelle et en soins holistiques, reconnu pour la qualité de ses services, l'expertise de son équipe et l'impact positif sur la vie de nos patients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="container py-16">
        <SectionTitle title="Nos valeurs" subtitle="Ce qui nous guide chaque jour" />
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {values.map((val, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-white rounded-lg shadow p-6 border-t-4 border-cesame-green">
              <h4 className="font-semibold text-cesame-green text-lg">{val.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{val.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
