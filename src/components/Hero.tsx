import React, { useEffect, useRef } from 'react';
import aboutData from '../content/about.json';
import { FiFileText, FiGithub, FiMail } from 'react-icons/fi';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Neural Network / Particle Connection animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(45, Math.floor((width * height) / 8000));
    const connectionDistance = 90;
    const mouse = { x: -1000, y: -1000, active: false };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.8 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse attraction
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            this.x += dx * 0.01;
            this.y += dy * 0.01;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = 'rgba(59, 130, 246, 0.45)'; // Soft blue nodes
        c.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(161, 161, 170, ${alpha})`; // Soft grey lines
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    animate();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-16">
      
      {/* Bento Card 1: Interactive Summary (Span 8) */}
      <div className="md:col-span-8 bento-card p-8 flex flex-col justify-between min-h-[350px] relative overflow-hidden group">
        {/* Interactive network backdrop */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto z-0 opacity-80" />

        {/* Content Overlay */}
        <div className="relative z-10 space-y-4 text-left pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 px-2 py-0.5 rounded">
              [01 // executive summary]
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-green-700 dark:text-green-500">Active Researcher</span>
          </div>

          <div className="space-y-1.5">
            <h1 className="font-geist text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
              {aboutData.name}
            </h1>
            <p className="font-geist text-lg md:text-xl font-medium text-slate-700 dark:text-zinc-300">
              {aboutData.tagline}
            </p>
          </div>
          
          <p className="text-sm md:text-base text-slate-500 dark:text-zinc-400 max-w-xl font-light leading-relaxed">
            {aboutData.shortBio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-wrap gap-3 pt-6 border-t border-slate-100 dark:border-zinc-900/60 pointer-events-auto">
          <a
            href="#resume"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 text-white font-semibold font-geist text-xs px-4.5 py-2.5 shadow-sm transition-all cursor-pointer"
          >
            <FiFileText className="h-3.5 w-3.5" />
            Curriculum Vitae
          </a>
          <a
            href={aboutData.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 text-slate-700 font-semibold font-geist text-xs px-4.5 py-2.5 shadow-xs transition-all cursor-pointer"
          >
            <FiGithub className="h-3.5 w-3.5" />
            GitHub
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 text-slate-700 font-semibold font-geist text-xs px-4.5 py-2.5 shadow-xs transition-all cursor-pointer"
          >
            <FiMail className="h-3.5 w-3.5" />
            Contact
          </button>
        </div>
      </div>

      {/* Bento Card 2: Profile Picture (Span 4) */}
      <div className="md:col-span-4 bento-card p-6 flex flex-col justify-between items-center group text-left min-h-[350px]">
        {/* Photo Container */}
        <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-102">
          <img 
            src="./profile.jpeg" 
            alt={aboutData.name} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const fallback = parent.querySelector('.svg-fallback');
                if (fallback) fallback.classList.remove('hidden');
              }
            }}
          />
          {/* Scientific helix SVG fallback */}
          <div className="svg-fallback hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-slate-400 dark:text-zinc-600">
            <svg className="w-16 h-16 stroke-current opacity-85" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c1.5-1.5 3-4.5 3-4.5s1.5-3 3-4.5M13.5 16.5c1.5-1.5 3-4.5 3-4.5s1.5-3 3-4.5" />
              <path d="M6 9c2 1 4 0 6-2 2-2 4-3 6-2" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </div>
        </div>

        {/* Profile Card Footer Info */}
        <div className="w-full border-t border-slate-100 dark:border-zinc-900/60 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-zinc-500">
          <span>[SYS.INFO // OK]</span>
          <span className="uppercase tracking-widest font-semibold border border-slate-200/50 dark:border-zinc-800/50 px-1.5 py-0.5 rounded bg-slate-50 dark:bg-zinc-900/50">
            IISER Pune
          </span>
        </div>
      </div>

    </div>
  );
};
