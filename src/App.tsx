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
      <div className="min-h-screen transition-colors duration-200">
        
        {/* Sticky floating Navbar */}
        <Navbar />

        {/* Main Content Layout Container */}
        <main className="mx-auto max-w-5xl px-6 md:px-8 space-y-16 py-10">
          
          {/* Hero Section */}
          <Hero />

          {/* About & Interests Column-Group */}
          <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-100 dark:border-zinc-900/60">
            <div className="lg:col-span-6">
              <About />
            </div>
            <div id="interests" className="lg:col-span-6">
              <Interests />
            </div>
          </section>

          {/* Research & Projects Section */}
          <section id="projects" className="pt-8 border-t border-slate-100 dark:border-zinc-900/60">
            <Projects />
          </section>

          {/* Experience & Timeline Column-Group */}
          <section id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-100 dark:border-zinc-900/60">
            <div className="lg:col-span-6">
              <Experience />
            </div>
            <div id="timeline" className="lg:col-span-6">
              <Timeline />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="pt-8 border-t border-slate-100 dark:border-zinc-900/60">
            <Skills />
          </section>

          {/* Printable Resume & Publications Column-Group */}
          <section id="publications" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-100 dark:border-zinc-900/60">
            <div id="resume" className="lg:col-span-5">
              <Resume />
            </div>
            <div className="lg:col-span-7">
              <Publications />
            </div>
          </section>

          {/* Running Dashboard Section */}
          <section id="running" className="pt-8 border-t border-slate-100 dark:border-zinc-900/60">
            <Running />
          </section>

          {/* Writing Section */}
          <section id="writing" className="pt-8 border-t border-slate-100 dark:border-zinc-900/60">
            <Writing />
          </section>

          {/* Contact Section */}
          <section id="contact" className="pt-8 border-t border-slate-100 dark:border-zinc-900/60">
            <Contact />
          </section>

        </main>

        {/* Global Minimalist Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
