import React, { useState } from 'react';
import { DemoBookingState, NavigationPath } from '../types.ts';

interface BookDemoPageProps {
  onNavigate: (path: NavigationPath, subTab?: string) => void;
}

const inputClass = 'w-full rounded-xl border border-surface-container bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20';

export const BookDemoPage: React.FC<BookDemoPageProps> = ({ onNavigate }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [formData, setFormData] = useState<DemoBookingState>({
    enquiryType: 'School Lab Setup Consultation', schoolName: '', cityState: '', affiliationBoard: 'CBSE',
    contactName: '', contactRole: 'Principal / Director', contactEmail: '', contactPhone: '',
    communicationChannel: 'WhatsApp & Phone', studentStrength: '500 - 1,200 Students',
    currentStatus: 'Upgrading legacy computer lab into active STEM space',
    demoModality: 'Live Interactive Virtual Walkthrough (45 mins)',
    demoDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    timeSlot: '10:00 AM - 11:30 AM (IST)', specialNotes: '', agreedToTerms: false,
  });

  const update = <K extends keyof DemoBookingState>(key: K, value: DemoBookingState[K]) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setBookingId(`BUL-2026-DEMO-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsBooked(true);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  if (isBooked) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-surface-container bg-surface-container-lowest p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-fixed text-secondary">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
          </div>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-secondary">Demo request received</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-on-surface">We’ll be in touch shortly.</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-on-surface-variant">Your demo request for {formData.schoolName} has been recorded. An advisor will confirm the time and format using the details you provided.</p>
          <div className="mx-auto mt-6 max-w-sm rounded-xl bg-surface-container-low p-4 text-left text-sm">
            <p><strong>Reference:</strong> {bookingId}</p>
            <p className="mt-1"><strong>Requested slot:</strong> {formData.demoDate}, {formData.timeSlot}</p>
          </div>
          <button onClick={() => onNavigate('home')} className="mt-7 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-on-primary">Return home</button>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full pb-20">
      <section className="border-b border-surface-container bg-surface-container-low py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-secondary">Book a free consultation</p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">Schedule your STEM lab demonstration</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-on-surface-variant">Tell us a little about your school and preferred time. We’ll tailor a 45-minute consultation to your needs.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <form onSubmit={submit} className="space-y-6 lg:col-span-8" aria-label="Book a STEM lab demonstration">
          <FormSection title="School details" description="Help us prepare the right demonstration for your campus.">
            <Field label="School name" required><input required value={formData.schoolName} onChange={(e) => update('schoolName', e.target.value)} className={inputClass} /></Field>
            <Field label="City and state" required><input required value={formData.cityState} onChange={(e) => update('cityState', e.target.value)} className={inputClass} placeholder="e.g. Bengaluru, Karnataka" /></Field>
            <Field label="Board affiliation"><select value={formData.affiliationBoard} onChange={(e) => update('affiliationBoard', e.target.value)} className={inputClass}><option>CBSE</option><option>ICSE</option><option>State Board</option><option>Cambridge / IGCSE</option><option>IB</option></select></Field>
            <Field label="Student strength"><select value={formData.studentStrength} onChange={(e) => update('studentStrength', e.target.value)} className={inputClass}><option>Under 200 Students</option><option>200 - 500 Students</option><option>500 - 1,200 Students</option><option>1,200+ Students (Full School K-12)</option></select></Field>
          </FormSection>

          <FormSection title="Your contact details" description="We’ll use these details only to coordinate your demonstration.">
            <Field label="Your name" required><input required value={formData.contactName} onChange={(e) => update('contactName', e.target.value)} className={inputClass} autoComplete="name" /></Field>
            <Field label="Role"><select value={formData.contactRole} onChange={(e) => update('contactRole', e.target.value)} className={inputClass}><option>Principal / Director</option><option>Academic Coordinator</option><option>School Trustee</option><option>STEM / IT Head</option></select></Field>
            <Field label="Email address" required><input required type="email" value={formData.contactEmail} onChange={(e) => update('contactEmail', e.target.value)} className={inputClass} autoComplete="email" /></Field>
            <Field label="Phone number" required><input required type="tel" value={formData.contactPhone} onChange={(e) => update('contactPhone', e.target.value)} className={inputClass} autoComplete="tel" /></Field>
          </FormSection>

          <FormSection title="Demo preferences" description="Choose a convenient slot. We’ll confirm availability before the session.">
            <Field label="Demo format"><select value={formData.demoModality} onChange={(e) => update('demoModality', e.target.value)} className={inputClass}><option>Live Interactive Virtual Walkthrough (45 mins)</option><option>On-campus STEM lab consultation</option></select></Field>
            <Field label="Preferred date" required><input required type="date" value={formData.demoDate} onChange={(e) => update('demoDate', e.target.value)} className={inputClass} /></Field>
            <Field label="Preferred time"><select value={formData.timeSlot} onChange={(e) => update('timeSlot', e.target.value)} className={inputClass}><option>10:00 AM - 11:30 AM (IST)</option><option>11:30 AM - 01:00 PM (IST)</option><option>02:00 PM - 03:30 PM (IST)</option><option>04:00 PM - 05:30 PM (IST)</option></select></Field>
            <Field label="What would you like to discuss?" full><textarea rows={4} value={formData.specialNotes} onChange={(e) => update('specialNotes', e.target.value)} className={inputClass} placeholder="For example: teacher training, robotics kits, lab design, or curriculum alignment." /></Field>
          </FormSection>

          <div className="rounded-2xl border border-surface-container bg-surface-container-lowest p-6">
            <label className="mb-6 flex cursor-pointer items-start gap-3 text-sm text-on-surface-variant"><input required type="checkbox" checked={formData.agreedToTerms} onChange={(e) => update('agreedToTerms', e.target.checked)} className="mt-0.5 h-4 w-4 accent-secondary" /><span>I represent my school and agree that Brain Up Labs may contact me to arrange this demonstration.</span></label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-on-primary shadow-md transition hover:bg-primary-container"><span className="material-symbols-outlined text-[18px]">calendar_today</span>Request demo</button>
          </div>
        </form>

        <aside className="space-y-5 lg:col-span-4">
          <InfoCard icon="schedule" title="What happens next"><p>We confirm your slot, learn about your goals, then give you a tailored live demonstration.</p></InfoCard>
          <InfoCard icon="support_agent" title="Prefer to talk now?"><p><a className="font-bold text-secondary hover:underline" href="tel:+918049281900">+91 80 4928 1900</a><br />Mon–Sat, 9:00 AM–6:30 PM IST</p></InfoCard>
          <InfoCard icon="mail" title="Email us"><a className="font-bold text-secondary hover:underline" href="mailto:schools@brainuplabs.com">schools@brainuplabs.com</a></InfoCard>
        </aside>
      </section>
    </div>
  );
};

function FormSection({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return <fieldset className="rounded-2xl border border-surface-container bg-surface-container-lowest p-6 sm:p-8"><legend className="sr-only">{title}</legend><h2 className="font-display text-xl font-bold text-on-surface">{title}</h2><p className="mt-1 text-sm text-on-surface-variant">{description}</p><div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div></fieldset>;
}

function Field({ label, required, full, children }: { label: string; required?: boolean; full?: boolean; children: React.ReactNode }) {
  return <label className={full ? 'sm:col-span-2' : ''}><span className="mb-1.5 block text-xs font-bold text-on-surface">{label}{required ? ' *' : ''}</span>{children}</label>;
}

function InfoCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return <div className="rounded-2xl border border-surface-container bg-surface-container-lowest p-6 shadow-sm"><div className="flex items-center gap-3"><span className="material-symbols-outlined rounded-xl bg-secondary-fixed p-2 text-secondary">{icon}</span><h2 className="font-display text-sm font-bold text-on-surface">{title}</h2></div><div className="mt-4 text-sm leading-relaxed text-on-surface-variant">{children}</div></div>;
}
