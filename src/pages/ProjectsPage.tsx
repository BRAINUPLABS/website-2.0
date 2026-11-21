import React, { useState } from 'react';
import { STUDENT_PROJECTS_DATA } from '../data/projects.ts';
import { NavigationPath, StudentProject } from '../types.ts';

interface ProjectsPageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
  initialCategory?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects (6)' },
    { id: 'Robotics', label: 'Robotics' },
    { id: 'IoT', label: 'IoT & Smart Hubs' },
    { id: 'AI & Computer Vision', label: 'AI & Edge Vision' },
    { id: 'Neuroscience', label: 'Neuroscience & EEG' },
    { id: 'Aerospace', label: 'Aerospace & Drones' },
    { id: 'Electronics', label: 'Electronics & Bionics' }
  ];

  const filtered = STUDENT_PROJECTS_DATA.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Header */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden py-14 lg:py-20 border-b border-surface-container">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold font-display uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">military_tech</span>
              <span>Student Inventions & National Laurels</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
              Real Hardware. Real Patents. Real Student Impact.
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Explore extraordinary working prototypes built by K-12 students using Brain Up Labs hardware kits, teacher mentoring, and open-source embedded software.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-surface-container-lowest/95 backdrop-blur-md shadow-sm py-3 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-full font-display text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-surface-container transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-52 overflow-hidden bg-surface-container-low">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full font-display text-xs font-bold bg-secondary text-on-secondary shadow-sm">
                    {proj.category}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full font-display text-[11px] font-bold bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface shadow-sm">
                    {proj.studentClass}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-secondary font-bold font-display">
                    <span className="material-symbols-outlined text-[16px]">school</span>
                    <span className="truncate">{proj.schoolName}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-on-surface tracking-tight group-hover:text-secondary transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 space-y-3">
                <div className="p-3 rounded-xl bg-surface-container-low text-xs space-y-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-[16px] text-warning">emoji_events</span>
                    <span className="truncate">{proj.recognition}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant font-mono text-[11px]">
                    <span className="material-symbols-outlined text-[14px]">memory</span>
                    <span className="truncate">{proj.hardware}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2.5 rounded-xl bg-surface-container text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors font-display text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">info</span>
                  <span>View Project Architecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-surface-container relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-5">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-surface-container-low">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full font-display text-xs font-bold bg-secondary text-on-secondary">
                  {selectedProject.category}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider font-display">
                  {selectedProject.studentClass} • {selectedProject.schoolName}
                </span>
                <h2 className="font-display text-2xl font-bold text-on-surface mt-1">
                  {selectedProject.title}
                </h2>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-surface-container-low border border-surface-container text-xs">
                <div>
                  <span className="text-on-surface-variant block font-medium">National Recognition:</span>
                  <strong className="text-on-surface text-sm flex items-center gap-1.5 mt-0.5">
                    <span className="material-symbols-outlined text-warning text-[18px]">emoji_events</span>
                    {selectedProject.recognition}
                  </strong>
                </div>
                <div>
                  <span className="text-on-surface-variant block font-medium">Hardware Configuration:</span>
                  <strong className="text-on-surface text-sm flex items-center gap-1.5 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-[18px]">memory</span>
                    {selectedProject.hardware}
                  </strong>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-surface-container text-on-surface font-display text-xs font-bold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigate('book-a-demo');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-secondary text-on-secondary font-display text-xs font-bold shadow-md"
                >
                  Book Demo For My School
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
