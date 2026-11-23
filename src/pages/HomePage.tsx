import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, GraduationCap, Table2, Wrench } from 'lucide-react';
import { STEM_KITS_DATA } from '../data/kits.ts';
import { STUDENT_PROJECTS_DATA } from '../data/projects.ts';
import { NavigationPath } from '../types.ts';
import { FAQSection } from './HomePage/FAQSection.tsx';
import { FinalCtaSection } from './HomePage/FinalCtaSection.tsx';

interface HomePageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

const schoolSolutions = [
  { title: 'STEM & Robotics Labs', description: 'Complete lab setups designed for your school’s space.', icon: Wrench },
  { title: 'Labs on Table™', description: 'Portable STEM stations that turn classroom desks into labs.', icon: Table2 },
  { title: 'Learning Curriculum', description: 'Practical projects and guided lessons for grades 1–12.', icon: BookOpen },
  { title: 'Teacher Training', description: 'Training and ongoing support to help teachers lead confidently.', icon: GraduationCap },
];

// Set this when the dedicated shop is ready. The action remains disabled until then.
const STEM_KITS_SHOP_URL: string | null = null;

const featuredStemKits = [
  {
    title: 'Early Explorers Discovery Kit',
    grades: 'Grades 1–3',
    description: 'Hands-on electronics and simple circuits for curious young learners.',
    imageUrl: STEM_KITS_DATA[0].imageUrl,
  },
  {
    title: 'Mechanical & Sensor Robotics',
    grades: 'Grades 4–6',
    description: 'Build robots and explore sensors, movement, and block coding.',
    imageUrl: STEM_KITS_DATA[2].imageUrl,
  },
  {
    title: 'IoT & Smart Environment Hub',
    grades: 'Grades 7–9',
    description: 'Explore connected devices, environmental monitoring, and automation.',
    imageUrl: STEM_KITS_DATA[1].imageUrl,
  },
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

      <section className="w-full border-y border-surface-container bg-surface-container-low py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">Everything your school needs to get started</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 divide-y divide-surface-container md:grid-cols-2 md:divide-y-0 lg:grid-cols-4">
            {schoolSolutions.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="flex min-h-48 flex-col py-8 first:pt-0 last:pb-0 md:px-8 md:py-10 md:[&:nth-child(odd)]:border-r md:[&:nth-child(-n+2)]:border-b lg:min-h-56 lg:border-r lg:px-8 lg:py-0 lg:[&:nth-child(-n+2)]:border-b-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                  <Icon aria-hidden="true" className="h-5 w-5 text-secondary" strokeWidth={1.75} />
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-on-surface">{item.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
                </article>
              );
            })}
          </div>
          <a href="/for-schools" onClick={(event) => { event.preventDefault(); onNavigate('for-schools'); }} className="group mt-10 inline-flex items-center gap-2 font-display text-sm font-bold text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
            Explore school solutions <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section className="w-full bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl">STEM &amp; Robotics Kits</h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">Hands-on kits designed to grow with students as they explore, build, and invent.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {featuredStemKits.map((kit) => (
              <article key={kit.title} className="overflow-hidden rounded-2xl border border-surface-container bg-surface-container-lowest">
                <img src={kit.imageUrl} alt={kit.title} className="h-52 w-full object-cover sm:h-60" />
                <div className="p-6 sm:p-7">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-secondary">{kit.grades}</p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-on-surface">{kit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{kit.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-2">
            <button type="button" disabled={!STEM_KITS_SHOP_URL} onClick={() => { if (STEM_KITS_SHOP_URL) window.location.assign(STEM_KITS_SHOP_URL); }} className="inline-flex items-center gap-2 rounded-xl border border-surface-container-high bg-surface-container-lowest px-5 py-3 font-display text-sm font-bold text-on-surface transition-colors enabled:hover:bg-surface-container-high disabled:cursor-not-allowed disabled:opacity-55">
              Show more <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
            {!STEM_KITS_SHOP_URL && <p className="text-xs text-on-surface-variant">Shop coming soon</p>}
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
