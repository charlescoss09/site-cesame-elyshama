import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  const links = [
    {label: 'Accueil', href: '/'},
    {label: 'À propos', href: '/about'},
    {label: 'Services', href: '/services'},
    {label: 'Produits', href: '/products'},
    {label: 'Rendez-vous', href: '/appointment'},
    {label: 'Contact', href: '/contact'}
  ]

  return (
    <header className={`w-full top-0 z-50 transition-all duration-300 sticky ${scrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container flex items-center justify-between py-3 md:py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} className="w-11 h-11 rounded-full bg-gradient-to-br from-cesame-green to-cesame-dark shadow-md flex items-center justify-center text-white font-bold text-sm">
            CE
          </motion.div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm">CESAME</div>
            <div className="text-xs text-gray-500">ELYSHAMA</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link=> (
            <Link key={link.href} to={link.href} className="text-gray-700 text-sm font-medium hover:text-cesame-green transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/appointment" className="bg-cesame-green text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm font-semibold">
            Consultation gratuite
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-1" onClick={()=>setOpen(v=>!v)} aria-label="menu">
          {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-4 gap-3">
            {links.map(link=> (
              <Link key={link.href} to={link.href} onClick={()=>setOpen(false)} className="text-gray-700 px-3 py-2 hover:text-cesame-green transition-colors">
                {link.label}
              </Link>
            ))}
            <Link to="/appointment" onClick={()=>setOpen(false)} className="mt-2 bg-cesame-green text-white px-4 py-2 rounded-full text-center font-semibold">
              Consultation gratuite
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
