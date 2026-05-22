import React, { useState } from 'react'
import api from '../services/api'

export default function AppointmentForm(){
  const [form, setForm] = useState({ firstName:'', lastName:'', phone:'', email:'', type:'Consultation', date:'', time:'', message:'' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      // send to API (backend to implement)
      await api.post('/appointments', form)
      setStatus({type:'success', message:'Votre demande a été envoyée.'})
      setForm({ firstName:'', lastName:'', phone:'', email:'', type:'Consultation', date:'', time:'', message:'' })
    }catch(err){
      setStatus({type:'error', message:'Erreur lors de l’envoi. Réessayez plus tard.'})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
      {status && (
        <div className={`p-4 rounded-lg mb-6 text-sm font-semibold ${status.type==='success' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-red-50 text-red-600 border border-red-200'}`}>
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Prénom" required className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Nom" required className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Téléphone" required className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <select name="type" value={form.type} onChange={handleChange} className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-white">
          <option>Consultation</option>
          <option>Thérapie</option>
          <option>Massage</option>
          <option>Régénération</option>
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <input name="time" type="time" value={form.time} onChange={handleChange} className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optionnel)" className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition md:col-span-2" rows={4} />
      </div>

      <div className="mt-6">
        <button type="submit" className="w-full bg-secondary text-white px-6 py-4 rounded-lg font-bold hover:bg-secondary/90 transition transform hover:scale-105">
          Prendre rendez-vous
        </button>
      </div>
    </form>
  )
}
