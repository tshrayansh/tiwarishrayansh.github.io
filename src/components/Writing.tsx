import React from 'react';
import writingData from '../content/writing.json';

interface Essay {
  id: string;
  title: string;
  readingTime: string;
  date: string;
  summary: string;
  link: string;
}

export const Writing: React.FC = () => {
  const essays: Essay[] = writingData as Essay[];

  return (
    <div className="space-y-10 text-left">
      <div className="space-y-1">
        <h2 className="font-serif text-xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          Essays &amp; Notes
        </h2>
        <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Written logs on memory, computation, and movement
        </p>
      </div>

      <div className="space-y-8">
        {essays.map((essay) => (
          <div key={essay.id} className="space-y-2">
            {/* Date & Reading Time */}
            <div className="flex items-center gap-3 font-mono text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
              <span>{essay.date}</span>
              <span>&bull;</span>
              <span>{essay.readingTime}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-base font-medium text-zinc-900 dark:text-zinc-50 leading-snug">
              <a 
                href={essay.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-all"
              >
                {essay.title}
              </a>
            </h3>

            {/* Excerpt */}
            <p className="text-xs text-zinc-650 dark:text-zinc-400 font-light leading-relaxed font-sans">
              {essay.summary}
            </p>

            {/* Read link */}
            <div className="pt-1 font-mono text-[10px]">
              <a
                href={essay.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-450 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors"
              >
                [read on medium]
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Writing;
