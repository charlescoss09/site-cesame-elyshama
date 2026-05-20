import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-cesame-dark text-white pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
        {/* Branding */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cesame-gold flex items-center justify-center text-cesame-dark font-bold text-lg">CE</div>
            <div>
              <div className="font-bold text-lg">CESAME ELYSHAMA</div>
              <div className="text-xs text-gray-300">Santé & Bien-être</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Approche holistique et naturelle pour accompagner votre bien-être en toute sérénité et confiance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold mb-4">Navigation</h5>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/" className="hover:text-cesame-gold transition">Accueil</Link></li>
            <li><Link to="/about" className="hover:text-cesame-gold transition">À propos</Link></li>
            <li><Link to="/services" className="hover:text-cesame-gold transition">Services</Link></li>
            <li><Link to="/products" className="hover:text-cesame-gold transition">Produits</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-semibold mb-4">Services</h5>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/appointment" className="hover:text-cesame-gold transition">Rendez-vous</Link></li>
            <li><Link to="/contact" className="hover:text-cesame-gold transition">Contact</Link></li>
            <li><a href="#" className="hover:text-cesame-gold transition">Consultation gratuite</a></li>
            <li><a href="#" className="hover:text-cesame-gold transition">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold mb-4">Contact</h5>
          <p className="text-sm text-gray-400">
            <span className="block font-semibold text-white">Téléphone</span>
            +242 XXXXXXXXX
          </p>
          <p className="text-sm text-gray-400 mt-3">
            <span className="block font-semibold text-white">Email</span>
            contact@cesame-elyshama.org
          </p>
          <div className="flex gap-3 mt-4 text-gray-400">
            <a href="#" className="hover:text-cesame-gold transition"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-cesame-gold transition"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-cesame-gold transition"><FaYoutube size={18} /></a>
            <a href="#" className="hover:text-cesame-gold transition"><FaTiktok size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} CESAME ELYSHAMA. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cesame-gold transition">Mentions légales</a>
          <a href="#" className="hover:text-cesame-gold transition">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
