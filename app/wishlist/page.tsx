'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { products, formatPrice } from '@/lib/products';
import { getWishlist, removeFromWishlist } from '@/lib/wishlist';

export default function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  useEffect(() => {
    setWishlistIds(getWishlist());
  }, []);

  const wishlistProducts = products.filter(p => wishlistIds.includes(p.id));

  const handleRemove = (id: string) => {
    removeFromWishlist(id);
    setWishlistIds(getWishlist());
    window.dispatchEvent(new Event('wishlist-update'));
  };

  return (
    <div className="min-h-screen bg-[#121212] pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-4">Your Curated</p>
          <h1 className="font-playfair text-4xl md:text-5xl text-[#F8F4EC] mb-2">
            Wish <span className="text-gold-gradient">List</span>
          </h1>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-[#C8A96B] text-sm">◆</span>
          </div>
        </motion.div>

        {wishlistProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-20"
          >
            <span className="text-[#C8A96B]/30 text-6xl mb-8 block">♡</span>
            <p className="font-playfair text-[#F8F4EC]/30 text-2xl mb-4">Your wishlist is empty</p>
            <p className="text-[#F8F4EC]/20 font-light mb-8">Save pieces you love for later</p>
            <Link href="/" className="btn-gold px-8 py-3 inline-block text-xs tracking-widest">
              Browse Collection
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {wishlistProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="aspect-[3/4] overflow-hidden mb-4 bg-[#1A1A1A]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-[#1A1A1A]"><span class="text-[#C8A96B] text-4xl">◆</span></div>`;
                      }}
                    />
                  </div>
                  <p className="text-[#C8A96B]/50 text-[10px] tracking-widest uppercase mb-1">{product.category}</p>
                  <h3 className="font-playfair text-[#F8F4EC] group-hover:text-[#C8A96B] transition-colors mb-1">{product.name}</h3>
                  <p className="text-[#C8A96B]">{formatPrice(product.price)}</p>
                </Link>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-3 right-3 p-2 bg-black/60 border border-white/10 text-white/50 hover:text-red-400 hover:border-red-400/30 transition-all"
                  aria-label="Remove from wishlist"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
