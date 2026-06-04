import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiSearch, HiArrowRight } from 'react-icons/hi'

export default function HeroSection(){
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2, ease: 'easeOut' } }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.35, ease: 'easeOut' } }
  }

  return (
    <section className="relative overflow-hidden bg-[#060f22] pt-24 pb-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_22%),radial-gradient(circle_at_right,_rgba(34,211,238,0.12),_transparent_18%)] pointer-events-none"></div>
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -right-24 top-16 w-80 h-80 rounded-full bg-slate-400/10 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={titleVariants} className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-200 shadow-sm shadow-cyan-500/10">
              <span className="block h-2 w-2 rounded-full bg-cyan-300"></span>
              Pharmacie en ligne
            </motion.div>

            <motion.h1 variants={titleVariants} className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              ONLINE PHARMACY
            </motion.h1>

            <motion.p variants={subtitleVariants} className="max-w-xl text-lg text-slate-200/90 leading-relaxed">
              Accédez à vos médicaments, conseils santé et services de pharmacie en ligne avec livraison rapide et support sécurisé.
            </motion.p>

            <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300 transition">
                Découvrir les produits
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/appointment" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/15 transition">
                Prendre rendez-vous
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_-50px_rgba(56,189,248,0.45)]">
                <p className="text-3xl font-bold text-cyan-300">24/7</p>
                <p className="mt-2 text-sm text-slate-300">Support en ligne</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_-50px_rgba(56,189,248,0.35)]">
                <p className="text-3xl font-bold text-cyan-300">Livraison</p>
                <p className="mt-2 text-sm text-slate-300">Rapide et sécurisée</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_-50px_rgba(56,189,248,0.25)]">
                <p className="text-3xl font-bold text-cyan-300">Certifié</p>
                <p className="mt-2 text-sm text-slate-300">Produits garantis</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative mx-auto w-full max-w-[420px]">
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/95 p-5 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-slate-900/90 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">YOUR LOGO</div>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-300"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-400/60"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-400/60"></div>
                </div>
              </div>

              <div className="mt-5 rounded-[1.75rem] bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-900 p-6 text-white shadow-[0_20px_90px_-40px_rgba(56,189,248,0.85)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Smart healthcare</p>
                    <p className="mt-4 text-sm text-slate-100/85">Votre pharmacie en un clic</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/15 text-lg font-bold text-white">
                    +
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200/80">Vitamine B1</p>
                    <p className="mt-3 text-2xl font-bold">Formule forte</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200/80">Soins rapides</p>
                    <p className="mt-3 text-2xl font-bold">Disponible</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-10 top-12 flex flex-col gap-5">
              <div className="relative w-28 h-36 rounded-[2rem] bg-white/90 border border-white/15 p-4 shadow-xl">
                <div className="h-4 w-14 rounded-full bg-slate-900/10 mb-5"></div>
                <div className="rounded-[1.5rem] bg-cyan-500/20 p-3 text-slate-900">
                  <p className="text-sm font-semibold">B1</p>
                  <p className="text-xs">Énergie</p>
                </div>
              </div>
              <div className="relative w-24 h-28 rounded-[2rem] bg-slate-800/90 border border-white/10 p-4 shadow-lg">
                <div className="h-3 w-12 rounded-full bg-slate-500/40 mb-4"></div>
                <div className="rounded-2xl bg-slate-900 p-3 text-white">
                  <p className="text-sm font-semibold">D</p>
                  <p className="text-xs text-slate-300">Immunité</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-10 bottom-10 flex flex-col gap-4">
              <div className="rounded-full bg-cyan-400/15 p-3 shadow-[0_20px_80px_-60px_rgba(56,189,248,0.6)]">
                <div className="h-4 w-20 rounded-full bg-white/60"></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="h-3 rounded-full bg-white/80"></span>
                <span className="h-3 rounded-full bg-white/80"></span>
                <span className="h-3 rounded-full bg-white/80"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
