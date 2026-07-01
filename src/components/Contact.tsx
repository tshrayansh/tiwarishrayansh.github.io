import React from 'react';
import aboutData from '../content/about.json';
import { FiMail, FiGithub, FiLinkedin, FiBookOpen, FiInstagram, FiAward, FiUser } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: <FiMail className="h-5 w-5" />,
      url: aboutData.email,
      description: 'shrayansh@example.com',
      value: 'Email Me'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="h-5 w-5" />,
      url: aboutData.githubLink,
      description: 'tshrayansh',
      value: 'Follow'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="h-5 w-5" />,
      url: aboutData.linkedinLink,
      description: 'Shrayansh',
      value: 'Connect'
    },
    {
      name: 'Medium',
      icon: <FiBookOpen className="h-5 w-5" />,
      url: 'https://medium.com',
      description: 'Articles & Essays',
      value: 'Read'
    },
    {
      name: 'Instagram',
      icon: <FiInstagram className="h-5 w-5" />,
      url: 'https://instagram.com',
      description: 'Ascent RC & Life',
      value: 'View'
    },
    {
      name: 'Google Scholar',
      icon: <FiAward className="h-5 w-5" />,
      url: 'https://scholar.google.com',
      description: 'Citation Record (Placeholder)',
      value: 'View Publications'
    },
    {
      name: 'ORCID ID',
      icon: <FiUser className="h-5 w-5" />,
      url: 'https://orcid.org',
      description: '0000-0002-XXXX-XXXX (Placeholder)',
      value: 'View Record'
    }
  ];

  return (
    <section id="contact" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title Column */}
        <div className="md:col-span-4 text-left">
          <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
            Let's collaborate
          </p>
        </div>

        {/* Links Grid Column */}
        <div className="md:col-span-8 text-left space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950 dark:hover:bg-slate-900/50 transition-all shadow-sm cursor-pointer group"
              >
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                  {link.icon}
                </div>
                <div className="space-y-1">
                  <span className="font-geist text-sm font-bold text-slate-900 dark:text-slate-50 leading-tight">
                    {link.name}
                  </span>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-light">
                    {link.description}
                  </p>
                  <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 group-hover:underline pt-0.5">
                    {link.value} &rarr;
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
