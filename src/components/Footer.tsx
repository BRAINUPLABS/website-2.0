import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigationPath } from '../types.ts';

interface FooterProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer className="school-solutions w-full border-t border-surface-container bg-surface-container-low py-14">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
      <div>
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 text-left"><img src="/assets/Photos/logo_1.png" alt="" className="h-12 w-12 rounded-lg object-contain" /><span><span className="block font-display text-xl font-extrabold text-on-surface">Brain Up Labs</span><span className="block text-xs font-semibold text-on-surface-variant">Beyond Boundaries</span></span></button>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant">Hands-on STEM and robotics learning for schools, helping students explore, create, and innovate.</p>
      </div>
      <FooterLinks title="For Schools" links={[
        ['Lab setup', 'for-schools', 'lab-tiers'],
        ['Teacher training', 'for-schools', 'teacher-training'],
        ['Programs & curriculum', 'programs'],
        ['STEM & Robotics Kits', 'stem-kits'],
      ]} onNavigate={onNavigate} />
      <FooterLinks title="Explore" links={[
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
      <h2 className="font-display text-sm font-bold uppercase tracking-wider text-on-surface">{title}</h2>
      <span aria-hidden="true" className="school-accent-bg mt-2 block h-0.5 w-9" />
      <ul className="mt-5 space-y-4 text-sm text-on-surface-variant">
        {links.map(([label, path, subTab]) => <li key={label}><button onClick={() => onNavigate(path, subTab)} className="group inline-flex items-center gap-2 text-left transition-colors hover:text-secondary"><ArrowRight aria-hidden="true" className="school-accent-text h-4 w-4 shrink-0" />{label}</button></li>)}
      </ul>
    </div>
  );
}
