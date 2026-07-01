import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../content/projects.json';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const CATEGORIES = ['All', 'Research', 'Coding', 'Visualization', 'Data Science', 'Community'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="space-y-8 text-left">
      {/* Museum Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <div className="space-y-1.5">
          <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-bold">
            Section II // research index
          </span>
          <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            II. Research &amp; Projects
          </h2>
        </div>

        {/* Filter List */}
        <div className="flex flex-wrap gap-3.5 text-[10px] font-mono uppercase tracking-wider font-semibold">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pb-0.5 transition-colors border-b cursor-pointer ${
                selectedCategory === category
                  ? 'border-zinc-900 text-zinc-900 dark:border-zinc-50 dark:text-zinc-50'
                  : 'border-transparent text-zinc-400 hover:text-zinc-955 dark:hover:text-zinc-250'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects (Vertical Rows) */}
      <motion.div layout className="space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              key={project.id}
              className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-zinc-150 dark:border-zinc-900/40 last:border-b-0"
            >
              {/* Cover Image - Left aligned on desktop */}
              {project.image && (
                <div className="w-full sm:w-36 h-24 overflow-hidden rounded bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-90"
                  />
                </div>
              )}

              {/* Project Body */}
              <div className="flex-grow space-y-2.5">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[8px] uppercase tracking-wider font-semibold border border-zinc-200/40 dark:border-zinc-800/40 px-1.5 py-0.5 rounded bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-500">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1.5">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-900/60 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3.5 text-[9px] font-mono font-bold uppercase tracking-wider">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                      >
                        <FiGithub className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.presentation && (
                      <a
                        href={project.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                      >
                        <FiExternalLink className="h-3.5 w-3.5" />
                        Slides
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
