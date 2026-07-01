import React from 'react';
import aboutData from '../content/about.json';
import { FiMail, FiGithub, FiLinkedin, FiBookOpen, FiInstagram, FiAward, FiUser } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: 'Email Address',
      icon: <FiMail className="h-4 w-4" />,
      url: aboutData.email,
      description: 'shrayansh@example.com',
      value: 'Email Me'
    },
    {
      name: 'GitHub Profile',
      icon: <FiGithub className="h-4 w-4" />,
      url: aboutData.githubLink,
      description: 'tshrayansh',
      value: 'View Profile'
    },
    {
      name: 'LinkedIn Network',
      icon: <FiLinkedin className="h-4 w-4" />,
      url: aboutData.linkedinLink,
      description: 'Shrayansh',
      value: 'Connect'
    },
    {
      name: 'Medium Publication',
      icon: <FiBookOpen className="h-4 w-4" />,
      url: 'https://medium.com',
      description: 'Articles & Essays',
      value: 'Read'
    },
    {
      name: 'Instagram Social',
      icon: <FiInstagram className="h-4 w-4" />,
      url: 'https://instagram.com',
      description: 'Ascent RC & Life',
      value: 'Follow'
    },
    {
      name: 'Google Scholar',
      icon: <FiAward className="h-4 w-4" />,
      url: 'https://scholar.google.com',
      description: 'Citation Record (Placeholder)',
      value: 'View Record'
    },
    {
      name: 'ORCID Register',
      icon: <FiUser className="h-4 w-4" />,
      url: 'https://orcid.org',
      description: '0000-0002-XXXX-XXXX (Placeholder)',
      value: 'View Registry'
    }
  ];

  return (
    <div className="py-12 text-left space-y-8">
      <div className="space-y-1.5">
        <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 dark:text-emerald-500 font-semibold">
          Connection Sockets
        </span>
        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Get in Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="flex items-start gap-3 p-4 rounded border border-slate-200/50 bg-white hover:bg-slate-50/50 dark:border-zinc-900/60 dark:bg-zinc-950/20 dark:hover:bg-zinc-900/40 transition-colors shadow-2xs cursor-pointer group"
          >
            <div className="p-2 rounded bg-slate-50 dark:bg-zinc-900 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-50 transition-colors">
              {link.icon}
            </div>
            <div className="space-y-0.5">
              <span className="font-geist text-xs font-bold text-slate-900 dark:text-slate-50 block leading-tight">
                {link.name}
              </span>
              <p className="text-[10px] text-slate-400 dark:text-zinc-550 font-mono">
                {link.description}
              </p>
              <p className="text-[9px] font-mono text-slate-400 dark:text-zinc-500 group-hover:underline pt-1.5 block">
                {link.value} &rarr;
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
