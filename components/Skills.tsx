import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: "React 18+", creature: "The Phoenix", description: "Components reborn from the ashes of Virtual DOM.", level: 95 },
  { name: "Node.js", creature: "The Basilisk", description: "Deep pipe architecture slithering through servers.", level: 85 },
  { name: "UI/UX Design", creature: "The Niffler", description: "Hunting for shiny pixels and golden interactions.", level: 90 },
  { name: "Security", creature: "The Dementor", description: "Sucking the soul out of vulnerabilities.", level: 80 },
  { name: "GenAI", creature: "The Occamy", description: "Expanding to fill available context windows.", level: 88 },
  { name: "TypeScript", creature: "The Hippogriff", description: "Proud and strict, respect the types or perish.", level: 92 },
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-ink text-parchment relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-wizard text-center mb-4 text-gold">
          The Menagerie
        </h2>
        <p className="text-center font-typewriter text-halftone mb-12">
          "Fantastic Tech & Where to Find It"
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
                    LVL {skill.level}
                  </span>
                </div>
                
                <div className="h-32 bg-halftone opacity-20 mb-4 flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                   {/* Abstract creature representation */}
                   <img src={`https://picsum.photos/seed/${skill.creature}/300/200`} alt={skill.creature} className="w-full h-full object-cover mix-blend-multiply" />
                </div>

                <h3 className="font-bold font-wizard text-crimson text-lg mb-2">{skill.name}</h3>
                <p className="font-typewriter text-sm flex-grow">
                  {skill.description}
                </p>

                {/* Stat Bar */}
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