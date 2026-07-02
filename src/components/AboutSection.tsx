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
    <section id="about" className="min-h-screen py-20 px-6 md:px-12 relative overflow-hidden bg-paper-light dark:bg-paper-dark">
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />

      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-16">
        <span className="font-mono text-xs text-sage dark:text-ochre">[ SEC. 01 // ABOUT ]</span>
        <h2 className="text-3xl md:text-4xl font-serif font-normal">Biographical Narrative</h2>
        <div className="h-[1px] flex-grow ledger-border-b opacity-45" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Editorial Story */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose dark:prose-invert"
          >
            {/* Elegant Dropcap Paragraph */}
            <p className="text-lg md:text-xl font-serif text-ink-light dark:text-ink-dark leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:text-sage dark:first-letter:text-ochre">
              {bioParagraphs[0]}
            </p>
            
            {bioParagraphs.slice(1).map((para, index) => (
              <p key={index} className="text-sm md:text-base font-serif text-muted-light dark:text-muted-dark leading-relaxed mt-4">
                {para}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Right Side: focus matrix cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="font-mono text-[10px] text-muted-light dark:text-muted-dark tracking-wider mb-2 uppercase">
            [ focus_matrix_indices.json ]
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.code}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-border-light dark:border-border-dark p-5 rounded bg-paper-light dark:bg-paper-dark hover:border-sage dark:hover:border-ochre transition-smooth relative overflow-hidden group"
              >
                {/* Asymmetric indicator stamp */}
                <div className="absolute top-0 right-0 font-mono text-[10px] text-border-light dark:text-border-dark group-hover:text-sage/20 dark:group-hover:text-ochre/20 p-2 font-bold select-none">
                  {area.code}
                </div>
                <div className="font-mono text-[10px] text-sage dark:text-ochre mb-1">
                  // {area.code}-FOCUS
                </div>
                <h3 className="font-serif text-lg font-normal mb-2 text-ink-light dark:text-ink-dark">
                  {area.title}
                </h3>
                <p className="font-sans text-xs text-muted-light dark:text-muted-dark leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
