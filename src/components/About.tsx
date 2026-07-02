import React from 'react';
import aboutData from '../content/about.json';

export const About: React.FC = () => {
  return (
    <div className="space-y-12 text-left">
      {/* Narrative Biography */}
      <div className="space-y-6">
        {aboutData.narrative.map((paragraph, index) => (
          <p 
            key={index}
            className="font-serif text-base md:text-[17px] text-zinc-800 dark:text-zinc-200 leading-relaxed text-justify tracking-wide"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Strava Running Widgets - Quiet, Reinforcing Identity */}
      <div className="space-y-6 pt-6 border-t border-zinc-200/50 dark:border-zinc-900/50">
        <div className="space-y-1">
          <h3 className="font-serif text-lg font-medium text-zinc-900 dark:text-zinc-50 tracking-tight">
            Movement Log
          </h3>
          <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Physiology in real-time &bull; Live Strava feed
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-start justify-center pt-2">
          {/* Training Load Summary */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Weekly Training Volume</span>
            <div className="w-[300px] h-[160px] overflow-hidden rounded bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/30 dark:border-zinc-900/50 flex items-center justify-center">
              <iframe 
                height="160" 
                width="300" 
                frameBorder="0" 
                allowTransparency={true} 
                scrolling="no" 
                src={aboutData.stravaActivitySummaryUrl}
                title="Strava Weekly Summary"
              />
            </div>
          </div>

          {/* Recent Runs */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Recent Activities</span>
            <div className="w-[300px] h-[454px] overflow-hidden rounded bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/30 dark:border-zinc-900/50 flex items-center justify-center">
              <iframe 
                height="454" 
                width="300" 
                frameBorder="0" 
                allowTransparency={true} 
                scrolling="no" 
                src={aboutData.stravaLatestRidesUrl}
                title="Strava Recent Activities"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
