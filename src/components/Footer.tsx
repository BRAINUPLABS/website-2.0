import React, { useState } from 'react';
import { NavigationPath } from '../types.ts';

interface FooterProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-surface-container-low pt-16 pb-12 shadow-[0_-1px_12px_rgba(19,27,46,0.03)] border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="h-12 w-12 rounded-lg overflow-hidden flex items-center justify-center bg-surface-container-lowest border border-surface-container-high/60 shadow-sm">
                <img
                  src="/assets/Photos/Logo.jpeg"
                  alt="Brain Up Labs Logo"
                  className="h-11 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBoCFbn5763kcOoL9Fz1CZ8SGapEHeb96-2gYBrvldn-sE7QzXIFKYMBx7WjjkpyWW017qYLp_lA3ToUbfwnuWGAvP3S8RQ1Ms_GE8rYFPFSY7ZzA-EX05qpcSRA5T3fbgIlqUmcFxG1iHHYnauajZi9INdYPwRyZqKKiFNDod0krappLJKWJMjbKrJZIGUIE1XHe5-k0jhQPvvqrCbgjGfI3LP3BsSHIYagqtjjvbVGA-djacBCrCDQ';
                  }}
                />
              </div>
              <span className="font-display text-xl font-extrabold text-on-surface">
                Brain Up Labs
              </span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Pioneering experiential education across India. Empowering next-generation innovators through hands-on robotics, experiential AI, and cutting-edge school innovation labs.
            </p>
            <div className="flex items-center gap-2 text-on-surface-variant pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="p-2 rounded-lg hover:bg-surface-container hover:text-secondary transition-colors"
                title="Innovation Hub"
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </button>
              <button
                onClick={() => onNavigate('for-schools')}
                className="p-2 rounded-lg hover:bg-surface-container hover:text-secondary transition-colors"
                title="School Programs"
              >
                <span className="material-symbols-outlined text-[20px]">school</span>
              </button>
              <button
                onClick={() => onNavigate('stem-kits')}
                className="p-2 rounded-lg hover:bg-surface-container hover:text-secondary transition-colors"
                title="Hardware Kits"
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
              </button>
              <button
                onClick={() => onNavigate('resources')}
                className="p-2 rounded-lg hover:bg-surface-container hover:text-secondary transition-colors"
                title="Podcasts & Resources"
              >
                <span className="material-symbols-outlined text-[20px]">podcasts</span>
              </button>
            </div>
          </div>

          {/* Col 2: For Schools */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xs font-bold text-on-surface tracking-wider uppercase">
              For Schools
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-on-surface-variant font-medium">
              <li>
                <button
                  onClick={() => onNavigate('for-schools', 'overview')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Overview &amp; Models
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-schools', 'lab-tiers')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Lab Setup 1 to 6
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stem-kits')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Institutional Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-schools', 'curriculum')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Integrated Curriculum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-schools', 'teacher-training')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Faculty Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-schools', 'proposal-form')}
                  className="hover:text-secondary font-semibold transition-colors cursor-pointer text-left"
                >
                  School Proposal Form
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: STEM Kits & Programs */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xs font-bold text-on-surface tracking-wider uppercase">
              STEM Kits &amp; Programs
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-on-surface-variant font-medium">
              <li>
                <button
                  onClick={() => onNavigate('stem-kits', 'all')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  All Hardware Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stem-kits', 'grade')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Grade-Wise Progression
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs', 'ai-robotics')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  AI &amp; Robotics Labs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs', 'labs-table')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Labs on Table Setup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs', 'arenas')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  National Robotics League
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stem-kits', 'bulk')}
                  className="hover:text-secondary font-semibold transition-colors cursor-pointer text-left"
                >
                  Bulk Institutional Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Company */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xs font-bold text-on-surface tracking-wider uppercase">
              Resources &amp; Company
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-on-surface-variant font-medium">
              <li>
                <button
                  onClick={() => onNavigate('resources', 'blogs')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  STEM Research Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources', 'tutorials')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Project Tutorials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources', 'career')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Career Mentorship
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources', 'downloads')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Curriculum Downloads
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-us', 'mission')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Mission &amp; Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-us', 'recognitions')}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  National Recognitions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Hubs */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xs font-bold text-on-surface tracking-wider uppercase">
                Contact &amp; Hubs
              </h3>
              <div className="text-sm text-on-surface-variant flex flex-col gap-1.5 font-medium">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">mail</span>
                  <a href="mailto:support@brainuplabs.com" className="hover:text-secondary">
                    support@brainuplabs.com
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
                  <a href="tel:+918041228900" className="hover:text-secondary">
                    +91 (080) 4122-8900
                  </a>
                </span>
                <span className="flex items-start gap-2 mt-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">location_on</span>
                  <span>Tech Corridor, Indiranagar, Bengaluru &amp; Okhla Phase III, New Delhi</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <span className="font-display text-xs font-bold text-on-surface uppercase tracking-wider">
                Stay Updated
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter school / educator email"
                  required
                  className="w-full bg-surface-container-lowest px-3 py-2 rounded-lg text-sm text-on-surface placeholder:text-outline border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="bg-primary text-on-primary hover:bg-primary-container px-3.5 py-2 rounded-lg font-display text-xs font-bold shrink-0 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <span className="text-xs text-on-tertiary-container font-semibold">
                  ✓ Subscribed! You will receive our monthly STEM digest.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p>© 2025 Brain Up Labs Pvt Ltd. All rights reserved. Shaping young inventors across India.</p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('resources', 'faqs')}
              className="hover:text-on-surface cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('resources', 'faqs')}
              className="hover:text-on-surface cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('for-schools', 'curriculum')}
              className="hover:text-on-surface cursor-pointer"
            >
              Safety Guidelines
            </button>
            <button
              onClick={() => onNavigate('about-us', 'recognitions')}
              className="hover:text-on-surface cursor-pointer"
            >
              Accreditations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
