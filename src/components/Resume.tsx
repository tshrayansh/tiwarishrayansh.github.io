import React from 'react';
import { FiDownload } from 'react-icons/fi';
import aboutData from '../content/about.json';
import skillsData from '../content/skills.json';

export const Resume: React.FC = () => {
  return (
    <div className="space-y-8 text-left max-w-xl mx-auto">
      {/* Museum Header */}
      <div className="space-y-1.5 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-bold">
          Section VI // curriculum vitae
        </span>
        <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          VI. Curriculum Vitae
        </h2>
      </div>

      <div className="space-y-6 pt-2">
        <p className="text-xs text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
          You can download the full, formal academic PDF version of my CV by clicking the button below. This version includes detailed citation records, references, and administrative contributions.
        </p>
        
        <div>
          <a
            href="./resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <FiDownload className="h-4 w-4" />
            Download PDF CV
          </a>
        </div>

        {/* Paper Document Preview Block */}
        <div className="bg-slate-50/50 dark:bg-zinc-900/10 p-8 rounded-lg border border-slate-200/50 dark:border-zinc-800/60 font-sans text-slate-800 dark:text-zinc-350 text-left select-none space-y-6">
          <div className="text-center border-b border-slate-200/40 dark:border-zinc-800/40 pb-4">
            <h3 className="font-geist text-lg font-bold text-slate-900 dark:text-slate-50">
              {aboutData.name}
            </h3>
            <p className="font-mono text-[9px] text-slate-400 dark:text-zinc-500 mt-1">
              Pune, MH, India | shrayansh@example.com
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <span className="font-geist text-[9px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Education</span>
            <div className="flex justify-between">
              <span className="font-bold text-slate-900 dark:text-slate-200">BS-MS Dual Degree (Biological Sciences)</span>
              <span className="font-mono text-[9px] text-slate-400">2023 - 2028</span>
            </div>
            <p className="text-slate-550 dark:text-slate-450 text-[10px]">IISER Pune</p>
          </div>

          <div className="space-y-2 text-xs">
            <span className="font-geist text-[9px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Research Interests</span>
            <p className="text-slate-550 dark:text-slate-450 leading-relaxed font-light font-serif">
              Computational Biology, Neurobiology, Spatial Transcriptomics, and Fluidic Biogeochemical systems.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <span className="font-geist text-[9px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Core Toolbox</span>
            <p className="text-slate-550 dark:text-slate-450 leading-relaxed font-light font-mono">
              {skillsData[0].skills.join(', ')} &amp; {skillsData[1].skills.join(', ')}
            </p>
          </div>

          <div className="text-center pt-2">
            <span className="font-mono text-[8px] text-slate-350 dark:text-zinc-650 uppercase tracking-widest">
              — Document Preview —
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
