import React from 'react';
import aboutData from '../content/about.json';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title column */}
        <div className="md:col-span-4 text-left">
          <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            My Story
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
            Path & Philosophy
          </p>
        </div>

        {/* Story content column */}
        <div className="md:col-span-8 text-left space-y-6">
          {aboutData.storyParagraphs.map((paragraph, index) => (
            <p 
              key={index}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed text-justify"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
