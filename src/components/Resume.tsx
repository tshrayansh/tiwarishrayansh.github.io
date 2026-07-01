import React from 'react';
import { FiDownload } from 'react-icons/fi';
import aboutData from '../content/about.json';
import skillsData from '../content/skills.json';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title & Info Column */}
        <div className="md:col-span-4 text-left space-y-4">
          <div>
            <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              Curriculum Vitae
            </h2>
            <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
              Printable resume
            </p>
          </div>
          <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            You can download the full, formal academic PDF version of my CV by clicking the button below. This version includes detailed citation records, references, and administrative contributions.
          </p>
          
          <div className="pt-2">
            <a
              href="./resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <FiDownload className="h-4 w-4" />
              Download PDF CV
            </a>
          </div>
        </div>

        {/* Paper Document Preview Column */}
        <div className="md:col-span-8">
          <div className="w-full bg-slate-50/50 dark:bg-slate-900/10 rounded-2xl p-4 sm:p-6 border border-slate-200/60 dark:border-slate-800/60">
            {/* The "Paper" Container */}
            <div className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-900 shadow-sm rounded-xl p-8 sm:p-12 text-left font-sans text-slate-800 dark:text-slate-300 max-w-2xl mx-auto space-y-8 select-none transition-colors">
              {/* Document Header */}
              <div className="text-center space-y-2 border-b border-slate-100 dark:border-slate-900 pb-6">
                <h3 className="font-geist text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                  {aboutData.name}
                </h3>
                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Pune, MH, India | shrayansh@example.com | github.com/tshrayansh
                </p>
              </div>

              {/* Education Section */}
              <div className="space-y-3">
                <h4 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-900 pb-1">
                  Education
                </h4>
                <div className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-200">BS-MS Dual Degree (Biological Sciences)</span>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Indian Institute of Science Education and Research (IISER)</p>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 text-right">2023 - 2028 (Expected)</span>
                </div>
              </div>

              {/* Research Experience Section */}
              <div className="space-y-4">
                <h4 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-900 pb-1">
                  Research Interests
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Computational Neuroscience, Network Connectivity, Microglial dynamics in larvae Zebrafish modeling, Spatial Transcriptomics, and Fluidic Biogeochemical ecosystems.
                </p>
              </div>

              {/* Selected Coding Skills Section */}
              <div className="space-y-3">
                <h4 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-900 pb-1">
                  Technical Toolbox
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                  {skillsData.slice(0, 2).map((cat, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="font-bold text-slate-900 dark:text-slate-300">{cat.category}</span>
                      <p className="text-slate-500 dark:text-slate-400">{cat.skills.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Printable Footer Indicator */}
              <div className="text-center pt-4">
                <span className="font-mono text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  --- End of Page Preview ---
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
