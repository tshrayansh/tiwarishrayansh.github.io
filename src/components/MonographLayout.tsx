import React, { useState, useEffect, useRef } from 'react';
import portfolioData from '../content/portfolio.json';

interface MonographLayoutProps {
  children: React.ReactNode[];
  sectionIds: string[];
  sectionLabels: string[];
}

export const MonographLayout: React.FC<MonographLayoutProps> = ({ children, sectionIds, sectionLabels }) => {
  const { name, title, email, github, linkedin } = portfolioData.personal;
  const [activeSection, setActiveSection] = useState('section-about');
  const [mobileTab, setMobileTab] = useState('section-about');
  const observer = useRef<IntersectionObserver | null>(null);

  // Scroll spy observer for desktop view
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px'
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-paper-light text-ink-light transition-colors duration-300">
      
      {/* 1. DESKTOP VIEW GRID */}
      <div className="hidden lg:grid grid-cols-12 min-h-screen w-full relative">
        
        {/* Left Fixed Ledger Sidebar (4 cols) */}
        <aside className="col-span-4 h-screen sticky top-0 p-12 flex flex-col justify-between ledger-border-r bg-paper-light z-10">
          
          {/* Brand/Signature */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="font-serif text-2xl font-normal leading-none tracking-tight">{name}</div>
              <div className="font-mono text-[9px] text-sage tracking-widest uppercase">
                // {title}
              </div>
            </div>
            
            <div className="font-mono text-[9px] text-muted-light space-y-0.5">
              <div>LOC: 18.5204° N, 73.8567° E [PUNE, IN]</div>
              <div>STATUS: EMPIRICAL_STUDY_ACTIVE</div>
            </div>
          </div>

          {/* Scrolling Index Guide */}
          <nav className="my-auto space-y-3 pl-2">
            <div className="font-mono text-[9px] text-muted-light/50 tracking-wider mb-4 uppercase">
              [ CONTENTS // INDEX ]
            </div>
            {sectionIds.map((id, index) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center gap-4 w-full text-left font-mono text-xs group transition-all duration-300"
                >
                  <span className={`transition-colors duration-300 ${isActive ? 'text-ochre font-bold' : 'text-muted-light/40 group-hover:text-ink-light'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`h-[1px] transition-all duration-300 ${isActive ? 'w-8 bg-ochre' : 'w-4 bg-border-light group-hover:w-6'}`} />
                  <span className={`uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-ink-light font-bold' : 'text-muted-light group-hover:text-ink-light'}`}>
                    {sectionLabels[index]}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Sidebar Integration: Abstract Concentric Node Blueprint */}
          <div className="space-y-6">
            <div className="border-t border-border-light pt-6 flex flex-col items-center">
              <svg className="w-full h-28 opacity-30 text-sage" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="50" cy="50" r="42" strokeDasharray="1.5 1.5" />
                <circle cx="50" cy="50" r="32" />
                <circle cx="53" cy="47" r="22" />
                <circle cx="47" cy="53" r="12" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
                <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="1 1" strokeWidth="0.3" />
                <line x1="5" y1="50" x2="95" y2="50" strokeDasharray="1 1" strokeWidth="0.3" />
              </svg>
            </div>

            {/* Socials & Footer */}
            <div className="border-t border-border-light pt-6 space-y-4">
              <div className="flex gap-4 font-mono text-[10px]">
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">[github]</a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">[linkedin]</a>
                <a href={`mailto:${email}`} className="hover:text-sage transition-colors">[email]</a>
              </div>

              <div className="flex justify-between items-center text-[9px] font-mono text-muted-light">
                <span>VOL. IV // REF. SHRAYANSH</span>
                <span>© 2026</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Scrollable Ledger Content (8 cols) */}
        <main className="col-span-8 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* 2. MOBILE VIEW (Folder Tab System) */}
      <div className="lg:hidden min-h-screen flex flex-col justify-between bg-paper-light">
        
        {/* Mobile Header */}
        <header className="sticky top-0 bg-paper-light/95 backdrop-blur border-b border-border-light p-4 z-20 flex justify-between items-center">
          <div>
            <div className="font-serif text-lg font-normal leading-none">{name}</div>
            <div className="font-mono text-[8px] text-muted-light uppercase tracking-wider">
              {title}
            </div>
          </div>
          <span className="font-mono text-[8px] text-sage">18.52° N</span>
        </header>

        {/* Mobile Sub-Header / Tab Navigation */}
        <div className="sticky top-[53px] bg-paper-light overflow-x-auto border-b border-border-light z-20 flex px-2 py-2 gap-1 scrollbar-none">
          {sectionIds.map((id, index) => {
            const isCurrent = mobileTab === id;
            return (
              <button
                key={id}
                onClick={() => setMobileTab(id)}
                className={`font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 rounded whitespace-nowrap transition-all duration-300 ${isCurrent ? 'bg-border-light text-sage font-bold' : 'text-muted-light'}`}
              >
                [{sectionLabels[index]}]
              </button>
            );
          })}
        </div>

        {/* Mobile Tab Contents */}
        <main className="flex-grow p-4 min-h-[70vh]">
          {children.find((child: any) => child.props.id === mobileTab)}
        </main>

        {/* Mobile Footer */}
        <footer className="border-t border-border-light p-4 flex justify-between items-center bg-paper-light">
          <span className="font-mono text-[9px] text-muted-light/60">© 2026 TIWARI</span>
          <div className="flex gap-3 font-mono text-[9px]">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-sage font-bold">[git]</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sage font-bold">[ln]</a>
            <a href={`mailto:${email}`} className="text-sage font-bold">[mail]</a>
          </div>
        </footer>
      </div>

    </div>
  );
};
