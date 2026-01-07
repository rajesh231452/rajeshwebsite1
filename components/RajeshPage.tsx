import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowLeft, Star, Zap, Palette } from 'lucide-react';

interface RajeshPageProps {
  onBack: () => void;
}

const letters = "RAJESH".split("");

const generateDebris = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    angle: Math.random() * 360 * (Math.PI / 180),
    force: Math.random() * 1000 + 300,
    size: Math.random() * 100 + 50,
    widthRatio: Math.random() * 0.6 + 0.4,
    color: Math.random() > 0.6 ? '#FACC15' : Math.random() > 0.3 ? '#000000' : '#FFFFFF',
    rotation: Math.random() * 360 - 180,
    delay: 0
  }));
};

const RajeshPage: React.FC<RajeshPageProps> = ({ onBack }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExploding, setIsExploding] = useState(false);
  
  const debris = useMemo(() => generateDebris(20), []); 

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const handleBlast = () => {
    if (isExploding) return;
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1200);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    blast: {
      transition: {
        staggerChildren: 0,
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, scale: 3, rotate: -10, y: -100 },
    visible: { 
      opacity: 1, scale: 1, rotate: 0, x: 0, y: 0,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    hover: {
      scale: 1.1, y: -20, rotate: 5, color: "#FACC15",
      textShadow: "4px 4px 0px #000000",
      transition: { type: "spring", stiffness: 400 }
    },
    blast: {
      opacity: 0, scale: 0,
      transition: { duration: 0.01, ease: "easeOut" }
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden cursor-none" onMouseMove={handleMouseMove} onClick={handleBlast}>
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        style={{
          background: "linear-gradient(135deg, #FF0055, #0099FF, #FFCC00, #9900FF)",
          backgroundSize: "200% 200%"
        }}
      />

      <AnimatePresence>
        {isExploding && (
          <>
            <motion.div className="absolute inset-0 bg-white z-20 pointer-events-none" initial={{ opacity: 1 }} animate={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
            {debris.map((d) => (
              <motion.div
                key={d.id}
                className="absolute left-1/2 top-1/2 z-30 pointer-events-none border-2 border-black"
                initial={{ x: 0, y: 0, scale: 0.5, opacity: 1 }}
                animate={{ 
                  x: Math.cos(d.angle) * d.force,
                  y: Math.sin(d.angle) * d.force,
                  rotate: d.rotation, scale: 1, opacity: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: d.delay }}
                style={{
                  width: d.size * d.widthRatio, height: d.size, backgroundColor: d.color, boxShadow: '4px 4px 0 rgba(0,0,0,1)'
                }}
              />
            ))}
            <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[60px] border-yellow-300 z-10 pointer-events-none" initial={{ width: 0, height: 0, opacity: 1 }} animate={{ width: "150vmax", height: "150vmax", opacity: 0, borderWidth: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} />
          </>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)', backgroundSize: '16px 16px' }} />
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.6), transparent 70%)` }} />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          className="flex gap-1 md:gap-3 relative pointer-events-auto cursor-pointer"
          variants={containerVariants} initial="hidden" animate={isExploding ? "blast" : "visible"} whileHover={!isExploding ? "hover" : undefined}
          onClick={(e) => { e.stopPropagation(); handleBlast(); }}
        >
          {letters.map((char, index) => (
            <motion.div key={index} custom={index} variants={letterVariants} className="font-comic font-black text-[6rem] md:text-[13rem] leading-none text-white select-none filter drop-shadow-[8px_8px_0_rgba(0,0,0,1)]" style={{ WebkitTextStroke: "5px #000000", paintOrder: "stroke fill" }}>
              {char}
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: -3 }} transition={{ delay: 1.2, type: "spring" }} className="mt-12 md:mt-20 text-center relative z-20">
          <div className="inline-block bg-yellow-400 border-4 border-black p-4 shadow-[8px_8px_0_black] transform skew-x-[-6deg]">
            <h2 className="font-comic text-2xl md:text-4xl text-black uppercase tracking-widest flex items-center gap-4 transform skew-x-[6deg]">
              <Palette className="fill-black w-8 h-8" />
              THE DESIGN DEITY
              <Palette className="fill-black w-8 h-8" />
            </h2>
          </div>
          <p className="mt-4 font-comic text-white text-2xl tracking-wide text-stroke-black drop-shadow-[2px_2px_0_black]">
            ( SMASH NAME TO BLAST! )
          </p>
        </motion.div>

        <motion.button className="mt-16 group flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-comic text-2xl tracking-wider border-4 border-black hover:bg-white hover:text-blue-600 transition-all duration-200 interactive shadow-[8px_8px_0_black] pointer-events-auto" onClick={(e) => { e.stopPropagation(); onBack(); }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
          <ArrowLeft className="w-8 h-8 stroke-[3]" />
          <span>RETURN TO STUDIO</span>
        </motion.button>
      </div>

      <motion.div className="fixed top-0 left-0 w-24 h-24 border-4 border-white/90 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50 mix-blend-exclusion" style={{ x: mousePosition.x, y: mousePosition.y }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute w-full h-[2px] bg-white/50"></div>
        <div className="absolute h-full w-[2px] bg-white/50"></div>
      </motion.div>
    </div>
  );
};

export default RajeshPage;