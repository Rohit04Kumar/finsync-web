'use client';

import React, { useState } from 'react';

/* ── Interactive JSON Sample ── */
const sampleJson = `{
  "schema": "finsync.backup.v1",
  "exportedAt": "2026-10-16T15:10:00Z",
  "appVersion": "1.3.1",
  "checksum": "sha256:8f2a9e4d...",
  "summary": {
    "transactions": 248,
    "categories": 12,
    "budgets": 6
  }
}`;

/* ── Sample CSV Rows ── */
const sampleCsvRows = [
  { date: '2026-10-16', category: 'Groceries', type: 'Expense', amount: '-$64.20', note: 'Whole Foods Market' },
  { date: '2026-10-15', category: 'Freelance', type: 'Income', amount: '+$1,250.00', note: 'Client Q4 Retainer' },
  { date: '2026-10-14', category: 'Utilities', type: 'Expense', amount: '-$85.00', note: 'Clean Energy Co' },
];

export default function CloudSyncShowcaseSection() {
  /* State for Card 2: Data Portability */
  const [activeExportTab, setActiveExportTab] = useState<'json' | 'csv' | 'restore'>('json');
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const handleSimulateExport = (type: string) => {
    setExportNotice(`Exported ${type.toUpperCase()} file successfully!`);
    setTimeout(() => setExportNotice(null), 3000);
  };

  return (
    <section id="backup-sync-features" className="relative z-10 py-16 sm:py-24 border-b" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: 'var(--badge-bg)', borderColor: 'var(--badge-border)', color: 'var(--badge-text)', border: '1px solid var(--badge-border)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Data Sovereignty & Direct Cloud Sync
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-title)' }}>
            Cloud Sync & Complete Data Portability
          </h2>
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Finsync gives you 100% control over your financial records. Enjoy direct, private synchronization to your Google Drive AppData folder or generate open standard JSON and CSV backups completely offline.
          </p>

          {/* Key Spec Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium border" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)', color: 'var(--text-body)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              Zero Intermediate Servers
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium border" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)', color: 'var(--text-body)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Google Drive Sandboxed (drive.appdata)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium border" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)', color: 'var(--text-body)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Open RFC 4180 CSV & JSON
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium border" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)', color: 'var(--text-body)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              100% Offline Capable
            </span>
          </div>
        </div>

        {/* ── Side-by-Side Redesigned Architectural Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">

          {/* ════════════════════════════════════════════════════════════════
              CARD 1: AUTOMATED GOOGLE DRIVE SYNC
              ════════════════════════════════════════════════════════════════ */}
          <div className="app-card app-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden border">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-500">Direct Cloud Sync</span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-title)' }}>
                      Automated Google Drive Sync
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 whitespace-nowrap">
                  OAuth 2.0 Sandboxed
                </span>
              </div>

              {/* Automated Sync Showcase Console */}
              <div className="rounded-2xl border p-4 sm:p-5 my-5 shadow-lg backdrop-blur-sm" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
                {/* Status Bar */}
                <div className="flex items-center justify-between border-b pb-3.5 mb-4" style={{ borderColor: 'var(--card-border)' }}>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--text-title)' }}>
                      Continuous Auto-Sync Active
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] px-2 py-0.5 rounded-md font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    drive.appdata
                  </div>
                </div>

                {/* Animated Direct-Tunnel Pipeline */}
                <div className="p-3.5 sm:p-4 rounded-xl border mb-4 bg-gradient-to-r from-indigo-500/[0.04] via-blue-500/[0.07] to-emerald-500/[0.04]" style={{ borderColor: 'var(--card-border)' }}>
                  <div className="flex items-center justify-between text-center gap-2">
                    {/* Device Node */}
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-1.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold" style={{ color: 'var(--text-title)' }}>Local Device</span>
                      <span className="text-[9px] sm:text-[10px]" style={{ color: 'var(--text-muted)' }}>SQLite Cache</span>
                    </div>

                    {/* Pipeline Connector with Subtle Pulse */}
                    <div className="flex-1 px-1 flex flex-col items-center justify-center">
                      <div className="relative w-full flex items-center justify-center">
                        <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-blue-400 to-emerald-500 opacity-60 rounded-full" />
                        <span className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
                      </div>
                      <span className="text-[9px] font-mono mt-1 text-emerald-400 flex items-center gap-1">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        TLS 1.3 Direct
                      </span>
                    </div>

                    {/* Google Drive Node */}
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-1.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold" style={{ color: 'var(--text-title)' }}>Google Drive</span>
                      <span className="text-[9px] sm:text-[10px] text-emerald-400 font-medium">Hidden AppData</span>
                    </div>
                  </div>
                </div>

                {/* Automated Background Sync Feature Status */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <svg className="w-4 h-4 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--text-title)' }}>
                        Automatic Background Sync
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Always On
                        </span>
                      </div>
                      <div className="text-[11px] sm:text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        Silently synchronizes encrypted transactions whenever online — zero manual action required
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Architecture Bullet Points */}
              <div className="space-y-3 mt-5">
                <div className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-body)' }}>
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <strong style={{ color: 'var(--text-title)' }}>Zero Server Middlemen:</strong> Tokens and backups transmit directly between your device and Google Drive via official Google APIs. No proxy or database ever sees your entries.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-body)' }}>
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <strong style={{ color: 'var(--text-title)' }}>Sandboxed App Folder:</strong> Finsync is confined to Google Drive&apos;s hidden Application Data space. It has zero capability to view or touch your personal documents, photos, or sheets.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-body)' }}>
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <strong style={{ color: 'var(--text-title)' }}>Deterministic Conflict Handling:</strong> Cryptographic checksums and millisecond timestamps ensure seamless merging even if transactions were logged while offline.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              CARD 2: DATA BACKUP & UNIVERSAL PORTABILITY
              ════════════════════════════════════════════════════════════════ */}
          <div className="app-card app-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden border">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-purple-400">Offline & Independent</span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-title)' }}>
                      Universal Data Portability
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 whitespace-nowrap">
                  Zero Vendor Lock-in
                </span>
              </div>

              {/* Redesigned Interactive Export / Restore Hub */}
              <div className="rounded-2xl border p-4 sm:p-5 my-5 shadow-lg backdrop-blur-sm" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
                {/* Mode Selector Tabs */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl border mb-4 bg-white dark:bg-slate-900/60 shadow-sm" style={{ borderColor: 'var(--card-border)' }}>
                  <button
                    type="button"
                    onClick={() => setActiveExportTab('json')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeExportTab === 'json'
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    JSON Backup
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveExportTab('csv')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeExportTab === 'csv'
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    CSV Spreadsheet
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveExportTab('restore')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeExportTab === 'restore'
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    Restore
                  </button>
                </div>

                {/* Tab 1: JSON Live Schema View */}
                {activeExportTab === 'json' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl border font-mono text-[11px] sm:text-xs overflow-x-auto" style={{ backgroundColor: 'var(--code-bg)', borderColor: 'var(--code-border)', color: 'var(--code-text)' }}>
                      <pre className="leading-relaxed">{sampleJson}</pre>
                    </div>
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-[11px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>
                        Includes categories, budgets & transactions
                      </span>
                      <button
                        type="button"
                        onClick={() => handleSimulateExport('JSON')}
                        className="btn-secondary px-3.5 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download JSON
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 2: CSV Spreadsheet Table View */}
                {activeExportTab === 'csv' && (
                  <div className="space-y-3">
                    <div className="overflow-x-auto rounded-xl border bg-white dark:bg-transparent" style={{ borderColor: 'var(--card-border)' }}>
                      <table className="w-full text-left text-[11px] sm:text-xs">
                        <thead className="bg-slate-100 dark:bg-slate-900/60 border-b font-mono text-slate-700 dark:text-slate-300" style={{ borderColor: 'var(--card-border)' }}>
                          <tr>
                            <th className="py-2 px-2.5">Date</th>
                            <th className="py-2 px-2.5">Category</th>
                            <th className="py-2 px-2.5">Type</th>
                            <th className="py-2 px-2.5">Amount</th>
                            <th className="py-2 px-2.5">Note</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y" style={{ borderColor: 'var(--card-border)' }}>
                          {sampleCsvRows.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                              <td className="py-2 px-2.5 font-mono text-slate-600 dark:text-slate-400">{row.date}</td>
                              <td className="py-2 px-2.5 font-medium" style={{ color: 'var(--text-title)' }}>{row.category}</td>
                              <td className="py-2 px-2.5">
                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${row.type === 'Income' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'}`}>
                                  {row.type}
                                </span>
                              </td>
                              <td className={`py-2 px-2.5 font-mono font-semibold ${row.type === 'Income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-slate-200'}`}>
                                {row.amount}
                              </td>
                              <td className="py-2 px-2.5 text-slate-600 dark:text-slate-400 truncate max-w-[120px]">{row.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-[11px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>
                        Compatible with Excel, Sheets & Numbers
                      </span>
                      <button
                        type="button"
                        onClick={() => handleSimulateExport('CSV')}
                        className="btn-secondary px-3.5 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Export CSV
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 3: Disaster Recovery Restore Zone */}
                {activeExportTab === 'restore' && (
                  <div className="space-y-3">
                    <div className="p-5 rounded-xl border border-dashed text-center flex flex-col items-center justify-center gap-2" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--text-title)' }}>
                        Restore from Backup File
                      </div>
                      <div className="text-[11px] sm:text-xs max-w-xs" style={{ color: 'var(--text-muted)' }}>
                        Select any valid <code className="font-mono text-purple-400">finsync_backup_*.json</code> file to restore full ledger history without data corruption.
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Atomic verification check
                      </span>
                      <button
                        type="button"
                        onClick={() => handleSimulateExport('Restore Simulated')}
                        className="btn-primary px-3.5 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        Browse File
                      </button>
                    </div>
                  </div>
                )}

                {exportNotice && (
                  <div className="mt-3 p-2.5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{exportNotice}</span>
                  </div>
                )}
              </div>

              {/* Technical Architecture Bullet Points */}
              <div className="space-y-3 mt-5">
                <div className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-body)' }}>
                  <div className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <strong style={{ color: 'var(--text-title)' }}>Standard Open Formats:</strong> Export complete transaction registers into standard RFC 4180 CSV or JSON. Never trapped in a proprietary walled garden.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-body)' }}>
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <strong style={{ color: 'var(--text-title)' }}>Universal Spreadsheet Ready:</strong> Immediately open your exported CSV in Microsoft Excel, Apple Numbers, Google Sheets, or financial analysis scripts.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-body)' }}>
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <strong style={{ color: 'var(--text-title)' }}>Seamless Cross-Device Migration:</strong> Switch to a new phone or restore after a factory reset in seconds with 100% record integrity preservation.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Reassurance Banner ── */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto p-5 sm:p-7 rounded-3xl border text-center shadow-lg backdrop-blur-md" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="flex flex-col items-center gap-1.5">
              <span className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <span className="font-semibold" style={{ color: 'var(--text-title)' }}>Zero Vendor Lock-in</span>
              <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Plain JSON & CSV standard</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <span className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="font-semibold" style={{ color: 'var(--text-title)' }}>100% Offline Capable</span>
              <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Local database first</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <span className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </span>
              <span className="font-semibold" style={{ color: 'var(--text-title)' }}>Personal Drive Only</span>
              <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Direct OAuth token</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <span className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <span className="font-semibold" style={{ color: 'var(--text-title)' }}>End-to-End Control</span>
              <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Revoke access anytime</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
