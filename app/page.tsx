'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 60]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  const filteredProducts = products.filter(p => {
    const matchCat = !activeCategory || activeCategory === 'Wedding Collection'
      ? (!activeCategory || p.category === 'Sherwani' || p.category === activeCategory)
      : p.category === activeCategory;
    const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* BG */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1800&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
        </motion.div>

        {/* Decorative lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C8A96B]/30 to-transparent ml-12 hidden lg:block" />
        <div className="absolute right-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#C8A96B]/15 to-transparent hidden lg:block" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C8A96B]" />
              <span className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase font-light">Royal Indian Fashion House</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
              <span className="text-[#F8F4EC] block">Dress</span>
              <span className="text-[#F8F4EC] block">Like</span>
              <span className="shimmer block">Royalty</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-cormorant text-[#F8F4EC]/60 text-lg md:text-xl italic leading-relaxed mb-10 max-w-md">
              From the atelier of master craftsmen — where centuries of Rajasthani tradition are woven into every thread.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#collections"
                className="btn-gold px-8 py-3.5 font-semibold text-xs tracking-widest inline-flex items-center gap-3"
              >
                Explore Collection
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#categories" className="px-8 py-3.5 border border-[#C8A96B]/40 text-[#C8A96B] text-xs tracking-widest uppercase hover:border-[#C8A96B] hover:bg-[#C8A96B]/10 transition-all">
                View Categories
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#C8A96B]/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[#C8A96B]/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-4">Curated Ensembles</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F8F4EC] mb-4">
            Shop by <span className="text-gold-gradient">Category</span>
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-[#C8A96B] text-sm">◆</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
              className={`relative group p-6 text-left border transition-all duration-300 ${
                activeCategory === cat.name
                  ? 'border-[#C8A96B] bg-[#C8A96B]/10'
                  : 'border-[#C8A96B]/15 hover:border-[#C8A96B]/50 bg-[#1A1A1A] hover:bg-[#1E1E1E]'
              }`}
            >
              <span className="text-2xl text-[#C8A96B] mb-3 block">{cat.icon}</span>
              <h3 className="font-playfair text-[#F8F4EC] text-lg mb-1 group-hover:text-[#C8A96B] transition-colors">{cat.name}</h3>
              <p className="text-[#F8F4EC]/30 text-xs tracking-wide font-light">{cat.description}</p>
              {activeCategory === cat.name && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent" />
              )}
            </motion.button>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section id="collections" className="py-8 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-3">Signature Pieces</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#F8F4EC]">
              Featured <span className="text-gold-gradient">Collection</span>
            </h2>
          </div>
          <div className="ornament-divider max-w-xs">
            <span className="text-[#C8A96B]/40 text-xs whitespace-nowrap">
              {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>
        </motion.div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-[#C8A96B] text-4xl mb-4 block">◆</span>
            <p className="font-playfair text-[#F8F4EC]/40 text-xl">No pieces found</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="mt-4 text-[#C8A96B] text-sm hover:underline"
            >
              View all collections
            </button>
          </motion.div>
        )}
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="border border-[#C8A96B]/20 p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#1A0D10] to-[#121212]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.05)_0%,transparent_70%)]" />
            
            <span className="text-[#C8A96B] text-3xl mb-6 block">♛</span>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#F8F4EC] mb-4">
              Bespoke Tailoring Available
            </h2>
            <p className="font-cormorant italic text-[#F8F4EC]/50 text-lg mb-8 max-w-xl mx-auto">
              Have a vision? Our master craftsmen will bring your dream ensemble to life, stitch by stitch.
            </p>
            <a href="mailto:hello@rajvansh.in" className="btn-gold px-10 py-4 inline-block tracking-widest text-xs">
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
