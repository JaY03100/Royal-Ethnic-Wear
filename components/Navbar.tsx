'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/products';
import { getWishlist } from '@/lib/wishlist';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistCount, setWishlistCount] = useState(0);
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setWishlistCount(getWishlist().length);
    const handler = () => setWishlistCount(getWishlist().length);
    window.addEventListener('wishlist-update', handler);
    return () => window.removeEventListener('wishlist-update', handler);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 100);
  }, [searchOpen]);

  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); return; }
    const q = searchQuery.toLowerCase();
    setSearchResults(products.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ));
  }, [searchQuery]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="font-playfair text-xl font-bold text-gold-gradient tracking-widest uppercase">Rajvansh</span>
          <span className="font-cormorant text-xs tracking-[0.35em] text-[#C8A96B] opacity-80 uppercase">Atelier</span>
        </Link>

        {/* Center tagline */}
        <div className="hidden md:flex flex-col items-center">
          <span className="font-cormorant italic text-sm text-[#C8A96B] opacity-60 tracking-wider">Crafted for Royal Occasions</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 text-[#C8A96B] hover:text-[#E2C88A] transition-colors"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Wishlist */}
          <Link href="/wishlist" className="relative p-2 text-[#C8A96B] hover:text-[#E2C88A] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#5B1F2A] border border-[#C8A96B] text-[10px] flex items-center justify-center text-[#C8A96B] font-semibold">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center pt-24 px-4"
            onClick={(e) => { if (e.target === e.currentTarget) { setSearchOpen(false); setSearchQuery(''); } }}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="w-full max-w-2xl"
            >
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C8A96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search by name or category..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="input-luxury w-full pl-12 pr-12 py-4 rounded-none text-lg font-light"
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C8A96B] hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 border border-[#C8A96B]/20 bg-[#1E1E1E]"
                >
                  {searchResults.map(p => (
                    <button
                      key={p.id}
                      onClick={() => { router.push(`/product/${p.id}`); setSearchOpen(false); setSearchQuery(''); }}
                      className="w-full flex items-center gap-4 p-4 hover:bg-[#C8A96B]/10 transition-colors text-left border-b border-[#C8A96B]/10 last:border-none"
                    >
                      <div className="w-12 h-12 bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(${p.image})`}} />
                      <div>
                        <p className="font-playfair text-[#F8F4EC] text-sm">{p.name}</p>
                        <p className="text-[#C8A96B] text-xs font-light tracking-wider">{p.category}</p>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
              {searchQuery && searchResults.length === 0 && (
                <p className="text-center text-[#C8A96B]/50 mt-6 font-cormorant italic text-lg">No results found for "{searchQuery}"</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
