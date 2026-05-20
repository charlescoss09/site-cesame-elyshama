import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton(){
  const phone = '242XXXXXXXXX'
  const text = encodeURIComponent('Bonjour, j\'aimerais en savoir plus sur vos services.')
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <a href={href} target="_blank" rel="noreferrer" className="fixed right-4 bottom-24 z-50 bg-cesame-green p-3 rounded-full shadow-lg text-white">
      <FaWhatsapp size={20} />
    </a>
  )
}
