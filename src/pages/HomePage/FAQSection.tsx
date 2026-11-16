import React from 'react';
import { FAQS_DATA } from '../../data/faqs.ts';

interface FAQSectionProps {
  openFaqIndex: number | null;
  onToggle: (index: number) => void;
}

export function FAQSection({ openFaqIndex, onToggle }: FAQSectionProps) {
  return (
    <section className="w-full py-20 bg-surface-container-low border-t border-surface-container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <div className="text-center flex flex-col gap-2">
          <span className="font-display text-xs font-bold text-secondary tracking-widest uppercase">Institutional Queries</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">Frequently Asked Questions</h2>
          <p className="text-base text-on-surface-variant">Everything school administrators and STEM coordinators need to know before initiating a lab rollout.</p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => onToggle(idx)}
                className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container cursor-pointer transition-all hover:border-secondary/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-base font-bold text-on-surface">{faq.question}</h3>
                  <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    expand_more
                  </span>
                </div>
                {isOpen && <div className="pt-3 text-on-surface-variant text-sm leading-relaxed border-t border-surface-container-low mt-3">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
