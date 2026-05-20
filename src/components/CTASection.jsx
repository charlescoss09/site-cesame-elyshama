import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection(){
  return (
    <div className="bg-cesame-dark text-white py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Consultation en ligne gratuite</h3>
          <p className="mt-1 text-sm text-gray-100">Profitez d'un premier échange pour évaluer vos besoins.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/appointment" className="bg-cesame-gold text-cesame-dark px-6 py-3 rounded-full font-semibold">Réserver maintenant</Link>
        </div>
      </div>
    </div>
  )
}
