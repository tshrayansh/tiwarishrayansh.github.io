import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Bio', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Timeline', id: 'experience' },
  { label: 'Running', id: 'running' },
  { label: 'Publications', id: 'publications' },
  { label: 'Contact', id: 'contact' }
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [isOpen, setIsOpen] = useState(false);

  // Scrollspy to detect active viewport section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80 px-4 py-2 flex items-center justify-between shadow-lg transition-all duration-300">
      
      {/* Brand Icon */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-mono text-xs font-extrabold tracking-widest text-slate-900 dark:text-slate-50 uppercase pl-2 hover:opacity-75 transition-opacity"
      >
        S//🧬
      </button>

      {/* Nav List */}
      <div className="hidden md:flex items-center gap-1.5">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`font-geist text-xs font-semibold px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeSection === item.id
                ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-950 shadow-sm'
                : 'text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-50 transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <FiMoon className="h-3.5 w-3.5" /> : <FiSun className="h-3.5 w-3.5" />}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 p-4 rounded-3xl border border-slate-200/80 bg-white/95 dark:border-slate-800/80 dark:bg-slate-950/95 shadow-xl md:hidden flex flex-col gap-2 transition-all">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left font-geist text-sm font-semibold py-2 px-4 rounded-xl transition-all ${
                activeSection === item.id
                  ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-950'
                  : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
