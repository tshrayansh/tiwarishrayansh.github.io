import React from 'react';
import { FiDownload } from 'react-icons/fi';
import aboutData from '../content/about.json';
import skillsData from '../content/skills.json';

export const Resume: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Curriculum Vitae
        </h2>
        <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Printable resume
        </p>
      </div>

      <div className="p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-6">
        <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
          You can download the full, formal academic PDF version of my CV by clicking the button below. This version includes detailed citation records, references, and administrative contributions.
        </p>
        
        <div>
          <a
            href="./resume.pdf"
            download
            className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <FiDownload className="h-4 w-4" />
            Download PDF CV
          </a>
        </div>

        {/* Paper Document Preview Block */}
        <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-lg border border-slate-200/50 dark:border-slate-800/50 font-sans text-slate-800 dark:text-slate-300 text-left select-none space-y-4">
          <div className="text-center border-b border-slate-200/50 dark:border-slate-800/50 pb-3">
            <h3 className="font-geist text-base font-bold text-slate-900 dark:text-slate-50">
              {aboutData.name}
            </h3>
            <p className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5">
              Pune, MH, India | shrayansh@example.com
            </p>
          </div>

          <div className="space-y-2 text-[11px]">
            <span className="font-geist text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Education</span>
            <div className="flex justify-between">
              <span className="font-bold text-slate-900 dark:text-slate-200">BS-MS Dual Degree</span>
              <span className="font-mono text-[10px] text-slate-400">2023 - 2028</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-[10px]">IISER Pune</p>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <span className="font-geist text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Core Toolbox</span>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              {skillsData[0].skills.join(', ')} &amp; {skillsData[1].skills.join(', ')}
            </p>
          </div>

          <div className="text-center pt-2">
            <span className="font-mono text-[8px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              — Document Preview —
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
