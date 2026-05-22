import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function TeamCard({member}){
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 text-center">
        <h5 className="mt-3 font-bold text-lg text-dark">{member.name}</h5>
        <div className="text-sm text-primary font-semibold">{member.role}</div>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{member.bio}</p>
        <div className="flex justify-center gap-4 mt-5 text-primary">
          <a href="#" className="hover:text-secondary transition"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-secondary transition"><FaInstagram size={18} /></a>
        </div>
      </div>
    </div>
  )
}
