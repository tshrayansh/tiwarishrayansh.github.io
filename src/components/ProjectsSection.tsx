import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../content/portfolio.json';

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    website?: string;
    documentation?: string;
    presentation?: string;
    publication?: string;
  };
}

export const ProjectsSection: React.FC = () => {
  const projects = portfolioData.projects as ProjectItem[];
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getLinkName = (key: string): string => {
    switch (key) {
      case 'github': return '[github]';
      case 'website': return '[live site]';
      case 'documentation': return '[docs]';
      case 'presentation': return '[slides]';
      case 'publication': return '[paper]';
      default: return `[${key}]`;
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 relative overflow-hidden bg-paper-light dark:bg-paper-dark">
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />

      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-16">
        <span className="font-mono text-xs text-sage dark:text-ochre">[ SEC. 02 // WORK ]</span>
        <h2 className="text-3xl md:text-4xl font-serif font-normal">Computational Ledger</h2>
        <div className="h-[1px] flex-grow ledger-border-b opacity-45" />
      </div>

      {/* Main projects catalogue list */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="font-mono text-[10px] text-muted-light dark:text-muted-dark tracking-wider mb-2 flex justify-between">
          <span>[ CATALOG_INDEX ]</span>
          <span className="hidden md:inline">[ HOVER FOR DETAIL ]</span>
        </div>

        {/* Desktop catalog rows */}
        <div className="hidden md:block border-t border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="py-6 transition-all duration-300 relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-muted-light dark:text-muted-dark">
                    PRJ-{String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-normal group-hover:text-sage dark:group-hover:text-ochre transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[10px] text-muted-light dark:text-muted-dark">
                      // {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 font-mono text-[10px] text-muted-light/60 dark:text-muted-dark/60">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="border border-border-light dark:border-border-dark px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collapsible details pane on hover */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden mt-4 pl-14"
                  >
                    <p className="font-serif text-sm text-muted-light dark:text-muted-dark max-w-2xl leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="flex gap-3 text-xs font-mono">
                        {Object.entries(project.links).map(([key, val]) => (
                          <a
                            key={key}
                            href={val}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage dark:text-ochre hover:underline font-bold"
                          >
                            {getLinkName(key)}
                          </a>
                        ))}
                      </div>

                      <span className="text-[10px] font-mono text-muted-light/35 dark:text-muted-dark/35">|</span>

                      <div className="flex gap-1 text-[9px] font-mono text-muted-light dark:text-muted-dark">
                        {project.tags.map(tag => (
                          <span key={tag} className="bg-border-light/40 dark:bg-border-dark/40 px-1 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile card stack layout */}
        <div className="md:hidden space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border-light dark:border-border-dark rounded p-5 bg-paper-light dark:bg-paper-dark space-y-4"
            >
              <div className="flex justify-between items-baseline border-b border-border-light dark:border-border-dark pb-2">
                <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark">
                  PRJ-{String(idx + 1).padStart(2, '0')} // {project.subtitle}
                </span>
                <span className="h-2 w-2 rounded-full bg-sage/40 dark:bg-ochre/40" />
              </div>

              <h3 className="font-serif text-lg font-normal text-ink-light dark:text-ink-dark">
                {project.title}
              </h3>

              <p className="font-serif text-xs text-muted-light dark:text-muted-dark leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-[9px] border border-border-light dark:border-border-dark px-1.5 py-0.5 rounded text-muted-light dark:text-muted-dark">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2 font-mono text-xs">
                {Object.entries(project.links).map(([key, val]) => (
                  <a
                    key={key}
                    href={val}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage dark:text-ochre hover:underline font-bold"
                  >
                    {getLinkName(key)}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
