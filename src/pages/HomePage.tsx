import React, { useState } from 'react';
import { ArrowRight, Blocks, BookOpen, Box, ChartNoAxesCombined, Code2, Droplets, Flame, FlaskConical, GraduationCap, Handshake, Lightbulb, Presentation, Radio, Rocket, School, Settings, Table2, Wrench } from 'lucide-react';
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

const innovationPillars = [
  { icon: GraduationCap, title: 'NEP 2020 Aligned Framework', description: 'Experiential, project-based learning that supports the principles of NEP 2020.' },
  { icon: Code2, title: 'Industry Relevant Tech Stack', description: 'Explore tools and technologies including coding, robotics, AI, and IoT.' },
  { icon: ChartNoAxesCombined, title: 'Structured Growth Pathway', description: 'Progress from foundational activities to more advanced projects.' },
  { icon: Lightbulb, title: 'Future Focused Skill Building', description: 'Develop creativity, problem-solving, and practical technology skills.' },
  { icon: FlaskConical, title: 'Experiential Learning by Design', description: 'Learn by doing through hands-on activities and real-world projects.' },
  { icon: Handshake, title: 'Trusted Learning Partner', description: 'Teacher training and ongoing guidance support implementation at your school.' },
];

const learningJourney = [
  { title: 'Explore', description: 'Discover concepts and technologies.', image: '/assets/aistudio/Image_6_f94c54b2.jpeg', alt: 'Student exploring technology in a STEM lab' },
  { title: 'Learn', description: 'Understand through hands-on activities.', image: '/assets/aistudio/Image_1_360de192.jpeg', alt: 'Students learning together in a robotics lab' },
  { title: 'Build', description: 'Create projects and prototypes.', image: '/assets/aistudio/Image_1_360de192.jpeg', alt: 'Students building a robotics project' },
  { title: 'Innovate', description: 'Solve real-world problems and bring ideas to life.', image: STUDENT_PROJECTS_DATA[0].imageUrl, alt: 'Student-built fire-fighting rover' },
];

// Set this when the dedicated shop is ready. The action remains disabled until then.
const STEM_KITS_SHOP_URL: string | null = null;

const featuredStemKits = [
  {
    title: 'Early Explorers Discovery Kit',
    grades: 'Grades 1–3',
    description: 'Hands-on electronics and simple circuits for curious young learners.',
    imageUrl: STEM_KITS_DATA[0].imageUrl,
    skills: ['Basic electronics', 'Creative projects', 'Logic & thinking'],
  },
  {
    title: 'Mechanical & Sensor Robotics',
    grades: 'Grades 4–6',
    description: 'Build robots and explore sensors, movement, and block coding.',
    imageUrl: STEM_KITS_DATA[2].imageUrl,
    skills: ['Coding basics', 'Sensors & automation', 'Robot building'],
  },
  {
    title: 'IoT & Smart Environment Hub',
    grades: 'Grades 7–9',
    description: 'Explore connected devices, environmental monitoring, and automation.',
    imageUrl: STEM_KITS_DATA[1].imageUrl,
    skills: ['IoT applications', 'Data monitoring', 'Smart solutions'],
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

      <section className="school-solutions relative w-full overflow-hidden bg-surface py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="school-solution-corner absolute -left-12 -top-12 hidden h-32 w-32 rounded-[2.5rem] lg:block" />
        <span aria-hidden="true" className="school-solution-dot-mesh absolute bottom-10 right-6 hidden h-16 w-16 lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="school-accent-outline school-accent-text inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest"><Box aria-hidden="true" className="h-4 w-4" /> STEM &amp; Robotics Kits</p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">Hands-on kits for <span className="school-accent-text">every learning stage.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-on-surface-variant sm:text-lg">Hands-on kits designed to grow with students as they explore, build, and invent.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {featuredStemKits.map((kit) => (
              <article key={kit.title} className="school-solution-card overflow-hidden rounded-2xl border border-surface-container border-b-4 bg-surface-container-lowest">
                <div className="relative">
                  <img src={kit.imageUrl} alt={kit.title} className="h-52 w-full object-cover sm:h-60" />
                  <p className="school-accent-bg absolute left-4 top-4 rounded-full px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider">{kit.grades}</p>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold leading-snug text-on-surface">{kit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{kit.description}</p>
                  <div className="mt-6 grid grid-cols-3 divide-x divide-surface-container text-center">
                    {kit.skills.map((skill, index) => {
                      const Icon = [Lightbulb, Radio, Settings][index];
                      return <div key={skill} className="flex flex-col items-center gap-2 px-2"><Icon aria-hidden="true" className="school-accent-text h-5 w-5" /><span className="text-xs font-semibold leading-snug text-on-surface">{skill}</span></div>;
                    })}
                  </div>
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

      <section className="school-solutions relative overflow-hidden border-y border-surface-container bg-surface-container-low py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="school-solution-corner absolute -left-12 -top-12 hidden h-32 w-32 rounded-[2.5rem] lg:block" />
        <span aria-hidden="true" className="school-solution-dot-mesh absolute right-6 top-8 hidden h-16 w-16 lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="school-accent-outline school-accent-text inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest"><Lightbulb aria-hidden="true" className="h-4 w-4" /> Why Brain Up Labs?</p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">More than kits. <span className="school-accent-text">A complete innovation ecosystem.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-on-surface-variant sm:text-lg">Six pillars supporting hands-on technology education for schools, educators and students.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {innovationPillars.map(({ icon: Icon, title, description }) => <article key={title} className="school-solution-card flex items-center gap-5 rounded-2xl border border-surface-container border-b-4 bg-surface-container-lowest p-6"><span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-surface-container-low"><Icon aria-hidden="true" className="school-accent-text h-8 w-8" strokeWidth={1.5} /></span><div className="border-l border-surface-container-high pl-5"><h3 className="font-display text-lg font-bold leading-snug text-on-surface">{title}</h3><p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="school-solutions relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="school-solution-dot-mesh absolute bottom-8 left-4 hidden h-16 w-16 lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="school-accent-outline school-accent-text inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest"><Settings aria-hidden="true" className="h-4 w-4" /> How it works</p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">From classroom concepts to <span className="school-accent-text">real-world creations.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-on-surface-variant sm:text-lg">A simple and engaging journey to build skills, spark creativity, and innovate.</p>
          </div>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learningJourney.map((step, index) => <li key={step.title} className="flex flex-col rounded-2xl border border-surface-container bg-surface-container-lowest p-5 text-center"><span className="school-accent-text mx-auto font-display text-sm font-extrabold">0{index + 1}</span><h3 className="mt-2 font-display text-xl font-bold text-on-surface">{step.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-on-surface-variant">{step.description}</p><img src={step.image} alt={step.alt} loading="lazy" className="mt-5 aspect-[3/2] w-full rounded-xl object-cover" /></li>)}
          </ol>
          <div className="mt-10 flex flex-col items-center gap-5 rounded-3xl bg-inverse-surface px-6 py-6 text-center text-inverse-on-surface sm:flex-row sm:text-left lg:px-8"><Rocket aria-hidden="true" className="school-accent-text h-9 w-9 shrink-0" /><h3 className="flex-1 font-display text-xl font-extrabold sm:text-2xl">Let’s build <span className="school-accent-text">future innovators</span> together.</h3><a href="/for-schools" onClick={(event) => { if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) { event.preventDefault(); onNavigate('for-schools'); } }} className="school-accent-bg inline-flex items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">Explore our solutions <ArrowRight aria-hidden="true" className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section className="school-solutions relative w-full overflow-hidden bg-surface-container-low py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="school-solution-dot-mesh absolute right-6 top-8 hidden h-16 w-16 lg:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <span aria-hidden="true" className="school-solution-corner absolute -left-4 -top-4 h-32 w-36 rounded-3xl sm:-left-6 sm:-top-6" />
            <img src={project.imageUrl} alt={project.title} className="relative aspect-[4/3] w-full rounded-3xl border-4 border-surface-container-lowest object-cover shadow-md" />
          </div>
          <div>
            <p className="school-accent-outline school-accent-text inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest"><GraduationCap aria-hidden="true" className="h-4 w-4" /> Student work</p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl">Autonomous <span className="school-accent-text">Fire-fighting Rover</span></h2>
            <p className="mt-5 text-base leading-relaxed text-on-surface-variant">{project.description}</p>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-on-surface"><School aria-hidden="true" className="school-accent-text h-5 w-5 shrink-0" /> {project.studentClass} · {project.schoolName}</p>
            <div className="mt-7 grid grid-cols-3 divide-x divide-surface-container text-center">
              {[{ icon: Flame, title: 'Fire detection', description: 'Locates flames with thermal sensors.' }, { icon: Settings, title: 'Autonomous action', description: 'Operates without human intervention.' }, { icon: Droplets, title: 'Fire extinguishing', description: 'Activates a pressurized pump.' }].map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-col items-center gap-2 px-2 sm:px-4"><Icon aria-hidden="true" className="school-accent-text h-7 w-7" /><h3 className="font-display text-sm font-bold leading-snug text-on-surface">{title}</h3><p className="text-xs leading-relaxed text-on-surface-variant">{description}</p></div>
              ))}
            </div>
            <button onClick={() => onNavigate('projects')} className="school-accent-bg mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
              View Student Projects <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <FAQSection openFaqIndex={openFaqIndex} onToggle={(index) => setOpenFaqIndex(openFaqIndex === index ? null : index)} onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} />
    </div>
  );
};
