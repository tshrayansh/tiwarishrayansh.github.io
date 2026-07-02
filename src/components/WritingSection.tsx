import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../content/portfolio.json';

interface Essay {
  id: string;
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  link: string;
}

export const WritingSection: React.FC = () => {
  const essays = portfolioData.writing as Essay[];

  return (
    <section id="writing" className="min-h-screen py-20 px-6 md:px-12 relative overflow-hidden bg-paper-light dark:bg-paper-dark">
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />

      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-16">
        <span className="font-mono text-xs text-sage dark:text-ochre">[ SEC. 03 // WRITING ]</span>
        <h2 className="text-3xl md:text-4xl font-serif font-normal">Tome &amp; Folios</h2>
        <div className="h-[1px] flex-grow ledger-border-b opacity-45" />
      </div>

      {/* Magazine layout stack */}
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="font-mono text-[10px] text-muted-light dark:text-muted-dark tracking-wider mb-2">
          [ SELECTED_PUBLICATIONS ]
        </div>

        <div className="space-y-12">
          {essays.map((essay, idx) => (
            <motion.article
              key={essay.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-border-light dark:border-border-dark last:border-b-0"
            >
              {/* Left Column: Metadata (3 cols) */}
              <div className="md:col-span-3 font-mono text-[11px] text-muted-light dark:text-muted-dark space-y-1">
                <div className="text-sage dark:text-ochre font-bold">// ARTICLE-{String(idx + 1).padStart(2, '0')}</div>
                <div className="uppercase">{essay.date}</div>
                <div>{essay.readingTime}</div>
              </div>

              {/* Right Column: Title and Summary (9 cols) */}
              <div className="md:col-span-9 space-y-3">
                <h3 className="text-2xl font-serif font-normal text-ink-light dark:text-ink-dark leading-tight hover:text-sage dark:hover:text-ochre transition-colors">
                  <a href={essay.link} target="_blank" rel="noopener noreferrer">
                    {essay.title}
                  </a>
                </h3>
                
                <p className="font-serif text-sm md:text-base text-muted-light dark:text-muted-dark leading-relaxed">
                  {essay.summary}
                </p>

                <div className="pt-2">
                  <a
                    href={essay.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-sage dark:text-ochre hover:underline font-bold"
                  >
                    [ read publication // medium ] →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
