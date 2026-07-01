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
    <div className="bento-card p-8 space-y-8 text-left">
      {/* Bento Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 dark:border-zinc-900/60 pb-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 px-2 py-0.5 rounded">
              [04 // work index]
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Portfolio &amp; Builds</span>
          </div>
          <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Research &amp; Projects
          </h2>
        </div>

        {/* Filter Pill Tab Bar */}
        <div className="flex flex-wrap gap-1 border border-slate-200/60 p-1 rounded-full bg-slate-50/50 dark:border-zinc-800/60 dark:bg-zinc-950/20 max-w-fit">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-[10px] font-bold font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200/50 bg-slate-50/10 dark:border-zinc-900/60 dark:bg-zinc-950/20 text-left group hover:border-slate-350 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-2 right-2">
                  <span className="font-mono text-[8px] uppercase tracking-wider font-semibold bg-white/90 text-slate-800 dark:bg-zinc-900/90 dark:text-slate-200 border border-slate-200/50 dark:border-zinc-800/50 px-1.5 py-0.5 rounded shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-geist text-sm font-bold text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed h-[66px] overflow-hidden">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-900/60">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] text-slate-500 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-[10px] font-mono">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-slate-100 cursor-pointer"
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
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-slate-100 cursor-pointer"
                      >
                        <FiExternalLink className="h-3.5 w-3.5" />
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
                        <FiAward className="h-3.5 w-3.5" />
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
