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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 max-w-xl">
      {status && <div className={`p-3 rounded mb-4 ${status.type==='success' ? 'bg-green-50 text-cesame-green' : 'bg-red-50 text-red-600'}`}>{status.message}</div>}
      <div className="grid grid-cols-1 gap-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nom" required className="p-3 border rounded" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="p-3 border rounded" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Téléphone" className="p-3 border rounded" />
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Sujet" className="p-3 border rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="p-3 border rounded" rows={5} />
      </div>
      <div className="mt-4">
        <button type="submit" className="bg-cesame-green text-white px-5 py-2 rounded">Envoyer</button>
      </div>
    </form>
  )
}
