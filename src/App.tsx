import React from 'react';
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

const SECTIONS = [
  { id: 'biography', num: '1', title: 'Biography' },
  { id: 'research', num: '2', title: 'Selected Research' },
  { id: 'experience', num: '3', title: 'Academic Experience' },
  { id: 'running', num: '4', title: 'Field Logs & Running' },
  { id: 'writing', num: '5', title: 'Essays & Notes' },
  { id: 'resume', num: '6', title: 'Curriculum Vitae' }
];

const AppContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40;
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
    <div className="min-h-screen bg-transparent text-zinc-600 dark:text-zinc-400 transition-colors duration-300 max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-20 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      
      {/* Editorial Header */}
      <header className="space-y-4 text-left">
        <div className="space-y-2">
          <h1 className="font-serif text-3xl md:text-4xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
            {aboutData.name}
          </h1>
          <p className="font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            {aboutData.title}
          </p>
        </div>

        {/* Minimalist Contact Links */}
        <div className="flex gap-5 text-zinc-400 dark:text-zinc-500 text-xs font-mono">
          <a href={aboutData.email} className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1.5" title="Email">
            <FiMail className="h-3.5 w-3.5" />
            <span>Email</span>
          </a>
          <a href={aboutData.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1.5" title="GitHub">
            <FiGithub className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <a href={aboutData.linkedinLink} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1.5" title="LinkedIn">
            <FiLinkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1.5" title="Medium">
            <FiBookOpen className="h-3.5 w-3.5" />
            <span>Medium</span>
          </a>
        </div>
      </header>

      {/* Book-Style Table of Contents (TOC) */}
      <section className="space-y-4 border-t border-b border-zinc-200/50 dark:border-zinc-900/50 py-8">
        <h2 className="font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-bold">
          Contents
        </h2>
        <nav className="space-y-2 text-sm font-serif">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="flex justify-between items-baseline w-full text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 cursor-pointer group text-left"
            >
              <span className="flex gap-2">
                <span className="font-mono text-xs text-zinc-400">{sec.num}.</span>
                <span className="group-hover:underline">{sec.title}</span>
              </span>
              <span className="border-b border-dotted border-zinc-250 dark:border-zinc-800 flex-grow mx-4 h-2 opacity-50" />
              <span className="font-mono text-xs text-zinc-400">0{sec.num}</span>
            </button>
          ))}
        </nav>
      </section>

      {/* Main Continuous Document Sections */}
      <div className="space-y-20">
        
        {/* Section 1: Biography */}
        <section id="biography" className="space-y-12">
          <About />
          <Interests />
        </section>

        <hr />

        {/* Section 2: Selected Research & Projects */}
        <section id="research" className="space-y-12">
          <Projects />
          <Publications />
          <Skills />
        </section>

        <hr />

        {/* Section 3: Academic Experience & Chronology */}
        <section id="experience" className="space-y-12">
          <Experience />
          <Timeline />
        </section>

        <hr />

        {/* Section 4: Running */}
        <section id="running">
          <Running />
        </section>

        <hr />

        {/* Section 5: Essays & Notes */}
        <section id="writing">
          <Writing />
        </section>

        <hr />

        {/* Section 6: CV */}
        <section id="resume">
          <Resume />
        </section>

      </div>

      {/* Footer controls & theme switch */}
      <footer className="border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8 mt-16 flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
        <span>&copy; {new Date().getFullYear()} Shrayansh. Printed in digital format.</span>
        
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 dark:text-zinc-500 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <FiSun className="h-3.5 w-3.5" /> : <FiMoon className="h-3.5 w-3.5" />}
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
