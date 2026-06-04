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
    {label: 'Services', href: '/services'},
    {label: 'Produits', href: '/products'},
    {label: 'Rendez-vous', href: '/appointment'},
    {label: 'Contact', href: '/contact'}
  ]

  return (
    <header className={`w-full top-0 z-50 transition-all duration-300 sticky ${scrolled ? 'shadow-2xl bg-[#060f22]/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 shadow-lg flex items-center justify-center text-white font-bold text-sm">
            🏥
          </motion.div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm text-white">CESAME</div>
            <div className="text-xs text-cyan-200 font-semibold">ELYSHAMA</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(link=> (
            <Link key={link.href} to={link.href} className="text-slate-200 text-sm font-medium hover:text-cyan-300 transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/appointment" className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-cyan-500/20 hover:bg-white/15 transition-all duration-300">
            Rendez-vous
          </Link>
        </div>

        <button className="md:hidden p-2 text-white" onClick={()=>setOpen(v=>!v)} aria-label="menu">
          {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="md:hidden bg-[#061523] shadow-2xl border-t border-white/10">
          <div className="flex flex-col px-4 py-4 gap-3">
            {links.map(link=> (
              <Link key={link.href} to={link.href} onClick={()=>setOpen(false)} className="text-slate-200 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors">
                {link.label}
              </Link>
            ))}
            <Link to="/appointment" onClick={()=>setOpen(false)} className="mt-2 rounded-full bg-cyan-400 px-4 py-2 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
              Rendez-vous
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
