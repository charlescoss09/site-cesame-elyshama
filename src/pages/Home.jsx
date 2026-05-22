import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import ServiceCard from '../components/ServiceCard'
import TeamCard from '../components/TeamCard'
import TestimonialSlider from '../components/TestimonialSlider'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { HiCheckCircle, HiUser, HiCalendar } from 'react-icons/hi'
import productsData from '../data/products'
import servicesData from '../data/services'
import teamData from '../data/team'
import testimonialsData from '../data/testimonials'

export default function Home(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const howItWorks = [
    { 
      step: 1, 
      title: 'Trouvez votre spécialiste', 
      description: 'Parcourez nos professionnels et trouvez celui qui correspond à vos besoins',
      icon: HiUser 
    },
    { 
      step: 2, 
      title: 'Prenez rendez-vous', 
      description: 'Choisissez une date et une heure qui vous convient facilement',
      icon: HiCalendar 
    },
    { 
      step: 3, 
      title: 'Consultation gratuite', 
      description: 'Profitez de votre première consultation pour évaluer vos besoins',
      icon: HiCheckCircle 
    }
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <HeroSection />

      {/* SERVICES SECTION */}
      <section className="container py-20">
        <SectionTitle 
          title="Nos Services" 
          subtitle="Une approche holistique et naturelle pour votre bien-être" 
        />
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{once:true}}
        >
          {servicesData.map(service => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container">
          <SectionTitle 
            title="Comment ça marche" 
            subtitle="Quatre étapes simples pour accéder à vos soins" 
          />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once:true}}
          >
            {howItWorks.map((item) => {
              const Icon = item.icon
              return (
                <motion.div key={item.step} variants={itemVariants}>
                  <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="relative inline-flex w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full items-center justify-center mb-6">
                      <Icon className="text-white text-4xl" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg text-dark">{item.title}</h4>
                    <p className="text-gray-600 mt-3 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="container py-20">
        <SectionTitle 
          title="Pharmacopée naturelle" 
          subtitle="Produits sélectionnés avec soin pour votre bien-être" 
        />
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{once:true}}
        >
          {productsData.slice(0, 3).map(product => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-light-gray py-20">
        <div className="container">
          <SectionTitle 
            title="Notre équipe" 
            subtitle="Des professionnels dédiés à votre bien-être" 
          />
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once:true}}
          >
            {teamData.map(member => (
              <motion.div key={member.name} variants={itemVariants}>
                <TeamCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="container py-20">
        <SectionTitle 
          title="Témoignages" 
          subtitle="Ce que nos clients disent de nous" 
        />
        <TestimonialSlider testimonials={testimonialsData} />
      </section>

      {/* CTA SECTION */}
      <CTASection />

      {/* STATS SECTION */}
      <section className="bg-dark text-white py-16">
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once:true}}
          >
            {[
              { value: '500+', label: 'Professionnels' },
              { value: '98%', label: 'Satisfaction' },
              { value: '10k+', label: 'Clients heureux' },
              { value: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
