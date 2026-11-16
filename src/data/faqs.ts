import { FaqItem, Testimonial } from '../types.ts';

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'How much dedicated physical space does a school need?',
    answer:
      'Our full Turnkey Robotics Labs require a 500–800 sq.ft room with standard power sockets. However, with our flagship Labs on Table™ system, your school requires zero additional square footage—the portable stations function flawlessly on ordinary classroom benches and pack into secured rolling flight-case lockers.',
    category: 'Infrastructure'
  },
  {
    question: 'Do our teachers need prior computer science or engineering backgrounds?',
    answer:
      'Not at all. Brain Up Labs provides an exhaustive 5-day on-campus faculty training program followed by continuous bi-weekly mentorship. Every single lesson has guided teacher scripts, student step-by-step experiment sheets, and recorded video tutorials.',
    category: 'Faculty'
  },
  {
    question: 'How does the curriculum align with NEP 2020, CBSE, and ICSE?',
    answer:
      'Our syllabus is meticulously cross-mapped with the latest CBSE Artificial Intelligence curriculum guidelines, ICSE Robotics standards, and Atal Tinkering Lab project goals. Lesson modules directly count toward mandatory experiential learning credits mandated by NEP 2020.',
    category: 'Curriculum'
  },
  {
    question: 'What happens if components or microcontrollers get damaged?',
    answer:
      'All institutional packages include a 15% complimentary spare component pool and a 1-year unconditional direct hardware replacement warranty. Replacement parts ship within 48 business hours from our Bengaluru and Delhi distribution hubs.',
    category: 'Warranty & Spares'
  },
  {
    question: 'Can Brain Up Labs provide a full-time resident STEM trainer on our campus?',
    answer:
      'Yes! For schools seeking zero operational strain, our "Turnkey In-Curriculum" model deploys a certified Brain Up Resident STEM Engineer who takes over all weekly timetabled lab periods, runs after-school hackathon clubs, and prepares students for national olympiads.',
    category: 'Staffing'
  },
  {
    question: 'Is your hardware safe for young primary school children?',
    answer:
      'Strictly 100% child safe. All our student hardware operates at ultra-low DC voltages (3.3V to 5V) powered by safe, thermally protected LiFePO4 battery modules. There are zero exposed mains voltages and all chassis materials are rounded, non-toxic modular ABS/polycarbonate.',
    category: 'Safety'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote:
      'Most vendors sell plastic toys and disappear. Brain Up Labs provided pedagogical structure, teacher workshops, and genuine engineering microcontrollers. Our parents are thoroughly impressed.',
    name: 'Dr. Rajesh Menon',
    role: 'Director',
    initials: 'RM',
    school: 'Vidyashilp Academy, Bengaluru',
    stat: {
      value: '+32%',
      label: 'Surge in Grade 11 STEM Opt-in'
    }
  },
  {
    quote:
      'The Labs on Table setup solved our infrastructure headache instantly. We didn’t need to knock down walls to build a specialized robotics wing. Teachers conduct labs right inside standard homerooms.',
    name: 'Shalini Kapoor',
    role: 'Head of Academics',
    initials: 'SK',
    school: 'Heritage School, Gurugram',
    stat: {
      value: '320+',
      label: 'Working Student Inventions'
    }
  },
  {
    quote:
      'I used to find coding boring because it stayed inside the screen. When my Python script made the rover steer around my shoes, I realized what real computer science actually feels like.',
    name: 'Aarav Agarwal',
    role: 'Student, Grade 9',
    initials: 'AA',
    school: 'Modern School, New Delhi',
    stat: {
      value: '1st',
      label: 'Prize Regional Science Olympiad'
    }
  },
  {
    quote:
      'The live demonstration convinced our school management committee within 30 minutes. Brain Up Labs provided full teacher training alongside modular hardware, turning our conventional computer room into our students’ favorite space.',
    name: "Rev. Sister Mary D'Souza",
    role: 'Principal',
    initials: 'MD',
    school: "St. Xavier's Academy",
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkaCjnTKJuOOif50coH6kD0B74hkwQx6Ue-sBBpVTe7rHxjGRxJAtDHIqHveONi61VqtopN1BuikNDInqotgpsiY8smzcMKb5BI2_Dse34kDshNA_KW-8-ZY0vwGA2OFF0pDwVIBLGdQCqq6m3wInSXj6CIW2jVTpFkz73Ljo8syIf4pHKu4qKmL1RqTA87bFOpX-UeoESbgbx7Gs-DVPcCRxW1WkHYyAf15vtUUx8',
    stat: {
      value: '100%',
      label: 'Faculty Autonomy'
    }
  }
];
