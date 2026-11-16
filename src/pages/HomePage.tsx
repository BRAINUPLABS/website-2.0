import React, { useState } from 'react';
import { CyberMorphText } from '../components/CyberMorphText.tsx';
import { TESTIMONIALS_DATA } from '../data/faqs.ts';
import { NavigationPath } from '../types.ts';
import { FAQSection } from './HomePage/FAQSection.tsx';
import { FinalCtaSection } from './HomePage/FinalCtaSection.tsx';

interface HomePageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
  onSelectKit: (kitName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectKit }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary-fixed opacity-40 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-tertiary-fixed opacity-30 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-display text-xs font-bold tracking-wide shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                <span>Empowering India's Next Generation of Thinkers</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-on-surface tracking-tight leading-[1.12]">
                Empowering Next-Gen Innovators with Hands-On <CyberMorphText />&nbsp;
                <span className="tracking-tight">Labs</span>
              </h1>

              <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Turn classrooms into high-tech innovation centers. Integrated curriculum, physical STEM hardware kits, and certified educator training trusted by 500+ forward-thinking schools across India.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('book-a-demo')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-display text-sm font-bold hover:bg-primary-container transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  <span>Book a School Demo</span>
                </button>

                <button
                  onClick={() => onNavigate('stem-kits')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-display text-sm font-bold hover:bg-surface-container-high transition-colors shadow-sm border border-surface-container-high cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">precision_manufacturing</span>
                  <span>Explore STEM Kits</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
                    2026 Edition
                  </span>
                </button>
              </div>

              {/* Trust Quick Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 max-w-xl">
                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high/60 flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-secondary">500+</span>
                  <span className="text-xs text-on-surface-variant font-medium mt-1">Schools Transformed</span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high/60 flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface">120k+</span>
                  <span className="text-xs text-on-surface-variant font-medium mt-1">Active Students</span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high/60 flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-on-tertiary-container">98%</span>
                  <span className="text-xs text-on-surface-variant font-medium mt-1">Hands-on Retention</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Display */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-secondary-fixed opacity-50 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-tertiary-fixed opacity-40 blur-3xl pointer-events-none"></div>

              {/* Primary Hero Frame: Autonomous Rover Lab */}
              <div className="relative rounded-2xl overflow-hidden bg-surface-container-lowest shadow-xl ring-1 ring-surface-variant/40 group">
                <img
                  src="/assets/aistudio/Image_1_360de192.jpeg"
                  alt="Students assembling an autonomous robot rover with sensors and microcontroller circuitry in modern STEM lab"
                  className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuBE9GUvsKaRtK1mXPSKCNMrsEwVaJw1lJNNJser67R2fEiSPUc8RIxU2-BTamruyYO6l9BqR07z7nSQFhTRJa2qEnhtBKejDQpm9j2W6tnaQXoU-rus5WR9NVmitTjuA13GKdLnziB5OoJDlWGYC5LcDoer9Mc6c1bGm7lqOnygZqJF4WnN8XT8ZzelcvavI_aacf8pXjsQ9dc3i32aPOefoeKl7vY4gUPnfepfAin6';
                  }}
                />

                {/* HUD Top Overlay Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm border border-surface-container-high/60">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-display text-xs text-on-surface font-bold">Autonomous Rover Build • Cohort #42</span>
                </div>

                {/* Telemetry chip inside top right */}
                <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/85 backdrop-blur-md text-surface-bright text-[11px] font-display font-medium">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">sensors</span>
                  <span>ROS2 &amp; ESP32 Active</span>
                </div>

                {/* Bottom Primary Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-md border border-surface-container-high/50 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                  </div>
                  <div>
                    <h2 className="font-display text-xs sm:text-sm text-on-surface font-bold leading-tight">Labs on Table™ Studio v4</h2>
                    <p className="text-[11px] text-on-surface-variant">Plug-and-play modular stations • NEP 2020 Ready</p>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Floating Card: AI Vision */}
              <div className="relative sm:absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-full sm:w-[270px] bg-surface-container-lowest rounded-2xl p-2.5 shadow-[0_12px_32px_-4px_rgba(19,27,46,0.18)] ring-1 ring-surface-variant/60 z-20 mt-4 sm:mt-0">
                <div className="relative rounded-xl overflow-hidden h-36 bg-surface-container-high">
                  <img
                    src="/assets/aistudio/Image_6_f94c54b2.jpeg"
                    alt="High school student testing AI vision module and hand gesture recognition model on laptop"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuCgOyAvLpnes_beFn-R3rfZk-770c5-koPkE509Bo3Kpx2EUXRacTM97qGQYQ89EwnMC1Ey7RACPhBCcEK2bBeqRJhFTbkYYTFUaJmbL5bEVdu0FC8L_FMv7GJaprFSxNunk1_2xvo85op6gQ-NEZIw7ViltXLo1svMqnbRyVXH_hxLor9TKueHvU0zvz35iaTue_VrOJST7HF9Y13uOo6RMjpaOGi_51E13CVJXFzC';
                    }}
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-display text-[11px] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">visibility</span>
                    <span>OpenCV 4.x Track</span>
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between">
                  <div>
                    <p className="font-display text-xs text-on-surface font-bold">AI Gesture Vision Hub</p>
                    <p className="text-[11px] text-on-surface-variant">Neural Model: 98.4% Accuracy</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-display text-[10px] font-extrabold shrink-0">
                    LIVE DEMO
                  </span>
                </div>
              </div>

              {/* Floating Quality Badge Top Right */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-primary-container text-surface-bright px-3.5 py-2.5 rounded-xl shadow-lg border border-surface-container-highest/20 items-center gap-2.5 z-20">
                <div className="w-7 h-7 rounded-lg bg-tertiary-fixed/20 flex items-center justify-center text-tertiary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
                <div>
                  <p className="font-display text-[11px] text-surface-bright leading-tight font-bold">ISO 9001:2015</p>
                  <p className="text-[10px] text-on-primary-container leading-tight">Safety Hardware Certified</p>
                </div>
              </div>

              {/* Live Telemetry Floating Micro-Card Bottom Right */}
              <div className="hidden sm:flex absolute -bottom-5 -right-3 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-surface-container-high/60 items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-display text-[11px] text-on-surface font-semibold">28 Telemetry Nodes Synced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS & ACCREDITATIONS */}
      <section className="w-full bg-surface-container-low py-10 border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined text-[26px]">stars</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="font-display text-sm font-bold text-on-surface ml-1">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium">350+ Principal &amp; Coordinator Reviews</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 opacity-90">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-high/60">
              <span className="material-symbols-outlined text-secondary text-[20px]">account_balance</span>
              <span className="font-display text-xs font-semibold text-on-surface">CBSE Skill Curriculum</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-high/60">
              <span className="material-symbols-outlined text-secondary text-[20px]">menu_book</span>
              <span className="font-display text-xs font-semibold text-on-surface">ICSE Robotics Standard</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-high/60">
              <span className="material-symbols-outlined text-secondary text-[20px]">public</span>
              <span className="font-display text-xs font-semibold text-on-surface">Cambridge STEM Aligned</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-high/60">
              <span className="material-symbols-outlined text-secondary text-[20px]">bolt</span>
              <span className="font-display text-xs font-semibold text-on-surface">ATL &amp; NITI Aayog Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER (CORE PILLARS) */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
                Institutional Ecosystem
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface mt-1 tracking-tight">
                Engineered to Transform School Labs Effortlessly
              </h2>
            </div>
            <p className="text-base text-on-surface-variant max-w-md">
              A zero-friction, turnkey model combining premium industrial hardware, mapped educational outcomes, and hands-on teacher mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div
              onClick={() => onNavigate('for-schools', 'lab-tiers')}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group hover:border-secondary/30"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">home_work</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-display text-xs font-bold">
                  Tier 1-4 Labs
                </span>
                <h3 className="font-display text-lg font-bold text-on-surface mt-3 mb-2">
                  Turnkey STEM &amp; Robotics Labs
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Customized room ergonomics, anti-static electrostatic tables, secured charging stations, and dedicated tool organizers.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1 font-display text-xs font-bold text-secondary group-hover:gap-2 transition-all">
                <span>Explore 6 Setup Tiers</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div
              onClick={() => onNavigate('programs', 'labs-table')}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group hover:border-secondary/30"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">table_bar</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-display text-xs font-bold">
                  Patent-Pending
                </span>
                <h3 className="font-display text-lg font-bold text-on-surface mt-3 mb-2">
                  Labs on Table™ Modular Stations
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  No dedicated room required. Portable, all-in-one desktop laboratories bringing AI and engineering directly to conventional desks.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1 font-display text-xs font-bold text-secondary group-hover:gap-2 transition-all">
                <span>View Hardware Specs</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div
              onClick={() => onNavigate('for-schools', 'curriculum')}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group hover:border-secondary/30"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">auto_stories</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-display text-xs font-bold">
                  Grades 1 to 12
                </span>
                <h3 className="font-display text-lg font-bold text-on-surface mt-3 mb-2">
                  Standards-Aligned K-12 Curriculum
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Step-by-step activity workbooks, experiential lesson plans, project rubrics, and continuous assessments mapping to CBSE &amp; ICSE.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1 font-display text-xs font-bold text-secondary group-hover:gap-2 transition-all">
                <span>Download Sample Modules</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div
              onClick={() => onNavigate('for-schools', 'teacher-training')}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group hover:border-secondary/30"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-dim text-on-surface flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">school</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-display text-xs font-bold">
                  CPD Certified
                </span>
                <h3 className="font-display text-lg font-bold text-on-surface mt-3 mb-2">
                  Teacher Enablement &amp; Certification
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Extensive in-person faculty workshops, LMS masterclasses, troubleshooting hotlines, and master trainer accreditation.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1 font-display text-xs font-bold text-secondary group-hover:gap-2 transition-all">
                <span>Teacher Academy</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LABS ON TABLE™ FEATURE SHOWCASE */}
      <section className="w-full py-20 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 shadow-md border border-surface-container-high/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-display text-xs font-bold self-start">
                  Signature Innovation
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
                  Labs on Table™: Big Labs, Zero Space Constraints
                </h2>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  Transform standard school benches into state-of-the-art research hubs in seconds. Designed specifically for schools seeking maximum high-tech impact without sacrificing dedicated infrastructure.
                </p>

                {/* Component Accordion / Highlights */}
                <div className="flex flex-col gap-3 mt-2">
                  <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3 border border-surface-container">
                    <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">sensors</span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-on-surface">Integrated Multi-Sensor Dock</h3>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Ultrasonic, IR obstacle, gyroscope, gas sensor, and ambient light modules built with quick-snap magnetic clips.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3 border border-surface-container">
                    <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">memory</span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-on-surface">Dual Core ESP32 &amp; Arduino Shield</h3>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Wi-Fi, Bluetooth BLE, and over-the-air firmware updates ready for machine learning and edge computing.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3 border border-surface-container">
                    <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">precision_manufacturing</span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-on-surface">Anodized Aluminium Rapid Chassis</h3>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        High-durability aircraft-grade alloy chassis allowing infinite mechanical configurations and gear trains.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('book-a-demo')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-on-secondary font-display text-sm font-bold hover:bg-secondary-container transition-all shadow-sm cursor-pointer"
                  >
                    <span>Request a Tabletop Kit Box</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </div>
              </div>

              {/* Feature Image & Floating Hardware Badges */}
              <div className="lg:col-span-7 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-surface-container-highest">
                  <img
                    className="w-full h-[440px] object-cover"
                    alt="Labs on Table modular robotics educational hardware dock with illuminated blue LED lights"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbwOApCjiK43aKrD5KTlWK5WBIKNyuASEkCpHz_XpFObQvRtAwUfD2mEmvOhKfzde-Tr_JbZZkiCzqR9dYWVmIYlkuEYUSKLT9SLlKTLunLPcQzcGBJgYsyIdWUkuvWX-Q6iBRObv_i-mOScIxFkk1etcANed9dLv-9i1qA4UriKN29lAT5ZwoqfRAloN0d4iHcQ5aIF61isESNIf98Acvh7DB9okW5Bs9JfSg4vwl"
                  />
                </div>

                {/* Floating Callout Badges */}
                <div className="absolute top-6 right-6 p-3.5 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-md max-w-xs flex items-center gap-3 border border-surface-container-high/60">
                  <span className="material-symbols-outlined text-secondary text-[24px]">power</span>
                  <div>
                    <p className="font-display text-xs font-bold text-on-surface">6-Hour Li-Ion Battery</p>
                    <p className="text-[11px] text-on-surface-variant">Built-in smart thermal protection</p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 p-3.5 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-md max-w-xs flex items-center gap-3 border border-surface-container-high/60">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">code_blocks</span>
                  <div>
                    <p className="font-display text-xs font-bold text-on-surface">Blockly &amp; Python 3</p>
                    <p className="text-[11px] text-on-surface-variant">Seamless dual IDE support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KITS & PROGRAMS PREVIEW */}
      <section className="w-full py-20 bg-surface" id="kits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
            <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
              Graded Progression Pathway
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              STEM &amp; Robotics Kits Across Every Grade
            </h2>
            <p className="text-base text-on-surface-variant">
              Curated hands-on modules designed to evolve with the cognitive and motor milestones of students from primary to senior secondary.
            </p>
          </div>

          {/* Kit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Kit 1 */}
            <div className="rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Early Explorers Discovery Kit"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9fezr4m0GIf-Z7t_nRoBXW5jX1HOb8fey5B-COew-WN0jbVagfFnhbFT3X75WoiA2-uw2005SauZLwZ66ZN5EWhP3D2L_jOw-VrzIv0q9zaYnqNt96LYHGrbKASD_decE6owHPA1zvYgblrgDt6R0OtvbGTmO81UhhBkkohNMH1jEjJC2r615P_MwLz_wQYoHf5LCQVM3hbX2a5i_7Csh56DwbefEQvU4S3LUQCkE"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest font-display text-xs font-bold text-secondary shadow-sm">
                    Grades 1 - 3
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-display text-base font-bold text-on-surface">Early Explorers Discovery Kit</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Tactile block electronics, mechanical linkages, sound triggers, and foundational spatial problem solving.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-medium text-on-surface">Simple Circuits</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-medium text-on-surface">Kinematics</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    onSelectKit('RoboSpark Pioneer Kit');
                    onNavigate('stem-kits');
                  }}
                  className="w-full py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-display text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Request Sample Kit</span>
                </button>
              </div>
            </div>

            {/* Kit 2 */}
            <div className="rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Mechanical & Sensor Robotics"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTQw0pYdZ8d8s44Wbifgigo1VjcP8z3jUvaSBA_LIbpBHXjbmuU5nugHY0ju8R5tZK9vbFm5mehQ3rRtzWTwDbGfP0aXoBcXqhFsqJpfSstiH2uRdzKqFILaPsSUVtncn_zusAgVC4ZlhbgESh-t4Ly6BGuhuo3IJ0_q4VXt89OGfl6drcPUoRULur8mQZhFrenUgCtYaTawCZQSuD23UUx19oeG6Woq_ez262yQYl"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest font-display text-xs font-bold text-secondary shadow-sm">
                    Grades 4 - 6
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-display text-base font-bold text-on-surface">Mechanical &amp; Sensor Robotics</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Autonomous obstacle avoiders, line followers, light seekers, and scratch-based block logic programming.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-medium text-on-surface">Block Coding</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-medium text-on-surface">Micro-Robots</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    onSelectKit('SensorCraft IoT Explorer');
                    onNavigate('stem-kits');
                  }}
                  className="w-full py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-display text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Request Sample Kit</span>
                </button>
              </div>
            </div>

            {/* Kit 3 */}
            <div className="rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="IoT & Smart Environment Hub"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQAIRMrG2WEmZlKOoy5yh18AWtpL1IChkXIgCgXjyefX2eCzjrRjwQwz4T34SFvlXaLWXAjs1Ac2--elZDcEBnMb4V1_zq72yCmbWMe-7RVo5ByGO73bg9EoiiejO02qC8rp7nIPJy4aDmRtgcWUZ40OXOjltpy6o2dqH69rKox8sFV63SnUbn9LumkDZJMl3PtR0XITcW8Rt9m7Sq3cfb6dsJhK47e0J8Ciq3Pcd2"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest font-display text-xs font-bold text-secondary shadow-sm">
                    Grades 7 - 9
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-display text-base font-bold text-on-surface">IoT &amp; Smart Environment Hub</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Cloud telemetric monitoring, environmental data loggers, automated irrigation, and C++ programming.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-medium text-on-surface">Cloud IoT</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-medium text-on-surface">C++ &amp; Python</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    onSelectKit('CyberBotics Autonomous Rover');
                    onNavigate('stem-kits');
                  }}
                  className="w-full py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-display text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Request Sample Kit</span>
                </button>
              </div>
            </div>

            {/* Kit 4 */}
            <div className="rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="AI & Computer Vision Rover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPVm0WgQEEHUubnUfFoQfi5-rq8dKsI1q7YfBnZ2Irz-EQ7A1JyYRPu5NPV8h7vCOWMFiQfw10Jsu22VHaQReAx7BS5XiwCww0HB6WGqjoFBgOybz17AE6oE8KiQMCz-oOzO0Z-khW1n0iq_laHV6CCcGPxoCaoREe_eb03IWSmZ0jZF811Aw-elN5TqdsAFo0eFmPSVh0DeAk0O3a2bsNpIRxHpkhHPvw_aw3kN4z"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest font-display text-xs font-bold text-secondary shadow-sm">
                    Grades 10 - 12
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-display text-base font-bold text-on-surface">AI &amp; Computer Vision Rover</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Edge neural network detection, autonomous lane keeping, OpenCV image recognition, and Python ML pipelines.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-medium text-on-surface">Deep Learning</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-medium text-on-surface">OpenCV Vision</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    onSelectKit('NeuroVision AI & BCI Suite');
                    onNavigate('stem-kits');
                  }}
                  className="w-full py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-display text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Request Sample Kit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STUDENT PROJECTS & INNOVATION SHOWCASE */}
      <section className="w-full py-20 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
                Real-World Innovation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface mt-1 tracking-tight">
                Built by School Students, Not Engineers
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1 text-secondary font-display text-sm font-bold hover:underline cursor-pointer"
            >
              <span>View 140+ Student Showcase Projects</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Autonomous fire-fighting rover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA2q0vFKOJXlHh7Sc1fwXYBx4y4T_EMAOC3KPkOdKaAIseFJAAkW7l5hW56cvFcXNEs86PGCbwlG2jo_uwVGmJDLJmplo6_8lOA-YEp_8jpQYmHS1R4aEAzET-dXbUdqkiOBQjd0VJBYeVCNUac_pJxd7hWKCM32wGHFBTrgzG6aMIoSWVlHZnG81sEDc1cnjAOVEcCqkyp5vInQKT6tBqh38-HtrydC9YrtxBJqtW"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-display text-xs font-bold">
                    Robotics
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">Class 8 • DPS Gurgaon</span>
                </div>
                <h3 className="font-display text-base font-bold text-on-surface mb-2">
                  Autonomous Fire-fighting Rover
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Utilizes dual thermal arrays to locate flame sources and triggers an automatic pressurized pump extinguisher with zero human intervention.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-container-low flex items-center justify-between text-on-surface-variant text-xs">
                <span>Hardware: ESP32 + Relay Shields</span>
                <span className="text-secondary font-bold">National Finalist</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Solar tracking weather hub"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa0TOlrJAk94_j-GTR6VDrHbFncEI1brxM7_FtoH467Sbs4DGJPJbQ1J7__yULPPQCJ2_G2K02JZIKfA878ggY-649ONM_-C0rMrIgLERh8igXVDJ8d49V0rFTXj59ngE_IJ_PPGKYkZdjMf-ES4zm8x4iSqfsLP_rvlTqq65q_A4lykFt_B8IU6vGqtfWRMiUmw_6uwnUIPYTZJRnAdOjf4Owms4iMYU_PL7xIoDV"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-display text-xs font-bold">
                    IoT
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">Class 9 • National Public School</span>
                </div>
                <h3 className="font-display text-base font-bold text-on-surface mb-2">
                  Solar Tracking Weather Hub
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Dual-axis sun-following photovoltaic station logging real-time solar irradiation, air quality indices, and barometric pressure directly to school cloud servers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-container-low flex items-center justify-between text-on-surface-variant text-xs">
                <span>Hardware: LDR Array + BMP280</span>
                <span className="text-secondary font-bold">ATL Innovation Award</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="EEG brainwave controlled gripper"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqx0eqXADb2tmasp7vqKObPuFn34v3Ysx6_5tpAgVDf5zTvRAR0WDKgDS7_W_xQvn8ZbHBnadKDVnD2THiPXdr3Vh7PgqYiTqKnvxlf0hmTuXGLMG7RvZuqmtVNGDHXEmVA4QSr93Z3gzf586JTASO70sJ-SBVzHS5V_S9KuvNDjeEnyYTLhz_rWsHeQkW84ARGNkzah6Df2E-n5PgO9nHHerl3y45sMfy3rI8n06A"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-secondary font-display text-xs font-bold">
                    Neuroscience
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">Class 11 • Greenwood High</span>
                </div>
                <h3 className="font-display text-base font-bold text-on-surface mb-2">
                  EEG Brainwave Controlled Gripper
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Decodes focused alpha and beta brain rhythms to actuate high-torque servo linkages for assisted prosthetic applications.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-container-low flex items-center justify-between text-on-surface-variant text-xs">
                <span>Hardware: TGAM Module + Servos</span>
                <span className="text-secondary font-bold">ISEF Shortlisted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS / SCHOOL IMPLEMENTATION JOURNEY */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
            <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
              The Seamless 4-Step Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              From Empty Space to Innovation Center in 21 Days
            </h2>
            <p className="text-base text-on-surface-variant">
              We handle everything—from floor plans to certified pedagogical coaching—allowing school leaders to focus purely on academic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="flex flex-col p-6 rounded-2xl bg-surface-container-low border border-surface-container">
              <span className="font-display text-4xl text-secondary/30 font-extrabold mb-4">01</span>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">Needs Audit &amp; Lab Architecture</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Our engineers audit your existing space, classroom capacity, electrical distribution, and curriculum schedule to formulate a customized blueprint.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-secondary font-display text-xs font-bold">
                <span className="material-symbols-outlined text-[18px]">rule</span>
                <span>Site Visit in 48 Hours</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col p-6 rounded-2xl bg-surface-container-low border border-surface-container">
              <span className="font-display text-4xl text-secondary/30 font-extrabold mb-4">02</span>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">Hardware Setup &amp; Deployment</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Modular benches, component racks, safety stations, and pre-sorted student hardware kits are delivered and completely installed.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-secondary font-display text-xs font-bold">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Turnkey Handover</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col p-6 rounded-2xl bg-surface-container-low border border-surface-container">
              <span className="font-display text-4xl text-secondary/30 font-extrabold mb-4">03</span>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">Educator Immersion &amp; Certification</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Intensive on-campus masterclasses for your science and computer teachers with detailed lesson scripts, answer keys, and practical rubrics.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-secondary font-display text-xs font-bold">
                <span className="material-symbols-outlined text-[18px]">badge</span>
                <span>Official Educator Badge</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col p-6 rounded-2xl bg-surface-container-low border border-surface-container">
              <span className="font-display text-4xl text-secondary/30 font-extrabold mb-4">04</span>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">Competitions &amp; Active Mentorship</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Year-round access to the National School Robotics League, student project hackathons, and continuous technical support desk.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-secondary font-display text-xs font-bold">
                <span className="material-symbols-outlined text-[18px]">emoji_events</span>
                <span>National League Entry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY US & IMPACT METRICS */}
      <section className="w-full py-20 bg-primary-container text-surface-bright">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="font-display text-xs font-bold text-tertiary-fixed tracking-widest uppercase">
                Real Tangible Results
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-surface-bright tracking-tight leading-tight">
                Hands-On Tangible Hardware vs. Screen-Only Coding
              </h2>
              <p className="text-base text-surface-dim leading-relaxed">
                Theoretical coding on computer screens loses 60% of students within 6 months. Physical feedback loops with sensors and motors build lifelong engineering instincts.
              </p>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-sm border border-white/10">
                  <span className="font-display text-4xl text-tertiary-fixed font-extrabold">4.2x</span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-surface-bright">Higher Concept Retention</h3>
                    <p className="text-xs text-surface-dim">Measured across physics, geometry, and algorithms in term examinations.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-sm border border-white/10">
                  <span className="font-display text-4xl text-secondary-fixed font-extrabold">100%</span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-surface-bright">Child-Safe Voltage Standards</h3>
                    <p className="text-xs text-surface-dim">All hardware runs strictly on safe 3.3V-5V DC rails with zero mains danger.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inline Data Visualizer */}
            <div className="lg:col-span-7 bg-surface-container-lowest/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 flex flex-col gap-6 border border-white/10">
              <h3 className="font-display text-lg font-bold text-surface-bright">
                Comparison: Brain Up Labs vs Traditional School Computer Labs
              </h3>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between font-display text-xs font-semibold mb-1.5">
                    <span className="text-surface-bright">Physical Tinkering &amp; Troubleshooting</span>
                    <span className="text-tertiary-fixed font-bold">94% Brain Up Labs</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-surface-container-lowest/20 overflow-hidden">
                    <div className="h-full bg-tertiary-fixed rounded-full transition-all duration-700" style={{ width: '94%' }}></div>
                  </div>
                  <div className="flex justify-between text-[11px] mt-1 text-surface-dim">
                    <span>Traditional Computer Lab: 22%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-display text-xs font-semibold mb-1.5">
                    <span className="text-surface-bright">Student Project Completion Rate</span>
                    <span className="text-secondary-fixed font-bold">88% Brain Up Labs</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-surface-container-lowest/20 overflow-hidden">
                    <div className="h-full bg-secondary-fixed rounded-full transition-all duration-700" style={{ width: '88%' }}></div>
                  </div>
                  <div className="flex justify-between text-[11px] mt-1 text-surface-dim">
                    <span>Traditional Computer Lab: 39%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-display text-xs font-semibold mb-1.5">
                    <span className="text-surface-bright">Faculty Confidence &amp; Lesson Readiness</span>
                    <span className="text-tertiary-fixed font-bold">96% With Certified Training</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-surface-container-lowest/20 overflow-hidden">
                    <div className="h-full bg-tertiary-fixed rounded-full transition-all duration-700" style={{ width: '96%' }}></div>
                  </div>
                  <div className="flex justify-between text-[11px] mt-1 text-surface-dim">
                    <span>Without Hands-on Training: 31%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDY & TESTIMONIALS */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          {/* Case Study Highlight Banner */}
          <div className="rounded-3xl bg-surface-container-low p-8 lg:p-12 overflow-hidden shadow-sm border border-surface-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="px-3.5 py-1 rounded-full bg-secondary text-on-secondary font-display text-xs font-bold self-start">
                  Institutional Case Study
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
                  How Delhi Public School Scaled Hands-On STEM for 2,400 Students in 90 Days
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Faced with low student enthusiasm for dry computer science textbooks, DPS deployed 18 modular Labs on Table™ stations alongside teacher enablement workshops. Within one term, students created 320 working prototypes and swept the Regional Science Olympiad.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-secondary">+64%</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">STEM Enrollment</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface">320+</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Working Inventions</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-on-tertiary-container">100%</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Teachers Certified</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    className="w-full h-80 object-cover"
                    alt="School principal and students with robotics awards"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYo6SSHabB0Hppkh9gxNMSJhIOFJtmB8nYFnplFw5Y4RIhhveV2_q9NuHTphl0bBiNxqDUilg0vcOeQtC8Q-S6mJ_Eu5TsfHVPVZIGcVhhN0tRRYQrNg4SVLiFhZcY0w6zGpXqWom53L0ikijsDgtNbzBVByGWkEsP9Y7EUwd1rnGOOH5Q90u8qggEVH98xBUzhiuHqf2JcZu2kMqRni-7X0nDCxWdvXP15sCJniOE"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.slice(0, 3).map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-on-surface italic mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-surface-container-low">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-secondary text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display text-xs font-bold text-on-surface">{t.name}</p>
                    <p className="text-[11px] text-on-surface-variant">{t.role}, {t.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection openFaqIndex={openFaqIndex} onToggle={toggleFaq} />
      <FinalCtaSection onNavigate={onNavigate} />
    </div>
  );
};
