import React from 'react'
import { FaTiktok, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const items = [
  {icon:<FaTiktok />, href:'#'},
  {icon:<FaFacebookF />, href:'#'},
  {icon:<FaInstagram />, href:'#'},
  {icon:<FaYoutube />, href:'#'}
]

export default function SocialFloatingButtons(){
  return (
    <div className="fixed left-4 bottom-24 z-40 flex flex-col gap-3">
      {items.map((it, i)=> (
        <a key={i} href={it.href} target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full shadow text-gray-700">{it.icon}</a>
      ))}
    </div>
  )
}
