import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({service}){
  return (
    <motion.div whileHover={{ y: -8, scale: 1.05 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
      <div className="inline-flex w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full items-center justify-center mb-4">
        <span className="text-3xl">{service.icon}</span>
      </div>
      <h4 className="font-semibold text-lg text-dark mt-3">{service.title}</h4>
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">{service.description}</p>
    </motion.div>
  )
}
