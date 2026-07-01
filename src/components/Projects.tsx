import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../content/projects.json';
import { FiGithub, FiExternalLink, FiAward } from 'react-icons/fi';

const CATEGORIES = ['All', 'Research', 'Coding', 'Visualization', 'Data Science', 'Community'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="py-12 space-y-8 text-left">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 dark:border-zinc-900/60 pb-4">
        <div className="space-y-1.5">
          <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 dark:text-emerald-500 font-semibold">
            Work Index
          </span>
          <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Research &amp; Projects
          </h2>
        </div>

        {/* Filter List */}
        <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pb-1 transition-all border-b-2 cursor-pointer font-semibold ${
                selectedCategory === category
                  ? 'border-slate-900 text-slate-900 dark:border-slate-50 dark:text-slate-50'
                  : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg border border-slate-200/50 bg-white dark:border-zinc-900/60 dark:bg-zinc-950/20 text-left group transition-all duration-200"
            >
              {/* Cover Image */}
              {project.image && (
                <div className="relative h-44 w-full overflow-hidden bg-slate-50 dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-900/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-95"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="font-mono text-[8px] uppercase tracking-wider font-semibold bg-white/95 text-slate-800 dark:bg-zinc-950/95 dark:text-slate-200 border border-slate-200/40 dark:border-zinc-800/40 px-1.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-geist text-sm font-bold text-slate-900 dark:text-slate-50 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed h-[66px] overflow-hidden">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-900/40">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] text-slate-400 dark:text-zinc-550 bg-slate-50 dark:bg-zinc-900/50 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 text-[10px] font-mono font-semibold uppercase tracking-wider">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-slate-100 cursor-pointer"
                      >
                        <FiGithub className="h-3 w-3" />
                        Code
                      </a>
                    )}
                    {project.presentation && (
                      <a
                        href={project.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-slate-100 cursor-pointer"
                      >
                        <FiExternalLink className="h-3 w-3" />
                        Slides
                      </a>
                    )}
                    {'publication' in project && project.publication && (
                      <a
                        href={project.publication as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-slate-100 cursor-pointer"
                      >
                        <FiAward className="h-3 w-3" />
                        Paper
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
