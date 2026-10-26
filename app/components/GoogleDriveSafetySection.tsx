'use client';

import React from 'react';

interface ComplianceCardProps {
  title: string;
  children: React.ReactNode;
}

function ComplianceCard({ title, children }: ComplianceCardProps) {
  return (
    <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
      <h4 className="font-semibold text-emerald-500 text-xs sm:text-sm flex items-center gap-2">
        {title}
      </h4>
      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {children}
      </p>
    </div>
  );
}

export default function GoogleDriveSafetySection() {
  return (
    <section id="google-drive-security" className="relative z-10 py-12 sm:py-16 border-y" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto app-card-highlight p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-title)' }}>
                Google OAuth & User Data Safety Disclosure
              </h2>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                Compliance Statement for Google API Services User Data Policy & OAuth Verification Reviewers
              </p>
            </div>
          </div>

          {/* Scope Box */}
          <div className="space-y-4 sm:space-y-6 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
              <h3 className="font-semibold text-xs sm:text-sm flex flex-wrap items-center gap-2" style={{ color: 'var(--text-title)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Scope Requested: 
                <code className="text-[11px] sm:text-xs px-2 py-0.5 rounded break-all max-w-full font-mono font-semibold" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--code-text)', border: '1px solid var(--code-border)' }}>
                  https://www.googleapis.com/auth/drive.appdata
                </code>
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Finsync uses the Google Drive Application Data Folder (<code className="text-[11px] sm:text-xs font-mono font-medium" style={{ color: 'var(--code-text)' }}>drive.appdata</code>) scope 
                solely to create, overwrite, and download the user&apos;s personal encrypted backup file (<code className="text-[11px] sm:text-xs font-mono font-medium" style={{ color: 'var(--code-text)' }}>finsync_backup_v1.json</code>).
              </p>
            </div>

            {/* 4 Compliance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <ComplianceCard title="✓ Restricted to Hidden App Folder">
                Finsync has <strong>zero access</strong> to any other files, folders, documents, or photos in your Google Drive. 
                The App Data folder is invisible and strictly sandboxed to Finsync.
              </ComplianceCard>

              <ComplianceCard title="✓ Google Limited Use Compliance">
                <>
                  Finsync&apos;s use of information received from Google APIs adheres to the 
                  <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline ml-1 font-medium">
                    Google API Services User Data Policy
                  </a>, including the Limited Use requirements.
                </>
              </ComplianceCard>

              <ComplianceCard title="✓ No Third-Party Server Transmission">
                Your Google tokens and backup data travel directly between your phone and Google Drive via official Google APIs. 
                No intermediate server, proxy, or database ever touches or stores your data.
              </ComplianceCard>

              <ComplianceCard title="✓ Instant Revocation & Deletion">
                <>
                  Users can disconnect Google Drive sync anytime in the app settings, or revoke access instantly via their 
                  <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline ml-1 font-medium">
                    Google Account Security Settings
                  </a>.
                </>
              </ComplianceCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
