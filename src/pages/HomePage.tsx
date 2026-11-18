import React, { useEffect, useState } from 'react';
import { STUDENT_PROJECTS_DATA } from '../data/projects.ts';
import { NavigationPath } from '../types.ts';
import { FAQSection } from './HomePage/FAQSection.tsx';
import { FinalCtaSection } from './HomePage/FinalCtaSection.tsx';

interface HomePageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

const schoolGets = [
  { title: 'Modular lab setup', description: 'Choose a dedicated lab or flexible classroom stations that fit your school.', icon: 'engineering', path: 'for-schools' as const, subTab: 'lab-tiers' },
  { title: 'Grade-level STEM kits', description: 'Hands-on kits that give students a clear progression from first builds to advanced projects.', icon: 'inventory_2', path: 'stem-kits' as const, subTab: 'grade' },
  { title: 'Teacher training', description: 'Practical guidance so teachers can run engaging lab sessions with confidence.', icon: 'school', path: 'for-schools' as const, subTab: 'teacher-training' },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showRobotics, setShowRobotics] = useState(false);
  const project = STUDENT_PROJECTS_DATA[0];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let interval: number;
    const timeout = window.setTimeout(() => {
      setShowRobotics(true);
      interval = window.setInterval(() => setShowRobotics((current) => !current), 2850);
    }, 2500);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex w-full flex-col">
      <section className="w-full bg-surface py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-secondary">For school leaders</p>
            <h1 aria-label="Hands-on STEM and robotics labs for schools." className="max-w-xl font-display text-4xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl">
              <span aria-hidden="true" className="motion-reduce:hidden">Hands-on{' '}
                <span className="relative inline-block h-[1.3em] min-w-[6em] overflow-hidden align-[-0.24em] whitespace-nowrap">
                  <span className={`absolute left-0 top-0 font-mono text-[1.05em] text-secondary transition-transform duration-[350ms] ease-out ${showRobotics ? '-translate-y-full' : 'translate-y-0'}`}>STEM</span>
                  <span className={`absolute left-0 top-0 font-mono text-[1.05em] text-secondary transition-transform duration-[350ms] ease-out ${showRobotics ? 'translate-y-0' : 'translate-y-full'}`}>Robotics</span>
                </span>{' '}labs for schools.
              </span>
              <span className="hidden motion-reduce:inline">Hands-on STEM and robotics labs for schools.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">We set up modular labs, train teachers, and give students projects they can build in class.</p>
            <button onClick={() => onNavigate('book-a-demo')} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-on-primary shadow-md transition-all hover:bg-primary-container hover:shadow-lg">
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              Book a Demo
            </button>
          </div>
          <img src="/assets/aistudio/Image_1_360de192.jpeg" alt="Students building a robot in a school STEM lab" className="h-72 w-full rounded-2xl object-cover shadow-lg sm:h-96" />
        </div>
      </section>

      <section className="w-full border-y border-surface-container bg-surface-container-low py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-secondary">What your school gets</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">Everything needed to start building.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {schoolGets.map((item) => (
              <button key={item.title} onClick={() => onNavigate(item.path, item.subTab)} className="group flex min-h-60 flex-col items-start rounded-2xl border border-surface-container bg-surface-container-lowest p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-secondary/30 hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-fixed text-on-secondary-fixed"><span className="material-symbols-outlined text-[22px]">{item.icon}</span></span>
                <h3 className="mt-5 font-display text-lg font-bold text-on-surface">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
                <span className="mt-auto pt-5 text-sm font-bold text-secondary">Learn more <span aria-hidden="true">→</span></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <img src={project.imageUrl} alt={project.title} className="h-72 w-full rounded-2xl object-cover shadow-md sm:h-80" />
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-secondary">Student work</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">{project.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{project.description}</p>
            <p className="mt-4 text-sm font-semibold text-on-surface">{project.studentClass} · {project.schoolName}</p>
            <button onClick={() => onNavigate('projects')} className="mt-6 inline-flex items-center gap-2 rounded-xl border border-surface-container-high bg-surface-container-lowest px-5 py-3 font-display text-sm font-bold text-on-surface transition-colors hover:bg-surface-container-high">
              View Student Projects <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <FAQSection openFaqIndex={openFaqIndex} onToggle={(index) => setOpenFaqIndex(openFaqIndex === index ? null : index)} limit={3} />
      <FinalCtaSection onNavigate={onNavigate} />
    </div>
  );
};
