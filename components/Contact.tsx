import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-ink flex justify-center items-center min-h-[600px] overflow-hidden relative">
      <div className="absolute inset-0 bg-halftone opacity-10"></div>
      
      <div className="max-w-2xl w-full px-4 z-10">
        <h2 className="text-parchment font-wizard text-4xl text-center mb-8">Send a Howler</h2>
        
        <motion.div 
          className="relative bg-crimson p-1 rounded-lg shadow-2xl"
          animate={isSent ? { rotate: [0, -5, 5, -5, 5, 0], scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
           {/* Envelope Flap Look */}
           <div className="bg-parchment p-8 md:p-12 border-4 border-crimson shadow-inner relative overflow-hidden">
             
             {isSent ? (
               <div className="flex flex-col items-center justify-center h-64 text-center">
                 <h3 className="font-comic text-6xl text-crimson mb-4 animate-bounce">SCREEECH!</h3>
                 <p className="font-typewriter text-ink text-lg">Your message has been delivered loudly.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label className="block font-typewriter text-ink font-bold mb-1">Wizard Name</label>
                   <input required type="text" className="w-full bg-transparent border-b-2 border-ink font-comic text-xl focus:outline-none focus:border-crimson" placeholder="Harry P." />
                 </div>
                 <div>
                   <label className="block font-typewriter text-ink font-bold mb-1">Owl Address (Email)</label>
                   <input required type="email" className="w-full bg-transparent border-b-2 border-ink font-comic text-xl focus:outline-none focus:border-crimson" placeholder="h.potter@hogwarts.edu" />
                 </div>
                 <div>
                   <label className="block font-typewriter text-ink font-bold mb-1">The Howler Message</label>
                   <textarea required rows={4} className="w-full bg-parchment border-2 border-ink p-2 font-typewriter focus:outline-none focus:border-crimson border-dashed" placeholder="SCREAM YOUR JOB OFFER HERE..."></textarea>
                 </div>
                 <button type="submit" className="w-full bg-crimson text-parchment font-bold font-wizard text-xl py-3 border-2 border-ink hover:bg-red-900 transition-colors interactive">
                   SEND VIA OWL POST
                 </button>
               </form>
             )}
             
             {/* Wax Seal */}
             <div className="absolute bottom-4 right-4 w-16 h-16 bg-crimson rounded-full flex items-center justify-center border-4 border-red-900 shadow-lg opacity-80">
               <span className="text-red-900 font-wizard text-2xl font-bold">R</span>
             </div>
           </div>
        </motion.div>
      </div>
      
      {/* Footer Text */}
      <div className="absolute bottom-4 text-parchment/30 font-typewriter text-xs">
        MISCHIEF MANAGED © {new Date().getFullYear()} RAJESH
      </div>
    </section>
  );
};

export default Contact;