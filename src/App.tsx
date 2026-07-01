import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Publications } from './components/Publications';
import { Running } from './components/Running';
import { Writing } from './components/Writing';
import { Resume } from './components/Resume';
import { FiSun, FiMoon, FiMail, FiGithub, FiLinkedin, FiBookOpen } from 'react-icons/fi';
import aboutData from './content/about.json';

const TOC_ITEMS = [
  { id: 'about', roman: 'I', label: 'Biography' },
  { id: 'projects', roman: 'II', label: 'Research & Projects' },
  { id: 'experience', roman: 'III', label: 'Experience' },
  { id: 'running', roman: 'IV', label: 'Running & Strava' },
  { id: 'writing', roman: 'V', label: 'Writing' },
  { id: 'resume', roman: 'VI', label: 'Curriculum Vitae' }
];

const AppContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');

  // Track active section on scroll for TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 55) {
        setActiveSection('resume');
        return;
      }

      for (const item of TOC_ITEMS) {
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
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <div className="min-h-screen bg-transparent text-zinc-650 dark:text-zinc-400 transition-colors duration-300 max-w-4xl mx-auto px-6 py-20 md:py-32">
      
      {/* Desktop Floating Table of Contents (TOC) - Expanding on hover */}
      <aside className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 items-end z-50">
        {TOC_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3.5 cursor-pointer text-right"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
              {item.label}
            </span>
            <span className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-50 dark:text-zinc-950 dark:border-zinc-50 shadow-sm scale-110'
                : 'bg-white text-zinc-400 border-zinc-200 hover:border-zinc-900 hover:text-zinc-900 dark:bg-zinc-950 dark:border-zinc-900 dark:text-zinc-600 dark:hover:border-zinc-50 dark:hover:text-zinc-50'
            }`}>
              {item.roman}
            </span>
          </button>
        ))}
      </aside>

      {/* Mobile Floating Pill Navigation - Docks at bottom */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/80 shadow-lg flex gap-4 md:hidden text-[10px] font-mono font-bold">
        {TOC_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition-colors cursor-pointer ${
              activeSection === item.id 
                ? 'text-zinc-900 dark:text-zinc-50 underline decoration-2' 
                : 'text-zinc-400 dark:text-zinc-650'
            }`}
          >
            {item.roman}
          </button>
        ))}
      </div>

      {/* Centered Portfolio Header */}
      <header className="space-y-6 text-center pb-12 border-b border-zinc-200/60 dark:border-zinc-900/60">
        {/* Profile Picture */}
        <div className="mx-auto w-20 h-20 rounded-full overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center shadow-xs">
          <img 
            src="./profile.jpeg" 
            alt={aboutData.name} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const fallback = parent.querySelector('.svg-fallback');
                if (fallback) fallback.classList.remove('hidden');
              }
            }}
          />
          <div className="svg-fallback hidden absolute inset-0 flex items-center justify-center text-zinc-400">
            <span className="font-mono text-xs">🧬</span>
          </div>
        </div>

        {/* Name & Title */}
        <div className="space-y-2">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {aboutData.name}
          </h1>
          <p className="font-mono text-[10px] text-zinc-450 dark:text-zinc-500 tracking-widest uppercase font-semibold">
            {aboutData.title}
          </p>
        </div>

        {/* Minimalist Contact Link Row */}
        <div className="flex gap-6 justify-center text-zinc-400 dark:text-zinc-500 pt-1">
          <a href={aboutData.email} className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors" title="Email"><FiMail className="h-4.5 w-4.5" /></a>
          <a href={aboutData.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors" title="GitHub"><FiGithub className="h-4.5 w-4.5" /></a>
          <a href={aboutData.linkedinLink} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors" title="LinkedIn"><FiLinkedin className="h-4.5 w-4.5" /></a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors" title="Medium"><FiBookOpen className="h-4.5 w-4.5" /></a>
        </div>
      </header>

      {/* Main Curated Single-Page Grid Flow */}
      <div className="space-y-28 py-16">
        
        {/* Section I: Biography & Focus */}
        <section id="about" className="space-y-12">
          <About />
          <Interests />
        </section>

        {/* Section II: Selected Research & Builds */}
        <section id="projects" className="space-y-12">
          <Projects />
          <Publications />
          <Skills />
        </section>

        {/* Section III: Academic Experience & Timeline */}
        <section id="experience" className="space-y-12">
          <Experience />
          <Timeline />
        </section>

        {/* Section IV: Running & Ascent Run Club */}
        <section id="running">
          <Running />
        </section>

        {/* Section V: Medium Writing */}
        <section id="writing">
          <Writing />
        </section>

        {/* Section VI: Printable CV Document */}
        <section id="resume">
          <Resume />
        </section>

      </div>

      {/* Footer controls & theme switch */}
      <footer className="border-t border-zinc-200/60 dark:border-zinc-900/60 pt-10 mt-16 flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-650">
        <span>&copy; {new Date().getFullYear()} Shrayansh. Curated Portfolio &bull; React &amp; Vite.</span>
        
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 text-zinc-400 hover:bg-zinc-50 dark:text-zinc-500 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
        </button>
      </footer>

    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
