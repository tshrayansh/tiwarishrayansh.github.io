import React from 'react';
import { MonographLayout } from './components/MonographLayout';
import { AboutSection } from './components/AboutSection';
import { ResearchSection } from './components/ResearchSection';
import { WritingSection } from './components/WritingSection';
import { PhotographySection } from './components/PhotographySection';
import { RunningSection } from './components/RunningSection';

const App: React.FC = () => {
  const sectionIds = ['section-about', 'section-research', 'section-writing', 'section-photography', 'section-running'];
  const sectionLabels = ['about', 'dossier', 'writing', 'optics', 'metabolic'];

  return (
    <MonographLayout sectionIds={sectionIds} sectionLabels={sectionLabels}>
      <div id="section-about" key="section-about">
        <AboutSection />
      </div>
      <div id="section-research" key="section-research">
        <ResearchSection />
      </div>
      <div id="section-writing" key="section-writing">
        <WritingSection />
      </div>
      <div id="section-photography" key="section-photography">
        <PhotographySection />
      </div>
      <div id="section-running" key="section-running">
        <RunningSection />
      </div>
    </MonographLayout>
  );
};

export default App;
