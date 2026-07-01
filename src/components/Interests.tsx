import React from 'react';
import { motion } from 'framer-motion';
import interestsData from '../content/interests.json';

export const Interests: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-1 text-left">
        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Current Focus
        </h2>
        <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          What I'm exploring
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {interestsData.map((interest) => (
          <motion.div
            key={interest.id}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-5 text-left rounded-xl border border-slate-200/60 bg-white dark:border-slate-800/80 dark:bg-slate-950 transition-colors shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xl" role="img" aria-label={interest.title}>
                  {interest.icon}
                </span>
                <h3 className="font-geist text-sm font-bold text-slate-900 dark:text-slate-50">
                  {interest.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                {interest.description}
              </p>
            </div>
            
            <div className="mt-4 flex justify-end">
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800/50 px-1.5 py-0.5 rounded">
                {interest.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
