import React from 'react';
import { motion } from 'framer-motion';
import timelineData from '../content/timeline.json';

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Research':
      return 'bg-emerald-800 dark:bg-emerald-500';
    case 'Coding':
      return 'bg-slate-800 dark:bg-zinc-400';
    case 'Community':
      return 'bg-zinc-650 dark:bg-zinc-550';
    default:
      return 'bg-slate-400 dark:bg-slate-550';
  }
};

export const Timeline: React.FC = () => {
  return (
    <div className="space-y-6 text-left pt-6">
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Chronology &amp; Milestones
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">
          Checkpoints of the scientific path
        </p>
      </div>

      <div className="relative pl-6 border-l border-slate-200 dark:border-zinc-800 space-y-6 py-2 ml-4">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.3 }}
            className="relative pl-4 group"
          >
            {/* Timeline dot */}
            <span className={`absolute left-[-26px] top-1.5 h-3 w-3 rounded-full border border-white dark:border-slate-950 shadow-xs transition-transform duration-300 ${getCategoryColor(item.category)}`} />

            {/* Content block */}
            <div className="space-y-1">
              <div className="flex items-center gap-3 text-[10px] font-mono">
                <span className="font-bold text-slate-900 dark:text-slate-200">
                  {item.year}
                </span>
                <span className="text-slate-350 dark:text-zinc-650">//</span>
                <span className="text-slate-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
              </div>
              
              <h4 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-50">
                {item.title}
              </h4>
              
              <p className="text-[11px] text-slate-550 dark:text-zinc-400 font-light leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
