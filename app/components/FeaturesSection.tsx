'use client';

import React from 'react';
import Image from 'next/image';

/* ── Clean In-App Visual Features ── */

const visualFeatures = [
  {
    imageSrc: '/features/card-category-breakdown.png',
    imageAlt: 'Finsync Category Breakdown Donut Chart showing ₹68,504 total and 76.4% Loan and EMI',
    badge: 'Expense Distribution',
    badgeColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    title: 'Category Breakdown & Donut Allocation',
    description: 'Gain instant clarity into where your money flows with color-coded interactive donut charts. Identify top expense categories like Loan & EMI at a glance with exact percentage shares and instant category drill-downs.',
    bullets: [
      'Visual breakdown with multi-category segmenting',
      'Top-spend category spotlight (e.g. 76.4% Loan & EMI)',
      'Customizable financial billing cycle start dates',
    ],
  },
  {
    imageSrc: '/features/card-monthly-comparison.png',
    imageAlt: 'Finsync Monthly Comparison Spending Timeline Graph with 2.2x zoom',
    badge: 'Cash Flow Velocity',
    badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    title: 'Spending Timeline & Spike Analysis',
    description: 'Overlay cumulative day-by-day cash flow between current and previous months on a smooth timeline curve. Pinpoint spending spikes, analyze mid-month anomalies, and zoom up to 2.2x into specific dates.',
    bullets: [
      'Comparative trajectory curves (This Month vs Prev Month)',
      'Spike and high-value transaction detection',
      'Pinch-to-zoom 2.2x granularity with instant reset',
    ],
  },
  {
    imageSrc: '/features/card-statistics.png',
    imageAlt: 'Finsync Statistics Bar Chart comparing Sep 2026 ₹87,078 vs Oct 2026 ₹68,504',
    badge: 'Historical Trends',
    badgeColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    title: 'Monthly Averages & Comparative Stats',
    description: 'Track long-term financial health with automated monthly averages and high-contrast dual bar graphs. Switch between historical cycles in one tap to measure your savings discipline.',
    bullets: [
      'Automated running monthly average benchmark (₹77,791)',
      'Clean side-by-side bar chart comparison',
      'One-tap selection between historical billing cycles',
    ],
  },
  {
    imageSrc: '/features/card-appearance.png',
    imageAlt: 'Finsync Appearance Mode Settings with Auto, Light, and Dark options',
    badge: 'Design & Comfort',
    badgeColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    title: 'Adaptive Appearance & OLED Dark Mode',
    description: 'Tailor your visual experience with a refined interface designed for all lighting conditions. Switch effortlessly between system Auto-tracking, high-contrast Light mode, or battery-saving deep Dark mode.',
    bullets: [
      'Instant toggle between Auto, Light, and Dark modes',
      'Battery-saving OLED black palettes for night usage',
      'High contrast legibility adhering to accessibility standards',
    ],
  },
];

/* ── Standard Capabilities Data ── */

const coreCapabilities = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: 'bg-indigo-500/10',
    iconBorder: 'border-indigo-500/20',
    iconColor: 'text-indigo-500',
    title: 'Income & Expense Logs',
    description: 'Log daily transactions with custom tags, categories, notes, payment types, and customizable financial cycle start dates.',
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
    iconColor: 'text-purple-500',
    title: 'Category Budget Limits',
    description: 'Set monthly spending targets by category with real-time overspending alerts, budget warning modals, and progress bars.',
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    iconBg: 'bg-emerald-500/10',
    iconBorder: 'border-emerald-500/20',
    iconColor: 'text-emerald-500',
    title: 'Lending & Borrowing',
    description: 'Track personal loans, debts owed by friends or colleagues, partial settlements, invoice generation, and due date reminders.',
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    iconColor: 'text-blue-500',
    title: 'JSON & CSV Export',
    description: 'Export and backup complete ledgers in open standard formats locally anytime with zero vendor lock-in.',
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    iconBg: 'bg-rose-500/10',
    iconBorder: 'border-rose-500/20',
    iconColor: 'text-rose-500',
    title: '100% Privacy & Data Control',
    description: 'Built-in one-tap "Clear All Data" feature to immediately wipe all records from your device whenever you choose.',
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: 'bg-amber-500/10',
    iconBorder: 'border-amber-500/20',
    iconColor: 'text-amber-500',
    title: 'Lightning-Fast Offline Engine',
    description: 'Optimized local SQLite storage provides zero-latency interactions without waiting for server responses or network connectivity.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 py-16 sm:py-24 border-b" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: 'var(--badge-bg)', borderColor: 'var(--badge-border)', color: 'var(--badge-text)', border: '1px solid var(--badge-border)' }}>
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Real In-App Visual Experience
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-title)' }}>
            Engineered for Simplicity & Precision
          </h2>
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Experience an intuitive personal accounting suite designed to work entirely offline on your smartphone with rich financial visualizations, spend velocity charts, and personalized comfort.
          </p>
        </div>

        {/* ── Visual Features 2x2 Showcase Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {visualFeatures.map((f, idx) => (
            <div
              key={idx}
              className="app-card app-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border overflow-hidden relative"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border ${f.badgeColor}`}>
                    {f.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Live In-App UI</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5" style={{ color: 'var(--text-title)' }}>
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  {f.description}
                </p>

                {/* Clean In-App Screenshot Card Display */}
                <div 
                  className="rounded-2xl p-4 sm:p-6 border flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-[1.01]"
                  style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}
                >
                  <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 border border-black/5 bg-white">
                    <Image
                      src={f.imageSrc}
                      alt={f.imageAlt}
                      width={640}
                      height={480}
                      className="w-full h-auto object-contain block select-none pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="mt-6 pt-5 border-t space-y-2.5" style={{ borderColor: 'var(--card-border)' }}>
                {f.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm" style={{ color: 'var(--text-body)' }}>
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Additional Core Capabilities Grid ── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-title)' }}>
            Comprehensive Financial Toolkit
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
            Every essential feature built directly into your device with zero cloud tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {coreCapabilities.map((c, cIdx) => (
            <div key={cIdx} className="app-card app-card-hover p-5 sm:p-6 rounded-2xl sm:rounded-3xl border">
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${c.iconBg} border ${c.iconBorder} flex items-center justify-center ${c.iconColor} mb-4`}>
                {c.icon}
              </div>
              <h4 className="text-base sm:text-lg font-bold mb-1.5" style={{ color: 'var(--text-title)' }}>
                {c.title}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {c.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
