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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 max-w-xl">
      {status && <div className={`p-3 rounded mb-4 ${status.type==='success' ? 'bg-green-50 text-cesame-green' : 'bg-red-50 text-red-600'}`}>{status.message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Prénom" required className="p-3 border rounded" />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Nom" required className="p-3 border rounded" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Téléphone" required className="p-3 border rounded" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="p-3 border rounded" />
        <select name="type" value={form.type} onChange={handleChange} className="p-3 border rounded">
          <option>Consultation</option>
          <option>Thérapie</option>
          <option>Massage</option>
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} className="p-3 border rounded" />
        <input name="time" type="time" value={form.time} onChange={handleChange} className="p-3 border rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="p-3 border rounded md:col-span-2" rows={4} />
      </div>

      <div className="mt-4">
        <button type="submit" className="bg-cesame-green text-white px-5 py-2 rounded">Envoyer</button>
      </div>
    </form>
  )
}
