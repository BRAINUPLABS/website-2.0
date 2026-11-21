import React, { useState } from 'react';
import { NavigationPath } from '../types.ts';

interface ProgramsPageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
  initialFilter?: string;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate, initialFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter || 'all');
  const [downloadToast, setDownloadToast] = useState(false);
  const [prospectusSubmitted, setProspectusSubmitted] = useState(false);

  const [prospectusForm, setProspectusForm] = useState({
    schoolName: '',
    city: '',
    contactName: '',
    email: '',
    phone: '',
    model: 'In-Curriculum (Timetabled)'
  });

  const handleDownloadProspectus = (e: React.FormEvent) => {
    e.preventDefault();
    setProspectusSubmitted(true);
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 4000);
  };

  const programs = [
    {
      id: 'school-stem',
      title: 'School Integrated STEM Curriculum',
      category: 'school-core',
      badge: 'Grades 1 to 12 • NEP 2020 Aligned',
      badgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
      icon: 'school',
      description:
        'A fully accredited, year-long experiential curriculum mapped directly to CBSE Skill Subjects, ICSE Robotics, and Atal Innovation Mission milestones. 36 graded laboratory assignments per grade level.',
      highlights: [
        '36 Timetabled sessions per academic year',
        'Turnkey grade-specific hardware kits for each pair of students',
        'Student laboratory logbooks & teacher master rubrics',
        'Summative rubric grading & portfolio generation'
      ],
      colSpan: 'lg:col-span-7',
      primaryAction: 'Explore Curriculum Flow'
    },
    {
      id: 'labs-table',
      title: 'Labs on Table™ Turnkey Station Model',
      category: 'labs-table',
      badge: 'Zero Civil Work • Multi-Grade',
      badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
      icon: 'table_restaurant',
      description:
        'Transform any standard classroom into an industrial-grade robotics innovation center in under 15 minutes. Self-contained mobile charging vaults, modular snap trays, and rechargeable power blocks.',
      highlights: [
        '10 Fully outfitted student workstations (30-student capacity)',
        'Heavy-duty compartmentalized flight cases with locking trays',
        'Integrated LiFePO4 battery hubs (no tangled wall plugs)',
        'Spares bank & rapid component replenishment support'
      ],
      colSpan: 'lg:col-span-5',
      primaryAction: 'Review Station Specs'
    },
    {
      id: 'ai-robotics',
      title: 'Edge AI & Neural Vision Systems Lab',
      category: 'ai-robotics',
      badge: 'Grades 9 to 12 • Senior Secondary',
      badgeColor: 'bg-primary-fixed text-on-primary-fixed',
      icon: 'visibility',
      description:
        'Advanced computer vision, edge neural accelerators, and EEG brain-computer interface experiments. Students train custom object classifiers with TensorFlow Lite and execute on-device inference.',
      highlights: [
        '0.5 TOPS Edge AI hardware acceleration units',
        'Real-time OpenCV hand-tracking & face mesh recognition',
        'Dry-contact safe student EEG biosensing modules',
        'Python 3.11 SDK with Jupyter Notebook classroom exercises'
      ],
      colSpan: 'lg:col-span-6',
      primaryAction: 'See AI Syllabus'
    },
    {
      id: 'iot-automation',
      title: 'IoT, Smart Cities & Telemetry Lab',
      category: 'school-core',
      badge: 'Grades 6 to 10 • Middle & Secondary',
      badgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
      icon: 'cell_tower',
      description:
        'Bridge physical environment sensing to cloud dashboards. Students build connected climate stations, ultrasonic flood detection gates, and automated smart hydroponic control loops.',
      highlights: [
        'ESP32 Wi-Fi & Bluetooth Dual-Core controllers',
        '12 Grove plug-and-play atmospheric & biometric sensors',
        'Brain Up secure school IoT Telemetry cloud dashboard',
        'RESTful API webhooks and MQTT messaging protocols'
      ],
      colSpan: 'lg:col-span-6',
      primaryAction: 'See IoT Projects'
    },
    {
      id: 'teacher-accreditation',
      title: 'Master Educator STEM Certification (CPD)',
      category: 'teacher-dev',
      badge: 'Educator Professional Development',
      badgeColor: 'bg-warning-container text-on-warning',
      icon: 'workspace_premium',
      description:
        'Certified continuous professional development for science, math, and computer science teachers. Upgrades classroom faculties into confident mentors in block coding, Python, and robotics.',
      highlights: [
        '40-Hour certified hybrid masterclass program',
        'Hands-on hardware troubleshooting & lab safety drills',
        'Access to Teacher LMS with slide decks, videos & rubrics',
        'Official ISO & STEM.org accreditation certificates'
      ],
      colSpan: 'lg:col-span-6',
      primaryAction: 'View Training Modules'
    },
    {
      id: 'robotics-league',
      title: 'National STEM League & Competition Arenas',
      category: 'arenas-camps',
      badge: 'Competitive Mentorship',
      badgeColor: 'bg-error-container text-on-error-container',
      icon: 'emoji_events',
      description:
        'Dedicated training arena and battle fields for high-stakes robotics competitions including WRO (World Robot Olympiad), RoboCup Junior, and national Atal Tinkering challenges.',
      highlights: [
        'Competition-calibrated arena tracks (PID line, maze, sumo)',
        'Speed chassis tuning and precision encoder telemetry',
        'Seasoned national judge & mentor strategy sessions',
        'Regional hackathons hosted across 12 Indian metro zones'
      ],
      colSpan: 'lg:col-span-6',
      primaryAction: 'Competition Calendar'
    }
  ];

  const filteredPrograms = programs.filter((prog) => {
    if (activeFilter === 'all') return true;
    return prog.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Toast */}
      {downloadToast && (
        <div className="fixed top-24 right-6 z-50 bg-primary-container text-surface-bright px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-secondary/30 animate-bounce">
          <span className="material-symbols-outlined text-tertiary-fixed text-[22px]">download_done</span>
          <span className="font-label-lg text-sm">
            2025–2026 Academic Prospectus downloaded & sent to {prospectusForm.email || 'your email'}!
          </span>
        </div>
      )}

      {/* Immersive Sub-Header Hero */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden py-16 lg:py-20 border-b border-surface-container">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-display text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span>NEP 2020 Compliant • Experiential Pedagogy</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
                Immersive STEM, Robotics & AI Programs Engineered for Schools
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Turnkey learning frameworks bridging academic curriculum, cutting-edge hardware, and autonomous systems. Built to power weekly timetabled classroom instruction, after-school patent incubators, and faculty professional development across 500+ Indian schools.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#delivery-matrix"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-display text-xs font-bold transition-all shadow-md group cursor-pointer"
                >
                  <span>Explore Delivery Models</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <button
                  onClick={() => onNavigate('book-a-demo')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-high text-secondary hover:bg-surface-container-highest font-display text-xs font-bold transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span>Schedule Consultation</span>
                </button>
              </div>

              {/* Highlight Badges Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg">
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col border border-surface-container">
                  <span className="font-display text-xl font-bold text-secondary">Grades 1–12</span>
                  <span className="text-xs text-on-surface-variant">Progressive Modules</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col border border-surface-container">
                  <span className="font-display text-xl font-bold text-success">100% Lab Ready</span>
                  <span className="text-xs text-on-surface-variant">Zero Civil Redesign</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col border border-surface-container">
                  <span className="font-display text-xl font-bold text-on-surface">CPD Certified</span>
                  <span className="text-xs text-on-surface-variant">Teacher Upskilling</span>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase / Interactive Hub */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-low p-2 border border-surface-container">
                <div className="aspect-4/3 w-full rounded-xl overflow-hidden relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZPxfAnaa0x5AdQOiIstuYfPJqkKz5C0LP8ht040zNoKw0Gne3PC-3uprhQbGD-mjn-cFFY93tA7cfJBcWOxKHo--tJ2-bToIlXVAm8weM5_upzOx4TShXoyFQMVQOSJVyYS36kHpVE6FDXlHDw-avjp6gb5KMKV3zJOJfS_puOTnjlKp_210_FBoSDZCFU8znA1o-iyl5cFVt-DBAXFR-PqEBx581QJKu6NtGzcLo"
                    alt="Classroom lab with students building autonomous robotic rovers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between border border-white/20">
                    <div>
                      <p className="font-display text-xs font-bold text-secondary uppercase tracking-wider">
                        Live Cohort Session
                      </p>
                      <p className="font-display text-base font-bold text-on-surface">
                        Labs on Table™ in Action
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-display text-xs font-bold">
                      <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                      <span>Turnkey</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Mini-Card Floating Accent */}
              <div className="absolute -bottom-5 -left-5 bg-surface-container-lowest p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 max-w-xs z-20 border border-surface-container">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-on-surface">50+ Modular Projects</p>
                  <p className="text-xs text-on-surface-variant">Sensors, MicroPython & Edge Vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Navigator */}
      <nav className="sticky top-20 z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-sm py-3 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: 'all', label: 'All Programs (6)' },
              { id: 'school-core', label: 'School Integrated STEM' },
              { id: 'ai-robotics', label: 'AI & Advanced Robotics' },
              { id: 'labs-table', label: 'Labs on Table™' },
              { id: 'teacher-dev', label: 'Teacher Accreditation' },
              { id: 'arenas-camps', label: 'Leagues, Clubs & Camps' }
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full font-display text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Bento Programs Grid */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-secondary font-display text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">account_balance</span>
                <span>Curricular & Institutional Offerings</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-on-surface">Institutional Core Programs</h2>
              <p className="text-sm text-on-surface-variant max-w-xl mt-1">
                Engineered specifically for K-12 school deployment with integrated lesson plans, formative grading matrices, and teacher support.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-xs text-on-surface-variant font-medium">
                Annual Licensing • Turnkey Kits Included
              </span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {filteredPrograms.map((prog) => (
              <article
                key={prog.id}
                className={`${prog.colSpan} bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-surface-container transition-all flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className={`px-3 py-1 rounded-full font-display text-xs font-bold ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[28px] group-hover:rotate-12 transition-transform">
                      {prog.icon}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-on-surface mb-3 tracking-tight">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <p className="font-display text-xs font-bold text-on-surface uppercase tracking-wider">
                      Key Highlights & Inclusions:
                    </p>
                    <ul className="space-y-2">
                      {prog.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface-variant">
                          <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                            check_circle
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('book-a-demo')}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{prog.primaryAction}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <button
                    onClick={() => onNavigate('for-schools')}
                    className="px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-display text-xs font-semibold transition-colors cursor-pointer"
                  >
                    View Pricing Model
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Program Delivery Models Comparison Matrix */}
      <section id="delivery-matrix" className="w-full py-16 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold font-display uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Flexible Implementation Architectures</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold text-on-surface">
              Choose the Right Delivery Model for Your School
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              From turnkey resident trainer deployments to self-paced faculty-led initiatives, our delivery models fit your institution's schedule and budget.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-surface-container border-b border-surface-container text-on-surface">
                    <th className="p-4 sm:p-5 font-display font-bold w-1/4">Evaluation Vector</th>
                    <th className="p-4 sm:p-5 font-display font-bold text-secondary">
                      In-Curriculum (Timetabled)
                    </th>
                    <th className="p-4 sm:p-5 font-display font-bold">After-School Club (Elective)</th>
                    <th className="p-4 sm:p-5 font-display font-bold">Turnkey ATL / Innovation Lab</th>
                    <th className="p-4 sm:p-5 font-display font-bold">Faculty-Led (Train-The-Trainer)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low text-on-surface">
                  <tr>
                    <td className="p-4 font-bold text-on-surface-variant">Class Frequency</td>
                    <td className="p-4 font-semibold text-secondary">1-2 periods/week in timetable</td>
                    <td className="p-4">2 hours on Friday/Saturday</td>
                    <td className="p-4">Daily dedicated lab access</td>
                    <td className="p-4">Flexible teacher schedule</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-on-surface-variant">Kit Allocation</td>
                    <td className="p-4">1 Kit per 2 students (Class sets)</td>
                    <td className="p-4">Individual kits per student</td>
                    <td className="p-4">10-30 Workstation inventory</td>
                    <td className="p-4">Institution owned kits</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-on-surface-variant">Instructor Deputation</td>
                    <td className="p-4">Full-time Brain Up Resident Mentor</td>
                    <td className="p-4">Visiting Expert Engineer</td>
                    <td className="p-4">Lab Manager + 2 Faculty Fellows</td>
                    <td className="p-4">Internal School Teachers (Certified)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-on-surface-variant">Assessment Matrix</td>
                    <td className="p-4">Term-wise rubrics, Report Card grades</td>
                    <td className="p-4">Project demo day portfolio</td>
                    <td className="p-4">National competition submissions</td>
                    <td className="p-4">Formative rubrics provided</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-on-surface-variant">Setup Timeline</td>
                    <td className="p-4">2-3 Weeks before term begins</td>
                    <td className="p-4">Immediate within 7 days</td>
                    <td className="p-4">3-4 Weeks complete setup</td>
                    <td className="p-4">Post 40-hour CPD training</td>
                  </tr>
                  <tr className="bg-surface-container-low/50">
                    <td className="p-4 font-bold text-on-surface-variant">Recommended For</td>
                    <td className="p-4 font-semibold text-secondary">Schools adopting NEP 2020 broadly</td>
                    <td className="p-4">High-achiever maker clubs</td>
                    <td className="p-4">Government ATL & flagship private schools</td>
                    <td className="p-4">Schools with existing tech departments</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Inquiry / Prospectus Download Form */}
      <section id="institutional-inquiry" className="w-full py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 shadow-md border border-surface-container">
            {prospectusSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-success-container text-success flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface">
                  Prospectus Dispatched!
                </h3>
                <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                  Thank you, <strong className="text-on-surface">{prospectusForm.contactName}</strong>. We have dispatched the 2025–2026 Academic Prospectus and syllabi to <strong className="text-on-surface">{prospectusForm.email}</strong>.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => onNavigate('book-a-demo')}
                    className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-display text-xs font-bold"
                  >
                    Schedule Direct Walkthrough
                  </button>
                  <button
                    onClick={() => setProspectusSubmitted(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-on-surface-variant hover:text-on-surface"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDownloadProspectus} className="space-y-6">
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-secondary font-display text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">description</span>
                    <span>Institutional Prospectus</span>
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface">
                    Download 2025–2026 Academic Syllabi & Case Studies
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Includes detailed lesson maps for Grades 1–12, CBSE/ICSE alignment matrices, hardware specs, and pricing structures.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      School / Institution Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Mount Carmel School"
                      value={prospectusForm.schoolName}
                      onChange={(e) => setProspectusForm({ ...prospectusForm, schoolName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      City & State *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Bengaluru, Karnataka"
                      value={prospectusForm.city}
                      onChange={(e) => setProspectusForm({ ...prospectusForm, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Contact Person & Designation *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Ms. Sunita Rao, Headmistress"
                      value={prospectusForm.contactName}
                      onChange={(e) => setProspectusForm({ ...prospectusForm, contactName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Official Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="headmistress@mountcarmel.edu"
                      value={prospectusForm.email}
                      onChange={(e) => setProspectusForm({ ...prospectusForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Direct Mobile / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={prospectusForm.phone}
                      onChange={(e) => setProspectusForm({ ...prospectusForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Preferred Delivery Architecture
                    </label>
                    <select
                      value={prospectusForm.model}
                      onChange={(e) => setProspectusForm({ ...prospectusForm, model: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    >
                      <option>In-Curriculum (Timetabled Weekly)</option>
                      <option>After-School Innovation Club</option>
                      <option>Turnkey ATL / Innovation Lab</option>
                      <option>Faculty-Led (Train-The-Trainer)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container transition-all font-display text-sm font-bold shadow-md cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    <span>Download Comprehensive Prospectus (PDF)</span>
                  </button>
                  <p className="text-[11px] text-on-surface-variant mt-2">
                    Zero spam guaranteed. A member of our academic curriculum board will follow up via email.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
