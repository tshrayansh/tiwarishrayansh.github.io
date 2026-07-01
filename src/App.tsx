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
    { id: 'about', label: 'Biography & Focus' },
    { id: 'research', label: 'Research & Projects' },
    { id: 'experience', label: 'Experience & Timeline' },
    { id: 'running', label: 'Running & Community' },
    { id: 'writing', label: 'Writing & Articles' },
    { id: 'resume', label: 'Curriculum Vitae' }
  ];

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-16 animate-fade-in text-left">
            <About />
            <Interests />
          </div>
        );
      case 'research':
        return (
          <div className="space-y-16 animate-fade-in text-left">
            <Projects />
            <Publications />
            <Skills />
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-16 animate-fade-in text-left">
            <Experience />
            <Timeline />
          </div>
        );
      case 'running':
        return (
          <div className="space-y-16 animate-fade-in text-left">
            <Running />
          </div>
        );
      case 'writing':
        return (
          <div className="space-y-16 animate-fade-in text-left">
            <Writing />
          </div>
        );
      case 'resume':
        return (
          <div className="space-y-16 animate-fade-in text-left">
            <Resume />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-650 dark:bg-black dark:text-zinc-400 transition-colors duration-200 flex flex-col md:flex-row max-w-6xl mx-auto">
      
      {/* Sticky Left Sidebar */}
      <aside className="w-full md:w-72 md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-900 p-8 flex flex-col justify-between bg-white dark:bg-black z-30">
        <div className="space-y-10">
          
          {/* Profile & Name Block */}
          <div className="space-y-4 text-left">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
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
            
            <div className="space-y-1">
              <h1 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {aboutData.name}
              </h1>
              <p className="font-mono text-[9px] text-zinc-450 dark:text-zinc-500 tracking-wider uppercase font-semibold">
                {aboutData.title}
              </p>
            </div>
          </div>

          {/* Navigation Tabs - Understated Indicator */}
          <nav className="flex flex-col gap-3.5 text-left border-l border-zinc-100 dark:border-zinc-900/60 pl-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-geist text-xs font-semibold pl-3 -ml-[1px] transition-all cursor-pointer text-left w-full border-l-2 py-0.5 ${
                  activeTab === tab.id
                    ? 'border-zinc-900 text-zinc-900 font-bold dark:border-zinc-50 dark:text-zinc-50'
                    : 'border-transparent text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

        </div>

        {/* Sidebar Footer Controls & Social Icons */}
        <div className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-900/60">
          {/* Quick social links */}
          <div className="flex gap-4 text-zinc-400 dark:text-zinc-500">
            <a href={aboutData.email} className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors" title="Email"><FiMail className="h-4.5 w-4.5" /></a>
            <a href={aboutData.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors" title="GitHub"><FiGithub className="h-4.5 w-4.5" /></a>
            <a href={aboutData.linkedinLink} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors" title="LinkedIn"><FiLinkedin className="h-4.5 w-4.5" /></a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors" title="Medium"><FiBookOpen className="h-4.5 w-4.5" /></a>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-650">
            <span>&copy; Shrayansh</span>
            
            <button
              onClick={toggleTheme}
              className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-50 dark:text-zinc-500 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <FiMoon className="h-3.5 w-3.5" /> : <FiSun className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

      </aside>

      {/* Main Dynamic Panel on the Right */}
      <section className="flex-1 p-8 md:p-12 lg:p-16 max-w-3xl overflow-y-auto">
        {renderActiveContent()}
      </section>

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
