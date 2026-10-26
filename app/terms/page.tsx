'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../theme-context';

export default function TermsPage() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <div className="min-h-screen py-8 sm:py-12 px-3 sm:px-6 lg:px-8 font-sans overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header navigation bar */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between border-b pb-4 sm:pb-6 gap-3" style={{ borderColor: 'var(--card-border)' }}>
          <Link href="/" className="inline-flex items-center gap-2 text-xs sm:text-sm text-indigo-500 hover:text-indigo-600 font-semibold transition-colors group">
            <span className="text-muted group-hover:text-indigo-500 transition-colors">←</span>
            <div className="w-5 h-5 rounded-md overflow-hidden ring-1 ring-white/10 p-[1px] bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0">
              <Image src="/icon.png" alt="Finsync" width={20} height={20} className="w-full h-full object-cover rounded-[5px]" />
            </div>
            <span>Back to Finsync Home</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={mounted ? (theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode') : 'Switch theme'}
              aria-label="Toggle theme"
            >
              {mounted && theme === 'light' ? (
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <span className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full border" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)', color: 'var(--text-muted)' }}>
              Last Updated: October 18, 2026
            </span>
          </div>
        </div>

        <div className="app-card p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl space-y-6 sm:space-y-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-title)' }}>
              Terms and Conditions
            </h1>
            <p className="text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-body)' }}>
              These Terms and Conditions govern your use of <strong>Finsync - Expense Tracker</strong> (&quot;Finsync&quot;, &quot;App&quot;). Developed by <strong>Rohit Kumar</strong> and published under the name <strong>Nurvi Solutions</strong>.
            </p>
            <p className="text-xs sm:text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              By downloading or using the App, you agree to these terms.
            </p>
          </div>

          {/* 1. License to Use */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              1. License to Use
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              We grant you a limited, non-exclusive, non-transferable, revocable license to use Finsync on a compatible device that you own or control, subject to these Terms and Conditions.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              You may not copy, modify, distribute, reverse engineer, sell, rent, or otherwise exploit the App except as permitted by applicable law.
            </p>
          </section>

          {/* 2. Personal Use */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              2. Personal Use
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync is intended to help users record and manage their personal financial information. The App does not provide financial, investment, tax, accounting, legal, or professional advice.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              You are responsible for verifying any financial information entered into or generated by the App before relying on it.
            </p>
          </section>

          {/* 3. User Responsibility */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              3. User Responsibility
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              You are responsible for maintaining the security of your device and protecting access to information stored within the App.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              You are also responsible for maintaining appropriate backups or exported copies of your financial records.
            </p>
          </section>

          {/* 4. Google Drive Cloud Backup & Synchronization */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2 flex items-center gap-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              4. Google Drive Cloud Backup & Synchronization
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync provides an optional automatic cloud synchronization feature that integrates with your personal Google Drive account using official Google APIs.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2" style={{ color: 'var(--text-body)' }}>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Authorization & Scope:</strong> When you connect your Google Account, you grant Finsync permission to access exclusively its dedicated, sandboxed Application Data folder (<code className="text-[11px] sm:text-xs font-mono font-medium" style={{ color: 'var(--code-text)' }}>drive.appdata</code>). Finsync has zero access to any other files, folders, documents, or photos in your Google Drive.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Direct Transmission:</strong> Backup data transmits directly and securely over TLS 1.3 between your device and Google Drive servers. We do not operate an intermediate server, database, or proxy that receives, inspects, or stores your Google authentication tokens or financial records.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Third-Party Service Terms:</strong> Google Drive is provided by Google LLC and is subject to Google&apos;s own{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline font-medium">
                  Terms of Service
                </a>{' '}and{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline font-medium">
                  Privacy Policy
                </a>. You are responsible for maintaining an active Google account with sufficient storage quota.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Data Ownership:</strong> You retain complete and exclusive ownership of all backup files created in your Google Drive. Finsync does not claim any ownership rights over your financial records.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Revocation & Disconnection:</strong> You may disable Google Drive synchronization at any time within the App settings, or revoke Finsync&apos;s OAuth authorization via your{' '}
                <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline font-medium">
                  Google Account Permissions Settings
                </a>.
              </li>
            </ul>
          </section>

          {/* 5. Accuracy of Information */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              5. Accuracy of Information
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync is a record-keeping tool. We do not guarantee that calculations, reports, reminders, or other information generated by the App will always be complete, accurate, or error-free.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              You should independently verify important financial information before making financial decisions.
            </p>
          </section>

          {/* 6. App Updates and Changes */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              6. App Updates and Changes
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              We may modify, update, suspend, or discontinue features of the App at any time. We may also introduce new features or modify existing functionality.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              If paid features are introduced in the future, any applicable charges and payment terms will be clearly presented before you are required to make a payment.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              7. Limitation of Liability
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the extent permitted by applicable law.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              We are not responsible for financial losses, loss of data, inaccurate information, missed reminders, device failures, or other damages resulting from your use of or inability to use the App, except where liability cannot legally be excluded.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Because financial records may be stored locally on your device, you are responsible for exporting or backing up important data.
            </p>
          </section>

          {/* 8. Third-Party Services & Google APIs */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              8. Third-Party Services & Google APIs
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              The App may rely on third-party services, including Google Play Services, Google Drive APIs, and advertising providers. We are not responsible for interruptions, changes, or failures of third-party services.
            </p>
          </section>

          {/* 9. Termination */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              9. Termination
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Your right to use the App may end if you violate these Terms and Conditions or if the App is discontinued.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              You may stop using the App and uninstall it from your device at any time.
            </p>
          </section>

          {/* 10. Changes to These Terms */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              10. Changes to These Terms
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              We may update these Terms and Conditions from time to time. Updated terms will be posted on this page and the &quot;Last Updated&quot; date will be changed accordingly.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              11. Contact Us
            </h2>
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border text-xs sm:text-sm space-y-2" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
              <p style={{ color: 'var(--text-body)' }}>
                If you have questions, suggestions, complaints, or grievances regarding Finsync, please contact us:
              </p>
              <div className="pt-2 space-y-1">
                <p style={{ color: 'var(--text-body)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>Developer:</strong> Rohit Kumar
                </p>
                <p style={{ color: 'var(--text-body)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>Business / Brand:</strong> Nurvi Solutions
                </p>
                <p style={{ color: 'var(--text-body)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>Support Email:</strong>{' '}
                  <a href="mailto:support.nurvisolutions@gmail.com" className="text-indigo-500 hover:underline font-mono">
                    support.nurvisolutions@gmail.com
                  </a>
                </p>
                <p style={{ color: 'var(--text-body)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>Developer / Grievance Email:</strong>{' '}
                  <a href="mailto:rohit.rv536@gmail.com" className="text-indigo-500 hover:underline font-mono">
                    rohit.rv536@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs" style={{ borderColor: 'var(--card-border)' }}>
            <span style={{ color: 'var(--text-muted)' }}>
              © 2026 Finsync · Developed by Rohit Kumar (Nurvi Solutions)
            </span>
            <Link href="/privacy" className="text-indigo-500 hover:underline font-semibold">
              ← View Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
