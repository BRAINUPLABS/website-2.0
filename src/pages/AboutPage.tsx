import React from 'react';
import { NavigationPath } from '../types.ts';

interface AboutPageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden py-16 lg:py-24 border-b border-surface-container">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold font-display uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">psychology</span>
              <span>Our Purpose & Journey</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
              Democratizing World-Class Robotics & STEM Education Across India
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Brain Up Labs was founded by robotics engineers, curriculum researchers, and passionate educators with a single mission: shifting students from passive screen consumers to active hardware creators and patent-holding inventors.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="w-full bg-surface-container-low py-10 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-secondary">500+</span>
              <p className="text-xs text-on-surface-variant font-bold mt-1">Partner Institutions</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface">42,000+</span>
              <p className="text-xs text-on-surface-variant font-bold mt-1">Classroom Units Deployed</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-success">12,000+</span>
              <p className="text-xs text-on-surface-variant font-bold mt-1">Certified Educators</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-warning">14</span>
              <p className="text-xs text-on-surface-variant font-bold mt-1">National Olympiad Podiums</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-8 sm:p-10 rounded-3xl shadow-sm border border-surface-container space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
              <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-on-surface">Our Mission</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              To equip every child from Grade 1 to 12 with the physical tools, cognitive frameworks, and self-confidence to architect autonomous robots, connected IoT devices, and artificial intelligence models that solve indigenous community challenges.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-8 sm:p-10 rounded-3xl shadow-sm border border-surface-container space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
              <span className="material-symbols-outlined text-[28px]">visibility</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-on-surface">Our Vision</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              To transform India into the global hardware innovation capital by creating 10,000 thriving school tinkering ecosystems by 2030, anchored in NEP 2020 principles and sustainable indigenous manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Board */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-extrabold text-on-surface">
            Meet Our Leadership & Engineering Board
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            Combining decades of robotics research at premier engineering institutes with veteran CBSE school administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Dr. Arvind Swaminathan',
              role: 'Chief Executive Officer & Founder',
              bio: 'Former robotics lead at IISc. 15+ years researching embedded autonomous navigation and STEM curriculum architectures.',
              avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
            },
            {
              name: 'Prof. Ananya Sen',
              role: 'Head of Pedagogic Research',
              bio: 'Ex-consultant to NCERT on experiential pedagogy. Authored 8 national robotics workbooks aligned with NEP 2020.',
              avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
            },
            {
              name: 'Er. Kabir Mehta',
              role: 'VP, Hardware & Systems Architecture',
              bio: 'Pioneered the Labs on Table™ flight-case modular dock. Expert in low-power ESP32 and edge RISC-V neural accelerators.',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
            }
          ].map((m, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container space-y-4"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-surface-container-low shadow-sm">
                <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-on-surface">{m.name}</h3>
                <span className="text-xs text-secondary font-semibold font-display">{m.role}</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* National Accreditations Strip */}
      <section className="w-full py-12 bg-surface-container-low border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="font-display text-xs font-bold text-secondary uppercase tracking-wider">
              Accreditations & Government Registrations
            </span>
            <h3 className="font-display text-2xl font-bold text-on-surface mt-1">
              Endorsed by Top Educational & Standard Bodies
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Make in India', sub: '100% Indigenous Assembly', icon: 'flag' },
              { title: 'ISO 9001:2015', sub: 'Certified Quality Management', icon: 'verified' },
              { title: 'STEM.org USA', sub: 'Global Pedagogy Accreditation', icon: 'award_star' },
              { title: 'NITI Aayog Registered', sub: 'Official Atal Tinkering Partner', icon: 'account_balance' }
            ].map((acc, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container text-center space-y-1">
                <span className="material-symbols-outlined text-secondary text-[28px]">{acc.icon}</span>
                <strong className="block text-xs font-bold text-on-surface">{acc.title}</strong>
                <span className="text-[11px] text-on-surface-variant block">{acc.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
