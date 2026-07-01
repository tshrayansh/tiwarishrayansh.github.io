import React, { useState } from 'react';
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

const AppContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'Biography' },
    { id: 'research', label: 'Projects & Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'running', label: 'Running' },
    { id: 'writing', label: 'Writing' },
    { id: 'resume', label: 'CV' }
  ];

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-12 animate-fade-in">
            <About />
            <div className="h-px bg-zinc-100 dark:bg-zinc-900/60 my-6" />
            <Interests />
          </div>
        );
      case 'research':
        return (
          <div className="space-y-12 animate-fade-in">
            <Projects />
            <div className="h-px bg-zinc-100 dark:bg-zinc-900/60 my-6" />
            <Publications />
            <div className="h-px bg-zinc-100 dark:bg-zinc-900/60 my-6" />
            <Skills />
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-12 animate-fade-in">
            <Experience />
            <div className="h-px bg-zinc-100 dark:bg-zinc-900/60 my-6" />
            <Timeline />
          </div>
        );
      case 'running':
        return (
          <div className="space-y-12 animate-fade-in">
            <Running />
          </div>
        );
      case 'writing':
        return (
          <div className="space-y-12 animate-fade-in">
            <Writing />
          </div>
        );
      case 'resume':
        return (
          <div className="space-y-12 animate-fade-in">
            <Resume />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-650 dark:bg-black dark:text-zinc-400 transition-colors duration-200 flex flex-col justify-between max-w-2xl mx-auto px-6 py-12 md:py-16">
      
      {/* Centered Portfolio Header */}
      <header className="space-y-6 text-center border-b border-zinc-100 dark:border-zinc-900/60 pb-8">
        {/* Profile Picture */}
        <div className="mx-auto w-16 h-16 rounded-full overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
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
        <div className="space-y-1.5">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {aboutData.name}
          </h1>
          <p className="font-mono text-[9px] text-zinc-450 dark:text-zinc-500 tracking-wider uppercase font-semibold">
            {aboutData.title}
          </p>
        </div>

        {/* Minimalist Contact Link Row */}
        <div className="flex gap-5 justify-center text-zinc-400 dark:text-zinc-500 pt-1">
          <a href={aboutData.email} className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors" title="Email"><FiMail className="h-4 w-4" /></a>
          <a href={aboutData.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors" title="GitHub"><FiGithub className="h-4 w-4" /></a>
          <a href={aboutData.linkedinLink} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors" title="LinkedIn"><FiLinkedin className="h-4 w-4" /></a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-250 transition-colors" title="Medium"><FiBookOpen className="h-4 w-4" /></a>
        </div>
      </header>

      {/* Sticky Horizontal Navigation Bar */}
      <div className="sticky top-0 bg-white/95 dark:bg-black/95 backdrop-blur-xs z-40 border-b border-zinc-100 dark:border-zinc-900/60 py-2.5 my-6 overflow-x-auto scrollbar-none flex items-center justify-between">
        <nav className="flex gap-5 text-left md:justify-center w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-geist text-[11px] font-bold uppercase tracking-wider pb-1.5 border-b-2 cursor-pointer transition-colors ${
                activeTab === tab.id
                  ? 'border-zinc-900 text-zinc-900 dark:border-zinc-50 dark:text-zinc-50'
                  : 'border-transparent text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Dynamic Panel */}
      <main className="flex-grow py-4 min-h-[300px]">
        {renderActiveContent()}
      </main>

      {/* Footer controls */}
      <footer className="border-t border-zinc-100 dark:border-zinc-900/60 pt-8 mt-16 flex items-center justify-between text-[9px] font-mono text-zinc-400 dark:text-zinc-650">
        <span>&copy; {new Date().getFullYear()} Shrayansh. Built with React &amp; Vite.</span>
        
        <button
          onClick={toggleTheme}
          className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-50 dark:text-zinc-500 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <FiMoon className="h-3.5 w-3.5" /> : <FiSun className="h-3.5 w-3.5" />}
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
