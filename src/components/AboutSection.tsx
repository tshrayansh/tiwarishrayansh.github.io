import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../content/portfolio.json';

export const AboutSection: React.FC = () => {
  const { bioParagraphs } = portfolioData.personal;

  const focusAreas = [
    {
      code: "BIO",
      title: "Biological Networks",
      description: "Analyzing cellular behaviors, biochemical scaling, and neural spike dynamics as emergent complex systems."
    },
    {
      code: "COM",
      title: "Algorithmic Engineering",
      description: "Writing simulations, cache-optimizing alignment kernels, and developing WebGL botanical grows."
    },
    {
      code: "END",
      title: "Marathon Pacing",
      description: "Testing metabolic thresholds, cellular fatigue curves, and pacing 70+ km weekly run cycles."
    },
    {
      code: "VIS",
      title: "Analog Photography",
      description: "Capturing spatial compositions, architectural rules, and biological lattices on silver halide film."
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 md:px-12 relative overflow-hidden bg-paper-light">
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />

      {/* Top Metadata Header - Monograph start marker */}
      <div className="flex justify-between items-baseline text-[10px] font-mono text-muted-light/60 border-b border-border-light pb-4 mb-12">
        <span>RECORD_ENTRY: 01 // NARRATIVE</span>
        <span>VOL. IV // REF. SHRAYANSH</span>
      </div>

      {/* Hero Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[9px] text-sage border border-sage/30 px-2 py-0.5 rounded-full">
            [ Undergraduate Researcher // BS-MS Dual Degree ]
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.1] tracking-tight"
        >
          I study <span className="italic font-normal text-sage">biological networks</span> and build computational systems to simulate life.
        </motion.h1>
      </div>

      {/* Main Grid: Story & Collaged Polaroid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Left Column: Biography (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose"
          >
            {/* Elegant Dropcap Paragraph */}
            <p className="text-lg md:text-xl font-serif text-ink-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:text-sage">
              {bioParagraphs[0]}
            </p>
            
            {bioParagraphs.slice(1).map((para, index) => (
              <p key={index} className="text-sm md:text-base font-serif text-muted-light leading-relaxed mt-4">
                {para}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Polaroid Field Log Photo (4 cols) */}
        <div className="lg:col-span-4 flex justify-center pt-8 lg:pt-0 relative">
          
          {/* Vector paperclip ornament to overlay the polaroid */}
          <svg className="absolute -top-5 left-1/3 w-6 h-12 text-[#9ca3af] transform -rotate-12 z-20 pointer-events-none drop-shadow-sm" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 36 V 12 A 6 6 0 0 1 18 12 V 32 A 4 4 0 0 1 10 32 V 16" strokeLinecap="round" />
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="polaroid-frame max-w-[240px] relative"
          >
            <div className="w-full aspect-[4/5] border border-border-light overflow-hidden bg-zinc-950 rounded-sm">
              <img
                src="./profile.jpeg"
                alt="Shrayansh Tiwari"
                className="w-full h-full object-cover grayscale brightness-95 contrast-105"
              />
            </div>
            
            <div className="pt-3 pb-1 text-center font-mono text-[9px] uppercase tracking-widest text-[#1d231f] select-none">
              Shrayansh // Field Log [PUNE]
            </div>
          </motion.div>
        </div>

      </div>

      {/* Focus Matrix Grid Footer */}
      <div className="border-t border-border-light pt-12 space-y-6">
        <div className="font-mono text-[10px] text-muted-light tracking-wider uppercase">
          // focus_matrix_indices.json
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={area.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border border-border-light p-6 rounded bg-paper-light hover:border-sage transition-smooth relative overflow-hidden group"
            >
              {/* Indicator Stamp */}
              <div className="absolute top-0 right-0 font-mono text-[10px] text-border-light group-hover:text-sage/20 p-2 font-bold select-none">
                {area.code}
              </div>
              <div className="font-mono text-[10px] text-sage mb-1">
                // {area.code}-FOCUS
              </div>
              <h3 className="font-serif text-lg font-normal mb-2 text-ink-light">
                {area.title}
              </h3>
              <p className="font-sans text-xs text-muted-light leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
