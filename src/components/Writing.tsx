import React from 'react';
import writingData from '../content/writing.json';
import { FiClock, FiArrowRight } from 'react-icons/fi';

export const Writing: React.FC = () => {
  return (
    <div className="bento-card p-8 text-left space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 px-2 py-0.5 rounded">
            [08 // publication logs]
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Written Medium Essays</span>
        </div>

        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Writing &amp; Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {writingData.map((article) => (
            <div 
              key={article.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200/50 bg-slate-50/10 dark:border-zinc-900/60 dark:bg-zinc-950/20 group hover:border-slate-350 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Cover image */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-100 dark:bg-zinc-900">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-102"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="font-mono text-[8px] uppercase tracking-wider font-semibold bg-white/90 text-slate-800 dark:bg-zinc-900/90 dark:text-slate-200 border border-slate-200/50 dark:border-zinc-800/50 px-1.5 py-0.5 rounded shadow-sm flex items-center gap-1">
                    <FiClock className="h-3 w-3" />
                    {article.readingTime}
                  </span>
                </div>
              </div>

              {/* Text info */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="font-mono text-[9px] text-slate-400 dark:text-zinc-500 block">
                    {article.date}
                  </span>
                  <h3 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-50 leading-snug group-hover:text-slate-750 dark:group-hover:text-slate-200 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed h-[50px] overflow-hidden">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-zinc-900/60">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
                  >
                    Read Essay
                    <FiArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-zinc-900/60 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-zinc-500">
        <span>[CHANNEL // MEDIUM]</span>
        <span>[FEED // 03 READS]</span>
      </div>
    </div>
  );
};
