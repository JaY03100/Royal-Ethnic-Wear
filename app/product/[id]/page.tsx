'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { products, formatPrice } from '@/lib/products';
import { toggleWishlist, isInWishlist } from '@/lib/wishlist';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [wishlisted, setWishlisted] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [notifyMsg, setNotifyMsg] = useState('');

  useEffect(() => {
    if (product) setWishlisted(isInWishlist(product.id));
  }, [product]);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-playfair text-[#F8F4EC]/40 text-2xl mb-4">Product not found</p>
        <Link href="/" className="text-[#C8A96B] hover:underline">Return home</Link>
      </div>
    </div>
  );

  const handleWishlist = () => {
    const added = toggleWishlist(product.id);
    setWishlisted(added);
    window.dispatchEvent(new Event('wishlist-update'));
    setNotifyMsg(added ? 'Added to wishlist' : 'Removed from wishlist');
    setTimeout(() => setNotifyMsg(''), 2000);
  };

  const handleEnquire = () => {
    if (!selectedSize) {
      setNotifyMsg('Please select a size first');
      setTimeout(() => setNotifyMsg(''), 2000);
      return;
    }
    setNotifyMsg(`Enquiry sent for size ${selectedSize}!`);
    setTimeout(() => setNotifyMsg(''), 3000);
  };

  const placeholderBgs: Record<string, string> = { '1': '#2A1520', '2': '#1A2030', '3': '#1E1E2A', '4': '#1A2520', '5': '#201A2A', '6': '#2A2015' };

  return (
    <div className="min-h-screen bg-[#121212] pt-24">
      {/* Notification */}
      {notifyMsg && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1E1E1E] border border-[#C8A96B]/40 text-[#C8A96B] px-6 py-3 text-sm tracking-wider"
        >
          {notifyMsg}
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-xs text-[#F8F4EC]/30 mb-10 tracking-wider"
        >
          <Link href="/" className="hover:text-[#C8A96B] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/" className="hover:text-[#C8A96B] transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-[#C8A96B]/60">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[#C8A96B]/10" style={{ backgroundColor: placeholderBgs[product.id] }}>
              {!imgError ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center" style={{ backgroundColor: placeholderBgs[product.id] }}>
                  <span className="text-[#C8A96B] text-8xl mb-4">◆</span>
                  <span className="text-[#C8A96B]/50 text-sm tracking-widest uppercase">{product.category}</span>
                </div>
              )}
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#5B1F2A] border border-[#C8A96B]/40 text-[#C8A96B] text-[10px] tracking-widest uppercase px-3 py-1.5">
                    {product.tag}
                  </span>
                </div>
              )}
              {/* Corner ornaments */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C8A96B]/30" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#C8A96B]/30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#C8A96B]/30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C8A96B]/30" />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col"
          >
            <p className="text-[#C8A96B]/60 text-xs tracking-[0.35em] uppercase mb-3">{product.category}</p>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#F8F4EC] font-semibold leading-tight mb-6">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#C8A96B] text-2xl font-medium">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-[#F8F4EC]/25 line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="text-green-400/70 text-sm">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                  </span>
                </>
              )}
            </div>

            <div className="w-full h-px bg-gradient-to-r from-[#C8A96B]/20 to-transparent mb-8" />

            {/* Description */}
            <p className="text-[#F8F4EC]/60 font-light leading-relaxed mb-8 text-sm">
              {product.description}
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#1A1A1A] border border-[#C8A96B]/10 p-4">
                <p className="text-[#C8A96B] text-[10px] tracking-[0.3em] uppercase mb-1.5">Material</p>
                <p className="text-[#F8F4EC]/70 text-sm font-light">{product.material}</p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#C8A96B]/10 p-4">
                <p className="text-[#C8A96B] text-[10px] tracking-[0.3em] uppercase mb-1.5">Occasion</p>
                <p className="text-[#F8F4EC]/70 text-sm font-light">{product.occasion}</p>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#C8A96B] text-xs tracking-[0.3em] uppercase">Select Size</p>
                {selectedSize && <span className="text-[#C8A96B]/50 text-xs">Selected: {selectedSize}</span>}
              </div>
              <div className="flex gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                    className={`w-12 h-12 text-sm font-medium border transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-[#C8A96B] bg-[#C8A96B]/20 text-[#C8A96B]'
                        : 'border-[#C8A96B]/20 text-[#F8F4EC]/50 hover:border-[#C8A96B]/50 hover:text-[#F8F4EC]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-4">
              <button
                onClick={handleEnquire}
                className="btn-gold flex-1 py-4 text-xs tracking-widest font-semibold"
              >
                Enquire Now
              </button>
              <button
                onClick={handleWishlist}
                className={`py-4 px-5 border transition-all duration-300 ${
                  wishlisted
                    ? 'border-[#C8A96B] bg-[#C8A96B]/10 text-[#C8A96B]'
                    : 'border-[#C8A96B]/30 text-[#C8A96B]/60 hover:border-[#C8A96B] hover:text-[#C8A96B]'
                }`}
                aria-label="Toggle wishlist"
              >
                <svg className="w-5 h-5" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <h2 className="font-playfair text-3xl text-[#F8F4EC] mb-10">
            You May Also <span className="text-gold-gradient">Like</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((p, i) => (
              <Link key={p.id} href={`/product/${p.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="product-card group"
                >
                  <div className="aspect-[3/4] overflow-hidden mb-3 bg-[#1A1A1A]" style={{ backgroundColor: placeholderBgs[p.id] }}>
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <p className="font-playfair text-sm text-[#F8F4EC]/70 group-hover:text-[#C8A96B] transition-colors">{p.name}</p>
                  <p className="text-[#C8A96B] text-sm mt-1">{formatPrice(p.price)}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
