import React from 'react';
import { NavigationPath } from '../../types.ts';

interface FinalCtaSectionProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

export function FinalCtaSection({ onNavigate }: FinalCtaSectionProps) {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-primary-container text-surface-bright p-8 lg:p-16 overflow-hidden shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-container opacity-30 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl flex flex-col gap-6">
            <span className="px-3.5 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-display text-xs font-bold self-start">Get Started This Academic Term</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-surface-bright tracking-tight leading-tight">Ready to Transform Your School's STEM Education?</h2>
            <p className="text-base sm:text-lg text-surface-dim leading-relaxed">Join 500+ top institutions empowering students to become inventors, not just consumers of technology. Schedule a live hands-on demonstration at your campus.</p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={() => onNavigate('book-a-demo')} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-secondary text-on-secondary font-display text-sm font-bold hover:bg-secondary-container transition-all shadow-md cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">calendar_today</span><span>Schedule On-Campus Demo</span>
              </button>
              <button onClick={() => onNavigate('for-schools', 'proposal-form')} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md text-surface-bright font-display text-sm font-bold hover:bg-surface-container-lowest/20 transition-all border border-white/20 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">download</span><span>Download 2026 Lab Prospectus</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-surface-dim text-sm">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-[20px]">call</span><span>Institutional Desk: <strong className="text-surface-bright">+91 (080) 4122-8900</strong></span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-[20px]">mail</span><span className="text-surface-bright font-semibold">schools@brainuplabs.com</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
