import React from 'react';
import publicationsData from '../content/publications.json';
import { FiFileText, FiLink } from 'react-icons/fi';

export const Publications: React.FC = () => {
  return (
    <div className="space-y-6 text-left pt-6">
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Selected Posters &amp; Papers
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">
          Scientific citations
        </p>
      </div>

      <div className="space-y-8 pt-4">
        {publicationsData.map((pub, index) => (
          <div 
            key={pub.id}
            className="flex gap-4 items-start border-l border-zinc-150 dark:border-zinc-900 pl-5 relative"
          >
            <span className="absolute -left-3.5 top-0 font-mono text-[10px] text-zinc-400 dark:text-zinc-650 bg-white dark:bg-black px-1.5">
              [{index + 1}]
            </span>

            <div className="space-y-2 flex-grow">
              <h4 className="font-serif text-sm font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                {pub.title}
              </h4>
              
              <div className="text-xs space-y-1 font-light">
                <p className="text-zinc-800 dark:text-zinc-300">
                  <span className="font-serif italic font-medium">{pub.authors}</span>
                </p>
                <p className="font-mono text-[9px] text-zinc-400 dark:text-zinc-550">
                  {pub.venue} &bull; {pub.date}
                </p>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light text-justify max-w-2xl">
                {pub.abstract}
              </p>

              <div className="flex gap-4 pt-1 font-mono text-[9px] font-bold uppercase tracking-wider">
                {pub.pdfLink && (
                  <a
                    href={pub.pdfLink}
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                  >
                    <FiFileText className="h-3 w-3" />
                    PDF Copy
                  </a>
                )}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                  >
                    <FiLink className="h-3 w-3" />
                    DOI: {pub.doi}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
