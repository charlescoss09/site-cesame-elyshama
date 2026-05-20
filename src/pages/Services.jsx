import React from 'react'
import { motion } from 'framer-motion'
import services from '../data/services'
import ServiceCard from '../components/ServiceCard'
import SectionTitle from '../components/SectionTitle'

export default function Services(){
  const detailedServices = [
    {
      title: 'Régénération cellulaire',
      description: 'Approche naturelle personnalisée pour favoriser le renouvellement et la vitalité cellulaire',
      features: ['Diagnostic complet', 'Programme adapté', 'Suivi régulier', 'Résultats mesurables']
    },
    {
      title: 'Détoxification',
      description: 'Programmes de purification douce et efficace pour éliminer les toxines',
      features: ['Détox progressive', 'Accompagnement naturel', 'Support nutritionnel', 'Conseils lifestyle']
    },
    {
      title: 'Massages thérapeutiques',
      description: 'Techniques traditionnelles et modernes pour la détente et la récupération physique',
      features: ['Massages relaxants', 'Thérapie profonde', 'Relief des douleurs', 'Bien-être holistique']
    },
    {
      title: 'Consultations naturelles',
      description: 'Évaluation complète et accompagnement personnalisé par nos experts',
      features: ['Consultation gratuite', 'Écoute attentive', 'Recommandations adaptées', 'Suivi continu']
    },
    {
      title: 'Accompagnement holistique',
      description: 'Prise en charge globale du corps, esprit et âme pour l\'équilibre total',
      features: ['Approche 360°', 'Harmonie corps-esprit', 'Soutien émotionnel', 'Transformation durable']
    },
    {
      title: 'Traitements naturels',
      description: 'Soins et traitements basés sur les ressources de la nature et la tradition',
      features: ['Produits naturels', 'Méthodes éprouvées', 'Sans effets secondaires', 'Résultats durables']
    }
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
      {/* Hero */}
      <section className="bg-cesame-dark text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Nos services</h1>
          <p className="mt-2 text-gray-300">Soins naturels et accompagnement holistique complets</p>
        </div>
      </section>

      {/* Quick Services */}
      <section className="container py-12">
        <SectionTitle title="Catégories principales" subtitle="Services rapides et efficaces" />
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
          {services.map(s=> <motion.div key={s.id} variants={itemVariants}><ServiceCard service={s} /></motion.div>)}
        </motion.div>
      </section>

      {/* Detailed Services */}
      <section className="bg-cesame-gray py-16">
        <div className="container">
          <SectionTitle title="Services détaillés" subtitle="Offre complète pour votre bien-être" />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
            {detailedServices.map((srv, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white rounded-lg shadow p-6">
                <h4 className="font-semibold text-lg text-cesame-green mb-2">{srv.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{srv.description}</p>
                <div className="space-y-2">
                  {srv.features.map((feat, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-cesame-green rounded-full"></span>
                      {feat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 text-center">
        <h3 className="text-2xl font-semibold">Prêt à commencer ?</h3>
        <p className="text-gray-600 mt-2">Réservez votre consultation gratuite dès maintenant</p>
        <a href="/appointment" className="inline-block mt-4 bg-cesame-green text-white px-6 py-3 rounded-full font-semibold shadow-lg">
          Réserver une consultation
        </a>
      </section>
    </div>
  )
}
