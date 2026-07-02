import React from 'react';
import workData from '../content/work.json';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  type: string;
  date: string;
  github?: string;
  documentation?: string;
  presentation?: string;
  publication?: string;
}

export const Work: React.FC = () => {
  const items: WorkItem[] = workData as WorkItem[];

  return (
    <div className="space-y-10 text-left">
      <div className="space-y-1">
        <h2 className="font-serif text-xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          Work &amp; Research
        </h2>
        <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Everything built, simulated, or studied
        </p>
      </div>

      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.id} className="space-y-2 group">
            {/* Title & Metadata Line */}
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] tracking-wider uppercase text-zinc-400 bg-zinc-50 dark:bg-zinc-900/60 px-1.5 py-0.5 rounded border border-zinc-200/20 dark:border-zinc-800/40">
                  {item.type}
                </span>
                <h3 className="font-serif text-base font-medium text-zinc-900 dark:text-zinc-50 leading-tight">
                  {item.title}
                </h3>
              </div>
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 font-bold">
                {item.date}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-700 dark:text-zinc-400 font-light leading-relaxed">
              {item.description}
            </p>

            {/* Links - Brackets only shown if populated */}
            <div className="flex flex-wrap gap-4 pt-1 font-mono text-[10px] text-zinc-450 dark:text-zinc-500">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors"
                >
                  [github]
                </a>
              )}
              {item.documentation && (
                <a
                  href={item.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors"
                >
                  [documentation]
                </a>
              )}
              {item.presentation && (
                <a
                  href={item.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors"
                >
                  [presentation]
                </a>
              )}
              {item.publication && (
                <a
                  href={item.publication}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors"
                >
                  [publication]
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Work;
