import React from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({product}){
  return (
    <motion.div whileHover={{ y:-6 }} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-44 bg-gray-100 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-cesame-green font-bold">{product.price ? product.price : ''}</span>
          <button className="bg-cesame-green text-white px-3 py-1 rounded-full text-sm">Découvrir</button>
        </div>
      </div>
    </motion.div>
  )
}
