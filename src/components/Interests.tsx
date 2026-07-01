import React from 'react';
import { motion } from 'framer-motion';
import interestsData from '../content/interests.json';

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title column */}
        <div className="md:col-span-4 text-left">
          <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Current Focus
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
            What I'm exploring
          </p>
        </div>

        {/* Interests grid column */}
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interestsData.map((interest) => (
              <motion.div
                key={interest.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 text-left rounded-xl border border-slate-200/80 bg-slate-50/50 dark:border-slate-800/80 dark:bg-slate-900/30 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={interest.title}>
                    {interest.icon}
                  </span>
                  <h3 className="font-geist text-base font-semibold text-slate-900 dark:text-slate-50">
                    {interest.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {interest.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-1.5 py-0.5 rounded">
                    {interest.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
