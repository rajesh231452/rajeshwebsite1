import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { PenTool, ExternalLink, Star, Eye } from 'lucide-react';

const projects: Project[] = [
  {
    id: "1",
    title: "Diagon Alley UX",
    tech: ["Figma", "User Testing", "Motion"],
    description: "Revitalized the shopping journey for magical ingredients. Increased vault-conversion rate by 40% through better hierarchy.",
    image: "https://picsum.photos/seed/design1/400/600"
  },
  {
    id: "2",
    title: "Prophet Redesign",
    tech: ["Branding", "Accessibility", "UX"],
    description: "A modern visual identity for the wizarding world's leading newspaper. Ensured all enchanted images are high-contrast friendly.",
    image: "https://picsum.photos/seed/design2/400/600"
  },
  {
    id: "3",
    title: "Nimbus Interface",
    tech: ["AR Design", "HUD", "Ergonomics"],
    description: "Heads-up display for high-speed broom travel. Focused on reducing cognitive load during Quidditch maneuvers.",
    image: "https://picsum.photos/seed/design3/400/600"
  },
  {
    id: "4",
    title: "Gringotts Design System",
    tech: ["Design Tokens", "React", "Atomic"],
    description: "A scalable component library for the goblin-run banking empire. Unified 50+ magical portals under one visual language.",
    image: "https://picsum.photos/seed/design4/400/600"
  }
];

const ComicCover: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[2/3] perspective-[1200px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-500"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 backface-hidden bg-[#e0d6c2] border-[4px] border-ink shadow-[10px_10px_0_0_rgba(26,26,26,0.8)] flex flex-col overflow-hidden z-10">
           <div className="h-10 bg-crimson border-b-4 border-ink flex justify-between items-center px-2 z-20">
              <div className="flex flex-col leading-none">
                 <span className="text-[8px] font-bold text-white font-sans uppercase">Aesthetic Comics Grp.</span>
                 <span className="text-[10px] font-bold text-gold font-sans uppercase tracking-widest">VISUAL VIRTUE</span>
              </div>
              <div className="bg-parchment border-2 border-ink rounded-full w-8 h-8 flex flex-col items-center justify-center leading-none shadow-sm">
                <span className="text-[8px] font-bold">NOV</span>
                <span className="text-[10px] font-bold">#{index + 1}</span>
              </div>
           </div>
           
           <div className="flex-1 relative bg-halftone overflow-hidden group-hover:contrast-125 transition-all duration-500">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none"></div>
              <div className="absolute top-2 right-2 w-10 h-14 bg-white border-2 border-ink flex flex-col items-center justify-center p-1 shadow-md opacity-90 rotate-3">
                 <span className="text-[6px] font-bold text-center leading-tight">APPROVED BY THE</span>
                 <Eye size={12} className="text-gold fill-gold stroke-ink my-1" />
                 <span className="text-[6px] font-bold text-center leading-tight">UX COUNCIL</span>
              </div>
              <div className="absolute bottom-24 left-2 z-20">
                 <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 rotate-12 scale-110"></div>
                    <div className="absolute inset-0 bg-red-500 -rotate-12 scale-110"></div>
                    <div className="relative bg-white border-2 border-ink px-2 py-1 font-comic text-xs font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] -rotate-6">
                      IT SHINES!
                    </div>
                 </div>
              </div>
           </div>

           <div className="h-auto min-h-[80px] bg-white border-t-4 border-ink p-2 relative z-20">
              <h3 className="font-comic text-3xl md:text-4xl leading-[0.85] text-ink uppercase absolute -top-8 left-2 drop-shadow-[2px_2px_0_#fff] text-stroke-sm stroke-white">
                <span className="bg-white px-1 shadow-[4px_4px_0_0_#000] border border-ink transform -skew-x-6 inline-block">
                  {project.title}
                </span>
              </h3>
              <div className="absolute bottom-1 right-2 flex flex-col items-end">
                 <div className="flex gap-[1px] h-4 opacity-70">
                    {[...Array(15)].map((_,i) => <div key={i} className="w-1 bg-ink h-full" />)}
                 </div>
                 <span className="text-[8px] font-mono">CASE-ST-00{index+1}</span>
              </div>
           </div>
        </div>

        <div className="absolute inset-0 backface-hidden bg-[#F5E6BE] border-[4px] border-ink shadow-[-10px_10px_0_0_rgba(26,26,26,0.5)] p-6 flex flex-col z-0" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-20 pointer-events-none"></div>
           <div className="border-b-2 border-dashed border-ink pb-2 mb-4 text-center">
              <h4 className="font-comic text-xl text-crimson uppercase tracking-widest">UX Case Study</h4>
           </div>
           <div className="relative bg-white border-2 border-ink p-3 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] mb-6">
             <p className="font-typewriter text-xs md:text-sm leading-relaxed text-ink">
               "{project.description}"
             </p>
             <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b-2 border-r-2 border-ink transform rotate-45"></div>
           </div>
           <div className="mb-auto">
              <div className="font-bold font-comic text-lg mb-2 flex items-center gap-2">
                <Star size={16} className="fill-gold text-ink" />
                <span>DESIGN TOOLS:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-bold font-typewriter border border-ink px-2 py-1 bg-white hover:bg-gold transition-colors cursor-help">
                    {t}
                  </span>
                ))}
              </div>
           </div>
           <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="flex items-center justify-center gap-2 bg-ink text-white py-2 font-bold font-comic uppercase border-2 border-transparent hover:bg-white hover:text-ink hover:border-ink transition-colors shadow-md interactive">
                <PenTool size={16} /> Brief
              </button>
              <button className="flex items-center justify-center gap-2 bg-crimson text-white py-2 font-bold font-comic uppercase border-2 border-transparent hover:bg-white hover:text-crimson hover:border-crimson transition-colors shadow-md interactive">
                <ExternalLink size={16} /> Prototype
              </button>
           </div>
        </div>
      </motion.div>
    </div>
  )
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="inline-block relative">
             <h2 className="text-6xl md:text-8xl font-comic text-white text-stroke-crimson drop-shadow-[6px_6px_0_#7E0001] tracking-tighter transform -rotate-2">
               THE ARCHIVES
             </h2>
             <div className="absolute -top-6 -right-12 bg-yellow-400 text-ink font-bold font-comic px-3 py-1 text-xl rotate-12 border-2 border-ink shadow-[4px_4px_0_0_#000]">
               TOP SECRET!
             </div>
          </motion.div>
          <p className="text-gray-400 font-typewriter mt-4 text-lg">
            "Chronicles of Research & Delight"
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[2000px]">
           {projects.map((p, i) => (
             <ComicCover key={p.id} project={p} index={i} />
           ))}
        </div>
        <div className="mt-20 flex justify-center">
           <div className="bg-parchment border-4 border-white p-2 shadow-2xl transform rotate-1 inline-block">
             <button className="bg-crimson text-white font-comic text-2xl px-12 py-4 border-4 border-ink hover:scale-105 transition-transform interactive uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
               Explore Case Studies
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;