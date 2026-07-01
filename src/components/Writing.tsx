import React from 'react';
import writingData from '../content/writing.json';
import { FiClock, FiArrowRight } from 'react-icons/fi';

export const Writing: React.FC = () => {
  return (
    <section id="writing" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title Column */}
        <div className="md:col-span-4 text-left">
          <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Writing & Articles
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
            Thoughts on biology & code
          </p>
        </div>

        {/* Articles list */}
        <div className="md:col-span-8 text-left space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {writingData.map((article) => (
              <div 
                key={article.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm group hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                {/* Article Cover Photo */}
                <div className="relative h-40 bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider font-semibold bg-white/90 text-slate-800 dark:bg-slate-900/90 dark:text-slate-200 border border-slate-200/50 dark:border-slate-800/50 px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                      <FiClock className="h-3 w-3" />
                      {article.readingTime}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
                      {article.date}
                    </span>
                    <h3 className="font-geist text-base font-bold text-slate-900 dark:text-slate-50 leading-tight group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-900">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
                    >
                      Read Article
                      <FiArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
