import React from 'react';
import { MonographLayout } from './components/MonographLayout';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WritingSection } from './components/WritingSection';
import { PhotographySection } from './components/PhotographySection';
import { AcademicsSection } from './components/AcademicsSection';
import { RunningSection } from './components/RunningSection';

const App: React.FC = () => {
  const sectionIds = ['section-home', 'section-about', 'section-projects', 'section-writing', 'section-photography', 'section-academics', 'section-running'];
  const sectionLabels = ['home', 'about', 'work', 'writing', 'optics', 'dossier', 'metabolic'];

  const handleNavigate = (label: string) => {
    const el = document.getElementById(`section-${label}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MonographLayout sectionIds={sectionIds} sectionLabels={sectionLabels}>
      <div id="section-home" key="section-home">
        <HomeSection onNavigate={handleNavigate} />
      </div>
      <div id="section-about" key="section-about">
        <AboutSection />
      </div>
      <div id="section-projects" key="section-projects">
        <ProjectsSection />
      </div>
      <div id="section-writing" key="section-writing">
        <WritingSection />
      </div>
      <div id="section-photography" key="section-photography">
        <PhotographySection />
      </div>
      <div id="section-academics" key="section-academics">
        <AcademicsSection />
      </div>
      <div id="section-running" key="section-running">
        <RunningSection />
      </div>
    </MonographLayout>
  );
};

export default App;
