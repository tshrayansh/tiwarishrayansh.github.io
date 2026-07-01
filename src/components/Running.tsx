import React from 'react';
import runningData from '../content/running.json';
import { FiTrendingUp, FiMapPin, FiCalendar, FiHeart, FiInstagram } from 'react-icons/fi';

export const Running: React.FC = () => {
  return (
    <div className="space-y-12 text-left">
      {/* Museum Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <div className="space-y-1.5">
          <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-bold">
            Section IV // athletic summary
          </span>
          <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            IV. Endurance &amp; Community
          </h2>
        </div>
      </div>

      <p className="text-sm md:text-base text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
        {runningData.runningPhilosophy}
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-2">
        
        {/* Left Side: Stats and Details */}
        <div className="lg:col-span-5 space-y-8">
          {/* Personal Bests */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 flex items-center gap-1.5">
              <FiTrendingUp className="h-4.5 w-4.5" />
              Personal Bests
            </h3>
            <div className="divide-y divide-slate-100 dark:divide-zinc-900/60 font-mono text-xs">
              {runningData.personalBests.map((pb, idx) => (
                <div key={idx} className="flex justify-between py-2 first:pt-0 last:pb-0">
                  <span className="text-slate-500 dark:text-zinc-400">{pb.distance}</span>
                  <span className="font-bold text-slate-900 dark:text-slate-50">{pb.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Goals */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 flex items-center gap-1.5">
              <FiCalendar className="h-4.5 w-4.5" />
              Current Goals
            </h3>
            <div className="space-y-2 text-xs">
              {runningData.currentGoals.map((goal, idx) => (
                <div key={idx} className="flex justify-between items-center bg-slate-50/50 dark:bg-zinc-900/10 p-2.5 rounded border border-slate-100 dark:border-zinc-900/40">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{goal.title}</p>
                    <p className="text-[9px] font-mono text-slate-400 dark:text-zinc-500 mt-0.5">Target: {goal.target}</p>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-150 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-400">
                    {goal.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Routes */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 flex items-center gap-1.5">
              <FiMapPin className="h-4.5 w-4.5" />
              Favorite Routes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {runningData.favoriteRoutes.map((route, idx) => (
                <div key={idx} className="p-3 bg-slate-50/50 dark:bg-zinc-900/10 rounded border border-slate-100 dark:border-zinc-900/40 space-y-1">
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{route.name}</p>
                  <div className="flex gap-3 text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                    <span>{route.distance}</span>
                    <span>+{route.elevation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ascent Run Club Info */}
          <div className="p-5 rounded-lg border border-slate-200/50 bg-slate-50/10 dark:border-zinc-900/60 dark:bg-zinc-950/10 space-y-3">
            <h3 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono">
              {runningData.ascentRunClub.name}
            </h3>
            <p className="text-[11px] text-slate-550 dark:text-zinc-400 font-light leading-relaxed font-sans">
              {runningData.ascentRunClub.whyStarted}
            </p>
            <div className="text-[10px] font-mono text-slate-550 dark:text-zinc-500">
              <span className="font-bold text-slate-700 dark:text-zinc-350">Schedule: </span>
              {runningData.ascentRunClub.weeklyRuns}
            </div>
            <div className="flex gap-4 pt-1 text-[10px] font-mono font-bold uppercase tracking-wider">
              <a
                href={runningData.ascentRunClub.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-slate-150 cursor-pointer"
              >
                <FiInstagram className="h-3.5 w-3.5" />
                Instagram
              </a>
              <a
                href={runningData.stravaClubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-slate-150 cursor-pointer"
              >
                <FiHeart className="h-3.5 w-3.5" />
                Strava Club
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Strava Live Widgets */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 flex items-center gap-1.5 border-b border-slate-100 dark:border-zinc-900/60 pb-2">
            <FiHeart className="h-4.5 w-4.5 text-red-500 fill-red-500" />
            Live Strava Feed
          </h3>

          <div className="flex flex-col sm:flex-row gap-6 items-start justify-center">
            {/* Activity Summary Widget */}
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">Weekly Summary</span>
              <div className="w-[300px] h-[160px] overflow-hidden rounded bg-slate-50 dark:bg-zinc-900 border border-slate-150 dark:border-zinc-900/80 flex items-center justify-center">
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
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">Recent Runs</span>
              <div className="w-[300px] h-[454px] overflow-hidden rounded bg-slate-50 dark:bg-zinc-900 border border-slate-150 dark:border-zinc-900/80 flex items-center justify-center">
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
    </div>
  );
};
