import React from 'react';
import portfolioData from '../content/portfolio.json';

export const AcademicsSection: React.FC = () => {
  const { research, education, experience, talks, scholarships } = portfolioData.academics;
  const { cv } = portfolioData.personal;

  return (
    <section id="academics" className="min-h-screen py-20 px-6 md:px-12 relative overflow-hidden bg-paper-light dark:bg-paper-dark">
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />

      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-16">
        <span className="font-mono text-xs text-sage dark:text-ochre">[ SEC. 05 // DOSSIER ]</span>
        <h2 className="text-3xl md:text-4xl font-serif font-normal">Academic Profile</h2>
        <div className="h-[1px] flex-grow ledger-border-b opacity-45" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
        {/* Left Column (5 cols): Research Focus & CV */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-sage dark:text-ochre">// RESEARCH_INTERESTS</h3>
            <ul className="space-y-4 font-serif text-sm leading-relaxed text-muted-light dark:text-muted-dark list-none pl-0">
              {research.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-mono text-sage dark:text-ochre">[{idx + 1}]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs text-sage dark:text-ochre">// EDUCATION</h3>
            <div className="space-y-6">
              {education.map((edu: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <h4 className="font-serif text-base text-ink-light dark:text-ink-dark font-normal">
                    {edu.institution}
                  </h4>
                  <div className="font-mono text-[10px] text-muted-light dark:text-muted-dark">
                    {edu.degree} | {edu.duration}
                  </div>
                  <p className="font-serif text-xs text-muted-light dark:text-muted-dark leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs text-sage dark:text-ochre">// GRANTS_AND_SCHOLARSHIPS</h3>
            <ul className="space-y-2 font-serif text-xs text-muted-light dark:text-muted-dark pl-4 list-disc">
              {scholarships.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Understated CV Download Block */}
          <div className="pt-6 border-t border-border-light dark:border-border-dark">
            <a
              href={cv}
              download
              className="inline-flex items-center gap-2 font-mono text-xs text-sage dark:text-ochre border border-sage/40 dark:border-ochre/40 px-4 py-2.5 rounded hover:bg-sage/5 dark:hover:bg-ochre/5 transition-all duration-300 font-bold"
            >
              <span>[ download dossier // academic cv.pdf ]</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Right Column (7 cols): Research Experience & Talks */}
        <div className="lg:col-span-7 space-y-10 lg:pl-6">
          <div className="space-y-6">
            <h3 className="font-mono text-xs text-sage dark:text-ochre">// SCIENTIFIC_EXPERIENCE</h3>
            
            <div className="space-y-8 border-l border-border-light dark:border-border-dark pl-6 relative">
              {experience.map((exp: any, idx: number) => (
                <div key={idx} className="space-y-1 relative">
                  {/* Timeline point stamp */}
                  <div className="absolute -left-[30px] top-1.5 h-2 w-2 rounded-full bg-sage dark:bg-ochre" />
                  
                  <h4 className="font-serif text-base text-ink-light dark:text-ink-dark font-normal">
                    {exp.role} <span className="text-xs text-muted-light dark:text-muted-dark italic">at {exp.organization}</span>
                  </h4>
                  <div className="font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase tracking-wider">
                    {exp.duration}
                  </div>
                  <p className="font-serif text-xs text-muted-light dark:text-muted-dark leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-xs text-sage dark:text-ochre">// PRESENTATIONS_AND_TALKS</h3>
            
            <div className="divide-y divide-border-light dark:divide-border-dark border-t border-b border-border-light dark:border-border-dark">
              {talks.map((talk: any, idx: number) => (
                <div key={idx} className="py-4 flex justify-between items-baseline gap-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm text-ink-light dark:text-ink-dark font-normal">
                      {talk.title}
                    </h4>
                    <div className="font-mono text-[9px] text-muted-light dark:text-muted-dark">
                      {talk.event}
                    </div>
                  </div>
                  <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark whitespace-nowrap">
                    {talk.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
