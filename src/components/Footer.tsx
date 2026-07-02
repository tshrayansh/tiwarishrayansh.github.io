import React from 'react';
import { FiSun, FiMoon, FiFileText } from 'react-icons/fi';
import { useTheme } from './ThemeContext';
import aboutData from '../content/about.json';

export const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8 mt-16 flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-650">
      <div className="flex items-center gap-4">
        <span>&copy; {currentYear} Shrayansh Tiwari.</span>
        <span>&bull;</span>
        <a 
          href={aboutData.cv}
          download
          className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1 font-bold"
        >
          <FiFileText className="h-3 w-3" />
          <span>[download cv]</span>
        </a>
      </div>
      
      <button
        onClick={toggleTheme}
        className="rounded-full p-2 text-zinc-400 hover:bg-zinc-50 dark:text-zinc-500 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
      </button>
    </footer>
  );
};
export default Footer;
