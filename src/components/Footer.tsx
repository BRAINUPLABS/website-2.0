import React from 'react';
import { NavigationPath } from '../types.ts';

interface FooterProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer className="w-full border-t border-surface-container bg-surface-container-low py-12">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
      <div>
        <button onClick={() => onNavigate('home')} className="font-display text-xl font-extrabold text-on-surface">Brain Up Labs</button>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">Hands-on STEM and robotics learning for schools.</p>
      </div>
      <FooterLinks title="For Schools" links={[
        ['Lab setup', 'for-schools', 'lab-tiers'],
        ['Teacher training', 'for-schools', 'teacher-training'],
        ['Programs & curriculum', 'programs'],
      ]} onNavigate={onNavigate} />
      <FooterLinks title="Explore" links={[
        ['STEM Kits', 'stem-kits'],
        ['Student Projects', 'projects'],
        ['Internship', 'internship'],
        ['Book a Demo', 'book-a-demo'],
      ]} onNavigate={onNavigate} />
      <FooterLinks title="About & Resources" links={[
        ['About Brain Up Labs', 'about-us'],
        ['Resources', 'resources'],
      ]} onNavigate={onNavigate} />
    </div>
  </footer>
);

interface FooterLinksProps {
  title: string;
  links: readonly (readonly [string, NavigationPath, string?])[];
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

function FooterLinks({ title, links, onNavigate }: FooterLinksProps) {
  return (
    <div>
      <h2 className="font-display text-xs font-bold uppercase tracking-wider text-on-surface">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-on-surface-variant">
        {links.map(([label, path, subTab]) => <li key={label}><button onClick={() => onNavigate(path, subTab)} className="text-left hover:text-secondary">{label}</button></li>)}
      </ul>
    </div>
  );
}
