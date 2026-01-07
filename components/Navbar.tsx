import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'THE JOURNEY', href: '#journey' },
    { name: 'MENAGERIE', href: '#skills' },
    { name: 'THE ARCHIVES', href: '#projects' },
    { name: 'HOWLERS', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-yellow-400 border-b-4 border-black shadow-[0_4px_0_0_#000]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 border-2 border-black p-1 transform -rotate-3 shadow-[2px_2px_0_0_#000]">
            <span className="font-comic text-white text-xl md:text-2xl px-2 leading-none">THE CHOSEN DEV</span>
          </div>
          <div className="hidden md:block">
             <Star className="text-black fill-white animate-spin-slow" size={20} />
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group px-2 py-1"
              whileHover={{ scale: 1.1, rotate: -2 }}
            >
              <span className="font-comic text-xl text-black relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-white border-2 border-black opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all -z-0 shadow-[4px_4px_0_0_#7E0001]"></div>
              {/* Halftone pop on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none -z-0 bg-halftone-pattern" style={{ backgroundSize: '4px 4px' }}></div>
            </motion.a>
          ))}
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          className="md:hidden bg-white border-2 border-black p-2 shadow-[4px_4px_0_0_#000] interactive"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-16 bg-parchment z-50 p-8 border-l-8 border-black shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="bg-yellow-400 border-4 border-black p-4 transform -rotate-2 mb-4">
                <h2 className="font-comic text-3xl text-black">QUICK NAVIGATION!</h2>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-comic text-4xl text-black border-b-4 border-black/10 pb-2 hover:text-crimson transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <Star className="text-gold fill-gold" />
                </a>
              ))}
              
              <div className="mt-auto border-4 border-black p-6 bg-white relative">
                 <div className="absolute -top-4 -left-2 bg-crimson text-white px-2 py-1 font-comic text-lg">PRO TIP!</div>
                 <p className="font-typewriter text-sm">Use your wand (cursor) to explore the interactive panels below for hidden secrets.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Action Strip (Thin bottom bar) */}
      <div className="h-2 bg-crimson border-t-2 border-black flex overflow-hidden">
        <div className="flex-1 bg-halftone-pattern opacity-30" style={{ backgroundSize: '8px 8px' }}></div>
      </div>
    </nav>
  );
};

export default Navbar;