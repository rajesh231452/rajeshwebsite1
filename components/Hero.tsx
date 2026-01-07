import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNameClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNameClick }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* COMIC HEADER STRIP */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-full max-w-6xl border-4 border-black bg-white shadow-[8px_8px_0_black] mb-8 md:mb-12 relative z-10 transform -rotate-1"
      >
        <div className="bg-blue-600 text-white flex justify-between px-4 py-2 border-b-4 border-black font-comic tracking-widest text-lg md:text-xl uppercase">
          <span className="flex items-center gap-2">
            <Star size={20} fill="#FACC15" className="text-yellow-400 stroke-black stroke-2"/> 
            SENSATIONAL PIXELS
          </span>
          <span className="font-bold">VOL. 1 • 25¢</span>
        </div>
        <div className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-yellow-400">
          <h1 className="font-comic text-6xl md:text-8xl text-black leading-none [-webkit-text-stroke:2px_white] drop-shadow-[4px_4px_0_black]">
            THE MASTER DESIGNER
          </h1>
          <div className="bg-white border-4 border-black p-2 transform rotate-2 shadow-[4px_4px_0_black]">
             <div className="border-2 border-black border-dashed p-1">
               <span className="font-comic text-xl text-black leading-none block text-center">
                 APPROVED BY THE <br/> CREATIVE AUTHORITY
               </span>
             </div>
          </div>
        </div>
      </motion.div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center relative z-10">
        
        {/* LEFT: TEXT & ACTION */}
        <div className="order-2 md:order-1 relative flex flex-col items-center md:items-start">
           
           {/* NARRATIVE BOX */}
           <motion.div 
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="bg-white border-4 border-black p-6 mb-8 shadow-[8px_8px_0_black] max-w-md transform -skew-x-3 relative"
           >
              <div className="absolute -top-4 -left-4 bg-red-600 text-white px-3 py-1 font-comic border-4 border-black text-lg transform -rotate-3">
                MEANWHILE...
              </div>
              <p className="font-comic text-2xl md:text-3xl text-black leading-none transform skew-x-3 uppercase">
                "IN A WORLD OF CHAOTIC INTERFACES, ONE VISIONARY RISES TO BRING ELEGANCE TO THE MUGGLE WEB!"
              </p>
           </motion.div>

           {/* HERO NAME */}
           <div className="relative inline-block group text-center md:text-left">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                onClick={onNameClick}
                className="cursor-pointer relative z-20"
              >
                <motion.h2 
                  className="font-comic text-8xl md:text-[10rem] text-blue-600 leading-[0.8] [-webkit-text-stroke:4px_black] drop-shadow-[8px_8px_0_black] relative z-10"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  RAJESH
                </motion.h2>
                <h2 className="font-comic text-6xl md:text-8xl text-red-600 leading-none [-webkit-text-stroke:3px_black] drop-shadow-[6px_6px_0_black] absolute -bottom-8 md:-bottom-12 right-0 z-20 transform -rotate-6 pointer-events-none">
                  CREATES!
                </h2>
              </motion.div>
              
              {/* CLICK HINT */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
                className="absolute -right-8 top-0 md:-right-24 md:top-8 bg-yellow-400 border-4 border-black p-3 rounded-full z-30 animate-bounce pointer-events-none"
              >
                <span className="font-comic text-xl text-black font-bold whitespace-nowrap">VIEW VISION!</span>
                <div className="absolute top-1/2 -left-3 w-4 h-4 bg-yellow-400 border-l-4 border-b-4 border-black transform rotate-45"></div>
              </motion.div>
           </div>
        </div>

        {/* RIGHT: COMIC PANEL IMAGE */}
        <div className="order-1 md:order-2 flex justify-center perspective-[1000px]">
           <motion.div 
             initial={{ scale: 0.8, rotate: 10, opacity: 0 }}
             animate={{ scale: 1, rotate: 3, opacity: 1 }}
             transition={{ delay: 0.4, type: "spring" }}
             whileHover={{ rotate: 0, scale: 1.05 }}
             className="relative w-72 h-80 md:w-80 md:h-96 bg-white border-[6px] border-black p-2 shadow-[16px_16px_0_black] group cursor-none"
           >
              {/* Burst Badge */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-600 text-white flex items-center justify-center font-comic text-center text-xl border-4 border-black z-30 shadow-[4px_4px_0_black] rounded-full animate-pulse">
                <span className="transform -rotate-12 leading-none">PIXEL PERFECT!</span>
              </div>

              {/* Panel Content */}
              <div className="w-full h-full border-4 border-black overflow-hidden relative grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300">
                 <img 
                   src="https://picsum.photos/seed/designer portrait/600/800" 
                   alt="Rajesh Designer" 
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Halftone Overlay */}
                 <div 
                   className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay" 
                   style={{
                     backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
                     backgroundSize: '8px 8px'
                   }}
                 ></div>
                 
                 {/* Speed Lines */}
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.4)_45%,transparent_50%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                 {/* Caption Box */}
                 <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 border-t-4 border-black p-2">
                    <p className="font-comic text-center text-lg leading-none uppercase">
                      <span className="font-bold">FIG 1.</span> THE VISIONARY AT HIS CANVAS
                    </p>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <motion.div 
        className="absolute bottom-10 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
         <div className="bg-white border-4 border-black px-6 py-2 shadow-[6px_6px_0_black] transform -rotate-1 hover:rotate-0 transition-transform">
            <span className="font-comic text-2xl flex items-center gap-2">
              BROWSE THE PORTFOLIO <ArrowRight size={24} className="stroke-[3px]" />
            </span>
         </div>
      </motion.div>
    </section>
  );
};

export default Hero;