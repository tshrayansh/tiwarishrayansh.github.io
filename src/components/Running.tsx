import React from 'react';
import runningData from '../content/running.json';
import { FiTrendingUp, FiMapPin, FiCalendar, FiInstagram, FiHeart, FiExternalLink } from 'react-icons/fi';

export const Running: React.FC = () => {
  return (
    <section id="running" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title & Philosophy Column */}
        <div className="md:col-span-4 text-left space-y-4">
          <div>
            <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              Endurance & Community
            </h2>
            <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
              Running & Ascent Run Club
            </p>
          </div>
          <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            {runningData.runningPhilosophy}
          </p>
          
          {/* Ascent Run Club Panel */}
          <div className="p-5 rounded-xl border border-green-200/50 bg-green-50/20 dark:border-green-950/30 dark:bg-green-950/10 space-y-3">
            <h3 className="font-geist text-sm font-bold text-green-800 dark:text-green-400 flex items-center gap-1.5">
              <span>{runningData.ascentRunClub.name}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              {runningData.ascentRunClub.whyStarted}
            </p>
            <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-slate-900/60 p-2.5 rounded border border-slate-200/30 dark:border-slate-800/30">
              <span className="font-bold text-slate-700 dark:text-slate-300">Weekly Schedule:</span>
              <p className="mt-1">{runningData.ascentRunClub.weeklyRuns}</p>
            </div>
            <div className="flex gap-3 pt-1">
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

        {/* Dashboard Grid Column */}
        <div className="md:col-span-8 text-left space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Stats: Personal Bests */}
            <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-4">
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
            <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-4">
              <h3 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <FiCalendar className="h-4 w-4" />
                Current Goals
              </h3>
              <div className="space-y-3">
                {runningData.currentGoals.map((goal, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/20 p-2.5 rounded border border-slate-100 dark:border-slate-900">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">{goal.title}</p>
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
            <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-4 sm:col-span-2">
              <h3 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <FiMapPin className="h-4 w-4" />
                Favorite Local Trails & Routes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {runningData.favoriteRoutes.map((route, idx) => (
                  <div key={idx} className="p-3 bg-slate-50/50 dark:bg-slate-900/10 rounded-lg border border-slate-100 dark:border-slate-900 space-y-1">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{route.name}</p>
                    <div className="flex gap-3 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span>Distance: {route.distance}</span>
                      <span>Gain: +{route.elevation}</span>
                    </div>
                    <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">Terrain: {route.terrain}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Strava Embed / Simulation Card */}
            <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-4 sm:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="font-geist text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <FiHeart className="h-4 w-4 text-red-500 fill-red-500" />
                  Strava Activity Summary
                </h3>
                <span className="font-mono text-[9px] text-slate-400">Live Integration Placeholder</span>
              </div>

              {/* Strava Feed Simulation */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden divide-y divide-slate-100 dark:divide-slate-900 bg-slate-50/30 dark:bg-slate-900/10">
                
                {/* Strava Item 1 */}
                <div className="p-4 flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-50">Shrayansh</span>
                      <span className="text-[10px] font-mono text-slate-400">Yesterday</span>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                      Sunset Tempo Run
                      <FiExternalLink className="h-3 w-3" />
                    </p>
                    <div className="flex gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                      <div>
                        <span className="text-[9px] uppercase block text-slate-400">Distance</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">10.2 km</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase block text-slate-400">Pace</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">4:25 /km</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase block text-slate-400">Time</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">45:02</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] bg-orange-50 text-orange-600 dark:bg-orange-950/20 dark:text-orange-400 px-2 py-0.5 rounded border border-orange-100 dark:border-orange-900/50">Tempo</span>
                  </div>
                </div>

                {/* Strava Item 2 */}
                <div className="p-4 flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-50">Shrayansh</span>
                      <span className="text-[10px] font-mono text-slate-400">3 days ago</span>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                      Vetal Tekdi Trail Climb
                      <FiExternalLink className="h-3 w-3" />
                    </p>
                    <div className="flex gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                      <div>
                        <span className="text-[9px] uppercase block text-slate-400">Distance</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">12.5 km</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase block text-slate-400">Pace</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">5:12 /km</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase block text-slate-400">Elevation</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">+240 m</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/50">Trail</span>
                  </div>
                </div>

              </div>

              {/* Setup Instruction Banner */}
              <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 italic text-center pt-2">
                Tip: Paste your official Strava activity summary iframe code inside <code className="text-[9px] bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded">src/content/running.json</code> under the <code className="text-[9px] bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded">stravaEmbedIframe</code> property to automatically replace this summary with your live Strava feed.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
