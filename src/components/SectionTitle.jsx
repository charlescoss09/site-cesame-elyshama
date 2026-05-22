import React from 'react'

export default function SectionTitle({title, subtitle}){
  return (
    <div className="mb-12 text-center">
      <h3 className="text-4xl font-bold text-dark inline-block pb-3 border-b-4 border-secondary">
        {title}
      </h3>
      {subtitle && <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  )
}
