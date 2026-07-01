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
import { Contact } from './components/Contact';
import { FiSun, FiMoon } from 'react-icons/fi';
import aboutData from './content/about.json';

const AppContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About & Focus' },
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
          <div className="space-y-12 animate-fade-in">
            <About />
            <Interests />
            <Contact />
          </div>
        );
      case 'research':
        return (
          <div className="space-y-12 animate-fade-in">
            <Projects />
            <Publications />
            <Skills />
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-12 animate-fade-in">
            <Experience />
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
    <div className="min-h-screen bg-white text-zinc-800 dark:bg-black dark:text-zinc-400 transition-colors duration-200 flex flex-col md:flex-row max-w-7xl mx-auto">
      
      {/* Sticky Left Sidebar */}
      <aside className="w-full md:w-80 md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-900 p-8 flex flex-col justify-between bg-white dark:bg-black z-30">
        <div className="space-y-10">
          
          {/* Profile & Name block */}
          <div className="space-y-4 text-left">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
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
                <span className="font-mono text-xs font-bold">🧬</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <h1 className="font-geist text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {aboutData.name}
              </h1>
              <p className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase font-semibold">
                {aboutData.title}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex flex-col gap-1.5 text-left">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-geist text-xs font-semibold px-4 py-2.5 rounded-md transition-all cursor-pointer text-left w-full ${
                  activeTab === tab.id
                    ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

        </div>

        {/* Sidebar Footer Controls */}
        <div className="flex items-center justify-between pt-8 border-t border-zinc-100 dark:border-zinc-900/60 text-xs font-mono text-zinc-450 dark:text-zinc-650">
          <span>S // 🧬 // 🏃</span>
          
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 dark:text-zinc-500 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
          </button>
        </div>

      </aside>

      {/* Main Dynamic Panel on the Right */}
      <section className="flex-1 p-8 md:p-12 lg:p-16 max-w-4xl">
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
