import React from 'react';
import writingData from '../content/writing.json';
import { FiClock, FiArrowRight } from 'react-icons/fi';

export const Writing: React.FC = () => {
  return (
    <div className="space-y-8 text-left">
      {/* Museum Header */}
      <div className="space-y-1 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          05 // Essays &amp; Notes
        </span>
        <h2 className="font-serif text-2xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          5. Essays &amp; Notes
        </h2>
      </div>

      {/* Text List of Essays */}
      <div className="space-y-8">
        {writingData.map((article) => (
          <div 
            key={article.id}
            className="space-y-2"
          >
            {/* Date & Reading Time */}
            <div className="flex items-center gap-3 font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
              <span>{article.date}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <FiClock className="h-3 w-3" />
                {article.readingTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-base font-medium text-zinc-900 dark:text-zinc-50 leading-snug">
              {article.title}
            </h3>

            {/* Summary */}
            <p className="text-xs text-zinc-550 dark:text-zinc-400 font-light leading-relaxed font-sans max-w-xl">
              {article.summary}
            </p>

            {/* Link */}
            <div className="pt-1 font-mono text-[10px]">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors inline-flex items-center gap-1.5"
              >
                <span>[read essay]</span>
                <FiArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
