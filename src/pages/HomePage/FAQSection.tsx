import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, BookOpen, CalendarDays, ChevronDown, CircleHelp, GraduationCap, School } from 'lucide-react';
import { NavigationPath } from '../../types.ts';

const faqs = [
  { question: 'How much dedicated physical space does a school need?', answer: 'Brain Up Labs offers flexible laboratory solutions designed to fit different school environments. With our Labs on Table™ approach, students can perform hands-on experiments using portable STEM kits directly in their classrooms, without requiring a dedicated laboratory. For larger setups, space requirements depend on the selected lab configuration.' },
  { question: 'Do our teachers need prior computer science or engineering backgrounds?', answer: 'No. Our programs are designed to be accessible to educators from different academic backgrounds. We provide structured teaching resources, practical training and ongoing guidance to help teachers confidently conduct STEM, Robotics, AI and IoT learning sessions.' },
  { question: 'How does the curriculum align with NEP 2020, CBSE and ICSE?', answer: "Our learning approach emphasizes experiential, activity-based and project-based education, supporting the learning principles of NEP 2020. Programs can be structured around relevant CBSE and ICSE grade-level learning objectives, depending on the school's requirements." },
  { question: 'Which classes and age groups can participate?', answer: "Our educational solutions can support students across different learning stages, from foundational STEM activities to advanced Robotics, AI, Coding and IoT projects. Kits and activities are selected according to students' grade levels and learning abilities." },
  { question: 'What technologies do students learn through Brain Up Labs?', answer: 'Students explore STEM, Electronics, Coding, Robotics, Artificial Intelligence, Machine Learning, Internet of Things (IoT), Neuroscience and Aerospace technology.' },
  { question: 'What is included in a Brain Up Labs school laboratory setup?', answer: 'Depending on the selected package, a laboratory setup may include educational kits, electronic components, robotics equipment, sensors, project materials, structured curriculum, teacher training and implementation support.' },
  { question: 'Are students able to build real-world projects?', answer: 'Absolutely. Our approach focuses on learning by doing. Students work on practical projects involving electronics, automation, robotics, smart systems and emerging technologies. They learn to identify problems, develop ideas, build prototypes and understand how their creations work.' },
  { question: 'Do you provide teacher training and ongoing support?', answer: 'Yes. We provide training to help educators understand the kits, components, project activities and teaching methodology. Support and guidance can also be provided during program implementation.' },
  { question: 'Can schools customize their STEM and Robotics laboratory requirements?', answer: 'Yes. We understand that every school has different infrastructure, student strength, budgets and academic requirements. We work with institutions to recommend suitable kits, laboratory configurations, learning programs and implementation plans.' },
  { question: 'How can our school get started with Brain Up Labs?', answer: 'Getting started is simple. Schools can book a free demonstration to explore our educational kits, laboratory solutions and learning programs. Our team can understand your requirements, recommend suitable solutions and guide you through the implementation process.' },
];

interface FAQSectionProps {
  openFaqIndex: number | null;
  onToggle: (index: number) => void;
  onNavigate: (path: NavigationPath) => void;
}

export function FAQSection({ openFaqIndex, onToggle, onNavigate }: FAQSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const reduceMotion = useReducedMotion();
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="school-solutions relative overflow-hidden border-t border-surface-container bg-surface-container-low py-16 sm:py-20 lg:py-24">
      <span aria-hidden="true" className="school-solution-corner absolute -left-12 -top-12 hidden h-32 w-32 rounded-[2.5rem] lg:block" />
      <span aria-hidden="true" className="school-solution-dot-mesh absolute right-6 top-8 hidden h-16 w-16 lg:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="school-accent-outline school-accent-text inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest"><CircleHelp aria-hidden="true" className="h-4 w-4" /> Institutional queries</p>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">Frequently Asked <span className="school-accent-text">Questions</span></h2>
          <p className="mt-5 text-base leading-relaxed text-on-surface-variant sm:text-lg">Everything school administrators and STEM coordinators need to know before introducing technology-driven learning.</p>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3">
          <AnimatePresence initial={false}>
          {visibleFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const Icon = [School, GraduationCap, BookOpen][index] ?? CircleHelp;
            return (
              <motion.div key={faq.question} initial={reduceMotion ? false : { height: 0, opacity: 0, marginBottom: -12 }} animate={{ height: 'auto', opacity: 1, marginBottom: 0 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0, marginBottom: -12 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} className="overflow-hidden rounded-2xl border border-surface-container bg-surface-container-lowest shadow-sm">
                <h3><button type="button" onClick={() => onToggle(index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} className="flex w-full items-center gap-4 px-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-secondary sm:px-7">
                  <Icon aria-hidden="true" className="school-accent-text h-6 w-6 shrink-0" /><span className="flex-1 font-display text-base font-bold text-on-surface sm:text-lg">{faq.question}</span><ChevronDown aria-hidden="true" className={`school-accent-text h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button></h3>
                <motion.div id={`faq-answer-${index}`} aria-hidden={!isOpen} initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeInOut' }} className="overflow-hidden">
                  <div className="bg-surface-container-low px-5 py-5 sm:px-7"><p className="border-l-4 border-current pl-5 text-sm leading-relaxed text-on-surface-variant sm:text-base">{faq.answer}</p></div>
                </motion.div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
        <div className="mt-8 text-center"><button type="button" onClick={() => { setShowAll(!showAll); if (showAll && openFaqIndex !== null && openFaqIndex >= 3) onToggle(openFaqIndex); }} aria-expanded={showAll} className="inline-flex items-center gap-2 rounded-full border border-outline px-6 py-3 font-display text-sm font-bold text-on-surface transition-colors hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">{showAll ? 'Show fewer FAQs' : 'View All FAQs (10)'} <ChevronDown aria-hidden="true" className={`h-4 w-4 ${showAll ? 'rotate-180' : ''}`} /></button></div>
        <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl bg-inverse-surface p-7 text-inverse-on-surface sm:p-10 lg:flex-row lg:items-center">
          <CircleHelp aria-hidden="true" className="school-accent-text h-14 w-14 shrink-0" />
          <div className="flex-1"><h3 className="font-display text-2xl font-extrabold tracking-tight">Still have questions about setting up your school’s innovation lab?</h3><p className="mt-2 text-sm leading-relaxed opacity-90 sm:text-base">Our team is here to help you find the right STEM, Robotics and AI learning solutions for your institution.</p></div>
          <button onClick={() => onNavigate('book-a-demo')} className="school-accent-bg inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"><CalendarDays aria-hidden="true" className="h-5 w-5" /> Book a Free Demo <ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}
