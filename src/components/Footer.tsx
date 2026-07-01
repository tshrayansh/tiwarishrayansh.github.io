import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">
      <div className="flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto px-6">
        
        {/* Quote about curiosity/science */}
        <div className="text-center max-w-lg space-y-2">
          <p className="font-geist italic text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            "The important thing is not to stop questioning. Curiosity has its own reason for existence."
          </p>
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
            — Albert Einstein
          </span>
        </div>

        {/* Technical credit and copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full border-t border-slate-100 dark:border-slate-900 pt-6 gap-4 text-xs font-mono text-slate-400">
          <span>
            &copy; {currentYear} Shrayansh. All rights reserved.
          </span>
          <span className="text-right">
            Built with React &bull; Vite &bull; TypeScript &bull; Tailwind CSS v4
          </span>
        </div>

      </div>
    </footer>
  );
};
