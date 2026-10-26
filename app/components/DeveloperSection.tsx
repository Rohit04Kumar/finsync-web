'use client';

import React from 'react';

/* ── Detail row data ── */

const details = [
  { label: 'Application Name:', value: 'Finsync - Expense Tracker', isCode: false, isLink: false, hasBorder: true },
  { label: 'Package Identifier:', value: 'com.rohit0497.expensetracker', isCode: true, isLink: false, hasBorder: true },
  { label: 'Developer & Grievance Officer:', value: 'Rohit Kumar', isCode: false, isLink: false, hasBorder: true },
  { label: 'Publisher / Brand:', value: 'Nurvi Solutions', isCode: false, isLink: false, hasBorder: true },
  { label: 'Support Email:', value: 'support.nurvisolutions@gmail.com', isCode: false, isLink: true, hasBorder: true },
  { label: 'Developer & Grievance Email:', value: 'rohit.rv536@gmail.com', isCode: false, isLink: true, hasBorder: true },
  { label: 'Grievance SLA:', value: 'Acknowledged within 24–48 hours; resolved within 15 days', isCode: false, isLink: false, hasBorder: false },
];

/* ── Detail row component ── */

interface DetailRowProps {
  label: string;
  value: string;
  isCode?: boolean;
  isLink?: boolean;
  hasBorder?: boolean;
}

function DetailRow({ label, value, isCode, isLink, hasBorder }: DetailRowProps) {
  let valueEl: React.ReactNode;

  if (isCode) {
    valueEl = (
      <span className="font-mono text-[11px] sm:text-xs px-2 py-0.5 rounded break-all font-semibold" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--code-text)', border: '1px solid var(--code-border)' }}>
        {value}
      </span>
    );
  } else if (isLink) {
    valueEl = (
      <a href={`mailto:${value}`} className="text-indigo-500 hover:underline font-mono break-all font-medium">
        {value}
      </a>
    );
  } else {
    valueEl = (
      <span className="font-semibold" style={{ color: 'var(--text-title)' }}>
        {value}
      </span>
    );
  }

  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between py-1.5 sm:py-2 gap-0.5 sm:gap-0 ${hasBorder ? 'border-b' : ''}`}
      style={hasBorder ? { borderColor: 'var(--card-border)' } : undefined}
    >
      <span className="font-medium" style={{ color: 'var(--text-muted)' }}>{label}</span>
      {isLink || isCode ? valueEl : (
        hasBorder ? valueEl : <span style={{ color: 'var(--text-body)' }}>{value}</span>
      )}
    </div>
  );
}

/* ── Main export ── */

export default function DeveloperSection() {
  return (
    <section id="developer" className="relative z-10 py-12 sm:py-16 border-t" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-center" style={{ color: 'var(--text-title)' }}>
            Developer & Compliance Transparency
          </h2>
          <div className="p-4 sm:p-6 rounded-2xl app-card space-y-3 sm:space-y-4 text-xs sm:text-sm">
            {details.map((d) => (
              <DetailRow key={d.label} {...d} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
