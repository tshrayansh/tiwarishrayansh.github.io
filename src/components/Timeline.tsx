import React from 'react';
import { motion } from 'framer-motion';
import timelineData from '../content/timeline.json';

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Research':
      return 'bg-blue-500 border-blue-100 dark:bg-blue-600 dark:border-blue-900';
    case 'Coding':
      return 'bg-purple-500 border-purple-100 dark:bg-purple-600 dark:border-purple-900';
    case 'Community':
      return 'bg-green-500 border-green-100 dark:bg-green-600 dark:border-green-900';
    case 'Running':
      return 'bg-amber-500 border-amber-100 dark:bg-amber-600 dark:border-amber-900';
    default:
      return 'bg-slate-400 border-slate-100 dark:bg-slate-500 dark:border-slate-800';
  }
};

export const Timeline: React.FC = () => {
  return (
    <div className="bento-card p-8 text-left space-y-6 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 px-2 py-0.5 rounded">
            [06 // checkpoints]
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Milestone Timeline</span>
        </div>

        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Journey
        </h2>

        <div className="relative pl-6 border-l border-slate-150 dark:border-zinc-900 space-y-5 py-2 ml-4">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative pl-6 group"
            >
              {/* Timeline dot */}
              <span className={`absolute left-[-30px] top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-slate-950 shadow-sm transition-transform duration-300 group-hover:scale-110 ${getCategoryColor(item.category)}`} />

              {/* Content box */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/10 dark:border-zinc-900/50 dark:bg-zinc-950/10 transition-colors">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
                    {item.year}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider font-semibold text-slate-400 border border-slate-200/40 dark:border-zinc-800/40 px-1 py-0.5 rounded bg-white dark:bg-zinc-900">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-1 font-geist text-xs font-bold text-slate-900 dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-zinc-900/60 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-zinc-500">
        <span>[AXIS // CHRONOLOGICAL]</span>
        <span>[HISTORY // 08 NODES]</span>
      </div>
    </div>
  );
};
