import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
        {/* Branding */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">🏥</div>
            <div>
              <div className="font-bold text-lg">CESAME</div>
              <div className="text-xs text-gray-300">ELYSHAMA</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Approche holistique et naturelle pour accompagner votre bien-être en toute sérénité.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold mb-4 text-white">Navigation</h5>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/" className="hover:text-primary transition">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
            <li><Link to="/products" className="hover:text-primary transition">Produits</Link></li>
            <li><Link to="/appointment" className="hover:text-primary transition">Rendez-vous</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-semibold mb-4 text-white">Services</h5>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-primary transition">Consultation gratuite</a></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            <li><a href="#" className="hover:text-primary transition">Ressources</a></li>
            <li><a href="#" className="hover:text-primary transition">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold mb-4 text-white">Contact</h5>
          <p className="text-sm text-gray-400">
            <span className="block font-semibold text-primary mb-1">Téléphone</span>
            +242 XXXXXXXXX
          </p>
          <p className="text-sm text-gray-400 mt-4">
            <span className="block font-semibold text-primary mb-1">Email</span>
            contact@cesame-elyshama.org
          </p>
          <div className="flex gap-4 mt-5 text-gray-400">
            <a href="#" className="hover:text-primary transition"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-primary transition"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-primary transition"><FaYoutube size={18} /></a>
            <a href="#" className="hover:text-primary transition"><FaTiktok size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} CESAME ELYSHAMA. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition">Mentions légales</a>
          <a href="#" className="hover:text-primary transition">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
