import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: "Figma Mastery", creature: "The Mirror of Erised", description: "Reflecting user desires into pixel-perfect reality.", level: 98 },
  { name: "User Research", creature: "The Pensieve", description: "Diving deep into the thoughts and memories of Muggles.", level: 85 },
  { name: "Design Systems", creature: "The Marauder's Map", description: "A living guide to every corner of a product's interface.", level: 92 },
  { name: "Motion Design", creature: "The Golden Snitch", description: "Fast, fluid, and captivating interactions.", level: 80 },
  { name: "Spatial UI", creature: "The Floo Network", description: "Connecting worlds through immersive AR/VR experiences.", level: 88 },
  { name: "Brand Alchemy", creature: "The Sorcerer's Stone", description: "Turning raw ideas into golden visual identities.", level: 90 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-ink text-parchment relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-wizard text-center mb-4 text-gold">
          The Menagerie
        </h2>
        <p className="text-center font-typewriter text-halftone mb-12">
          "Fantastic Designs & Where to Find Them"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-parchment text-ink p-1 border-4 border-gold rounded-sm group interactive"
              whileHover={{ rotate: Math.random() * 4 - 2, scale: 1.02 }}
            >
              <div className="border border-ink p-4 h-full flex flex-col relative">
                <div className="flex justify-between items-start border-b-2 border-ink pb-2 mb-4">
                  <span className="font-comic text-2xl">{skill.creature}</span>
                  <span className="font-typewriter font-bold bg-ink text-parchment px-2 rounded-full text-xs">
                    XP {skill.level}
                  </span>
                </div>
                
                <div className="h-32 bg-halftone opacity-20 mb-4 flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                   <img src={`https://picsum.photos/seed/${skill.creature}/300/200`} alt={skill.creature} className="w-full h-full object-cover mix-blend-multiply" />
                </div>

                <h3 className="font-bold font-wizard text-crimson text-lg mb-2">{skill.name}</h3>
                <p className="font-typewriter text-sm flex-grow">
                  {skill.description}
                </p>

                <div className="mt-4 w-full h-3 bg-ink/20 border border-ink rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-crimson"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;