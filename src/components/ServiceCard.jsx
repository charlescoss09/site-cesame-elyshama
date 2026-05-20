import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({service}){
  return (
    <motion.div whileHover={{ scale:1.02 }} className="bg-white rounded-lg shadow p-5">
      <div className="text-3xl text-cesame-green">{service.icon}</div>
      <h4 className="font-semibold mt-3">{service.title}</h4>
      <p className="text-sm text-gray-600 mt-2">{service.description}</p>
    </motion.div>
  )
}
