import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection(){
  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white py-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold">Prêt à commencer votre bien-être?</h3>
          <p className="mt-3 text-lg text-white/90">Une consultation gratuite pour évaluer vos besoins et trouver la solution adaptée.</p>
        </div>
        <div className="flex-shrink-0">
          <Link to="/appointment" className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition transform hover:scale-105 inline-block">
            Rendez-vous gratuit
          </Link>
        </div>
      </div>
    </div>
  )
}
