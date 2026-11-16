import React, { useState } from 'react';
import { NavigationPath } from '../types.ts';

interface ResourcesPageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownload = (docName: string) => {
    setDownloadToast(`"${docName}" downloaded successfully!`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const downloads = [
    {
      title: 'CBSE Skill Subjects (Robotics & AI) Blueprint',
      type: 'Curriculum PDF • 4.2 MB',
      description: 'Term-wise syllabus breakdown, continuous assessment rubrics, and project guidelines for Grades 6 to 10.',
      icon: 'picture_as_pdf'
    },
    {
      title: 'Atal Tinkering Lab (ATL) Equipment & Budget Checklist',
      type: 'Spreadsheet & Guide • 2.8 MB',
      description: 'Standardized Package 1, 2, and 3 hardware equipment lists compliant with AIM NITI Aayog grants.',
      icon: 'table_view'
    },
    {
      title: 'Labs on Table™ Quick-Deployment Manual',
      type: 'Educator Handbook • 6.1 MB',
      description: '15-minute setup protocols, battery maintenance SOPs, and classroom safety checklists for science teachers.',
      icon: 'menu_book'
    },
    {
      title: 'ESP32 & MicroPython Hardware Pinout Poster',
      type: 'High-Res Printable • 8.5 MB',
      description: 'Classroom wall-mount reference showing GPIO pin mappings, ADC channels, I2C addresses, and LED logic.',
      icon: 'image'
    }
  ];

  const tutorials = [
    {
      title: 'Getting Started with Blockly to MicroPython Bridge',
      duration: '12 Min Read',
      level: 'Beginner',
      category: 'Software',
      summary: 'How to transition middle-school students smoothly from dragging visual blocks to editing real text code.'
    },
    {
      title: 'Calibrating PID Line Following on CyberBotics Rover',
      duration: '18 Min Read',
      level: 'Intermediate',
      category: 'Robotics',
      summary: 'Practical tuning guide for proportional, integral, and derivative gains using the 5-way infrared sensor bank.'
    },
    {
      title: 'Training an Edge AI Hand-Gesture Classifier on K210',
      duration: '25 Min Read',
      level: 'Advanced',
      category: 'AI & Vision',
      summary: 'Collect 100 sample frames, export quantized TensorFlow Lite INT8 weights, and run inference at 30 FPS.'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Toast */}
      {downloadToast && (
        <div className="fixed top-24 right-6 z-50 bg-primary-container text-surface-bright px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-secondary/30 animate-bounce">
          <span className="material-symbols-outlined text-tertiary-fixed text-[22px]">download_done</span>
          <span className="font-label-lg text-sm">{downloadToast}</span>
        </div>
      )}

      {/* Hero Header */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden py-14 lg:py-20 border-b border-surface-container">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold font-display uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">library_books</span>
              <span>Open Knowledge Vault</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
              Curriculum Downloads, Tutorials & Lab Blueprints
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Equip your faculty with peer-reviewed lesson plans, pinout posters, grant tender documentation, and self-guided engineering tutorials.
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Curricula Section */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider font-display">
              Free Institutional Downloads
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface mt-1">
              Official Syllabi & ATL Grant Documents
            </h2>
          </div>
          <p className="text-xs text-on-surface-variant max-w-sm">
            Fully updated for the 2025–2026 academic calendar. Ready for school management submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((doc, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[22px]">{doc.icon}</span>
                  </span>
                  <span className="text-[11px] font-mono text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-lg">
                    {doc.type}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-on-surface group-hover:text-secondary transition-colors">
                  {doc.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-surface-container flex justify-end">
                <button
                  onClick={() => handleDownload(doc.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors font-display text-xs font-bold cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="w-full bg-surface-container-low py-16 border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider font-display">
              Knowledge Hub
            </span>
            <h2 className="font-display text-3xl font-extrabold text-on-surface mt-1">
              Engineering Guides & Tutorials
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
              Step-by-step technical guides authored by Brain Up Labs hardware engineers for both students and mentor teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tut, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold font-display">
                      {tut.category}
                    </span>
                    <span className="text-on-surface-variant font-medium">{tut.duration}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-on-surface leading-snug">
                    {tut.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {tut.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-surface-container flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-outline">Level: {tut.level}</span>
                  <button
                    onClick={() => alert(`Opening tutorial: ${tut.title}`)}
                    className="text-xs font-bold text-secondary hover:underline cursor-pointer"
                  >
                    Read Guide →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
