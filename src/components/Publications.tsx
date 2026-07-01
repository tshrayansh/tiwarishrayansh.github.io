import React from 'react';
import publicationsData from '../content/publications.json';
import { FiFileText, FiLink } from 'react-icons/fi';

export const Publications: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1.5">
        <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 dark:text-emerald-500 font-semibold">
          Bibliography
        </span>
        <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Publications &amp; Posters
        </h2>
      </div>

      <div className="space-y-8 pt-4">
        {publicationsData.map((pub, index) => (
          <div 
            key={pub.id}
            className="flex gap-4 items-start border-l border-zinc-100 dark:border-zinc-900 pl-5 relative"
          >
            {/* Citation Index Number */}
            <span className="absolute -left-3.5 top-0 font-mono text-[10px] text-zinc-400 dark:text-zinc-650 bg-white dark:bg-black px-1.5">
              [{index + 1}]
            </span>

            <div className="space-y-2 flex-grow">
              {/* Title */}
              <h3 className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                {pub.title}
              </h3>
              
              {/* Authors & Venue */}
              <div className="text-xs space-y-1 font-light">
                <p className="text-zinc-800 dark:text-zinc-300">
                  <span className="font-serif italic font-medium">{pub.authors}</span>
                </p>
                <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                  {pub.venue} &bull; {pub.date}
                </p>
              </div>

              {/* Abstract */}
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light text-justify max-w-2xl">
                {pub.abstract}
              </p>

              {/* Action Buttons */}
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
