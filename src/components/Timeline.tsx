import React from 'react';
import { motion } from 'framer-motion';
import timelineData from '../content/timeline.json';

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Research':
      return 'bg-blue-500 border-blue-200 dark:bg-blue-600 dark:border-blue-900';
    case 'Coding':
      return 'bg-purple-500 border-purple-200 dark:bg-purple-600 dark:border-purple-900';
    case 'Community':
      return 'bg-green-500 border-green-200 dark:bg-green-600 dark:border-green-900';
    case 'Running':
      return 'bg-amber-500 border-amber-200 dark:bg-amber-600 dark:border-amber-900';
    case 'Future':
      return 'bg-slate-400 border-slate-200 dark:bg-slate-500 dark:border-slate-800';
    default:
      return 'bg-slate-500 border-slate-200 dark:bg-slate-600 dark:border-slate-800';
  }
};

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title Column */}
        <div className="md:col-span-4 text-left">
          <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Journey Timeline
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
            Chronology of milestones
          </p>
        </div>

        {/* Timeline Column */}
        <div className="md:col-span-8 text-left relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-8 py-2 ml-4 md:ml-0">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative pl-6 group"
            >
              {/* Vertical line connector bullet */}
              <span className={`absolute left-[-30px] top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-slate-950 shadow-sm transition-transform duration-300 group-hover:scale-120 ${getCategoryColor(item.category)}`} />

              {/* Card Container */}
              <div className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/50 dark:border-slate-800/80 dark:bg-slate-900/30 transition-colors group-hover:border-slate-300 dark:group-hover:border-slate-700 shadow-xs">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <span className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">
                    {item.year}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-2 font-geist text-base font-bold text-slate-900 dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
