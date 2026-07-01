import React from 'react';
import projectsData from '../content/projects.json';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export const Projects: React.FC = () => {
  return (
    <div className="space-y-8 text-left">
      {/* Museum Header */}
      <div className="space-y-1 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          02 // Selected Research
        </span>
        <h2 className="font-serif text-2xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          2. Selected Projects
        </h2>
      </div>

      {/* Vertical Text List of Projects */}
      <div className="space-y-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="space-y-2"
          >
            {/* Title & Category Row */}
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-base font-medium text-zinc-900 dark:text-zinc-50 tracking-tight">
                {project.title}
              </h3>
              <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">
                {project.category}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-sm text-zinc-700 dark:text-zinc-400 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack & links row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-[11px] font-mono">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 text-zinc-450 dark:text-zinc-500">
                {project.technologies.map(tech => (
                  <span key={tech}>#{tech}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <FiGithub className="h-3 w-3" />
                    <span>[code]</span>
                  </a>
                )}
                {project.presentation && (
                  <a
                    href={project.presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <FiExternalLink className="h-3 w-3" />
                    <span>[slides]</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
