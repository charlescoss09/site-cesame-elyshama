import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function TeamCard({member}){
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <div className="w-24 h-24 rounded-full mx-auto bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h5 className="mt-3 font-semibold">{member.name}</h5>
      <div className="text-sm text-gray-500">{member.role}</div>
      <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
      <div className="flex justify-center gap-3 mt-3 text-gray-600">
        <FaFacebookF />
        <FaInstagram />
      </div>
    </div>
  )
}
