import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowLeft, Star, Zap } from 'lucide-react';

interface RajeshPageProps {
  onBack: () => void;
}

const letters = "RAJESH".split("");

// Generate debris data - Big Chunks Edition
const generateDebris = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    angle: Math.random() * 360 * (Math.PI / 180),
    force: Math.random() * 1000 + 300, // High force to move big objects
    size: Math.random() * 100 + 50, // Massive particles: 50px to 150px
    widthRatio: Math.random() * 0.6 + 0.4, // Blocky shapes
    color: Math.random() > 0.6 ? '#FACC15' : Math.random() > 0.3 ? '#000000' : '#FFFFFF', // Yellow, Black, White
    rotation: Math.random() * 360 - 180, // Slower, heavy spin
    delay: 0
  }));
};

const RajeshPage: React.FC<RajeshPageProps> = ({ onBack }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExploding, setIsExploding] = useState(false);
  
  // Memoize debris so they are consistent per render. Reduced count, increased size.
  const debris = useMemo(() => generateDebris(20), []); 

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const handleBlast = () => {
    if (isExploding) return;
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1200); // Reassemble quicker
  };

  // Comic "Slam" & Blast variants
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
    hidden: { 
      opacity: 0, 
      scale: 3, 
      rotate: -10,
      y: -100 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      x: 0,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    },
    hover: {
      scale: 1.1,
      y: -20,
      rotate: 5,
      color: "#FACC15", // Yellow-400
      textShadow: "4px 4px 0px #000000",
      transition: { type: "spring", stiffness: 400 }
    },
    blast: {
      opacity: 0,
      scale: 0,
      transition: { 
        duration: 0.01, 
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[60] overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onClick={handleBlast}
    >
      {/* VIBRANT ANIMATED BACKGROUND - Pop Art Gradient */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity
        }}
        style={{
          background: "linear-gradient(135deg, #FF0055, #0099FF, #FFCC00, #9900FF)",
          backgroundSize: "200% 200%"
        }}
      />

      {/* SHOCKWAVE & DEBRIS EFFECT */}
      <AnimatePresence>
        {isExploding && (
          <>
            {/* White Flash */}
            <motion.div 
              className="absolute inset-0 bg-white z-20 pointer-events-none"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Massive Debris Explosion */}
            {debris.map((d) => (
              <motion.div
                key={d.id}
                className="absolute left-1/2 top-1/2 z-30 pointer-events-none border-2 border-black"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0.5, 
                  opacity: 1 
                }}
                animate={{ 
                  x: Math.cos(d.angle) * d.force,
                  y: Math.sin(d.angle) * d.force,
                  rotate: d.rotation,
                  scale: 1,
                  opacity: 0
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: d.delay 
                }}
                style={{
                  width: d.size * d.widthRatio,
                  height: d.size,
                  backgroundColor: d.color,
                  boxShadow: '4px 4px 0 rgba(0,0,0,1)' // Hard shadow for big chunks
                }}
              />
            ))}

            {/* Expanding Action Lines / Ring */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[60px] border-yellow-300 z-10 pointer-events-none"
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ width: "150vmax", height: "150vmax", opacity: 0, borderWidth: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </>
        )}
      </AnimatePresence>

      {/* HALFTONE DOTS PATTERN (Comic Style) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* SPOTLIGHT EFFECT */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.6), transparent 70%)`,
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        
        {/* Floating Stars (Ambient) */}
        {!isExploding && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{ 
              duration: Math.random() * 2 + 2, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          >
            <Star className="text-yellow-300 fill-yellow-300 w-4 h-4" />
          </motion.div>
        ))}

        {/* The Name Animation */}
        <motion.div 
          className="flex gap-1 md:gap-3 relative pointer-events-auto cursor-pointer"
          variants={containerVariants}
          initial="hidden"
          animate={isExploding ? "blast" : "visible"}
          whileHover={!isExploding ? "hover" : undefined}
          onClick={(e) => {
            e.stopPropagation();
            handleBlast();
          }}
        >
          {letters.map((char, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={letterVariants}
              className="font-comic font-black text-[6rem] md:text-[13rem] leading-none text-white select-none filter drop-shadow-[8px_8px_0_rgba(0,0,0,1)]"
              style={{
                WebkitTextStroke: "5px #000000",
                paintOrder: "stroke fill"
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>

        {/* Subtitle / Caption Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ delay: 1.2, type: "spring" }}
          className="mt-12 md:mt-20 text-center relative z-20"
        >
          <div className="inline-block bg-yellow-400 border-4 border-black p-4 shadow-[8px_8px_0_black] transform skew-x-[-6deg]">
            <h2 className="font-comic text-2xl md:text-4xl text-black uppercase tracking-widest flex items-center gap-4 transform skew-x-[6deg]">
              <Zap className="fill-black w-8 h-8" />
              THE TECH TITAN
              <Zap className="fill-black w-8 h-8" />
            </h2>
          </div>
          <p className="mt-4 font-comic text-white text-2xl tracking-wide text-stroke-black drop-shadow-[2px_2px_0_black]">
            ( SMASH NAME TO BLAST! )
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.button
          className="mt-16 group flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-comic text-2xl tracking-wider border-4 border-black hover:bg-white hover:text-blue-600 transition-all duration-200 interactive shadow-[8px_8px_0_black] pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ 
            translateY: -4, 
            translateX: -4, 
            boxShadow: "12px 12px 0 #000" 
          }}
          whileTap={{ 
            translateY: 0, 
            translateX: 0, 
            boxShadow: "0px 0px 0 #000" 
          }}
        >
          <ArrowLeft className="w-8 h-8 stroke-[3]" />
          <span>RETURN TO HQ</span>
        </motion.button>
      </div>

      {/* Custom Mouse Cursor for this page */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 border-4 border-white/90 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50 mix-blend-exclusion"
        style={{ x: mousePosition.x, y: mousePosition.y }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
        {/* Crosshair lines */}
        <div className="absolute w-full h-[2px] bg-white/50"></div>
        <div className="absolute h-full w-[2px] bg-white/50"></div>
      </motion.div>
    </div>
  );
};

export default RajeshPage;