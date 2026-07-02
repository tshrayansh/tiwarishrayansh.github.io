import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../content/portfolio.json';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const { name, title, shortIntro } = portfolioData.personal;
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section id="home" className="min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 relative overflow-hidden field-grid">
      {/* Decorative technical line markers */}
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />
      <div className="absolute top-0 left-12 w-[1px] h-full ledger-border-r hidden md:block" />

      {/* Top Metadata Header - Notebook style */}
      <div className="flex flex-col md:flex-row md:items-center justify-between text-xs font-mono text-muted-light dark:text-muted-dark tracking-wider gap-2">
        <div className="flex items-center gap-3">
          <span className="text-sage dark:text-ochre">●</span>
          <span>RECORDING_ACTIVE</span>
          <span className="opacity-40">|</span>
          <span>LAT: 18.5204° N, LON: 73.8567° E</span>
        </div>
        <div className="flex items-center gap-3">
          <span>LOG: {currentDate}</span>
          <span className="opacity-40">|</span>
          <span>VOL. IV // REF. SHRAYANSH</span>
        </div>
      </div>

      {/* Main Asymmetric Editorial Body */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        <div className="lg:col-span-8 space-y-6 md:pl-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs text-sage dark:text-ochre border border-sage/30 dark:border-ochre/30 px-2 py-0.5 rounded-full">
              [ Undergraduate Researcher ]
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal leading-[1.1] tracking-tight"
          >
            I study <span className="italic font-normal">biological networks</span> and build computational systems to simulate life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-muted-light dark:text-muted-dark max-w-xl font-serif italic"
          >
            "{shortIntro}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-4 flex flex-wrap gap-4 font-mono text-xs"
          >
            <button
              onClick={() => onNavigate('about')}
              className="px-4 py-2 border border-ink-light dark:border-ink-dark rounded hover:bg-ink-light hover:text-paper-light dark:hover:bg-ink-dark dark:hover:text-paper-dark transition-all duration-300"
            >
              [ open logbook // about me ]
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="px-4 py-2 border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark rounded hover:border-ink-light dark:hover:border-ink-dark transition-all duration-300"
            >
              [ view projects ]
            </button>
          </motion.div>
        </div>

        {/* Large Decorative Stamp Box */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 h-48 md:w-56 md:h-56 border border-border-light dark:border-border-dark p-4 bg-paper-light dark:bg-paper-dark shadow-sm relative stamp-box flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark">SYS.VER // 24.A</span>
              <div className="w-8 h-8 rounded-full border border-dashed border-sage/50 dark:border-ochre/50 flex items-center justify-center">
                <span className="font-mono text-[8px] text-sage dark:text-ochre">INSP</span>
              </div>
            </div>
            
            <div className="space-y-1 my-auto">
              <div className="font-mono text-[10px] font-bold tracking-widest">{name.toUpperCase()}</div>
              <div className="font-mono text-[8px] text-muted-light dark:text-muted-dark leading-none">{title.toUpperCase()}</div>
            </div>

            <div className="flex justify-between items-end border-t border-border-light dark:border-border-dark pt-2">
              <span className="font-mono text-[8px] text-muted-light dark:text-muted-dark">EST. 2022</span>
              <span className="font-mono text-[8px] text-sage dark:text-ochre font-bold">INSPIRE.SCHOLAR</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom status/nav markers */}
      <div className="flex justify-between items-center text-[10px] font-mono text-muted-light/60 dark:text-muted-dark/60 border-t border-border-light dark:border-border-dark pt-4">
        <span>SHELL: React.Vite.Tailwind</span>
        <span className="animate-pulse text-sage dark:text-ochre">▼ SCROLL TO FLIP PAGE</span>
      </div>
    </section>
  );
};
