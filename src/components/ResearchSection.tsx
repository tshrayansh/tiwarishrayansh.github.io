import React from 'react';
import { motion } from 'framer-motion';
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

export const ResearchSection: React.FC = () => {
  const { research, education, experience, talks, scholarships } = portfolioData.academics;
  const { cv } = portfolioData.personal;
  const projects = portfolioData.projects as ProjectItem[];

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
    <section id="research" className="min-h-screen py-20 px-6 md:px-12 relative overflow-hidden bg-paper-light">
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />

      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-16">
        <span className="font-mono text-xs text-sage">[ SEC. 02 // DOSSIER ]</span>
        <h2 className="text-3xl md:text-4xl font-serif font-normal">Research &amp; Engineering</h2>
        <div className="h-[1px] flex-grow ledger-border-b opacity-45" />
      </div>

      {/* Asymmetric Two-Column Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
        
        {/* Left Column (xl:col-span-6) - DRY LAB & ENGINEERING */}
        <div className="xl:col-span-6 space-y-6">
          <div className="flex items-baseline justify-between border-b border-border-light pb-2">
            <h3 className="font-mono text-xs text-sage">// DRY_LAB_CODE_&amp;_SIMULATION</h3>
            <span className="font-mono text-[9px] text-muted-light/60">[ CATALOG_INDEX ]</span>
          </div>

          <div className="space-y-6">
            {projects.map((project, idx) => {
              const rotation = idx % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.8deg]";
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`border border-border-light p-6 rounded bg-paper-light hover:border-sage hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-smooth relative overflow-hidden group ${rotation} hover:rotate-0`}
                >
                  <div className="absolute top-0 right-0 w-8 h-8 bg-border-light/10 group-hover:bg-sage/10 transition-colors pointer-events-none flex items-center justify-center font-mono text-[8px] text-muted-light">
                    {idx + 1}
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-sage font-bold">
                        // C-{String(idx + 1).padStart(2, '0')} // {project.subtitle.toUpperCase()}
                      </span>
                      <h4 className="font-serif text-xl font-normal leading-tight text-ink-light group-hover:text-ochre transition-colors">
                        {project.title}
                      </h4>
                    </div>

                    <p className="font-serif text-xs text-muted-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center pt-2">
                      <div className="flex gap-3 text-[10px] font-mono">
                        {Object.entries(project.links).map(([key, val]) => (
                          <a
                            key={key}
                            href={val}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage hover:text-ochre hover:underline font-bold transition-colors"
                          >
                            {getLinkName(key)}
                          </a>
                        ))}
                      </div>
                      
                      <span className="text-[10px] font-mono text-muted-light/35">|</span>
                      
                      <div className="flex flex-wrap gap-1 text-[8px] font-mono text-muted-light">
                        {project.tags.map(tag => (
                          <span key={tag} className="border border-border-light px-1 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column (xl:col-span-6) - WET LAB & ACADEMICS */}
        <div className="xl:col-span-6 space-y-8 xl:pl-6">
          <div className="space-y-6">
            <h3 className="font-mono text-xs text-sage border-b border-border-light pb-2">// WET_LAB_&amp;_ACADEMIC_RECORD</h3>
            
            {/* Research directions list */}
            <div className="space-y-3 pb-4 border-b border-border-light border-dashed">
              <h4 className="font-mono text-[9px] text-muted-light uppercase tracking-wider">// ACTIVE_RESEARCH_DIRECTIONS</h4>
              <ul className="space-y-2 font-serif text-xs text-muted-light pl-0 list-none">
                {research.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-mono text-sage">[{idx + 1}]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience list */}
            <div className="space-y-6 border-l border-border-light pl-6 relative pt-4">
              {experience.map((exp: any, idx: number) => (
                <div key={idx} className="space-y-1 relative">
                  <div className="absolute -left-[30px] top-1.5 h-2 w-2 rounded-full bg-sage" />
                  <h4 className="font-serif text-base text-ink-light font-normal">
                    {exp.role} <span className="text-xs text-muted-light italic">at {exp.organization}</span>
                  </h4>
                  <div className="font-mono text-[9px] text-muted-light uppercase tracking-wider">
                    {exp.duration}
                  </div>
                  <p className="font-serif text-xs text-muted-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Grants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] text-muted-light uppercase tracking-wider">// EDUCATION</h4>
              {education.map((edu: any, idx: number) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-serif text-xs font-bold">{edu.institution}</div>
                  <div className="font-mono text-[9px] text-muted-light">{edu.degree}</div>
                  <div className="font-mono text-[8px] text-muted-light/60">{edu.duration}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-[10px] text-muted-light uppercase tracking-wider">// GRANTS</h4>
              <ul className="space-y-2 font-serif text-xs text-muted-light pl-4 list-disc">
                {scholarships.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scientific Presentations */}
          <div className="space-y-4 pt-4">
            <h4 className="font-mono text-[10px] text-muted-light uppercase tracking-wider">// RESEARCH_PRESENTATIONS</h4>
            <div className="divide-y divide-border-light border-t border-b border-border-light">
              {talks.map((talk: any, idx: number) => (
                <div key={idx} className="py-3 flex justify-between items-baseline gap-4">
                  <div className="space-y-0.5">
                    <h5 className="font-serif text-xs text-ink-light font-normal">
                      {talk.title}
                    </h5>
                    <div className="font-mono text-[8px] text-muted-light">
                      {talk.event}
                    </div>
                  </div>
                  <span className="font-mono text-[8px] text-muted-light whitespace-nowrap">
                    {talk.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CV download */}
          <div className="pt-6 border-t border-border-light flex justify-between items-center flex-wrap gap-4">
            <div className="font-mono text-[8px] text-muted-light leading-relaxed max-w-xs">
              * Official curriculum log is registered in PDF format.
            </div>
            <a
              href={cv}
              download
              className="inline-flex items-center gap-2 font-mono text-[10px] text-sage border border-sage/40 px-3.5 py-2 rounded hover:bg-sage/5 transition-all duration-300 font-bold"
            >
              <span>[ download dossier // cv.pdf ]</span>
              <span>↓</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
