import React from 'react';
import runningData from '../content/running.json';
import { FiTrendingUp, FiMapPin, FiCalendar, FiHeart, FiInstagram } from 'react-icons/fi';

export const Running: React.FC = () => {
  return (
    <section id="running" className="py-20 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Title & Philosophy Column (Left) */}
        <div className="lg:col-span-4 text-left space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-[10px] tracking-wider text-green-700 dark:text-green-500 uppercase px-2 py-0.5 bg-green-50 dark:bg-green-950/30 rounded font-semibold">
              Athletic Pursuit
            </span>
            <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              Endurance &amp; Flow
            </h2>
          </div>
          
          <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            {runningData.runningPhilosophy}
          </p>

          {/* Ascent Run Club Panel */}
          <div className="p-6 rounded-xl border border-slate-200/60 bg-white dark:border-slate-800/80 dark:bg-slate-950 space-y-4 shadow-sm">
            <div>
              <h3 className="font-geist text-sm font-bold text-slate-900 dark:text-slate-100">
                {runningData.ascentRunClub.name}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                Community Running Collective
              </p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              {runningData.ascentRunClub.whyStarted}
            </p>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3 rounded border border-slate-200/20 dark:border-slate-800/20">
              <span className="font-bold text-slate-700 dark:text-slate-300">Schedule:</span>
              <p className="mt-1">{runningData.ascentRunClub.weeklyRuns}</p>
            </div>
            <div className="flex gap-4 pt-1 text-xs">
              <a
                href={runningData.ascentRunClub.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer"
              >
                <FiInstagram className="h-3.5 w-3.5" />
                Instagram
              </a>
              <a
                href={runningData.stravaClubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer"
              >
                <FiHeart className="h-3.5 w-3.5 text-red-500" />
                Strava Club
              </a>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Column (Right) */}
        <div className="lg:col-span-8 text-left space-y-8">
          {/* Top stats block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Stats: Personal Bests */}
            <div className="p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-4">
              <h3 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <FiTrendingUp className="h-4 w-4" />
                Personal Bests
              </h3>
              <div className="divide-y divide-slate-100 dark:divide-slate-900">
                {runningData.personalBests.map((pb, idx) => (
                  <div key={idx} className="flex justify-between py-2.5 first:pt-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{pb.distance}</span>
                    <span className="font-mono text-sm font-bold text-slate-900 dark:text-slate-50">{pb.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals: Current Training Targets */}
            <div className="p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-4">
              <h3 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <FiCalendar className="h-4 w-4" />
                Current Goals
              </h3>
              <div className="space-y-3">
                {runningData.currentGoals.map((goal, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/10 p-3 rounded-lg border border-slate-100 dark:border-slate-900">
                    <div>
                      <p className="text-sm font-semibold text-slate-950 dark:text-slate-100 leading-snug">{goal.title}</p>
                      <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">Target: {goal.target}</p>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-green-50 border border-green-200 text-green-800 dark:bg-green-950/20 dark:border-green-900 dark:text-green-400">
                      {goal.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Routes: Favorite Trails */}
            <div className="p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-4 sm:col-span-2">
              <h3 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <FiMapPin className="h-4 w-4" />
                Favorite Trails &amp; Routes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {runningData.favoriteRoutes.map((route, idx) => (
                  <div key={idx} className="p-4 bg-slate-50/50 dark:bg-slate-900/10 rounded-lg border border-slate-100 dark:border-slate-900 space-y-1">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{route.name}</p>
                    <div className="flex gap-4 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span>Distance: {route.distance}</span>
                      <span>Gain: +{route.elevation}</span>
                    </div>
                    <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">Terrain: {route.terrain}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Strava Live Embeds Section */}
          <div className="space-y-4">
            <h3 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <FiHeart className="h-4 w-4 text-red-500 fill-red-500" />
              Live Strava Training Dashboard
            </h3>

            {/* Embed Containers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Activity Summary Widget */}
              <div className="flex flex-col items-center p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm gap-4">
                <div className="w-full text-left">
                  <h4 className="font-geist text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Weekly Training Load
                  </h4>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5">Strava Activity Summary</p>
                </div>
                
                <div className="w-[300px] h-[160px] overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center">
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
              <div className="flex flex-col items-center p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm gap-4">
                <div className="w-full text-left">
                  <h4 className="font-geist text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Recent Runs &amp; Rides
                  </h4>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5">Strava Feed</p>
                </div>
                
                <div className="w-[300px] h-[454px] overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center">
                  <iframe 
                    height="454" 
                    width="300" 
                    frameBorder="0" 
                    allowTransparency={true} 
                    scrolling="no" 
                    src={runningData.stravaLatestRidesUrl}
                    title="Strava Latest Runs"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
