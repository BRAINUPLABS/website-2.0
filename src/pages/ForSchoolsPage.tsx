import React, { useEffect, useState } from 'react';

interface ForSchoolsPageProps {
  initialTab?: string;
}

const setups = [
  {
    name: 'Foundation STEM Corner',
    suits: 'Schools starting with a multipurpose room or a smaller budget.',
    space: '150–250 sq.ft',
    capacity: '15–20 students',
    equipment: 'Mobile workbench, basic sensor kits, multimeters, and safe prototyping tools.',
  },
  {
    name: 'Dedicated Tinkering Studio',
    suits: 'Schools planning regular, timetable-based lab sessions.',
    space: '500–700 sq.ft',
    capacity: '30–36 students',
    equipment: 'Collaborative tables, 3D printers, a display wall, and a Grade 4–10 kit matrix.',
  },
  {
    name: 'Robotics & IoT Center',
    suits: 'Schools ready for advanced robotics, coding, and connected-device projects.',
    space: '800–1,000 sq.ft',
    capacity: '40 students',
    equipment: 'Competition arena, soldering stations with fume extraction, ESP32 and Raspberry Pi suites, and oscilloscopes.',
  },
  {
    name: 'Aerospace & AI Innovation Hub',
    suits: 'Senior schools planning aerospace, computer vision, and research projects.',
    space: '1,000–1,500 sq.ft',
    capacity: '45+ students',
    equipment: 'Drone testing net, NVIDIA Jetson edge modules and cameras, plus a wind-tunnel test fixture.',
  },
];

const learningStages = [
  { title: 'Primary · Grades 1–5', description: 'Students discover simple machines, block coding, sensors, and solar circuits through guided builds.', example: 'Example project: forces and pulley systems.' },
  { title: 'Middle · Grades 6–8', description: 'Students move into microcontrollers, coding, automation, and connected sensors.', example: 'Example project: a smart irrigation system.' },
  { title: 'Senior · Grades 9–12', description: 'Students explore computer vision, drone telemetry, and longer research projects.', example: 'Example project: an object-classification model.' },
];

const sectionForTab: Record<string, string> = {
  overview: 'introduction',
  'lab-tiers': 'lab-setup',
  tier2: 'lab-setup',
  curriculum: 'learning',
  'teacher-training': 'support',
  competitions: 'learning',
  'case-studies': 'support',
  'proposal-form': 'proposal-form',
};

const inputClass = 'w-full rounded-xl border border-surface-container bg-surface-container-lowest p-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary';

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({ initialTab }) => {
  const [labPreference, setLabPreference] = useState('Help me choose');
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    const sectionId = initialTab && sectionForTab[initialTab];
    if (!sectionId) return;

    const timeout = window.setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 0);
    return () => window.clearTimeout(timeout);
  }, [initialTab]);

  const chooseSetup = (name: string) => {
    setLabPreference(name);
    document.getElementById('proposal-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProposal = () => document.getElementById('proposal-form')?.scrollIntoView({ behavior: 'smooth' });

  const requestProposal = (event: React.FormEvent) => {
    event.preventDefault();
    setFormMessage('This form cannot send yet because an enquiry service has not been connected. Please contact schools@brainuplabs.com to request a proposal.');
  };

  return (
    <div className="flex w-full flex-col">
      <section id="introduction" className="border-b border-surface-container bg-surface py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-on-surface sm:text-5xl">Bring hands-on STEM learning to your school.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-surface-variant">We help you set up your lab, introduce project-based learning, and train your teachers.</p>
            <button onClick={scrollToProposal} className="mt-7 inline-flex rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-on-primary shadow-md transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Request a Proposal</button>
          </div>
          <img src="/assets/aistudio/Image_1_360de192.jpeg" alt="Students building a robot in a school STEM lab" className="h-72 w-full rounded-2xl object-cover shadow-lg sm:h-96" />
        </div>
      </section>

      <section id="lab-setup" className="border-b border-surface-container bg-surface-container-low py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">Choose your lab setup</h2>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant">Start with the space and number of students you want to support. We can help you choose if you are still comparing options.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {setups.map((setup) => (
              <article key={setup.name} className="flex flex-col rounded-2xl border border-surface-container bg-surface-container-lowest p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-on-surface">{setup.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{setup.suits}</p>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-surface-container-low p-3"><dt className="text-xs text-on-surface-variant">Space</dt><dd className="mt-1 font-bold text-on-surface">{setup.space}</dd></div>
                  <div className="rounded-xl bg-surface-container-low p-3"><dt className="text-xs text-on-surface-variant">Students</dt><dd className="mt-1 font-bold text-on-surface">{setup.capacity}</dd></div>
                </dl>
                <details className="mt-5 rounded-xl border border-surface-container p-4">
                  <summary className="cursor-pointer font-display text-sm font-bold text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">View details</summary>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-on-surface-variant">
                    <p><strong className="text-on-surface">Equipment:</strong> {setup.equipment}</p>
                    <p><strong className="text-on-surface">Storage and support:</strong> The existing lab plan includes organised storage, a 15% spare component reserve, and QR-based inventory support. Confirm the final maintenance plan for your chosen setup.</p>
                  </div>
                </details>
                <button onClick={() => chooseSetup(setup.name)} className="mt-5 self-start rounded-xl border border-surface-container-high bg-surface-container-lowest px-4 py-2.5 font-display text-sm font-bold text-on-surface transition-colors hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Choose this setup</button>
              </article>
            ))}
          </div>
          <button onClick={() => { setLabPreference('Help me choose'); scrollToProposal(); }} className="mt-8 inline-flex font-display text-sm font-bold text-secondary hover:text-secondary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Help me choose <span aria-hidden="true" className="ml-1">→</span></button>
        </div>
      </section>

      <section id="learning" className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl"><h2 className="font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">What students learn</h2><p className="mt-3 text-base text-on-surface-variant">A progression from first builds to advanced projects.</p></div>
          <div className="mt-8 divide-y divide-surface-container rounded-2xl border border-surface-container bg-surface-container-lowest">
            {learningStages.map((stage) => <article key={stage.title} className="grid gap-3 p-5 sm:grid-cols-[13rem_1fr] sm:items-start"><h3 className="font-display text-base font-bold text-on-surface">{stage.title}</h3><div><p className="text-sm leading-relaxed text-on-surface-variant">{stage.description}</p><p className="mt-2 text-sm font-semibold text-secondary">{stage.example}</p></div></article>)}
          </div>
          <details className="mt-6 rounded-2xl border border-surface-container bg-surface-container-low p-5">
            <summary className="cursor-pointer font-display text-base font-bold text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Curriculum and policy alignment</summary>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">Current materials reference NEP 2020 experiential learning, CBSE AI curriculum guidance, ICSE robotics standards, and Atal Tinkering Lab project goals. Confirm the requirements that apply to your school before finalising a plan.</p>
          </details>
        </div>
      </section>

      <section id="support" className="border-y border-surface-container bg-surface-container-low py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl"><h2 className="font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">Setup and ongoing support</h2><p className="mt-3 text-base text-on-surface-variant">A straightforward path from planning to regular classes.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-surface-container bg-surface-container-lowest p-6"><span className="font-display text-sm font-bold text-secondary">01</span><h3 className="mt-3 font-display text-lg font-bold text-on-surface">Plan your lab</h3><p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Review your space, grade levels, and learning goals. Choose a setup or ask for help comparing options.</p></article>
            <article className="rounded-2xl border border-surface-container bg-surface-container-lowest p-6"><span className="font-display text-sm font-bold text-secondary">02</span><h3 className="mt-3 font-display text-lg font-bold text-on-surface">Install and train</h3><p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Set up equipment and give teachers practical guidance for classroom sessions and hardware troubleshooting.</p></article>
            <article className="rounded-2xl border border-surface-container bg-surface-container-lowest p-6"><span className="font-display text-sm font-bold text-secondary">03</span><h3 className="mt-3 font-display text-lg font-bold text-on-surface">Run classes with support</h3><p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Use lesson resources and ask about the optional resident STEM trainer for schools that need on-campus delivery support.</p></article>
          </div>
        </div>
      </section>

      <section id="proposal-form" className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-surface-container bg-surface-container-low p-6 shadow-sm sm:p-10">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-on-surface">Request a Proposal</h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">Tell us a little about your school and the setup you are considering.</p>
            <form onSubmit={requestProposal} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="school-name" label="School name"><input id="school-name" name="schoolName" required className={inputClass} placeholder="Your school" /></Field>
                <Field id="city" label="City"><input id="city" name="city" required className={inputClass} placeholder="City" /></Field>
                <Field id="contact-name" label="Contact name"><input id="contact-name" name="contactName" required className={inputClass} placeholder="Your name" /></Field>
                <Field id="contact" label="Email or phone"><input id="contact" name="contact" required className={inputClass} placeholder="name@school.edu.in or phone" /></Field>
              </div>
              <Field id="lab-preference" label="Lab preference"><select id="lab-preference" name="labPreference" value={labPreference} onChange={(event) => setLabPreference(event.target.value)} className={inputClass}><option>Help me choose</option>{setups.map((setup) => <option key={setup.name}>{setup.name}</option>)}</select></Field>
              <Field id="requirements" label="Requirements (optional)"><textarea id="requirements" name="requirements" rows={4} className={inputClass} placeholder="Tell us about your space or teaching goals." /></Field>
              <p className="text-sm text-on-surface-variant">We will discuss board, student strength, and detailed procurement needs during follow-up.</p>
              {formMessage && <p role="status" className="rounded-xl border border-warning bg-warning-container p-4 text-sm text-on-warning">{formMessage}</p>}
              <button type="submit" className="inline-flex rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-on-primary shadow-md transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Request a Proposal</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5"><label htmlFor={id} className="font-display text-sm font-bold text-on-surface">{label}</label>{children}</div>;
}
