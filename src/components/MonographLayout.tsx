import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../content/portfolio.json';

interface MonographLayoutProps {
  children: React.ReactNode[];
  sectionIds: string[];
  sectionLabels: string[];
}

export const MonographLayout: React.FC<MonographLayoutProps> = ({ children, sectionIds, sectionLabels }) => {
  const { name, title, email, github, linkedin } = portfolioData.personal;
  const [activeSection, setActiveSection] = useState('home');
  const [mobileTab, setMobileTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  // Initialize theme from system preference or previous storage
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Scroll spy observer for desktop view
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px' // Trigger active state near mid-screen
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-paper-light dark:bg-paper-dark text-ink-light dark:text-ink-dark transition-colors duration-300">
      
      {/* 1. DESKTOP VIEW GRID */}
      <div className="hidden lg:grid grid-cols-12 min-h-screen w-full relative">
        
        {/* Left Fixed Ledger Sidebar (4 cols) */}
        <aside className="col-span-4 h-screen sticky top-0 p-12 flex flex-col justify-between ledger-border-r bg-paper-light dark:bg-paper-dark z-10">
          
          {/* Brand/Signature */}
          <div className="space-y-2">
            <div className="font-serif text-2xl font-normal leading-none tracking-tight">{name}</div>
            <div className="font-mono text-[9px] text-muted-light dark:text-muted-dark tracking-widest uppercase">
              // {title}
            </div>
          </div>

          {/* Scrolling Index Guide */}
          <nav className="my-auto space-y-3 pl-2">
            <div className="font-mono text-[9px] text-muted-light/50 dark:text-muted-dark/50 tracking-wider mb-4 uppercase">
              [ monograph_contents ]
            </div>
            {sectionIds.map((id, index) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center gap-4 w-full text-left font-mono text-xs group transition-all duration-300"
                >
                  <span className={`transition-colors duration-300 ${isActive ? 'text-sage dark:text-ochre font-bold' : 'text-muted-light/40 dark:text-muted-dark/40 group-hover:text-ink-light dark:group-hover:text-ink-dark'}`}>
                    {String(index).padStart(2, '0')}
                  </span>
                  <span className={`h-[1px] transition-all duration-300 ${isActive ? 'w-8 bg-sage dark:bg-ochre' : 'w-4 bg-border-light dark:bg-border-dark group-hover:w-6'}`} />
                  <span className={`uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-ink-light dark:text-ink-dark font-bold' : 'text-muted-light dark:text-muted-dark group-hover:text-ink-light dark:group-hover:text-ink-dark'}`}>
                    {sectionLabels[index]}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Socials & Theme Toggle Footer */}
          <div className="space-y-6">
            <div className="flex gap-4 font-mono text-[10px]">
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-sage dark:hover:text-ochre transition-colors">[github]</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sage dark:hover:text-ochre transition-colors">[linkedin]</a>
              <a href={`mailto:${email}`} className="hover:text-sage dark:hover:text-ochre transition-colors">[email]</a>
            </div>

            <div className="flex justify-between items-center border-t border-border-light dark:border-border-dark pt-4">
              <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark">© 2026</span>
              <button
                onClick={toggleTheme}
                className="font-mono text-[9px] text-sage dark:text-ochre hover:underline font-bold"
              >
                {darkMode ? '[ LIGHT_MODE ]' : '[ DARK_MODE ]'}
              </button>
            </div>
          </div>
        </aside>

        {/* Right Scrollable Ledger Content (8 cols) */}
        <main className="col-span-8 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* 2. MOBILE VIEW (Folder Tab System) */}
      <div className="lg:hidden min-h-screen flex flex-col justify-between bg-paper-light dark:bg-paper-dark">
        
        {/* Mobile Header */}
        <header className="sticky top-0 bg-paper-light/95 dark:bg-paper-dark/95 backdrop-blur border-b border-border-light dark:border-border-dark p-4 z-20 flex justify-between items-center">
          <div>
            <div className="font-serif text-lg font-normal leading-none">{name}</div>
            <div className="font-mono text-[8px] text-muted-light dark:text-muted-dark uppercase tracking-wider">
              {title}
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="font-mono text-[9px] text-sage dark:text-ochre font-bold"
          >
            {darkMode ? '[ LGT ]' : '[ DRK ]'}
          </button>
        </header>

        {/* Mobile Sub-Header / Tab Navigation */}
        <div className="sticky top-[53px] bg-paper-light dark:bg-paper-dark overflow-x-auto border-b border-border-light dark:border-border-dark z-20 flex px-2 py-2 gap-1 scrollbar-none">
          {sectionIds.map((id, index) => {
            const isCurrent = mobileTab === id;
            return (
              <button
                key={id}
                onClick={() => setMobileTab(id)}
                className={`font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 rounded whitespace-nowrap transition-all duration-300 ${isCurrent ? 'bg-border-light dark:bg-border-dark text-sage dark:text-ochre font-bold' : 'text-muted-light dark:text-muted-dark'}`}
              >
                [{sectionLabels[index]}]
              </button>
            );
          })}
        </div>

        {/* Mobile Tab Contents with Animation */}
        <main className="flex-grow p-4 min-h-[70vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {children.find((child: any) => child.props.id === mobileTab)}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Mobile Footer */}
        <footer className="border-t border-border-light dark:border-border-dark p-4 flex justify-between items-center bg-paper-light dark:bg-paper-dark">
          <span className="font-mono text-[9px] text-muted-light/60 dark:text-muted-dark/60">© 2026 TIWARI</span>
          <div className="flex gap-3 font-mono text-[9px]">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-sage dark:text-ochre font-bold">[git]</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sage dark:text-ochre font-bold">[ln]</a>
            <a href={`mailto:${email}`} className="text-sage dark:text-ochre font-bold">[mail]</a>
          </div>
        </footer>
      </div>

    </div>
  );
};
