import React from 'react';
import { ArrowRight, CalendarDays, ClipboardCheck, FlaskConical, Rocket, Users } from 'lucide-react';
import { NavigationPath } from '../../types.ts';

interface FinalCtaSectionProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

export function FinalCtaSection({ onNavigate }: FinalCtaSectionProps) {
  return (
    <section className="school-solutions w-full bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 rounded-3xl border border-surface-container bg-surface-container-low p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div>
            <Rocket aria-hidden="true" className="school-accent-text mb-4 h-8 w-8" />
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl">See what a hands-on STEM lab could look like <span className="school-accent-text">at your school.</span></h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">Book a short demo to discuss your space, grades, and teaching goals.</p>
            <button onClick={() => onNavigate('book-a-demo')} className="school-accent-bg mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
              <CalendarDays aria-hidden="true" className="h-5 w-5" /> Book a Free Demo <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-on-surface">
              {[{ icon: ClipboardCheck, label: 'Understand your needs' }, { icon: FlaskConical, label: 'See lab solutions' }, { icon: Users, label: 'Discuss a plan' }].map(({ icon: Icon, label }) => <span key={label} className="flex items-center gap-2"><Icon aria-hidden="true" className="school-accent-text h-5 w-5" />{label}</span>)}
            </div>
          </div>
          <div className="relative"><span aria-hidden="true" className="school-solution-corner absolute -right-3 -top-3 h-24 w-32 rounded-3xl" /><img src="/assets/aistudio/Image_6_f94c54b2.jpeg" alt="Student exploring technology in a STEM lab" className="relative aspect-[4/3] w-full rounded-3xl object-cover" /></div>
        </div>
      </div>
    </section>
  );
}
