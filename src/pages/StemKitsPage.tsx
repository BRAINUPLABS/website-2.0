import React, { useState, useMemo } from 'react';
import { STEM_KITS_DATA, PRINTED_RESOURCES } from '../data/kits.ts';
import { StemKit, NavigationPath } from '../types.ts';

interface StemKitsPageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
  onAddToQuote: (kit: StemKit | { id: string; name: string; price: number }) => void;
  comparedKits: StemKit[];
  onToggleCompare: (kit: StemKit) => void;
  onClearCompare: () => void;
  initialFilter?: string;
}

export const StemKitsPage: React.FC<StemKitsPageProps> = ({
  onNavigate,
  onAddToQuote,
  comparedKits,
  onToggleCompare,
  onClearCompare,
  initialFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomainPill, setSelectedDomainPill] = useState<string>(initialFilter || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'grade-asc' | 'grade-desc' | 'price-asc' | 'price-desc'>('featured');
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(50000);
  const [isCompareDrawerExpanded, setIsCompareDrawerExpanded] = useState<boolean>(true);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [rfqForm, setRfqForm] = useState({
    institutionName: '',
    contactPerson: '',
    workEmail: '',
    phoneNumber: '',
    expectedStudents: '100 - 300 Students',
    primaryInterest: 'Labs on Table™ 10-Station Multi-Pack',
    notes: ''
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleGradeToggle = (grade: string) => {
    setSelectedGrades((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
    );
  };

  const handleDomainToggle = (domain: string) => {
    setSelectedDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDomainPill('all');
    setSelectedGrades([]);
    setSelectedDomains([]);
    setMaxPrice(50000);
    setSortBy('featured');
  };

  // Filter & sort logic
  const filteredKits = useMemo(() => {
    return STEM_KITS_DATA.filter((kit) => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQuery =
          kit.name.toLowerCase().includes(query) ||
          kit.description.toLowerCase().includes(query) ||
          kit.mcu.toLowerCase().includes(query) ||
          kit.sensors.toLowerCase().includes(query) ||
          kit.platform.toLowerCase().includes(query) ||
          kit.domain.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // Domain pill filter
      if (selectedDomainPill !== 'all') {
        if (selectedDomainPill === 'Institutional' && kit.domain !== 'Institutional') return false;
        if (selectedDomainPill !== 'Institutional' && kit.domain !== selectedDomainPill) return false;
      }

      // Checkbox grades filter
      if (selectedGrades.length > 0 && !selectedGrades.includes(kit.grade)) {
        return false;
      }

      // Checkbox domains filter
      if (selectedDomains.length > 0 && !selectedDomains.includes(kit.domain)) {
        return false;
      }

      // Price filter
      if (kit.price > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'grade-asc') return a.grade.localeCompare(b.grade);
      if (sortBy === 'grade-desc') return b.grade.localeCompare(a.grade);
      return 0; // featured default
    });
  }, [searchQuery, selectedDomainPill, selectedGrades, selectedDomains, maxPrice, sortBy]);

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full pb-32 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-primary-container text-surface-bright px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-secondary/30 animate-bounce">
          <span className="material-symbols-outlined text-tertiary-fixed text-[22px]">check_circle</span>
          <span className="font-label-lg text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Editorial Page Title & Quick Metric Strip */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-8 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span className="font-display text-xs font-bold uppercase tracking-wider">
                NEP 2020 & ATL Aligned Hardware
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
              Next-Gen STEM & Robotics Catalog
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Modular, classroom-grade engineering hardware. Built specifically for exploratory learning from foundational snap-circuits to embedded neural vision systems.
            </p>
          </div>

          {/* Quick stats bento tile */}
          <div className="flex items-center gap-4 sm:gap-6 p-4 rounded-2xl bg-surface-container-low border border-surface-container shadow-sm">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-secondary">42,000+</span>
              <span className="text-xs text-on-surface-variant">Classroom Units Deployed</span>
            </div>
            <div className="h-8 w-px bg-outline-variant"></div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-on-surface">100%</span>
              <span className="text-xs text-on-surface-variant">Safe & Reusable ABS</span>
            </div>
            <div className="h-8 w-px bg-outline-variant"></div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-emerald-600">K-12</span>
              <span className="text-xs text-on-surface-variant">Pedagogic Pathway</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Search & Utility Header */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8">
        <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl shadow-sm border border-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search kits, sensors, ESP32, Python, EEG, OpenCV..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'Robotics', label: 'Robotics' },
              { id: 'AI & Vision', label: 'AI & Vision' },
              { id: 'IoT', label: 'IoT & Automation' },
              { id: 'Institutional', label: 'School Multi-Packs' }
            ].map((pill) => {
              const isActive = selectedDomainPill === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setSelectedDomainPill(pill.id)}
                  className={`px-4 py-2 rounded-full font-display text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>

          {/* View & Sorting */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <span className="text-xs text-on-surface-variant">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-surface-container-low font-display text-xs font-semibold text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary cursor-pointer"
            >
              <option value="featured">Featured Curricula</option>
              <option value="grade-asc">Grade (Low to High)</option>
              <option value="grade-desc">Grade (High to Low)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Main Catalog Area: Sidebar + Grid */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Multi-Faceted Filter Sidebar (col-span-3) */}
          <aside className="lg:col-span-3 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-1 border-b border-surface-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">tune</span>
                <h2 className="font-display text-base font-bold text-on-surface">Filters</h2>
              </div>
              <button
                onClick={handleResetFilters}
                className="font-display text-xs text-secondary hover:underline cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* Grade Level Facet */}
            <div className="space-y-2">
              <label className="font-display text-xs font-bold text-on-surface uppercase tracking-wider block">
                Grade Level
              </label>
              <div className="space-y-2">
                {[
                  { value: 'Grade 1-3', label: 'Grade 1–3 (Ages 6–8)' },
                  { value: 'Grade 4-6', label: 'Grade 4–6 (Ages 9–11)' },
                  { value: 'Grade 7-9', label: 'Grade 7–9 (Ages 12–14)' },
                  { value: 'Grade 10-12', label: 'Grade 10–12 (Ages 15–18)' },
                  { value: 'Classroom Multi-Pack', label: 'Institutional (All Grades)' }
                ].map((item) => (
                  <label key={item.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedGrades.includes(item.value)}
                      onChange={() => handleGradeToggle(item.value)}
                      className="w-4 h-4 rounded text-secondary focus:ring-secondary accent-secondary cursor-pointer"
                    />
                    <span className="text-sm text-on-surface-variant group-hover:text-on-surface">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Domain Facet */}
            <div className="space-y-2 pt-2 border-t border-surface-container">
              <label className="font-display text-xs font-bold text-on-surface uppercase tracking-wider block">
                Domain
              </label>
              <div className="space-y-2">
                {[
                  { value: 'Robotics', label: 'Robotics & Mechanics' },
                  { value: 'IoT', label: 'IoT & Smart Systems' },
                  { value: 'AI & Vision', label: 'AI & Neural Interfaces' },
                  { value: 'Electronics', label: 'Electronics & Breadboarding' },
                  { value: 'Aerospace', label: 'Aerospace & Drones' }
                ].map((item) => (
                  <label key={item.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedDomains.includes(item.value)}
                      onChange={() => handleDomainToggle(item.value)}
                      className="w-4 h-4 rounded text-secondary focus:ring-secondary accent-secondary cursor-pointer"
                    />
                    <span className="text-sm text-on-surface-variant group-hover:text-on-surface">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Curriculum Compatibility Facet */}
            <div className="space-y-2 pt-2 border-t border-surface-container">
              <label className="font-display text-xs font-bold text-on-surface uppercase tracking-wider block">
                Board Alignment
              </label>
              <div className="flex flex-wrap gap-1.5">
                {['CBSE Skill Sub.', 'ICSE Robotics', 'ATL NITI Aayog', 'IB MYP STEM'].map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-display text-xs font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-2 pt-2 border-t border-surface-container">
              <div className="flex items-center justify-between">
                <label className="font-display text-xs font-bold text-on-surface uppercase tracking-wider">
                  Max Unit Price
                </label>
                <span className="font-display text-xs font-bold text-secondary">
                  ₹{maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-secondary cursor-pointer"
              />
              <div className="flex justify-between text-xs text-on-surface-variant">
                <span>₹2,000</span>
                <span>₹50,000+</span>
              </div>
            </div>

            {/* Institutional Pilot Note */}
            <div className="p-3.5 rounded-xl bg-surface-container-low text-on-surface-variant flex items-start gap-2.5 border border-surface-container">
              <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                school
              </span>
              <p className="text-xs leading-relaxed">
                Schools ordering 10+ kits receive complimentary 2-day on-campus faculty certification and replacement reserve kits.
              </p>
            </div>
          </aside>

          {/* Grade-wise Kit Showcase Grid (col-span-9) */}
          <main className="lg:col-span-9 flex flex-col gap-6">
            {/* Live count & Active badges */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-on-surface-variant">
                Showing{' '}
                <span className="font-bold text-on-surface">{filteredKits.length}</span>{' '}
                lab kits tailored for school environments
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-display text-xs font-semibold text-on-surface-variant">
                  In Stock for Batch Dispatch
                </span>
              </div>
            </div>

            {filteredKits.length === 0 ? (
              <div className="bg-surface-container-lowest rounded-2xl p-12 text-center border border-dashed border-outline-variant space-y-4">
                <span className="material-symbols-outlined text-5xl text-outline">search_off</span>
                <h3 className="font-display text-xl font-bold text-on-surface">No kits match your filters</h3>
                <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                  Try adjusting the grade level, maximum price range, or clearing the search terms.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary font-display text-xs font-bold shadow-sm"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredKits.map((kit) => {
                  const isCompared = comparedKits.some((c) => c.id === kit.id);

                  if (kit.isMultiPack) {
                    return (
                      <article
                        key={kit.id}
                        className="md:col-span-2 bg-gradient-to-br from-surface-container-lowest to-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between gap-6 shadow-sm hover:shadow-md border border-secondary/20 transition-all"
                      >
                        <div className="space-y-4 md:max-w-xl">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full font-display text-xs font-bold bg-secondary text-on-secondary shadow-sm">
                              Institutional Grade
                            </span>
                            <span className="px-2.5 py-1 rounded-full font-display text-xs font-bold bg-surface-container-high text-on-surface flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px] text-secondary">inventory_2</span>
                              {kit.packDetails}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-display text-2xl font-extrabold text-on-surface tracking-tight">
                              {kit.name}
                            </h3>
                            <p className="text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                              {kit.description}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-on-surface-variant pt-2">
                            {kit.features.map((feat, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] text-secondary">
                                  check_circle
                                </span>
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Side column with image and pricing CTA */}
                        <div className="flex flex-col justify-between w-full md:w-80 shrink-0 bg-surface-container-lowest p-4 rounded-xl border border-surface-container space-y-4">
                          <div className="w-full h-44 rounded-lg overflow-hidden bg-surface-container-low">
                            <img
                              src={kit.imageUrl}
                              alt={kit.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-baseline justify-between">
                              <span className="font-display text-2xl font-bold text-on-surface">
                                ₹{kit.price.toLocaleString()}
                              </span>
                              {kit.originalPrice && (
                                <span className="text-xs line-through text-outline">
                                  ₹{kit.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-on-surface-variant">
                              Includes school institutional licensing and master training pack.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => {
                                onAddToQuote(kit);
                                showToast(`Added "${kit.name}" to Institutional Quote`);
                              }}
                              className="w-full py-2.5 px-4 rounded-xl font-display text-xs font-bold bg-secondary text-on-secondary hover:bg-secondary-container transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[18px]">domain_add</span>
                              <span>Request Institutional Quote</span>
                            </button>
                            <button
                              onClick={() => onToggleCompare(kit)}
                              className={`w-full py-2 px-3 rounded-xl font-display text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                                isCompared
                                  ? 'bg-secondary-fixed text-on-secondary-fixed'
                                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                              }`}
                            >
                              <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
                              <span>{isCompared ? 'Remove from Compare' : 'Compare Specs'}</span>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  }

                  return (
                    <article
                      key={kit.id}
                      className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md border border-surface-container transition-all"
                    >
                      <div className="space-y-4">
                        <div className="relative w-full h-52 rounded-xl overflow-hidden bg-surface-container-low">
                          <img
                            src={kit.imageUrl}
                            alt={kit.name}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-3 left-3 px-3 py-1 rounded-full font-display text-xs font-bold bg-secondary text-on-secondary shadow-sm">
                            {kit.grade}
                          </span>
                          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full font-display text-xs font-semibold bg-surface-container-lowest text-on-surface shadow-sm flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-secondary">
                              {kit.domain === 'Robotics' ? 'smart_toy' : kit.domain === 'IoT' ? 'wifi' : 'visibility'}
                            </span>
                            {kit.domain}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-on-surface-variant mb-1">
                            <span className="font-display text-xs font-bold text-secondary">
                              {kit.categoryLabel}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-amber-500 fill-1">
                                star
                              </span>
                              <span className="font-bold">{kit.rating}</span>
                              <span className="text-on-surface-variant">({kit.reviewsCount})</span>
                            </div>
                          </div>
                          <h3 className="font-display text-xl font-bold text-on-surface tracking-tight">
                            {kit.name}
                          </h3>
                          <p className="text-xs text-on-surface-variant mt-1.5 line-clamp-2 leading-relaxed">
                            {kit.description}
                          </p>
                        </div>

                        {/* Feature Bullets */}
                        <ul className="space-y-1.5 text-xs text-on-surface-variant">
                          {kit.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                                check_circle
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 mt-6 bg-surface-container-low/50 -mx-6 -mb-6 p-6 rounded-b-2xl border-t border-surface-container flex flex-col gap-3">
                        <div className="flex items-baseline justify-between">
                          <div>
                            <span className="font-display text-2xl font-extrabold text-on-surface">
                              ₹{kit.price.toLocaleString()}
                            </span>
                            <span className="text-xs text-on-surface-variant ml-1.5">/ kit</span>
                          </div>
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-tertiary-fixed text-on-tertiary-fixed">
                            In Stock
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => onToggleCompare(kit)}
                            className={`py-2 px-3 rounded-xl font-display text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                              isCompared
                                ? 'bg-secondary-fixed text-on-secondary-fixed'
                                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
                            <span>{isCompared ? 'Compared' : 'Compare'}</span>
                          </button>
                          <button
                            onClick={() => {
                              onAddToQuote(kit);
                              showToast(`Added "${kit.name}" to quote`);
                            }}
                            className="py-2 px-3 rounded-xl font-display text-xs font-bold bg-primary text-on-primary hover:bg-primary-container transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[16px]">request_quote</span>
                            <span>Add to Quote</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Coding Books & Curriculum Guides Add-on Section */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-secondary font-display text-xs font-bold uppercase tracking-wide">
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              <span>Printed Classroom Resources</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
              Workbooks, Guides & Handbooks
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-md">
            Spiral-bound, spill-proof bench companions created by curriculum directors to guide learners step-by-step through real build cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRINTED_RESOURCES.map((book) => (
            <div
              key={book.id}
              className="bg-surface-container-lowest p-6 rounded-2xl flex gap-4 items-start shadow-sm hover:shadow-md border border-surface-container transition-all"
            >
              <div className="w-20 h-28 shrink-0 rounded-lg bg-surface-container-low overflow-hidden shadow-sm">
                <img src={book.imageUrl} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between h-full space-y-2">
                <div>
                  <span className="font-display text-xs font-bold text-secondary">{book.grade}</span>
                  <h4 className="font-display text-base font-bold text-on-surface mt-0.5 leading-tight">
                    {book.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{book.pages}</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-display text-base font-bold text-on-surface">
                    ₹{book.price}
                  </span>
                  <button
                    onClick={() => {
                      onAddToQuote({ id: book.id, name: book.title, price: book.price });
                      showToast(`Added "${book.title}" to Quote`);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors font-display text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">add</span>
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bulk School Inquiry Callout Banner */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-16">
        <div className="bg-primary-container text-surface-bright rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="space-y-3 max-w-2xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 text-surface-bright text-xs font-bold font-display">
              <span className="material-symbols-outlined text-[16px]">account_balance</span>
              <span>Institutional Procurement & ATL Tenders</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-surface-bright leading-tight">
              Ordering for 50+ students or equipping a full innovation lab?
            </h2>
            <p className="text-sm sm:text-base text-surface-dim leading-relaxed">
              Get institutional volume discounts up to 35%, complimentary teacher master certification, annual parts replenishment warranty, and official GST invoices tailored for school management boards.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto z-10 shrink-0">
            <button
              onClick={() => setIsRfqModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-secondary text-on-secondary hover:bg-secondary-container transition-all font-display text-xs font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">assignment</span>
              <span>Instant Institutional RFQ</span>
            </button>
            <button
              onClick={() => onNavigate('book-a-demo')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-surface-bright transition-all font-display text-xs font-bold flex items-center justify-center gap-2 border border-surface-bright/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Talk to STEM Advisor</span>
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Comparison Drawer (Slides up when 1+ kits selected) */}
      {comparedKits.length > 0 && (
        <aside className="fixed bottom-0 inset-x-0 bg-surface-container-lowest shadow-[0_-8px_30px_rgba(19,27,46,0.2)] z-40 border-t border-surface-container transition-transform duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            {/* Drawer Header Bar */}
            <div className="flex items-center justify-between border-b border-surface-container-low pb-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px]">compare_arrows</span>
                <h3 className="font-display text-sm font-bold text-on-surface">
                  Kit Spec Comparison{' '}
                  <span className="text-secondary font-display text-xs ml-1 font-bold">
                    ({comparedKits.length}/3 selected)
                  </span>
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClearCompare}
                  className="font-display text-xs text-on-surface-variant hover:text-on-surface cursor-pointer"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsCompareDrawerExpanded(!isCompareDrawerExpanded)}
                  className="p-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isCompareDrawerExpanded ? 'expand_more' : 'expand_less'}
                  </span>
                </button>
              </div>
            </div>

            {/* Drawer Content: Comparative Matrix */}
            {isCompareDrawerExpanded && (
              <div className="pt-3 pb-2 overflow-x-auto max-h-80 overflow-y-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-on-surface border-b border-surface-container">
                      <th className="w-44 pb-2 font-display font-bold text-on-surface-variant">Specification</th>
                      {[0, 1, 2].map((idx) => {
                        const kit = comparedKits[idx];
                        return (
                          <th key={idx} className="w-1/3 pb-2 font-display font-bold text-on-surface">
                            {kit ? (
                              <div className="flex items-center justify-between pr-2">
                                <span className="truncate">{kit.name}</span>
                                <button
                                  onClick={() => onToggleCompare(kit)}
                                  className="text-on-surface-variant hover:text-error text-xs cursor-pointer ml-2"
                                  title="Remove"
                                >
                                  ×
                                </button>
                              </div>
                            ) : (
                              <span className="text-outline italic">Empty Slot</span>
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-low text-on-surface">
                    <tr>
                      <td className="py-2 font-semibold text-on-surface-variant">Target Grade</td>
                      {[0, 1, 2].map((idx) => (
                        <td key={idx} className="py-2">{comparedKits[idx]?.grade || '—'}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-on-surface-variant">Microcontroller / Core</td>
                      {[0, 1, 2].map((idx) => (
                        <td key={idx} className="py-2">{comparedKits[idx]?.mcu || '—'}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-on-surface-variant">Sensors Included</td>
                      {[0, 1, 2].map((idx) => (
                        <td key={idx} className="py-2">{comparedKits[idx]?.sensors || '—'}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-on-surface-variant">Coding Platforms</td>
                      {[0, 1, 2].map((idx) => (
                        <td key={idx} className="py-2">{comparedKits[idx]?.platform || '—'}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-on-surface-variant">Curriculum Hours</td>
                      {[0, 1, 2].map((idx) => (
                        <td key={idx} className="py-2">{comparedKits[idx]?.hours || '—'}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-on-surface-variant">Unit Price</td>
                      {[0, 1, 2].map((idx) => (
                        <td key={idx} className="py-2 font-bold text-secondary">
                          {comparedKits[idx] ? `₹${comparedKits[idx].price.toLocaleString()}` : '—'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </aside>
      )}

      {/* Institutional RFQ Modal */}
      {isRfqModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-surface-container relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsRfqModalOpen(false);
                setRfqSubmitted(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              ✕
            </button>

            {rfqSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl">task_alt</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface">
                  Institutional RFQ Submitted!
                </h3>
                <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                  Our institutional supply director has received your inquiry for{' '}
                  <strong className="text-on-surface">{rfqForm.institutionName || 'your school'}</strong>.
                  We have prepared an official quote with GST breakdown and sent it to{' '}
                  <strong className="text-on-surface">{rfqForm.workEmail}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-surface-container-low text-xs text-left space-y-1.5 border border-surface-container">
                  <p><strong>Quote Reference:</strong> BUL-RFQ-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</p>
                  <p><strong>Configured Pack:</strong> {rfqForm.primaryInterest}</p>
                  <p><strong>Expected Batch:</strong> {rfqForm.expectedStudents}</p>
                  <p><strong>Consultant:</strong> Senior Academic STEM Architect assigned</p>
                </div>
                <button
                  onClick={() => {
                    setIsRfqModalOpen(false);
                    setRfqSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-display text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-secondary font-display text-xs font-bold uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[16px]">domain</span>
                    <span>School Procurement Portal</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-on-surface">
                    Instant Institutional RFQ
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Generate an official quotation formatted for school governing bodies & trust approvals.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      School / Institution Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Delhi Public School, R.K. Puram"
                      value={rfqForm.institutionName}
                      onChange={(e) => setRfqForm({ ...rfqForm, institutionName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Contact Person & Designation *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Dr. Rajesh Sharma, Principal"
                      value={rfqForm.contactPerson}
                      onChange={(e) => setRfqForm({ ...rfqForm, contactPerson: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Official Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="principal@dpsrkp.edu.in"
                      value={rfqForm.workEmail}
                      onChange={(e) => setRfqForm({ ...rfqForm, workEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
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
                      value={rfqForm.phoneNumber}
                      onChange={(e) => setRfqForm({ ...rfqForm, phoneNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Student Batch Size
                    </label>
                    <select
                      value={rfqForm.expectedStudents}
                      onChange={(e) => setRfqForm({ ...rfqForm, expectedStudents: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    >
                      <option>Under 100 Students</option>
                      <option>100 - 300 Students</option>
                      <option>300 - 800 Students</option>
                      <option>800+ Students (Full School Adoption)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Primary Kit Bundle of Interest
                    </label>
                    <select
                      value={rfqForm.primaryInterest}
                      onChange={(e) => setRfqForm({ ...rfqForm, primaryInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    >
                      <option>Labs on Table™ 10-Station Multi-Pack (Classroom Ready)</option>
                      <option>Grade-Wise Customized Kit Assortment (Grades 1-12)</option>
                      <option>RoboSpark Pioneer Kit (Batch of 25+)</option>
                      <option>SensorCraft IoT Explorer (Batch of 25+)</option>
                      <option>CyberBotics Autonomous Rover (Batch of 25+)</option>
                      <option>NeuroVision AI & BCI Suite (Batch of 15+)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specify if ATL grant funding, timetable requirements, or trainer deputation is needed..."
                      value={rfqForm.notes}
                      onChange={(e) => setRfqForm({ ...rfqForm, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-sm border border-surface-container focus:ring-2 focus:ring-secondary outline-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsRfqModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-on-surface-variant hover:text-on-surface text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container transition-all font-display text-xs font-bold shadow-md cursor-pointer flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Generate & Send Formal RFQ</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
