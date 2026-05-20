import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function TestimonialSlider({items}){
  const [index, setIndex] = useState(0)
  const next = ()=> setIndex((i)=> (i+1)%items.length)
  const prev = ()=> setIndex((i)=> (i-1+items.length)%items.length)

  if(!items || items.length===0) return null

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <button onClick={prev} className="text-gray-500">‹</button>
        <motion.div key={index} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="max-w-3xl text-center">
          <p className="text-gray-700">“{items[index].quote}”</p>
          <div className="mt-4 font-semibold">{items[index].author}</div>
        </motion.div>
        <button onClick={next} className="text-gray-500">›</button>
      </div>
    </div>
  )
}
