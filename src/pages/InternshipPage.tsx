import React from 'react';
import { NavigationPath } from '../types.ts';

interface InternshipPageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

const tracks = [
  {
    title: 'Robotics & hardware',
    description: 'Support hands-on builds, prototype testing, and documentation for school-ready STEM projects.',
    icon: 'precision_manufacturing',
  },
  {
    title: 'Learning design',
    description: 'Help turn engineering ideas into clear classroom activities, guides, and student challenges.',
    icon: 'menu_book',
  },
  {
    title: 'School programmes',
    description: 'Learn how STEM sessions are planned and supported for teachers and students.',
    icon: 'groups',
  },
];

export const InternshipPage: React.FC<InternshipPageProps> = ({ onNavigate }) => (
  <div className="flex w-full flex-col">
    <section className="border-b border-surface-container bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-secondary">Brain Up Labs internships</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-on-surface sm:text-5xl">Build learning experiences that students can touch, test, and share.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">Intern with a team working at the intersection of STEM education, robotics, and hands-on classroom projects.</p>
          <a href="mailto:support@brainuplabs.com?subject=Internship%20enquiry" className="mt-7 inline-flex rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-on-primary shadow-md transition-colors hover:bg-primary-container">Ask about internships</a>
        </div>
      </div>
    </section>

    <section className="bg-surface-container-low py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-secondary">Opportunities</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">Areas you may work in</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tracks.map((track) => (
            <article key={track.title} className="rounded-2xl border border-surface-container bg-surface-container-lowest p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-fixed text-on-secondary-fixed"><span className="material-symbols-outlined text-[22px]">{track.icon}</span></span>
              <h3 className="mt-5 font-display text-lg font-bold text-on-surface">{track.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{track.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-secondary">Who should apply</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-on-surface">Curious builders and educators.</h2>
          <p className="mt-4 text-base leading-relaxed text-on-surface-variant">This is a good fit for students and early-career candidates interested in electronics, programming, design, or helping young people learn by making.</p>
        </div>
        <div className="rounded-2xl border border-surface-container bg-surface-container-low p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-on-surface">How to enquire</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-on-surface-variant">
            <li><strong className="text-on-surface">1.</strong> Share your CV or portfolio and the area that interests you.</li>
            <li><strong className="text-on-surface">2.</strong> Tell us about a project, lesson, or problem you have enjoyed working on.</li>
            <li><strong className="text-on-surface">3.</strong> We will respond when a suitable opportunity is available.</li>
          </ol>
          <a href="mailto:support@brainuplabs.com?subject=Internship%20enquiry" className="mt-6 inline-flex font-display text-sm font-bold text-secondary hover:text-secondary-container">Email Brain Up Labs <span aria-hidden="true" className="ml-1">→</span></a>
        </div>
      </div>
    </section>

    <section className="border-t border-surface-container bg-surface-container-low py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 sm:px-6 sm:flex-row sm:items-center">
        <div><h2 className="font-display text-2xl font-extrabold text-on-surface">See the projects students build.</h2><p className="mt-1 text-sm text-on-surface-variant">Explore the work that inspires our hands-on approach.</p></div>
        <button onClick={() => onNavigate('projects')} className="rounded-xl border border-surface-container-high bg-surface-container-lowest px-5 py-3 font-display text-sm font-bold text-on-surface hover:bg-surface-container-high">Student Projects</button>
      </div>
    </section>
  </div>
);
