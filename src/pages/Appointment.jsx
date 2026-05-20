import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import SectionTitle from '../components/SectionTitle'

export default function Appointment(){
  return (
    <div className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <SectionTitle title="Prendre rendez-vous" subtitle="Réservez votre consultation naturelle" />
        <p className="text-gray-600">Remplissez le formulaire pour demander une consultation. Nous vous contacterons pour confirmer.</p>
      </div>

      <div>
        <AppointmentForm />
      </div>
    </div>
  )
}
