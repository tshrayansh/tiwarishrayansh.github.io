import React from 'react';
import runningData from '../content/running.json';
import { FiTrendingUp, FiMapPin, FiCalendar, FiHeart, FiInstagram } from 'react-icons/fi';

export const Running: React.FC = () => {
  return (
    <div className="space-y-12 text-left">
      {/* Museum Header */}
      <div className="space-y-1 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          04 // Field Logs &amp; Endurance
        </span>
        <h2 className="font-serif text-2xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          4. Field Logs &amp; Running
        </h2>
      </div>

      <p className="font-serif text-[15px] text-zinc-800 dark:text-zinc-300 leading-relaxed text-justify max-w-xl">
        {runningData.runningPhilosophy}
      </p>

      {/* Spaced lists of stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 text-xs">
        
        {/* Left Side: Stats and goals */}
        <div className="space-y-8">
          {/* Personal Bests */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
              <FiTrendingUp className="h-4 w-4" />
              Personal Bests
            </h3>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900/40 font-mono">
              {runningData.personalBests.map((pb, idx) => (
                <div key={idx} className="flex justify-between py-2 first:pt-0 last:pb-0">
                  <span className="text-zinc-500 dark:text-zinc-400">{pb.distance}</span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">{pb.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Goals */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
              <FiCalendar className="h-4 w-4" />
              Current Milestones
            </h3>
            <div className="space-y-3">
              {runningData.currentGoals.map((goal, idx) => (
                <div key={idx} className="space-y-0.5 font-sans">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-zinc-800 dark:text-zinc-250">{goal.title}</span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">{goal.status}</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-mono">Target: {goal.target}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Routes and Ascent Run Club */}
        <div className="space-y-8">
          {/* Favorite Routes */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
              <FiMapPin className="h-4 w-4" />
              Favorite Routes
            </h3>
            <div className="space-y-3">
              {runningData.favoriteRoutes.map((route, idx) => (
                <div key={idx} className="font-sans space-y-0.5">
                  <p className="font-medium text-zinc-800 dark:text-zinc-250">{route.name}</p>
                  <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                    {route.distance} &bull; +{route.elevation} Elevation
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ascent Run Club Info */}
          <div className="space-y-3 border-t border-zinc-100 dark:border-zinc-900/60 pt-4">
            <h3 className="font-serif text-sm font-semibold text-zinc-900 dark:text-zinc-200">
              {runningData.ascentRunClub.name}
            </h3>
            <p className="text-xs text-zinc-550 dark:text-zinc-400 font-light leading-relaxed font-sans">
              {runningData.ascentRunClub.whyStarted}
            </p>
            <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
              Weekly Run Schedule: {runningData.ascentRunClub.weeklyRuns}
            </p>
            <div className="flex gap-4 pt-1 text-[9px] font-mono font-bold uppercase tracking-wider">
              <a
                href={runningData.ascentRunClub.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <FiInstagram className="h-3 w-3" />
                <span>[instagram]</span>
              </a>
              <a
                href={runningData.stravaClubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <FiHeart className="h-3 w-3" />
                <span>[strava club]</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Side: Strava Live Widgets */}
      <div className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-900/60">
        <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
          <FiHeart className="h-4 w-4" />
          Live Strava Feed
        </h3>

        <div className="flex flex-col sm:flex-row gap-8 items-start justify-center pt-2">
          {/* Activity Summary Widget */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">Weekly Training Volume</span>
            <div className="w-[300px] h-[160px] overflow-hidden rounded bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center">
              <iframe 
                height="160" 
                width="300" 
                frameBorder="0" 
                allowTransparency={true} 
                scrolling="no" 
                src={runningData.stravaActivitySummaryUrl}
                title="Strava Activity Summary"
              />
            </div>
          </div>

          {/* Latest Rides/Runs Widget */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">Recent Runs</span>
            <div className="w-[300px] h-[454px] overflow-hidden rounded bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center">
              <iframe 
                height="454" 
                width="300" 
                frameBorder="0" 
                allowTransparency={true} 
                scrolling="no" 
                src={runningData.stravaLatestRidesUrl}
                title="Strava Latest Rides"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
