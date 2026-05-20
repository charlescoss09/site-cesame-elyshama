import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import ServiceCard from '../components/ServiceCard'
import TeamCard from '../components/TeamCard'
import TestimonialSlider from '../components/TestimonialSlider'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import productsData from '../data/products'
import servicesData from '../data/services'
import teamData from '../data/team'
import testimonialsData from '../data/testimonials'

export default function Home(){
  const diseases = [
    { name: 'Diabète', description: 'Accompagnement naturel' },
    { name: 'Hypertension', description: 'Soutien thérapeutique' },
    { name: 'AVC', description: 'Approche holistique' },
    { name: 'Paralysie', description: 'Bien-être naturel' },
    { name: 'Douleurs articulaires', description: 'Soulagement naturel' },
    { name: 'Stress', description: 'Détente et sérénité' },
    { name: 'Fatigue chronique', description: 'Régénération cellulaire' },
    { name: 'Troubles digestifs', description: 'Purification douce' }
  ]

  const advantages = [
    { title: 'Produits 100% naturels', value: '500+' },
    { title: 'Consultation personnalisée', value: '98%' },
    { title: 'Équipe professionnelle', value: '7+' },
    { title: 'Accompagnement humain', value: '24/7' }
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
      <HeroSection />

      {/* PHARMACOPÉE SECTION */}
      <section className="container py-16">
        <SectionTitle title="Pharmacopée naturelle" subtitle="Produits sélectionnés avec soin pour votre bien-être" />
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
          {productsData.map(p=> <motion.div key={p.id} variants={itemVariants}><ProductCard product={p} /></motion.div>)}
        </motion.div>
      </section>

      {/* CLINIQUE HOLISTIQUE SECTION */}
      <section className="bg-cesame-gray py-16">
        <div className="container">
          <SectionTitle title="Centre clinique holistique" subtitle="Soins naturels et régénération cellulaire" />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
            {servicesData.map(s=> <motion.div key={s.id} variants={itemVariants}><ServiceCard service={s} /></motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* MALADIES TRAITÉES SECTION */}
      <section className="container py-16">
        <SectionTitle title="Accompagnement naturel pour" subtitle="Approche holistique adaptée à chaque situation" />
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
          {diseases.map((d, i)=> (
            <motion.div key={i} variants={itemVariants} className="bg-white rounded-lg p-4 shadow-md text-center">
              <h4 className="font-semibold text-cesame-green">{d.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{d.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* POURQUOI NOUS CHOISIR SECTION */}
      <section className="bg-cesame-dark text-white py-16">
        <div className="container">
          <SectionTitle title="Pourquoi nous choisir" subtitle="Excellence et accompagnement personnalisé" />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
            {advantages.map((adv, i)=> (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-3xl font-bold text-cesame-gold">{adv.value}</div>
                <p className="mt-2">{adv.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ÉQUIPE SECTION */}
      <section className="container py-16">
        <SectionTitle title="Notre équipe" subtitle="Professionnels dédiés à votre bien-être" />
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
          {teamData.map(m=> <motion.div key={m.name} variants={itemVariants}><TeamCard member={m} /></motion.div>)}
        </motion.div>
      </section>

      {/* CONSULTATION GRATUITE SECTION */}
      <CTASection />

      {/* TÉMOIGNAGES SECTION */}
      <section className="container py-16">
        <SectionTitle title="Témoignages" subtitle="Retours de nos clients" />
        <TestimonialSlider items={testimonialsData} />
      </section>
    </div>
  )
}
