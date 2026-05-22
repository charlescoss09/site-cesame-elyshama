import React, { useState } from 'react'
import api from '../services/api'

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await api.post('/contact', form)
      setStatus({type:'success', message:'Message envoyé. Nous vous répondrons bientôt.'})
      setForm({ name:'', email:'', phone:'', subject:'', message:'' })
    }catch(e){
      setStatus({type:'error', message:'Erreur lors de l’envoi.'})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
      {status && (
        <div className={`p-4 rounded-lg mb-6 text-sm font-semibold ${status.type==='success' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-red-50 text-red-600 border border-red-200'}`}>
          {status.message}
        </div>
      )}
      <div className="grid grid-cols-1 gap-5">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" required className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Votre email" required className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Votre téléphone (optionnel)" className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Sujet" required className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Votre message" required className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" rows={5} />
      </div>
      <div className="mt-6">
        <button type="submit" className="w-full bg-secondary text-white px-6 py-4 rounded-lg font-bold hover:bg-secondary/90 transition transform hover:scale-105">
          Envoyer le message
        </button>
      </div>
    </form>
  )
}
