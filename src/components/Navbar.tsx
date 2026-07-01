import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Interests', id: 'interests' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Running', id: 'running' },
  { label: 'Publications', id: 'publications' },
  { label: 'Contact', id: 'contact' }
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [isOpen, setIsOpen] = useState(false);

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for sticky navbar

      // Special case: if scrolled near the bottom, highlight the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Initials */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-geist text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 hover:opacity-80 transition-opacity"
          >
            S<span className="font-light text-slate-400">.</span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-geist text-sm font-medium transition-colors hover:text-slate-900 dark:hover:text-slate-50 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-slate-900 dark:text-slate-50 border-b-2 border-slate-900 dark:border-slate-100 py-1'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Divider */}
            <span className="h-4 w-px bg-slate-200 dark:bg-slate-800" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <FiMoon className="h-4.5 w-4.5" /> : <FiSun className="h-4.5 w-4.5" />}
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-4">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <FiMoon className="h-4.5 w-4.5" /> : <FiSun className="h-4.5 w-4.5" />}
            </button>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 transition-colors">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-geist text-base font-medium py-1 transition-colors ${
                  activeSection === item.id
                    ? 'text-slate-900 dark:text-slate-50 font-bold border-l-2 border-slate-900 dark:border-slate-50 pl-2'
                    : 'text-slate-500 dark:text-slate-400 pl-2'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
