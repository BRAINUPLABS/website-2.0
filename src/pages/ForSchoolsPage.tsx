import React, { useState } from 'react';
import { NavigationPath } from '../types.ts';

interface ForSchoolsPageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
  initialTab?: string;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({ onNavigate }) => {
  const [activeTier, setActiveTier] = useState<'tier1' | 'tier2' | 'tier3' | 'tier4'>('tier2');
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [downloadToast, setDownloadToast] = useState(false);

  const [rfpData, setRfpData] = useState({
    schoolName: '',
    cityState: '',
    board: 'CBSE',
    strength: '500 - 1,200 Students',
    tier: 'Tier 2: Dedicated Tinkering Studio',
    contactPerson: '',
    emailOrPhone: '',
    notes: '',
    residentTrainer: true
  });

  const handleDownloadSample = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3500);
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Strategic Header Banner */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24 relative overflow-hidden border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start bg-secondary-fixed text-on-secondary-fixed px-3.5 py-1.5 rounded-full font-display text-xs font-bold uppercase tracking-wider shadow-sm">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Institutional Turnkey Solutions</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-on-surface tracking-tight leading-[1.12]">
                End-to-End <span className="text-secondary">STEM &amp; AI Lab</span> Infrastructure for Forward-Thinking Institutions.
              </h1>

              <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Empower your institution with custom experiential labs aligned directly with the National Education Policy (NEP 2020), Atal Innovation Mission (AIM), and global ISO/STEM.org accreditations.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col border border-surface-container">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface">500+</span>
                  <span className="text-xs text-on-surface-variant font-medium mt-1">Active School Labs Across India</span>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col border border-surface-container">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-secondary">NEP 2020</span>
                  <span className="text-xs text-on-surface-variant font-medium mt-1">100% Experiential Alignment</span>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col border border-surface-container">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-on-tertiary-container">1:2</span>
                  <span className="text-xs text-on-surface-variant font-medium mt-1">Optimal Hands-On Student Ratio</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#proposal-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-on-primary font-display text-sm font-bold hover:bg-primary-container transition-all shadow-md gap-2"
                >
                  <span>Request Custom Proposal &amp; RFP</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <a
                  href="#lab-tiers"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-display text-sm font-bold hover:bg-surface-container-high transition-colors gap-2 border border-surface-container-high"
                >
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                  <span>Explore Lab Tiers</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-surface-container">
                <img
                  className="w-full h-[440px] object-cover"
                  alt="Modern school robotics and artificial intelligence laboratory"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHu62WGoEYBFiPGRt8yDgJlK9S-hFTcg_RpIzsfrM4RfhsyEiykoTi2u0Yl9cz3JukiLlR2CoYOk-_lmSHVKMsgLXrYHbWdPk_TTAZGyYJuYpqj7WYoWnh3UkzINgklgF_P8clJWrk8TfRT0rNP49EQYcoY7PjuQKgBP3sbNmTnNBgWKowW6PivLIJOfMlPWjcl9fY-Sc9YJEPyP0qf27XIwiQi8RjoaG9j8VXh6Co"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-xl shadow-xl max-w-xs hidden sm:flex items-center gap-3 border border-surface-container-high">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                </div>
                <div>
                  <p className="font-display text-xs font-bold text-on-surface">AIM &amp; ATL Ready</p>
                  <p className="text-[11px] text-on-surface-variant">Standardized packages for turnkey school deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEP 2020 & Policy Framework Alignment */}
      <section className="w-full bg-surface-container-low py-20 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
                National Policy Integration
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
                Designed Strictly for Modern Pedagogical Directives
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md">
              Transition from rote computation to experiential, multidisciplinary learning as mandated by Indian educational reforms and international benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col gap-4 shadow-sm border border-surface-container">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">menu_book</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">NEP 2020 Experiential Credit</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Fulfils the 10-bagless days standard, coding mandates for grades 6+, and vocational skill exposure via integrated project logbooks and continuous skill assessments.
              </p>
              <div className="mt-auto pt-2 flex items-center gap-1.5 font-display text-xs font-bold text-secondary">
                <span>Aligned with CBSE Skill Subjects</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col gap-4 shadow-sm border border-surface-container">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">smart_toy</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">Atal Innovation Mission (AIM) Compliant</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Full compliance with NITI Aayog guidelines for ATL equipment packages: 3D Printers, STEM mechanics kits, IoT sensors, rapid prototyping components, and safety gears.
              </p>
              <div className="mt-auto pt-2 flex items-center gap-1.5 font-display text-xs font-bold text-secondary">
                <span>Package 1-4 Complete Supply</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col gap-4 shadow-sm border border-surface-container">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">public</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">Global Competency Frameworks</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Curriculum harmonized with CSTA (Computer Science Teachers Association), ISTE standards, and NGSS (Next Generation Science Standards) for IB and Cambridge schools.
              </p>
              <div className="mt-auto pt-2 flex items-center gap-1.5 font-display text-xs font-bold text-secondary">
                <span>IB &amp; Cambridge Compatible</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Setup Overview & Interactive Tier Matrix */}
      <section className="w-full bg-surface py-20" id="lab-tiers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
              Scalable Deployments (Setup 1 to 6)
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Modular Lab Infrastructure Tiers
            </h2>
            <p className="text-base text-on-surface-variant max-w-3xl">
              Whether optimizing an existing classroom or constructing a dedicated 1,200 sq.ft innovation hub, choose the configuration designed for your space, budget, and learning outcomes.
            </p>
          </div>

          {/* Tier Selection Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-surface-container rounded-2xl self-start border border-surface-container-high/60">
            <button
              onClick={() => setActiveTier('tier1')}
              className={`px-4 py-2.5 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                activeTier === 'tier1'
                  ? 'bg-surface-container-lowest text-secondary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Tier 1: Foundation STEM Corner
            </button>
            <button
              onClick={() => setActiveTier('tier2')}
              className={`px-4 py-2.5 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                activeTier === 'tier2'
                  ? 'bg-surface-container-lowest text-secondary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Tier 2: Tinkering Studio
            </button>
            <button
              onClick={() => setActiveTier('tier3')}
              className={`px-4 py-2.5 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                activeTier === 'tier3'
                  ? 'bg-surface-container-lowest text-secondary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Tier 3: Robotics &amp; IoT Center
            </button>
            <button
              onClick={() => setActiveTier('tier4')}
              className={`px-4 py-2.5 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                activeTier === 'tier4'
                  ? 'bg-surface-container-lowest text-secondary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Tier 4: Aerospace &amp; AI Hub
            </button>
          </div>

          {/* Dynamic Tier Showcase */}
          <div className="bg-surface-container-low rounded-3xl p-8 lg:p-10 border border-surface-container shadow-sm">
            {activeTier === 'tier1' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary text-on-primary font-display text-xs font-bold px-3 py-1 rounded-full">
                      Entry Level
                    </span>
                    <h3 className="font-display text-2xl font-bold text-on-surface">Foundation STEM Corner</h3>
                  </div>
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    Designed for budget-conscious schools or multipurpose rooms. Requires no structural renovations. Utilizes lockable, heavy-duty rolling STEM carts loaded with plug-and-play kits.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Space Needed</span>
                      <span className="font-display text-base font-bold text-on-surface">150 - 250 sq.ft</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Batch Capacity</span>
                      <span className="font-display text-base font-bold text-on-surface">15 - 20 Students</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Kit Hardware</span>
                      <span className="font-display text-base font-bold text-on-surface">8 Modular Carts</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Rollout Time</span>
                      <span className="font-display text-base font-bold text-secondary">7 Business Days</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-display text-xs font-bold text-on-surface uppercase tracking-wider">
                      Included Lab Assets
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Modular Mobile Workbench with power strips</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Primary &amp; Middle basic sensor kits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Digital Multimeters &amp; Safe Prototyping tools</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Digital LMS access for 200 student accounts</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <img
                      className="w-full h-80 object-cover"
                      alt="Tier 1 mobile workstation cart"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUtbQPAf9wpX1CfMZHje0oDhamUbdD74NDtDwXxRqg7-9boGrZUjqGEKTy-L-pDG0VQfz86L0KYdH2fqVxBaL4aBDkVTodxFVgmNrRYgUjBlfzASd2xEIlwebuvMkekMj9tl6dBRhe0K0VMBT1yW7SHwjhQEbs8OO84oxgN5qZE1T_8-fX1Rodb9MXEaO0KJZm9dK9VIQp2T8HkkKfwMdfJRM99_xcUUO8Zhe06XES"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTier === 'tier2' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-secondary text-on-secondary font-display text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                    <h3 className="font-display text-2xl font-bold text-on-surface">Dedicated Tinkering Studio</h3>
                  </div>
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    The flagship 30-seat collaborative studio designed for weekly timetable integration. Features hexagonal collaborative tables, rapid prototyping corners, and basic 3D fabrication.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Space Needed</span>
                      <span className="font-display text-base font-bold text-on-surface">500 - 700 sq.ft</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Batch Capacity</span>
                      <span className="font-display text-base font-bold text-on-surface">30 - 36 Students</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Kit Hardware</span>
                      <span className="font-display text-base font-bold text-on-surface">18 Core Sets + 3D Fab</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Rollout Time</span>
                      <span className="font-display text-base font-bold text-secondary">14 Business Days</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-display text-xs font-bold text-on-surface uppercase tracking-wider">
                      Included Lab Assets
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Dual high-speed 3D Printers with filaments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Interactive SMART display wall unit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Custom school-branded acoustic wall paneling</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Comprehensive Grade 4 to 10 kit matrix</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <img
                      className="w-full h-80 object-cover"
                      alt="Tier 2 dedicated tinkering studio"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYGex_VRSQYDQjcXsbkd-yS-swN3Z5J6ELidrcqTnmI_F26zgmHJc3iwB6yFmMvDihRZ3U8gP30VATmyxLEt541-BqLzZHOqGgOO87pQsi3WXupKE8BHVkusyMAmMHBzY63CqcKv4u-0sBB6fmFBG-osFA032DDxIMApkDCMZtOrSt3gudQUNWxK6NKkEpUX8fTj2_C-Bykjd68DyOBM-StEYMcJ1vjhqkXRPDgfXk"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTier === 'tier3' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary-container text-surface-bright font-display text-xs font-bold px-3 py-1 rounded-full">
                      Advanced
                    </span>
                    <h3 className="font-display text-2xl font-bold text-on-surface">Advanced Robotics &amp; IoT Center</h3>
                  </div>
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    Full spectrum lab with automated arena tracks, line follower mats, IoT edge computing gateways, and micro-controller programming benches designed for competitive STEM prep.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Space Needed</span>
                      <span className="font-display text-base font-bold text-on-surface">800 - 1000 sq.ft</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Batch Capacity</span>
                      <span className="font-display text-base font-bold text-on-surface">40 Students</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Kit Hardware</span>
                      <span className="font-display text-base font-bold text-on-surface">24 Advanced Kits</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Rollout Time</span>
                      <span className="font-display text-base font-bold text-secondary">21 Business Days</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-display text-xs font-bold text-on-surface uppercase tracking-wider">
                      Included Lab Assets
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>National League Competition Arena arena table</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Industrial soldering stations with fume extractors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>ESP32, Raspberry Pi, &amp; Smart Home IoT suites</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Oscilloscopes and high-grade bench testing power</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <img
                      className="w-full h-80 object-cover"
                      alt="Tier 3 advanced robotics center"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA81V6u3dqCH4TovK_s4VK2-VgomWZoFmbm8KBgmCaGrE55VeE3WTPQL9AaFP6YNq5o9VfpSFMfBZ0zHC-kTZNnfpCYCk62EAjJiDv4OlKq_hovy_ogEm0ybq-4PYsdBL7ykncNy3tZ0jeEoUmdUnu9lATS4Ao1GnRrHxGxN7zNqTy8Vq4WuONH6PaSmnCMC-lEi_3ZLAfSWOH2KVYHkFVYJ_mISbHbz_Lbjzj6i22h"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTier === 'tier4' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-on-tertiary-container text-surface-bright font-display text-xs font-bold px-3 py-1 rounded-full">
                      Premier Research
                    </span>
                    <h3 className="font-display text-2xl font-bold text-on-surface">Aerospace &amp; AI Innovation Hub</h3>
                  </div>
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    The pinnacle of high-school innovation infrastructure. Integrated flight simulation, protective indoor drone netting enclosure, GPU-accelerated Computer Vision workstations, and neuroscience EEG sensors.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Space Needed</span>
                      <span className="font-display text-base font-bold text-on-surface">1,000 - 1,500 sq.ft</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Batch Capacity</span>
                      <span className="font-display text-base font-bold text-on-surface">45+ Students</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Workstations</span>
                      <span className="font-display text-base font-bold text-on-surface">10 AI Rigged PCs</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                      <span className="text-[11px] text-on-surface-variant font-medium block">Rollout Time</span>
                      <span className="font-display text-base font-bold text-secondary">30 Business Days</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-display text-xs font-bold text-on-surface uppercase tracking-wider">
                      Included Lab Assets
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Enclosed modular ceiling drone testing net</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>NVIDIA Jetson AI edge modules &amp; cameras</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Wind-tunnel aerodynamic test fixture</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
                        <span>Dedicated resident lab engineer support option</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <img
                      className="w-full h-80 object-cover"
                      alt="Tier 4 aerospace and AI innovation hub"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd8B-3rpss7Nqh4T_hIGJcs1ObHlirmP_ufQAJKTUaaItVoHJovIhVgQWG8wVSx3eSjl6DfaOFBBV8kO28PwDxf8SobJ4zwm7MNbdio6VEFVKbVORtOSZcGv1qNuE8ntCder0B3vKrir99ozazL8JlTWIXMaMDW5uDRZv1_2OUZVVMYq280vcfR8sq31jNQXIZoY-Q8Eht65dQGjQzBGvPZ3aTwEXQtVvqIxv_DBWh"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Built for Classroom Rigor */}
      <section className="w-full bg-surface-container py-20 border-y border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
              Institutional Engineering
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Built for Classroom Rigor, Not Fragile Toy Kits
            </h2>
            <p className="text-base text-on-surface-variant max-w-2xl">
              School-ready equipment requires heavy-duty durability, zero classroom downtime, and seamless parts management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-3 shadow-sm border border-surface-container">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">group</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">1:2 Student Ratio</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Engineered exclusively so pairs collaborate without passive observation. Both students retain dedicated terminal/breadboard interactions.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-3 shadow-sm border border-surface-container">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">inventory_2</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">Rugged Heavy-Duty Bins</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Impact-resistant polycarbonate stacking containers with laser-etched foam organizers to ensure instantaneous parts accountability before clean-up.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-3 shadow-sm border border-surface-container">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">autorenew</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">15% Spares Reserve</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Every school shipment automatically contains over 15% pre-packaged component reserves (jumpers, motors, micro-servos, sensors) for immediate replacements.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-3 shadow-sm border border-surface-container">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">QR Inventory Tracking</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Every kit features a durable QR code linking directly to step-by-step pinout schematics, instant missing part re-orders, and troubleshooting guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* K-12 Curriculum Architecture */}
      <section className="w-full bg-surface py-20" id="curriculum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
                Structured Pedagogical Framework
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
                Term-Wise K-12 Curriculum Architecture
              </h2>
            </div>
            <button
              onClick={handleDownloadSample}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-display text-xs font-bold self-start md:self-auto border border-surface-container-high cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Sample Lesson Plan (.PDF)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary */}
            <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col gap-4 border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold bg-surface-container-highest px-3 py-1 rounded-full text-on-surface">
                  Grades 1 – 5
                </span>
                <span className="material-symbols-outlined text-secondary text-[24px]">child_care</span>
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface">Primary Wing: Discover &amp; Build</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Sensory mechanics, basic simple machines, block logic, and eco-friendly solar circuit concepts.
              </p>
              <div className="flex flex-col gap-2.5 pt-2 text-sm">
                <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                  <strong className="font-display text-sm font-bold text-on-surface block">Term 1: Forces &amp; Pulley Systems</strong>
                  <span className="text-xs text-on-surface-variant">Applied Physics: Levers, wheels, tension bridges.</span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                  <strong className="font-display text-sm font-bold text-on-surface block">Term 2: Visual Code Flow</strong>
                  <span className="text-xs text-on-surface-variant">Block-based visual algorithms &amp; sensor triggers.</span>
                </div>
              </div>
              <div className="mt-auto pt-4 text-secondary font-display text-xs font-bold">
                Maps to: Elementary Science &amp; Geometry
              </div>
            </div>

            {/* Middle */}
            <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col gap-4 border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full">
                  Grades 6 – 8
                </span>
                <span className="material-symbols-outlined text-secondary text-[24px]">precision_manufacturing</span>
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface">Middle Wing: Code &amp; Automate</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Microcontroller foundations, C++/Python syntax bridges, smart automation, and connected weather sensing.
              </p>
              <div className="flex flex-col gap-2.5 pt-2 text-sm">
                <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                  <strong className="font-display text-sm font-bold text-on-surface block">Term 1: Embedded Electronics</strong>
                  <span className="text-xs text-on-surface-variant">Analog/Digital signals, relays, and motor drivers.</span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                  <strong className="font-display text-sm font-bold text-on-surface block">Term 2: IoT City Solutions</strong>
                  <span className="text-xs text-on-surface-variant">Smart irrigation, ultrasonic radar, and wireless protocols.</span>
                </div>
              </div>
              <div className="mt-auto pt-4 text-secondary font-display text-xs font-bold">
                Maps to: Linear Equations, Electricity, &amp; CS
              </div>
            </div>

            {/* Senior */}
            <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col gap-4 border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold bg-surface-container-highest px-3 py-1 rounded-full text-on-surface">
                  Grades 9 – 12
                </span>
                <span className="material-symbols-outlined text-secondary text-[24px]">psychology</span>
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface">Senior Wing: AI, Edge &amp; Space</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Convolutional neural networks, machine vision sorting, drone telemetry, autonomous pathfinding, and capstone R&amp;D.
              </p>
              <div className="flex flex-col gap-2.5 pt-2 text-sm">
                <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                  <strong className="font-display text-sm font-bold text-on-surface block">Term 1: Computer Vision &amp; AI</strong>
                  <span className="text-xs text-on-surface-variant">OpenCV facial recognition, object classifiers, Edge AI.</span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container">
                  <strong className="font-display text-sm font-bold text-on-surface block">Term 2: Aerospace Telemetry</strong>
                  <span className="text-xs text-on-surface-variant">Flight dynamics, IMU sensors, and payload electronics.</span>
                </div>
              </div>
              <div className="mt-auto pt-4 text-secondary font-display text-xs font-bold">
                Maps to: Advanced Calculus, Vectors, &amp; AI Electives
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Enablement & Resident Faculty Support */}
      <section className="w-full bg-surface-container-low py-20 border-y border-surface-container" id="teacher-training">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-display text-xs font-bold uppercase">
                Capacity Building
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
                Empowering Your Teachers, or Providing Ours.
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                A world-class lab is only as impactful as its facilitators. We solve school staffing challenges through comprehensive faculty upskilling and optional full-time resident STEM mentors.
              </p>

              <div className="flex flex-col gap-4 pt-2">
                <div className="bg-surface-container-lowest p-4 rounded-xl flex gap-4 items-start border border-surface-container shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-on-surface">3-Tier Faculty Enablement Program</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                      Intensive pedagogy workshops, hardware troubleshooting certifications, and annual curriculum upgrade sessions for existing physics and computer science teachers.
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-4 rounded-xl flex gap-4 items-start border border-surface-container shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-on-surface">Resident STEM Engineer Deployment</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                      For schools desiring zero administrative burden, Brain Up Labs embeds a certified, full-time robotics engineer at your campus to conduct all lab periods, clubs, and hackathon training.
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-4 rounded-xl flex gap-4 items-start border border-surface-container shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-on-surface">Continuous LMS Lesson Delivery</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                      Teachers receive digital slide decks, animated wiring diagrams, rubric evaluations, and student assessment rubrics directly in their dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-md border border-surface-container flex flex-col gap-6">
                <div className="flex items-center justify-between pb-2 border-b border-surface-container-low">
                  <div>
                    <h3 className="font-display text-lg font-bold text-on-surface">Educator Enablement Metrics</h3>
                    <p className="text-xs text-on-surface-variant">Across 1,200+ certified educators nationwide</p>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[32px]">workspace_premium</span>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-display text-xs font-semibold mb-1">
                      <span className="text-on-surface">Teacher Hardware Confidence</span>
                      <span className="text-secondary font-bold">96%</span>
                    </div>
                    <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-display text-xs font-semibold mb-1">
                      <span className="text-on-surface">Curriculum Completion Rate</span>
                      <span className="text-secondary font-bold">92%</span>
                    </div>
                    <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-display text-xs font-semibold mb-1">
                      <span className="text-on-surface">Zero-Downtime Lab Maintenance</span>
                      <span className="text-on-tertiary-container font-bold">99.4%</span>
                    </div>
                    <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                      <div className="bg-on-tertiary-container h-full rounded-full" style={{ width: '99.4%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-3.5 bg-surface-container-low flex items-center gap-3 border border-surface-container">
                  <span className="material-symbols-outlined text-secondary">verified_user</span>
                  <p className="text-xs text-on-surface font-medium">
                    Certified under ISO 9001:2015 Educational Training Guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & Proven Institutional Impact */}
      <section className="w-full bg-surface py-20" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center max-w-3xl mx-auto">
            <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
              Proven Institutional Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Case Studies from Our Partner Institutions
            </h2>
            <p className="text-base text-on-surface-variant">
              Hear how India's foremost educational institutions upgraded their institutional branding, parent engagement, and academic rankings with Brain Up Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-4 shadow-sm border border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-sm">
                  DPS
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-on-surface">Delhi Public School</h4>
                  <p className="text-[11px] text-on-surface-variant">Bengaluru North (Tier 3 Setup)</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant italic leading-relaxed">
                "Brain Up Labs transformed our empty 900 sq.ft hall into the epicenter of the school. Within 8 months, our students secured 1st place in the Karnataka Inter-School STEM Challenge."
              </p>
              <div className="mt-auto pt-3 border-t border-surface-container-low text-secondary font-display text-xs font-bold">
                1,400 Students Actively Enrolled
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-4 shadow-sm border border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-sm">
                  VIS
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-on-surface">Vidyashilp Academy</h4>
                  <p className="text-[11px] text-on-surface-variant">Bengaluru (Tier 4 Aerospace &amp; AI)</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant italic leading-relaxed">
                "The combination of the drone net enclosure and resident trainer gave us instant competitive differentiation. Our parent admissions tours now prioritize the innovation hub."
              </p>
              <div className="mt-auto pt-3 border-t border-surface-container-low text-secondary font-display text-xs font-bold">
                +32% Surge in Grade 11 STEM Opt-in
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-4 shadow-sm border border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-sm">
                  SM
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-on-surface">St. Mary's Convent</h4>
                  <p className="text-[11px] text-on-surface-variant">Pune (Tier 2 Tinkering Studio)</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant italic leading-relaxed">
                "Their teacher upskilling program was flawless. Teachers who were hesitant to handle microcontrollers are now guiding 7th graders through sensor-driven automation."
              </p>
              <div className="mt-auto pt-3 border-t border-surface-container-low text-secondary font-display text-xs font-bold">
                100% Internal Faculty Autonomy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive School Proposal & RFP Form */}
      <section className="w-full bg-surface-container-low py-20 border-t border-surface-container" id="proposal-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 shadow-lg border border-surface-container flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center max-w-xl mx-auto">
              <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">
                Direct Institutional Engagement
              </span>
              <h2 className="font-display text-3xl font-extrabold text-on-surface tracking-tight">
                Request a Custom Lab Proposal &amp; RFP
              </h2>
              <p className="text-sm text-on-surface-variant">
                Provide institutional details below. Our academic infrastructure architects will generate a customized budgetary estimate, layout plan, and curriculum prospectus within 24 hours.
              </p>
            </div>

            {!proposalSubmitted ? (
              <form onSubmit={handleProposalSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-on-surface">Institution Name *</label>
                    <input
                      type="text"
                      required
                      value={rfpData.schoolName}
                      onChange={(e) => setRfpData({ ...rfpData, schoolName: e.target.value })}
                      placeholder="e.g. National Public School"
                      className="w-full bg-surface-container-low p-3 rounded-xl text-sm text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-on-surface">City &amp; State *</label>
                    <input
                      type="text"
                      required
                      value={rfpData.cityState}
                      onChange={(e) => setRfpData({ ...rfpData, cityState: e.target.value })}
                      placeholder="e.g. Hyderabad, Telangana"
                      className="w-full bg-surface-container-low p-3 rounded-xl text-sm text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-on-surface">Affiliation Board *</label>
                    <select
                      value={rfpData.board}
                      onChange={(e) => setRfpData({ ...rfpData, board: e.target.value })}
                      className="w-full bg-surface-container-low p-3 rounded-xl text-sm text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE / ISC</option>
                      <option value="IB">IB (PYP / MYP / DP)</option>
                      <option value="Cambridge">Cambridge (IGCSE / A-Levels)</option>
                      <option value="State">State Board</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-on-surface">Total Student Strength *</label>
                    <select
                      value={rfpData.strength}
                      onChange={(e) => setRfpData({ ...rfpData, strength: e.target.value })}
                      className="w-full bg-surface-container-low p-3 rounded-xl text-sm text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="200-500">200 - 500 Students</option>
                      <option value="500-1200">500 - 1,200 Students</option>
                      <option value="1200-2500">1,200 - 2,500 Students</option>
                      <option value="2500+">2,500+ Students</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-on-surface">Target Lab Tier *</label>
                    <select
                      value={rfpData.tier}
                      onChange={(e) => setRfpData({ ...rfpData, tier: e.target.value })}
                      className="w-full bg-surface-container-low p-3 rounded-xl text-sm text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="Tier 1">Tier 1: Foundation STEM Corner</option>
                      <option value="Tier 2">Tier 2: Dedicated Tinkering Studio</option>
                      <option value="Tier 3">Tier 3: Robotics &amp; IoT Center</option>
                      <option value="Tier 4">Tier 4: Aerospace &amp; AI Hub</option>
                      <option value="Custom">Custom / ATL Expansion Package</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-on-surface">Principal / Decision Maker Name *</label>
                    <input
                      type="text"
                      required
                      value={rfpData.contactPerson}
                      onChange={(e) => setRfpData({ ...rfpData, contactPerson: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full bg-surface-container-low p-3 rounded-xl text-sm text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-on-surface">Institutional Email / Phone *</label>
                    <input
                      type="text"
                      required
                      value={rfpData.emailOrPhone}
                      onChange={(e) => setRfpData({ ...rfpData, emailOrPhone: e.target.value })}
                      placeholder="contact@school.edu.in / +91 ..."
                      className="w-full bg-surface-container-low p-3 rounded-xl text-sm text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-display text-xs font-bold text-on-surface">Specific Requirements &amp; Space Notes</label>
                  <textarea
                    rows={3}
                    value={rfpData.notes}
                    onChange={(e) => setRfpData({ ...rfpData, notes: e.target.value })}
                    placeholder="Mention dedicated room dimensions, current computer lab setups, or planned timeline for rollout..."
                    className="w-full bg-surface-container-low p-3 rounded-xl text-sm text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="residentTrainer"
                    checked={rfpData.residentTrainer}
                    onChange={(e) => setRfpData({ ...rfpData, residentTrainer: e.target.checked })}
                    className="w-4 h-4 text-secondary rounded accent-secondary cursor-pointer"
                  />
                  <label htmlFor="residentTrainer" className="text-sm text-on-surface font-medium cursor-pointer">
                    Include quotation for a full-time Brain Up Resident STEM Trainer on campus.
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">lock</span>
                    <span>All information protected under Institutional NDA standards.</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container transition-all font-display text-sm font-bold shadow-md gap-2 cursor-pointer"
                  >
                    <span>Generate Custom Proposal</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 rounded-2xl bg-surface-container-low border border-secondary/30 flex flex-col gap-4 text-center items-center animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">task_alt</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface">RFP Received Successfully</h3>
                <p className="text-sm text-on-surface-variant max-w-lg leading-relaxed">
                  Thank you! An academic advisor from our Institutional Support Cell has generated Proposal <strong>#BUL-RFP-2026-771</strong> for {rfpData.schoolName || 'your institution'}. Our architectural blueprint and fee matrix will be dispatched to {rfpData.emailOrPhone || 'your contact'} within 24 hours.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('book-a-demo')}
                    className="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary font-display text-xs font-bold cursor-pointer"
                  >
                    Schedule Accompanying Walkthrough
                  </button>
                  <button
                    onClick={() => setProposalSubmitted(false)}
                    className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface font-display text-xs font-bold hover:bg-surface-container-high cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 z-50 animate-bounce">
          <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">check_circle</span>
          <span className="text-sm">Sample Lesson Plan PDF dispatched to download queue!</span>
        </div>
      )}
    </div>
  );
};
