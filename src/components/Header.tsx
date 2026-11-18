import React, { useEffect, useState } from 'react';
import { CalendarDays, GraduationCap, Menu, Package, ReceiptText, Rocket, School, X } from 'lucide-react';
import { motion } from 'motion/react';
import { NavigationPath } from '../types.ts';

interface HeaderProps {
  currentPath: NavigationPath;
  onNavigate: (path: NavigationPath, subTab?: string) => void;
  quoteItemsCount?: number;
  onOpenQuote?: () => void;
}

const navigation = [
  { label: 'For Schools', path: 'for-schools', icon: School },
  { label: 'STEM Kits', path: 'stem-kits', icon: Package },
  { label: 'Student Projects', path: 'projects', icon: Rocket },
  { label: 'Internship', path: 'internship', icon: GraduationCap },
] as const;

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, quoteItemsCount = 0, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 80);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const navigate = (path: NavigationPath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface-container bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(19,27,46,0.06)] backdrop-blur-xl">
      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${isCompact ? 'h-14' : 'h-20'}`}>
        <button onClick={() => navigate('home')} className="flex shrink-0 items-center gap-2.5 text-left">
          <img src="/assets/Photos/Logo.jpeg" alt="Brain Up Labs" className={`rounded-lg border border-surface-container-high object-contain shadow-sm transition-all duration-300 ${isCompact ? 'h-9 w-9' : 'h-11 w-11'}`} />
          <span className={`hidden overflow-hidden whitespace-nowrap font-display text-xl font-extrabold tracking-tight text-on-surface transition-all duration-300 sm:block ${isCompact ? 'max-w-0 opacity-0' : 'max-w-48 opacity-100'}`}>Brain Up Labs</span>
        </button>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const Icon = item.icon;
            return <button key={item.path} onClick={() => navigate(item.path)} aria-label={item.label} title={item.label} className={`relative isolate flex items-center rounded-lg font-display text-sm font-semibold transition-all duration-300 ${isCompact ? 'h-9 w-9 justify-center p-0' : 'gap-2 px-3 py-2'} ${currentPath === item.path ? 'text-secondary' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}`}>
              {currentPath === item.path && <motion.span layoutId="active-navigation-tab" className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-surface-container-high" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              <Icon size={18} className={`shrink-0 transition-all duration-300 ${isCompact ? 'max-w-5 opacity-100' : 'max-w-0 opacity-0'}`} />
              <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-32 opacity-100'}`}>{item.label}</span>
            </button>;
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {quoteItemsCount > 0 && <button onClick={onOpenQuote} className="hidden items-center gap-1.5 rounded-full bg-secondary-fixed px-3 py-1.5 text-xs font-bold text-on-secondary-fixed sm:flex" aria-label={`Open quote with ${quoteItemsCount} items`}><ReceiptText size={16} />{quoteItemsCount} in Quote</button>}
          <button onClick={() => navigate('book-a-demo')} aria-label="Book a Demo" title="Book a Demo" className={`inline-flex items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-on-secondary shadow-sm transition-all duration-300 hover:bg-secondary-container ${isCompact ? 'h-9 w-9 p-0' : 'gap-2 px-4 py-2.5 sm:px-5'}`}><CalendarDays size={18} className="shrink-0" /><span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCompact ? 'max-w-0 opacity-0' : 'max-w-28 opacity-100'}`}>Book a Demo</span></button>
          <button onClick={() => setMobileMenuOpen((open) => !open)} className="rounded-lg p-2 text-on-surface hover:bg-surface-container-low lg:hidden" aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-surface-container bg-surface-container-lowest p-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => <button key={item.path} onClick={() => navigate(item.path)} className={`rounded-lg px-3 py-3 text-left text-sm font-semibold ${currentPath === item.path ? 'bg-surface-container-high text-secondary' : 'text-on-surface hover:bg-surface-container-low'}`}>{item.label}</button>)}
            <button onClick={() => navigate('book-a-demo')} className="mt-2 rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-on-secondary">Book a Demo</button>
          </div>
        </nav>
      )}
    </header>
  );
};
