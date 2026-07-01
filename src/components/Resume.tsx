import React from 'react';
import { FiDownload } from 'react-icons/fi';

export const Resume: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      {/* Museum Header */}
      <div className="space-y-1 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          06 // Curriculum Vitae
        </span>
        <h2 className="font-serif text-2xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          6. Curriculum Vitae
        </h2>
      </div>

      <div className="space-y-4 pt-2">
        <p className="text-sm text-zinc-700 dark:text-zinc-400 font-light leading-relaxed">
          A complete record of my educational background, academic collaborations, presentations, research positions, and teaching assistantships is compiled in my CV.
        </p>
        
        <div className="pt-2">
          <a
            href="./resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded border border-zinc-200 hover:border-zinc-900 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-50 text-zinc-800 dark:text-zinc-200 font-mono text-[10px] uppercase font-bold px-4 py-2 transition-colors cursor-pointer"
          >
            <FiDownload className="h-3.5 w-3.5" />
            <span>Download PDF CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};
