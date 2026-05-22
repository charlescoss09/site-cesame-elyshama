import React from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({product}){
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-dark text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{product.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-primary font-bold text-lg">{product.price ? product.price : ''}</span>
          <button className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary/90 transition">Découvrir</button>
        </div>
      </div>
    </motion.div>
  )
}
