import React from 'react';
import portfolioData from '../content/portfolio.json';

export const RunningSection: React.FC = () => {
  const { stats, highlights } = portfolioData.running;

  return (
    <section id="running" className="min-h-screen py-20 px-6 md:px-12 relative overflow-hidden bg-paper-light dark:bg-paper-dark">
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />

      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-16">
        <span className="font-mono text-xs text-sage">[ SEC. 05 // METABOLICS ]</span>
        <h2 className="text-3xl md:text-4xl font-serif font-normal">Endurance Logs</h2>
        <div className="h-[1px] flex-grow ledger-border-b opacity-45" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
        {/* Left Side: Stats and Highlights (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-sage dark:text-ochre">// PHYSIOLOGICAL_PARAMETERS</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-border-light dark:border-border-dark p-4 rounded bg-paper-light dark:bg-paper-dark">
                <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase tracking-wider block">Weekly Volume</span>
                <span className="font-serif text-lg text-ink-light dark:text-ink-dark font-normal">{stats.weeklyVolume}</span>
              </div>
              <div className="border border-border-light dark:border-border-dark p-4 rounded bg-paper-light dark:bg-paper-dark">
                <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase tracking-wider block">Personal Best (42.2k)</span>
                <span className="font-serif text-lg text-ink-light dark:text-ink-dark font-normal">{stats.personalBest}</span>
              </div>
              <div className="border border-border-light dark:border-border-dark p-4 rounded bg-paper-light dark:bg-paper-dark">
                <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase tracking-wider block">Events Paced</span>
                <span className="font-serif text-lg text-ink-light dark:text-ink-dark font-normal">{stats.marathons}</span>
              </div>
              <div className="border border-border-light dark:border-border-dark p-4 rounded bg-paper-light dark:bg-paper-dark">
                <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase tracking-wider block">Target Event</span>
                <span className="font-serif text-sm text-ink-light dark:text-ink-dark font-normal block leading-tight pt-1">{stats.nextRace}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs text-sage dark:text-ochre">// ATHLETIC_HIGHLIGHTS</h3>
            <ul className="space-y-3 font-serif text-sm text-muted-light dark:text-muted-dark pl-0 list-none">
              {highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-mono text-sage dark:text-ochre">[{idx + 1}]</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Strava Placement Frame (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-mono text-xs text-sage dark:text-ochre">// STRAVA_WIDGETS_FRAME</h3>
          
          {/* Custom structured double card framework ready for embeds */}
          <div className="border border-dashed border-border-light dark:border-border-dark p-6 rounded bg-paper-light/50 dark:bg-paper-dark/50 flex flex-col items-center justify-center min-h-[360px] text-center space-y-6">
            <div className="w-12 h-12 rounded-full border border-dashed border-sage/50 dark:border-ochre/50 flex items-center justify-center">
              <span className="font-mono text-xs text-sage dark:text-ochre">GPS</span>
            </div>

            <div className="max-w-xs space-y-2">
              <h4 className="font-serif text-base font-normal">Active Strava Embed Frame</h4>
              <p className="font-mono text-[10px] text-muted-light dark:text-muted-dark leading-relaxed">
                [ Ready for summary widgets: height='160' & latest activity feed widgets: height='454' ]
              </p>
            </div>

            <div className="border border-border-light dark:border-border-dark bg-paper-light dark:bg-paper-dark p-3 rounded font-mono text-[9px] text-muted-light dark:text-muted-dark select-all max-w-sm overflow-x-auto text-left leading-normal">
              <code>{`<!-- Place your Strava iframe widgets here later -->
<iframe height='160' width='300' frameborder='0' src='https://www.strava.com/athletes/.../activity-summary/...' />`}</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
