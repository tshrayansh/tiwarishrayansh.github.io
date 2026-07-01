import React from 'react';
import { motion } from 'framer-motion';
import interestsData from '../content/interests.json';

export const Interests: React.FC = () => {
  return (
    <div className="bento-card p-8 text-left space-y-6 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 px-2 py-0.5 rounded">
            [03 // fields of study]
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Primary Focus Areas</span>
        </div>

        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Current Focus
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {interestsData.map((interest) => (
            <motion.div
              key={interest.id}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-4 text-left rounded-xl border border-slate-100 bg-slate-50/20 dark:border-zinc-900 dark:bg-zinc-950/20 transition-all flex flex-col justify-between gap-2"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base" role="img" aria-label={interest.title}>
                    {interest.icon}
                  </span>
                  <h3 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-50">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
                  {interest.description}
                </p>
              </div>
              <div className="flex justify-end">
                <span className="font-mono text-[8px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 border border-slate-200/40 dark:border-zinc-800/40 px-1 py-0.5 rounded bg-white dark:bg-zinc-900">
                  {interest.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-zinc-900/60 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-zinc-500">
        <span>[DOMAINS // 06 ACTIVE]</span>
        <span>[FOCUS // COMPUTATION]</span>
      </div>
    </div>
  );
};
