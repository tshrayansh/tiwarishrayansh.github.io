import React from 'react';
import publicationsData from '../content/publications.json';
import { FiFileText, FiLink, FiMapPin } from 'react-icons/fi';

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title Column */}
        <div className="md:col-span-4 text-left">
          <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Publications & Posters
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
            Scientific contributions
          </p>
        </div>

        {/* Publications list */}
        <div className="md:col-span-8 text-left space-y-8">
          {publicationsData.map((pub) => (
            <div 
              key={pub.id}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm"
            >
              {/* Image thumbnail (if provided) */}
              {pub.image && (
                <div className="w-full sm:w-1/3 h-40 bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-900 flex-shrink-0">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Text content */}
              <div className="flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${
                      pub.type === 'Publication'
                        ? 'bg-blue-50/50 border-blue-200 text-blue-800 dark:bg-blue-950/20 dark:border-blue-900 dark:text-blue-400'
                        : 'bg-green-50/50 border-green-200 text-green-800 dark:bg-green-950/20 dark:border-green-900 dark:text-green-400'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                      {pub.date}
                    </span>
                  </div>
                  
                  <h3 className="font-geist text-base font-bold text-slate-900 dark:text-slate-50">
                    {pub.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    Authors: <span className="italic">{pub.authors}</span>
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <FiMapPin className="h-3.5 w-3.5" />
                    <span>{pub.venue}</span>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-500 font-light leading-relaxed pt-1.5">
                    {pub.abstract}
                  </p>
                </div>

                {/* Link Buttons */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-900">
                  {pub.pdfLink && (
                    <a
                      href={pub.pdfLink}
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
                    >
                      <FiFileText className="h-3.5 w-3.5" />
                      PDF Document
                    </a>
                  )}
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
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
    </section>
  );
};
