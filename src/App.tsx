import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ForSchoolsPage } from './pages/ForSchoolsPage.tsx';
import { StemKitsPage } from './pages/StemKitsPage.tsx';
import { ProgramsPage } from './pages/ProgramsPage.tsx';
import { BookDemoPage } from './pages/BookDemoPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ResourcesPage } from './pages/ResourcesPage.tsx';
import { InternshipPage } from './pages/InternshipPage.tsx';
import { NavigationPath, StemKit } from './types.ts';

interface QuoteCartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface RouteState {
  path: NavigationPath;
  subTab?: string;
}

const routePaths: Record<NavigationPath, string> = {
  home: '/',
  'for-schools': '/for-schools',
  'lab-setup': '/lab-setup',
  'stem-kits': '/stem-kits',
  programs: '/programs',
  projects: '/projects',
  'about-us': '/about-us',
  resources: '/resources',
  internship: '/internship',
  'book-a-demo': '/book-a-demo',
};

const readRoute = (): RouteState => {
  const path = (Object.entries(routePaths).find(([, url]) => url === window.location.pathname)?.[0] as NavigationPath | undefined) ?? 'home';
  if (path === 'lab-setup') return { path: 'for-schools', subTab: 'tier2' };

  const subTab = new URLSearchParams(window.location.search).get('tab') || undefined;
  return { path, subTab };
};

const routeUrl = (path: NavigationPath, subTab?: string) => {
  const query = subTab ? `?tab=${encodeURIComponent(subTab)}` : '';
  return `${routePaths[path]}${query}`;
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<NavigationPath>(() => readRoute().path);
  const [activeSubTab, setActiveSubTab] = useState<string | undefined>(() => readRoute().subTab);
  const [quoteCart, setQuoteCart] = useState<QuoteCartItem[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [comparedKits, setComparedKits] = useState<StemKit[]>([]);
  const [quoteSuccessMsg, setQuoteSuccessMsg] = useState(false);

  // Scroll to top whenever the route changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath, activeSubTab]);

  useEffect(() => {
    const handlePopState = () => {
      const route = readRoute();
      setCurrentPath(route.path);
      setActiveSubTab(route.subTab);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: NavigationPath, subTab?: string) => {
    const route: RouteState = path === 'lab-setup'
      ? { path: 'for-schools', subTab: 'tier2' }
      : { path, subTab };

    window.history.pushState(route, '', routeUrl(route.path, route.subTab));
    setCurrentPath(route.path);
    setActiveSubTab(route.subTab);
  };

  // Quote cart actions
  const handleAddToQuote = (item: StemKit | { id: string; name: string; price: number }) => {
    setQuoteCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setQuoteCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as QuoteCartItem[]
    );
  };

  const handleRemoveQuoteItem = (id: string) => {
    setQuoteCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Comparison drawer actions
  const handleToggleCompare = (kit: StemKit) => {
    setComparedKits((prev) => {
      const exists = prev.some((k) => k.id === kit.id);
      if (exists) {
        return prev.filter((k) => k.id !== kit.id);
      }
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 kits simultaneously. Remove one to add another.');
        return prev;
      }
      return [...prev, kit];
    });
  };

  const handleClearCompare = () => {
    setComparedKits([]);
  };

  const totalQuoteAmount = quoteCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuoteCount = quoteCart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased font-sans selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Sticky Header with Quote Count */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        quoteItemsCount={totalQuoteCount}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Page Body (offset for fixed header) */}
      <main className="flex-1 w-full pt-28">
        {currentPath === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPath === 'for-schools' && (
          <ForSchoolsPage onNavigate={handleNavigate} initialTab={activeSubTab} />
        )}

        {currentPath === 'stem-kits' && (
          <StemKitsPage
            onNavigate={handleNavigate}
            onAddToQuote={handleAddToQuote}
            comparedKits={comparedKits}
            onToggleCompare={handleToggleCompare}
            onClearCompare={handleClearCompare}
            initialFilter={activeSubTab}
          />
        )}

        {currentPath === 'programs' && (
          <ProgramsPage onNavigate={handleNavigate} initialFilter={activeSubTab} />
        )}

        {currentPath === 'book-a-demo' && (
          <BookDemoPage onNavigate={handleNavigate} />
        )}

        {currentPath === 'projects' && (
          <ProjectsPage onNavigate={handleNavigate} initialCategory={activeSubTab} />
        )}

        {currentPath === 'about-us' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPath === 'resources' && (
          <ResourcesPage onNavigate={handleNavigate} />
        )}

        {currentPath === 'internship' && (
          <InternshipPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Floating Quote Button (visible if cart has items) */}
      {totalQuoteCount > 0 && !isQuoteModalOpen && (
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-primary text-on-primary hover:bg-primary-container px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-3 border border-secondary/40 animate-pulse hover:animate-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
            request_quote
          </span>
          <span className="font-display text-xs font-bold">
            Quote Cart ({totalQuoteCount})
          </span>
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
            ₹{totalQuoteAmount.toLocaleString()}
          </span>
        </button>
      )}

      {/* Quote Cart Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-surface-container relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsQuoteModalOpen(false);
                setQuoteSuccessMsg(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              ✕
            </button>

            {quoteSuccessMsg ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface">
                  Formal Quotation Dispatched!
                </h3>
                <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                  Your formal institutional quote has been generated with GST breakdown and sent to your email. Our procurement director will follow up with delivery timetables.
                </p>
                <div className="p-4 rounded-xl bg-surface-container-low text-xs text-left border border-surface-container space-y-1">
                  <p><strong>Quote ID:</strong> BUL-EST-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</p>
                  <p><strong>Items:</strong> {totalQuoteCount} total hardware items</p>
                  <p><strong>Total Estimated Value:</strong> ₹{totalQuoteAmount.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => {
                    setIsQuoteModalOpen(false);
                    setQuoteSuccessMsg(false);
                    setQuoteCart([]);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-display text-xs font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-secondary font-display text-xs font-bold uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                    <span>Institutional Estimate</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-on-surface mt-0.5">
                    Your School Quote Request
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Review selected items before generating a formal institutional invoice.
                  </p>
                </div>

                {quoteCart.length === 0 ? (
                  <div className="py-12 text-center text-on-surface-variant space-y-3">
                    <span className="material-symbols-outlined text-4xl text-outline">
                      remove_shopping_cart
                    </span>
                    <p className="text-sm">Your quote cart is currently empty.</p>
                    <button
                      onClick={() => {
                        setIsQuoteModalOpen(false);
                        handleNavigate('stem-kits');
                      }}
                      className="px-5 py-2 rounded-xl bg-secondary text-on-secondary font-display text-xs font-bold"
                    >
                      Browse STEM Kits
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="divide-y divide-surface-container max-h-60 overflow-y-auto pr-1">
                      {quoteCart.map((item) => (
                        <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-display text-sm font-bold text-on-surface">
                              {item.name}
                            </h4>
                            <span className="text-xs font-semibold text-secondary">
                              ₹{item.price.toLocaleString()} each
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                              className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-on-surface font-bold hover:bg-surface-container-high"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-bold text-xs">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                              className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-on-surface font-bold hover:bg-surface-container-high"
                            >
                              +
                            </button>
                            <button
                              onClick={() => handleRemoveQuoteItem(item.id)}
                              className="ml-2 text-outline hover:text-error text-xs"
                              title="Remove item"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-surface-container space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-on-surface-variant">Subtotal Estimate:</span>
                        <strong className="font-display text-lg text-on-surface">
                          ₹{totalQuoteAmount.toLocaleString()}
                        </strong>
                      </div>
                      <p className="text-[11px] text-on-surface-variant">
                        * Final formal invoice includes eligible institutional volume discounts, 18% GST input credits, and complimentary teacher training.
                      </p>
                    </div>

                    <div className="pt-2 flex justify-between gap-3">
                      <button
                        onClick={() => {
                          setIsQuoteModalOpen(false);
                          handleNavigate('book-a-demo');
                        }}
                        className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface font-display text-xs font-bold hover:bg-surface-container-high"
                      >
                        Book Live Demo First
                      </button>
                      <button
                        onClick={() => setQuoteSuccessMsg(true)}
                        className="px-6 py-2.5 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container font-display text-xs font-bold shadow-md cursor-pointer flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        <span>Send Institutional RFQ</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
