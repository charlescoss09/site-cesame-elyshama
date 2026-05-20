import React, { useState } from 'react'
import productsData from '../data/products'
import ProductCard from '../components/ProductCard'
import SectionTitle from '../components/SectionTitle'

export default function Products(){
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(productsData.map(p=>p.category)))]
  const items = filter==='All' ? productsData : productsData.filter(p=>p.category===filter)

  return (
    <div className="container py-12">
      <SectionTitle title="Produits" subtitle="Notre pharmacopée naturelle" />
      <div className="mb-4 flex gap-3">
        {categories.map(c=> <button key={c} onClick={()=>setFilter(c)} className={`px-3 py-1 rounded ${filter===c ? 'bg-cesame-green text-white':'bg-white border'}`}>{c}</button>)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
