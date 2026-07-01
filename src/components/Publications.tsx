import React from 'react';
import publicationsData from '../content/publications.json';
import { FiFileText, FiLink } from 'react-icons/fi';

export const Publications: React.FC = () => {
  return (
    <div className="space-y-6 text-left pt-6">
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          Selected Posters &amp; Papers
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Scientific citations
        </p>
      </div>

      <div className="space-y-8 pt-4">
        {publicationsData.map((pub, index) => (
          <div 
            key={pub.id}
            className="flex gap-4 items-start relative pl-6"
          >
            {/* Index label */}
            <span className="absolute left-0 top-0.5 font-mono text-[10px] text-zinc-400 dark:text-zinc-650">
              [{index + 1}]
            </span>

            <div className="space-y-1.5 flex-grow">
              {/* Title */}
              <h4 className="font-serif text-sm font-medium text-zinc-900 dark:text-zinc-50 leading-snug">
                {pub.title}
              </h4>
              
              {/* Authors & Venue */}
              <div className="text-xs space-y-0.5 font-light">
                <p className="text-zinc-800 dark:text-zinc-300">
                  <span className="font-serif italic font-medium">{pub.authors}</span>
                </p>
                <p className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500">
                  {pub.venue} &bull; {pub.date}
                </p>
              </div>

              {/* Abstract */}
              <p className="text-xs text-zinc-550 dark:text-zinc-450 leading-relaxed font-light text-justify max-w-xl">
                {pub.abstract}
              </p>

              {/* Links */}
              <div className="flex gap-4 pt-1 font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                {pub.pdfLink && (
                  <a
                    href={pub.pdfLink}
                    className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1"
                  >
                    <FiFileText className="h-3 w-3" />
                    <span>[pdf]</span>
                  </a>
                )}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1"
                  >
                    <FiLink className="h-3 w-3" />
                    <span>[doi: {pub.doi}]</span>
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
