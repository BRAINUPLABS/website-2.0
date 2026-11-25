import React, { useState } from 'react';
import { ArrowRight, Blocks, BookOpen, Code2, GraduationCap, Presentation, Rocket, School, Table2, Wrench } from 'lucide-react';
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

const heroHighlights = [
  { label: 'Modular lab setup', icon: Blocks },
  { label: 'Teacher training', icon: Presentation },
  { label: 'Hands-on projects', icon: Code2 },
  { label: 'Future-ready skills', icon: Rocket },
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
  const project = STUDENT_PROJECTS_DATA[0];

  return (
    <div className="flex w-full flex-col">
      <section className="home-hero relative w-full overflow-hidden bg-surface py-12 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="hero-dot-mesh absolute right-8 top-8 hidden h-20 w-20 lg:block" />
        <span aria-hidden="true" className="hero-dot-mesh absolute bottom-8 left-0 hidden h-14 w-14 lg:block" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="flex flex-col items-start">
            <p className="hero-accent-outline hero-accent-text inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest">
              <GraduationCap aria-hidden="true" className="h-4 w-4" /> For school leaders
            </p>
            <h1 aria-label="Hands-on STEM and robotics labs for schools." className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-on-surface sm:text-5xl lg:text-[3.5rem]">
              <span aria-hidden="true" className="motion-reduce:hidden">Hands-on{' '}
                <span className="relative inline-block h-[1.3em] w-[5.25em] overflow-hidden align-[-0.35em] whitespace-nowrap">
                  <span className="hero-keyword-loop hero-accent-text absolute left-0 top-0 flex flex-col font-mono text-[1.05em]">
                    <span className="h-[1.3em]">STEM</span>
                    <span className="h-[1.3em]">Robotics</span>
                    <span className="h-[1.3em]">AI</span>
                    <span className="h-[1.3em]">STEM</span>
                  </span>
                </span>
                <span className="block">labs for schools.</span>
                <span aria-hidden="true" className="hero-heading-underline mt-2 block h-1 w-32 rounded-full" />
              </span>
              <span className="hidden motion-reduce:inline">Hands-on STEM and robotics labs for schools.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">We set up modular labs, train teachers, and give students projects they can build in class.</p>
            <div className="mt-7 grid w-full grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {heroHighlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <div key={highlight.label} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border border-surface-container bg-surface-container-lowest px-2 py-3 text-center">
                    <Icon aria-hidden="true" className="hero-accent-text h-5 w-5" strokeWidth={1.75} />
                    <span className="font-display text-xs font-bold leading-tight text-on-surface">{highlight.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button onClick={() => onNavigate('book-a-demo')} className="hero-accent-bg inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm font-bold shadow-md transition-all hover:shadow-lg">
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              Book a Demo
              </button>
              <button onClick={() => onNavigate('projects')} className="hero-accent-hover inline-flex items-center gap-2 rounded-xl px-2 py-3 font-display text-sm font-bold text-on-surface transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                <span className="hero-accent-outline hero-accent-text flex h-8 w-8 items-center justify-center rounded-full border"><span aria-hidden="true" className="ml-0.5 text-xs">▶</span></span>
                Watch how it works
              </button>
            </div>
          </div>
          <div className="relative">
            <span aria-hidden="true" className="hero-image-accent absolute -right-4 -top-5 h-24 w-36 rounded-3xl sm:-right-6 sm:-top-7 sm:h-32 sm:w-48" />
            <span aria-hidden="true" className="absolute -bottom-5 -left-4 h-24 w-36 rounded-3xl bg-surface-container-high sm:-bottom-7 sm:-left-7 sm:h-36 sm:w-48" />
            <img src="/assets/aistudio/Image_1_360de192.jpeg" alt="Students building a robot in a school STEM lab" className="relative aspect-[4/3] w-full rounded-3xl border border-surface-container object-cover shadow-lg" />
          </div>
        </div>
      </section>

      <section className="school-solutions relative w-full overflow-hidden border-y border-surface-container bg-surface-container-low py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="school-solution-corner absolute -left-12 -top-12 hidden h-32 w-32 rounded-[2.5rem] lg:block" />
        <span aria-hidden="true" className="school-solution-dot-mesh absolute bottom-10 left-6 hidden h-16 w-16 lg:block" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="school-accent-outline school-accent-text inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest">
              <School aria-hidden="true" className="h-4 w-4" /> Complete school solutions
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">Everything your school needs to <span className="school-accent-text">build future innovators.</span></h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">From STEM labs and portable stations to practical curriculum and teacher training, we bring every part of hands-on technology learning together.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {schoolSolutions.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="school-solution-card flex min-h-72 flex-col rounded-2xl border border-surface-container border-b-4 bg-surface-container-lowest p-6 sm:p-7">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-surface-container-low">
                    <Icon aria-hidden="true" className="school-accent-text h-10 w-10" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold leading-snug text-on-surface">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 flex flex-col items-center gap-6 rounded-3xl border border-surface-container bg-surface-container-lowest px-6 py-6 text-center sm:flex-row sm:text-left lg:px-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface-container-low"><Rocket aria-hidden="true" className="school-accent-text h-7 w-7" strokeWidth={1.6} /></span>
            <div className="sm:flex-1">
              <h3 className="font-display text-xl font-extrabold tracking-tight text-on-surface">One partner. Complete school innovation ecosystem.</h3>
              <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">Infrastructure, learning resources, and educator support designed to grow with your school.</p>
            </div>
            <a href="/for-schools" onClick={(event) => { event.preventDefault(); onNavigate('for-schools'); }} className="school-accent-bg inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-bold transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
              Explore school solutions <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
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
