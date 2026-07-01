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
    <div className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Timeline
        </h2>
        <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Chronology of milestones
        </p>
      </div>

      <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-6 py-2 ml-4">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative pl-6 group"
          >
            {/* Timeline dot */}
            <span className={`absolute left-[-30px] top-1.5 h-4.5 w-4.5 rounded-full border-2 border-white dark:border-slate-950 shadow-sm transition-transform duration-300 group-hover:scale-110 ${getCategoryColor(item.category)}`} />

            {/* Content box */}
            <div className="p-4 rounded-xl border border-slate-200/60 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
                  {item.year}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-slate-400 border border-slate-200/40 dark:border-slate-800/40 px-1.5 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
              <h3 className="mt-1.5 font-geist text-sm font-bold text-slate-900 dark:text-slate-50">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
