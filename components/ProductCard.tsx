'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product, formatPrice } from '@/lib/products';
import { toggleWishlist, isInWishlist } from '@/lib/wishlist';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setWishlisted(isInWishlist(product.id));
  }, [product.id]);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const added = toggleWishlist(product.id);
    setWishlisted(added);
    window.dispatchEvent(new Event('wishlist-update'));
  };

  const placeholderBgs = ['#2A1520', '#1A2030', '#1E1E2A', '#1A2520', '#201A2A', '#2A2015'];
  const bg = placeholderBgs[parseInt(product.id) % placeholderBgs.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="product-card group"
    >
      <Link href={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[3/4] bg-[#1E1E1E]" style={{ backgroundColor: bg }}>
          {!imgError ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center" style={{ backgroundColor: bg }}>
              <span className="text-[#C8A96B] text-5xl mb-3">◆</span>
              <span className="text-[#C8A96B]/40 text-xs tracking-widest uppercase">{product.category}</span>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Tag */}
          {product.tag && (
            <div className="absolute top-3 left-3">
              <span className="bg-[#5B1F2A] border border-[#C8A96B]/30 text-[#C8A96B] text-[10px] tracking-widest uppercase px-2.5 py-1">
                {product.tag}
              </span>
            </div>
          )}

          {/* Wishlist button */}
          <button
            onClick={handleWishlist}
            className={`absolute top-3 right-3 p-2.5 transition-all duration-300 ${
              wishlisted
                ? 'bg-[#5B1F2A] border border-[#C8A96B]'
                : 'bg-black/50 border border-white/20 opacity-0 group-hover:opacity-100'
            }`}
            aria-label="Toggle wishlist"
          >
            <svg
              className={`w-4 h-4 transition-colors ${wishlisted ? 'text-[#C8A96B]' : 'text-white'}`}
              fill={wishlisted ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Info */}
        <div className="pt-4 pb-2">
          <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.25em] uppercase mb-1.5">{product.category}</p>
          <h3 className="font-playfair text-[#F8F4EC] text-base font-medium leading-snug mb-2 group-hover:text-[#C8A96B] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-[#C8A96B] font-medium">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-[#F8F4EC]/25 text-sm line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
