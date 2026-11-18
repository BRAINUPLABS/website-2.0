import React from 'react';
import { NavigationPath } from '../../types.ts';

interface FinalCtaSectionProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

export function FinalCtaSection({ onNavigate }: FinalCtaSectionProps) {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-primary-container p-8 text-surface-bright shadow-xl lg:p-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">See what a hands-on STEM lab could look like at your school.</h2>
            <p className="mt-4 text-base leading-relaxed text-surface-dim">Book a short demo to discuss your space, grades, and teaching goals.</p>
            <button onClick={() => onNavigate('book-a-demo')} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3.5 font-display text-sm font-bold text-on-secondary shadow-md transition-colors hover:bg-secondary-container">
              <span className="material-symbols-outlined text-[20px]">calendar_today</span><span>Book a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
