// Digital logbook and notes — Shrayansh Tiwari
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { About } from './components/About';
import { Work } from './components/Work';
import { Writing } from './components/Writing';
import { Now } from './components/Now';
import { Footer } from './components/Footer';
import { FiFileText } from 'react-icons/fi';
import aboutData from './content/about.json';

const AppContent: React.FC = () => {
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
    <div className="min-h-screen flex flex-col justify-between max-w-2xl mx-auto px-6 py-6 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      
      {/* Sticky Editorial Header */}
      <nav className="sticky top-0 bg-[#fbfaf7]/90 dark:bg-[#09090b]/90 backdrop-blur-md z-50 py-4 border-b border-zinc-200/50 dark:border-zinc-900/50 mb-12 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-base font-normal tracking-tight text-zinc-900 dark:text-zinc-50 cursor-pointer"
        >
          {aboutData.name}
        </button>

        <div className="flex gap-4 font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 font-bold uppercase">
          <button onClick={() => scrollToSection('about')} className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer">
            [about]
          </button>
          <button onClick={() => scrollToSection('work')} className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer">
            [work]
          </button>
          <button onClick={() => scrollToSection('writing')} className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer">
            [writing]
          </button>
          <button onClick={() => scrollToSection('now')} className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer">
            [now]
          </button>
          <a 
            href={aboutData.cv} 
            download
            className="hover:text-zinc-900 dark:hover:text-zinc-200 flex items-center gap-0.5"
          >
            <FiFileText className="h-3 w-3" />
            <span>[cv]</span>
          </a>
        </div>
      </nav>

      {/* Main Continuous Flow */}
      <main className="flex-grow space-y-16">
        
        {/* About Section */}
        <section id="about" className="pt-4">
          <About />
        </section>

        <hr className="border-zinc-200/40 dark:border-zinc-900/40" />

        {/* Work Section */}
        <section id="work" className="pt-4">
          <Work />
        </section>

        <hr className="border-zinc-200/40 dark:border-zinc-900/40" />

        {/* Writing Section */}
        <section id="writing" className="pt-4">
          <Writing />
        </section>

        <hr className="border-zinc-200/40 dark:border-zinc-900/40" />

        {/* Now Section */}
        <section id="now" className="pt-4">
          <Now />
        </section>

      </main>

      {/* Understated Monograph Footer */}
      <Footer />
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
