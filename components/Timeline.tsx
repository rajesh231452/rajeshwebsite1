import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TimelineEvent } from '../types';
import { Skull, Book, Gem, Crown, Ghost, Zap, Code } from 'lucide-react';

const events: TimelineEvent[] = [
  {
    year: "2018",
    title: "The Junior Diary",
    horcrux: "Diary of Riddle",
    description: "First lines of code written in ink. Started journey with HTML/CSS spells.",
    icon: "book"
  },
  {
    year: "2020",
    title: "The Ring of Redux",
    horcrux: "Gaunt Ring",
    description: "Mastered state management. The resurrection of legacy codebases.",
    icon: "gem"
  },
  {
    year: "2021",
    title: "Locket of Latency",
    horcrux: "Slytherin Locket",
    description: "Optimized performance. Cracked the heavy burden of render cycles.",
    icon: "code"
  },
  {
    year: "2023",
    title: "The Diadem of Design",
    horcrux: "Ravenclaw Diadem",
    description: "Achieved Senior status. Wisdom in architecture and UI systems.",
    icon: "crown"
  },
  {
    year: "2025",
    title: "The Final Commit",
    horcrux: "The Scar",
    description: "Building the future with GenAI and beyond.",
    icon: "zap"
  }
];

const TimelineIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const className = "w-6 h-6 text-parchment";
  switch (icon) {
    case 'book': return <Book className={className} />;
    case 'gem': return <Gem className={className} />;
    case 'crown': return <Crown className={className} />;
    case 'ghost': return <Ghost className={className} />;
    case 'zap': return <Zap className={className} />;
    case 'skull': return <Skull className={className} />;
    default: return <Code className={className} />;
  }
};

const HogwartsExpress: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center select-none pointer-events-none filter drop-shadow-xl">
       {/* Smoke Animation */}
       <div className="absolute -top-16 flex flex-col items-center z-0">
         {[0, 1, 2].map((i) => (
           <motion.div
             key={i}
             className="w-3 h-3 bg-gray-400/60 rounded-full absolute"
             initial={{ opacity: 0, scale: 0.5, y: 0 }}
             animate={{ opacity: [0, 0.8, 0], scale: [1, 2.5, 3], y: -50 - (i * 15), x: Math.sin(i * 10) * 15 }}
             transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
           />
         ))}
       </div>

       {/* Train Front */}
       <div className="relative z-10 flex flex-col items-center">
         {/* Chimney */}
         <div className="w-6 h-8 bg-ink border-2 border-gray-600 rounded-sm mb-[-10px] z-10"></div>
         
         {/* Boiler Face */}
         <div className="w-16 h-16 bg-crimson border-[3px] border-ink rounded-full flex items-center justify-center relative z-20 shadow-md">
            <div className="w-12 h-12 bg-crimson border-2 border-gold rounded-full flex items-center justify-center">
               {/* Headlight */}
               <div className="w-6 h-6 bg-yellow-200 rounded-full border-2 border-ink shadow-[0_0_15px_rgba(255,215,0,0.8)] animate-pulse"></div>
            </div>
            {/* Plate */}
            <div className="absolute -right-3 top-0 bg-gold border border-ink px-1 py-0.5 rounded text-[8px] font-bold transform rotate-12 font-typewriter">
              5972
            </div>
         </div>

         {/* Cowcatcher / Bumper */}
         <div className="w-20 h-0 border-b-[20px] border-l-[10px] border-r-[10px] border-b-ink border-l-transparent border-r-transparent mt-[-5px] relative z-30">
            {/* Stripes */}
            <div className="absolute bottom-0 left-2 w-1 h-3 bg-gray-600/50 skew-x-12"></div>
            <div className="absolute bottom-0 left-5 w-1 h-3 bg-gray-600/50 skew-x-12"></div>
            <div className="absolute bottom-0 right-5 w-1 h-3 bg-gray-600/50 -skew-x-12"></div>
            <div className="absolute bottom-0 right-2 w-1 h-3 bg-gray-600/50 -skew-x-12"></div>
         </div>
       </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll to vertical position
  const trainTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 px-4 bg-halftone min-h-screen relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-comic text-parchment text-center mb-16 text-stroke-black drop-shadow-[4px_4px_0_#000]">
          THE JOURNEY
        </h2>

        <div className="relative">
          {/* Vertical Line (The Track) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-full bg-ink border-l-2 border-r-2 border-gray-700">
             {/* Track Sleepers styling */}
             <div className="w-full h-full" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 18px, #3a3a3a 18px, #3a3a3a 20px)" }}></div>
          </div>

          {/* The Hogwarts Express */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 z-30"
            style={{ top: trainTop, y: '-50%' }}
          >
             <HogwartsExpress />
          </motion.div>

          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-between mb-24 w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-5/12"></div>
              
              {/* Horcrux Node */}
              <div className="z-10 bg-crimson border-4 border-ink rounded-full p-3 shadow-[0_0_15px_rgba(126,0,1,0.6)] relative group">
                <TimelineIcon icon={event.icon} />
                <div className="absolute inset-0 rounded-full border-2 border-gold opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>

              <div className="w-5/12">
                <div className="bg-parchment p-6 border-2 border-ink shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative group hover:scale-105 transition-transform duration-300 interactive">
                  <div className="absolute -top-3 -right-3 bg-gold text-ink font-bold px-2 py-1 border border-ink transform rotate-3 font-typewriter">
                    {event.year}
                  </div>
                  <h3 className="font-wizard text-xl font-bold text-ink mb-1">{event.title}</h3>
                  <div className="text-xs font-typewriter text-crimson mb-2 uppercase tracking-wide">
                    Horcrux: {event.horcrux}
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-ink/90">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;