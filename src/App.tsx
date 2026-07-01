import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300 transition-colors duration-300">
        
        {/* Sticky Scrollspy Navbar */}
        <Navbar />

        {/* Main Content Layout Container */}
        <main className="mx-auto max-w-5xl px-6 md:px-8 space-y-4">
          <Hero />
          <About />
          <Interests />
          <Projects />
          <Experience />
          <Timeline />
          <Skills />
          <Publications />
          <Running />
          <Writing />
          <Resume />
          <Contact />
        </main>

        {/* Global Minimalist Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
