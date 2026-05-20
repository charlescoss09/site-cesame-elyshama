import React from 'react'

export default function SectionTitle({title, subtitle}){
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  )
}
