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
    <section id="projects" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="space-y-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
          <div>
            <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              Research & Projects
            </h2>
            <p className="mt-1 text-sm font-mono text-slate-400 dark:text-slate-500">
              Computational & community builds
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-1.5 border border-slate-200/60 p-1 rounded-lg bg-slate-50/50 dark:border-slate-800/60 dark:bg-slate-900/30">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium font-geist rounded-md transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                key={project.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/85 dark:bg-slate-950 text-left shadow-sm group hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider font-semibold bg-white/90 text-slate-800 dark:bg-slate-900/90 dark:text-slate-200 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <h3 className="font-geist text-lg font-bold text-slate-900 dark:text-slate-50">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags & Links */}
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-900 text-xs">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer"
                        >
                          <FiGithub className="h-4 w-4" />
                          Code
                        </a>
                      )}
                      {project.presentation && (
                        <a
                          href={project.presentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer"
                        >
                          <FiExternalLink className="h-4 w-4" />
                          Slides
                        </a>
                      )}
                      {'publication' in project && project.publication && (
                        <a
                          href={project.publication as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer"
                        >
                          <FiAward className="h-4 w-4" />
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
    </section>
  );
};
