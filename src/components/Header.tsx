import React, { useEffect, useState } from 'react';
import { BookOpen, CalendarDays, ChevronRight, FolderOpen, Home, Menu, Package, ReceiptText, Rocket, School, Users, X } from 'lucide-react';
import { NavigationPath } from '../types.ts';

interface HeaderProps {
  currentPath: NavigationPath;
  onNavigate: (path: NavigationPath, subTab?: string) => void;
  quoteItemsCount?: number;
  onOpenQuote?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  quoteItemsCount = 0,
  onOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 80);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const handleNavClick = (path: NavigationPath, subTab?: string) => {
    onNavigate(path, subTab);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(19,27,46,0.06)]">
      {/* Main Navbar */}
      <div className="bg-surface-container-lowest/95 backdrop-blur-xl border-b border-surface-container-low">
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${isCompact ? 'h-14' : 'h-20'}`}>
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 shrink-0 text-left cursor-pointer group"
          >
            <div className="h-12 w-12 rounded-lg overflow-hidden flex items-center justify-center bg-surface-container-low border border-surface-container-high/60 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src="/assets/Photos/Logo.jpeg"
                alt="Brain Up Labs Logo"
                className="h-11 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCBoCFbn5763kcOoL9Fz1CZ8SGapEHeb96-2gYBrvldn-sE7QzXIFKYMBx7WjjkpyWW017qYLp_lA3ToUbfwnuWGAvP3S8RQ1Ms_GE8rYFPFSY7ZzA-EX05qpcSRA5T3fbgIlqUmcFxG1iHHYnauajZi9INdYPwRyZqKKiFNDod0krappLJKWJMjbKrJZIGUIE1XHe5-k0jhQPvvqrCbgjGfI3LP3BsSHIYagqtjjvbVGA-djacBCrCDQ';
                }}
              />
            </div>
            <div className={`flex flex-col overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-48 opacity-100'}`}>
              <span className="font-display text-xl font-extrabold text-on-surface tracking-tight leading-tight">
                Brain Up Labs
              </span>
              <span className="text-[10px] text-on-surface-variant font-semibold tracking-widest uppercase">
                Beyond Boundaries
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Dropdowns */}
          <nav className="hidden xl:flex items-center gap-1 font-display text-xs font-semibold">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              aria-label="Home"
              title="Home"
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'home'
                  ? 'bg-surface-container-high text-secondary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
            >
              <Home size={19} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-6 opacity-100' : 'max-w-0 opacity-0'}`} />
              <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-16 opacity-100'}`}>Home</span>
            </button>

            {/* For Schools */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('schools')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('for-schools')}
                aria-label="For Schools"
                title="For Schools"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currentPath === 'for-schools' || currentPath === 'lab-setup'
                    ? 'bg-surface-container-high text-secondary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                <School size={19} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-6 opacity-100' : 'max-w-0 opacity-0'}`} />
                <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-28 opacity-100'}`}>For Schools</span>
              </button>
              {activeDropdown === 'schools' && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-surface-container-lowest rounded-xl p-2 shadow-[0_12px_32px_-4px_rgba(19,27,46,0.14)] border border-surface-container-high flex flex-col gap-1">
                    <button
                      onClick={() => handleNavClick('for-schools', 'overview')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Overview &amp; Models
                    </button>
                    <button
                      onClick={() => handleNavClick('for-schools', 'lab-tiers')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Lab Setup 1 to 6 (Tiers)
                    </button>
                    <button
                      onClick={() => handleNavClick('stem-kits')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Institutional Kits
                    </button>
                    <button
                      onClick={() => handleNavClick('for-schools', 'curriculum')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      K-12 Curriculum Architecture
                    </button>
                    <button
                      onClick={() => handleNavClick('for-schools', 'teacher-training')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Teacher Training &amp; Resident Mentor
                    </button>
                    <button
                      onClick={() => handleNavClick('for-schools', 'competitions')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Competitions &amp; Leagues
                    </button>
                    <button
                      onClick={() => handleNavClick('for-schools', 'case-studies')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Case Studies (DPS, Vidyashilp)
                    </button>
                    <button
                      onClick={() => handleNavClick('for-schools', 'proposal-form')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-secondary font-bold hover:bg-secondary-fixed/50 transition-colors cursor-pointer"
                    >
                      School Proposal Form / RFP →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* STEM Kits */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('kits')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('stem-kits')}
                aria-label="STEM Kits"
                title="STEM Kits"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currentPath === 'stem-kits'
                    ? 'bg-surface-container-high text-secondary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                <Package size={19} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-6 opacity-100' : 'max-w-0 opacity-0'}`} />
                <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-20 opacity-100'}`}>STEM Kits</span>
              </button>
              {activeDropdown === 'kits' && (
                <div className="absolute left-0 top-full pt-2 w-60 z-50">
                  <div className="bg-surface-container-lowest rounded-xl p-2 shadow-[0_12px_32px_-4px_rgba(19,27,46,0.14)] border border-surface-container-high flex flex-col gap-1">
                    <button
                      onClick={() => handleNavClick('stem-kits', 'all')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      All Kits + Search &amp; Filter
                    </button>
                    <button
                      onClick={() => handleNavClick('stem-kits', 'grade')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Grade-wise Kits (1 to 12)
                    </button>
                    <button
                      onClick={() => handleNavClick('stem-kits', 'compare')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Compare Kits Spec
                    </button>
                    <button
                      onClick={() => handleNavClick('stem-kits', 'books')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Coding Books &amp; Handbooks
                    </button>
                    <button
                      onClick={() => handleNavClick('stem-kits', 'bulk')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-secondary font-bold hover:bg-secondary-fixed/50 transition-colors cursor-pointer"
                    >
                      Bulk School Inquiry →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Programs */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('programs')}
                aria-label="Programs"
                title="Programs"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currentPath === 'programs'
                    ? 'bg-surface-container-high text-secondary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                <BookOpen size={19} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-6 opacity-100' : 'max-w-0 opacity-0'}`} />
                <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-20 opacity-100'}`}>Programs</span>
              </button>
              {activeDropdown === 'programs' && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-surface-container-lowest rounded-xl p-2 shadow-[0_12px_32px_-4px_rgba(19,27,46,0.14)] border border-surface-container-high flex flex-col gap-1">
                    <button
                      onClick={() => handleNavClick('programs', 'school-stem')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      School STEM Program (K-12)
                    </button>
                    <button
                      onClick={() => handleNavClick('programs', 'ai-robotics')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      AI &amp; Robotics Specialization
                    </button>
                    <button
                      onClick={() => handleNavClick('programs', 'labs-table')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Labs on Table™ (Zero Space)
                    </button>
                    <button
                      onClick={() => handleNavClick('programs', 'teacher-dev')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Teacher CPD Certification
                    </button>
                    <button
                      onClick={() => handleNavClick('programs', 'clubs')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      Innovation Clubs &amp; Patent Hubs
                    </button>
                    <button
                      onClick={() => handleNavClick('programs', 'arenas')}
                      className="text-left px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer"
                    >
                      National Robotics League
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <button
              onClick={() => handleNavClick('projects')}
              aria-label="Projects"
              title="Projects"
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'projects'
                  ? 'bg-surface-container-high text-secondary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
            >
              <Rocket size={19} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-6 opacity-100' : 'max-w-0 opacity-0'}`} />
              <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-20 opacity-100'}`}>Projects</span>
            </button>

            {/* About Us */}
            <button
              onClick={() => handleNavClick('about-us')}
              aria-label="About Us"
              title="About Us"
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'about-us'
                  ? 'bg-surface-container-high text-secondary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
            >
              <Users size={19} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-6 opacity-100' : 'max-w-0 opacity-0'}`} />
              <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-20 opacity-100'}`}>About Us</span>
            </button>

            {/* Resources */}
            <button
              onClick={() => handleNavClick('resources')}
              aria-label="Resources"
              title="Resources"
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'resources'
                  ? 'bg-surface-container-high text-secondary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
            >
              <FolderOpen size={19} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-6 opacity-100' : 'max-w-0 opacity-0'}`} />
              <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-20 opacity-100'}`}>Resources</span>
            </button>
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quote badge if items present */}
            {quoteItemsCount > 0 && (
              <button
                onClick={onOpenQuote}
                aria-label={`Open quote with ${quoteItemsCount} items`}
                title="Open quote"
                className={`hidden sm:flex items-center gap-1.5 rounded-full bg-secondary-fixed py-1.5 text-xs font-bold text-on-secondary-fixed transition-all duration-300 hover:bg-secondary-fixed-dim cursor-pointer ${isCompact ? 'px-2' : 'px-3'}`}
              >
                <ReceiptText size={16} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-5 opacity-100' : 'max-w-0 opacity-0'}`} />
                <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-24 opacity-100'}`}>{quoteItemsCount} in Quote</span>
              </button>
            )}

            {/* Book a Demo CTA */}
            <button
              onClick={() => handleNavClick('book-a-demo')}
              aria-label="Book a Demo"
              title="Book a Demo"
              className={`inline-flex items-center justify-center rounded-full bg-secondary text-on-secondary transition-all duration-300 hover:bg-secondary-container font-display text-sm font-semibold shadow-sm hover:shadow cursor-pointer ${isCompact ? 'h-9 w-9 gap-0 p-0' : 'gap-2 px-5 py-2.5'}`}
            >
              <CalendarDays size={19} className={`shrink-0 overflow-hidden transition-all duration-300 ${isCompact ? 'max-w-6 opacity-100' : 'max-w-0 opacity-0'}`} />
              <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-28 opacity-100'}`}>Book a Demo</span>
            </button>

            {/* User profile picture / Avatar */}
            <div className="relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4yVCuiCELda1q-OMxA67Kg_05_xtJuWyqVCprwy-uIBy3PThxbtYIt_ggy8AC4xI7lWOp4VE7bcn9c3uMUi9MdckYTY3SogH2zHo6iGMuy2WVQ3RMnYR_yqOBzcml6eYPGcbgm2lXtknhvTjS0Cn7nI_Ny6op1xTzQZrYcEMJSnK3njBCEnrC44oZXEjp6ht9cnFGXHqLOazrd262Ijp-FS3xU7pW8syeGnYmgHqB"
                alt="Institutional Member Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-variant cursor-pointer"
              />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container p-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('for-schools')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low flex justify-between items-center"
            >
              <span>For Schools (Lab Setup Overview &amp; Tiers)</span>
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => handleNavClick('stem-kits')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low flex justify-between items-center"
            >
              <span>STEM Kits &amp; Catalog</span>
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => handleNavClick('programs')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low flex justify-between items-center"
            >
              <span>Programs &amp; Curricula</span>
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low"
            >
              Student Projects &amp; Inventions
            </button>
            <button
              onClick={() => handleNavClick('about-us')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low"
            >
              About Us &amp; Team
            </button>
            <button
              onClick={() => handleNavClick('resources')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low"
            >
              Resources &amp; Downloads
            </button>
            <div className="pt-2 border-t border-surface-container-low">
              <button
                onClick={() => handleNavClick('book-a-demo')}
                className="w-full py-3 rounded-xl bg-secondary text-on-secondary font-bold text-center text-sm"
              >
                Book a School Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
