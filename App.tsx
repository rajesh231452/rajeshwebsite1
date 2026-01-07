import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Oracle from './components/Oracle';
import RajeshPage from './components/RajeshPage';
import Navbar from './components/Navbar';
import MagicCursor from './components/MagicCursor';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'rajesh'>('home');

  return (
    <main className="min-h-screen bg-parchment selection:bg-crimson selection:text-white overflow-x-hidden">
      <MagicCursor />
      
      <AnimatePresence mode="wait">
        {view === 'rajesh' ? (
          <motion.div
            key="rajesh-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <RajeshPage onBack={() => setView('home')} />
          </motion.div>
        ) : (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-16"
          >
            <Navbar />
            <Oracle />
            
            <div className="relative">
              <Hero onNameClick={() => setView('rajesh')} />
              <Timeline />
              <Skills />
              <Projects />
              <Contact />
            </div>

            {/* Noise Overlay for vintage feel */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[60] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;