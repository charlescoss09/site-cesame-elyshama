import React from 'react'
import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'

export default function Contact(){
  return (
    <div className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <SectionTitle title="Contactez-nous" subtitle="Nous sommes là pour vous aider" />
        <p className="text-gray-600">Coordonnées, horaires et emplacement seront affichés ici.</p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}
