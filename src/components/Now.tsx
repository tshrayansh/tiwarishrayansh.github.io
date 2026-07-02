import React from 'react';
import nowData from '../content/now.json';

interface Book {
  title: string;
  author: string;
}

interface NowSchema {
  workingOn: string[];
  reading: Book[];
  trainingFor: string[];
  exploring: string[];
}

export const Now: React.FC = () => {
  const data = nowData as NowSchema;

  return (
    <div className="space-y-10 text-left">
      <div className="space-y-1">
        <h2 className="font-serif text-xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          Now
        </h2>
        <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          A log of current focuses &bull; Pune, India
        </p>
      </div>

      <div className="space-y-8 text-xs font-sans">
        
        {/* Working On */}
        <div className="space-y-2">
          <h3 className="font-serif text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Working on
          </h3>
          <ul className="space-y-2 list-disc pl-4 text-zinc-650 dark:text-zinc-450 leading-relaxed font-light">
            {data.workingOn.map((item, idx) => (
              <li key={idx} className="marker:text-zinc-250 dark:marker:text-zinc-850">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Reading */}
        <div className="space-y-2">
          <h3 className="font-serif text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Reading
          </h3>
          <ul className="space-y-2 list-disc pl-4 text-zinc-650 dark:text-zinc-450 leading-relaxed font-light">
            {data.reading.map((book, idx) => (
              <li key={idx} className="marker:text-zinc-250 dark:marker:text-zinc-850">
                <span className="font-serif italic font-medium">“{book.title}”</span> by {book.author}
              </li>
            ))}
          </ul>
        </div>

        {/* Training For */}
        <div className="space-y-2">
          <h3 className="font-serif text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Training for
          </h3>
          <ul className="space-y-2 list-disc pl-4 text-zinc-650 dark:text-zinc-450 leading-relaxed font-light">
            {data.trainingFor.map((item, idx) => (
              <li key={idx} className="marker:text-zinc-250 dark:marker:text-zinc-850">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Exploring */}
        <div className="space-y-2">
          <h3 className="font-serif text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Exploring
          </h3>
          <ul className="space-y-2 list-disc pl-4 text-zinc-650 dark:text-zinc-450 leading-relaxed font-light">
            {data.exploring.map((item, idx) => (
              <li key={idx} className="marker:text-zinc-250 dark:marker:text-zinc-850">
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
export default Now;
