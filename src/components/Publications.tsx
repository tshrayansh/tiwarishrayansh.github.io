import React from 'react';
import publicationsData from '../content/publications.json';
import { FiFileText, FiLink, FiMapPin } from 'react-icons/fi';

export const Publications: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Publications &amp; Posters
        </h2>
        <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Scientific contributions
        </p>
      </div>

      <div className="space-y-4">
        {publicationsData.map((pub) => (
          <div 
            key={pub.id}
            className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm"
          >
            {/* Image thumbnail */}
            {pub.image && (
              <div className="w-full sm:w-1/4 h-24 bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-900 flex-shrink-0">
                <img
                  src={pub.image}
                  alt={pub.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Text content */}
            <div className="flex-grow flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-[8px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded border ${
                    pub.type === 'Publication'
                      ? 'bg-blue-50/50 border-blue-200 text-blue-800 dark:bg-blue-950/20 dark:border-blue-900/50 dark:text-blue-400'
                      : 'bg-green-50/50 border-green-200 text-green-800 dark:bg-green-950/20 dark:border-green-900/50 dark:text-green-400'
                  }`}>
                    {pub.type}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
                    {pub.date}
                  </span>
                </div>
                
                <h3 className="font-geist text-sm font-bold text-slate-900 dark:text-slate-50 leading-snug">
                  {pub.title}
                </h3>
                
                <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 leading-none">
                  Authors: <span className="italic">{pub.authors}</span>
                </p>

                <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500 leading-none">
                  <FiMapPin className="h-3 w-3" />
                  <span>{pub.venue}</span>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed pt-1.5">
                  {pub.abstract}
                </p>
              </div>

              {/* Link Buttons */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-slate-900/50">
                {pub.pdfLink && (
                  <a
                    href={pub.pdfLink}
                    className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
                  >
                    <FiFileText className="h-3.5 w-3.5" />
                    PDF
                  </a>
                )}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
                  >
                    <FiLink className="h-3.5 w-3.5" />
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
