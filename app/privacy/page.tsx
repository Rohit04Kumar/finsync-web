'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../theme-context';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-body)' }}>
              This Privacy Policy explains how <strong>Finsync - Expense Tracker</strong> (&quot;Finsync&quot;, &quot;App&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles information when you use the App.
            </p>
            <p className="text-xs sm:text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Finsync is developed by <strong>Rohit Kumar</strong> and published under the name <strong>Nurvi Solutions</strong>.
            </p>
            <p className="text-xs sm:text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              By downloading or using Finsync, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>

          {/* 1. Financial Data Stored on Your Device */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              1. Financial Data Stored on Your Device
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync is designed to allow you to manage your financial records directly on your device.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Information such as expenses, income, categories, budgets, and other financial records that you enter into the App are stored locally on your device in an offline SQLite database.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              We do not operate a backend server or external database that stores your financial records, and we do not transmit your financial records to our own servers.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              If you uninstall Finsync or clear the App&apos;s data, locally stored financial records may be permanently deleted unless you have exported or backed up your records.
            </p>
          </section>

          {/* 2. Google Drive Cloud Backup & Google API User Data Policy */}
          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2 flex items-center gap-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              2. Google Drive Cloud Backup & Google API User Data Policy
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync offers an optional cloud synchronization and backup feature that allows you to safely back up your financial entries directly to your personal Google Drive account.
            </p>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border space-y-2.5" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
              <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-emerald-500">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Google OAuth Scope Requested:
              </div>
              <code className="text-[11px] sm:text-xs px-2.5 py-1 rounded break-all max-w-full font-mono font-semibold block" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--code-text)', border: '1px solid var(--code-border)' }}>
                https://www.googleapis.com/auth/drive.appdata
              </code>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Finsync requests access exclusively to the <strong>Google Drive Application Data folder</strong> (<code className="text-[11px] sm:text-xs font-mono font-medium" style={{ color: 'var(--code-text)' }}>drive.appdata</code>). This is a dedicated, hidden storage directory created specifically for Finsync and inaccessible to other apps.
              </p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2" style={{ color: 'var(--text-body)' }}>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Strict Sandboxing:</strong> Finsync has <strong>zero access</strong> to your personal files, Google Docs, spreadsheets, photos, videos, or folders stored elsewhere in your Google Drive. The App cannot view, modify, list, or delete any files outside of its own hidden AppData folder.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Single Backup File Use:</strong> The requested scope is used solely to create, overwrite, and restore your personal encrypted backup file (<code className="text-[11px] sm:text-xs font-mono font-medium" style={{ color: 'var(--code-text)' }}>finsync_backup_v1.json</code>).
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Direct Device-to-Google Transmission:</strong> All data transmissions take place directly between your device and Google Drive servers via official Google REST APIs over TLS 1.3 encryption. No intermediate server, proxy, database, or analytics platform ever intercepts, stores, or accesses your Google authentication tokens or financial records.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Google Limited Use Compliance:</strong> Finsync&apos;s use and transfer to any other app of information received from Google APIs adheres to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline font-medium">
                  Google API Services User Data Policy
                </a>, including the Limited Use requirements.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>No Human Review, Sale, or AI Training:</strong> We never sell your Google user data, share it with data brokers, use it for advertising, or use it to train artificial intelligence or machine learning models. No human beings ever view or read your financial data.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Revocation & Deletion:</strong> You can disconnect Google Drive sync at any time from within the App settings. You can also revoke Finsync&apos;s authorization immediately and delete associated app data through your{' '}
                <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline font-medium">
                  Google Account Permissions Settings
                </a>.
              </li>
            </ul>
          </section>

          {/* 3. Information Collected by Third-Party Services */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              3. Information Collected by Third-Party Services
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync may use third-party services to provide advertising, application distribution, analytics, crash reporting, or other supporting functionality.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              These third-party service providers may automatically collect certain information from your device, such as device information, IP address, advertising identifiers, app interaction information, diagnostic information, and information related to advertisements, depending on the services and configuration used by the App.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync does not control the information collected directly by third-party service providers. Their collection and use of information is governed by their respective privacy policies.
            </p>
          </section>

          {/* 4. Advertising */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              4. Advertising
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync may display advertisements using Google AdMob. AdMob may collect and process certain device and advertising-related information in order to provide, measure, and improve advertisements, subject to Google&apos;s policies and applicable privacy choices.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              For more information, please review the following:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2" style={{ color: 'var(--text-body)' }}>
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                  Google AdMob and Privacy
                </a>
              </li>
            </ul>
          </section>

          {/* 5. Firebase Analytics */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              5. Firebase Analytics
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync uses Google Analytics for Firebase (provided by Google LLC) to collect anonymous, aggregated usage and diagnostic data. This helps us understand how the App is used, detect stability issues, and improve features.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              The information collected may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2" style={{ color: 'var(--text-body)' }}>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Device & Diagnostic Metrics:</strong> Device model, operating system version, app version, and Firebase installation identifiers.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>App Activity:</strong> Screen transitions (e.g., viewing Dashboard or Settings), session duration, and anonymous feature interactions (e.g., changing currency or theme).
              </li>
            </ul>
            <div className="p-3.5 rounded-xl border mt-2" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                🔒 <strong style={{ color: 'var(--text-title)' }}>Zero Financial Data Transmitted:</strong> Firebase Analytics does not collect, access, or transmit your financial data. No monetary amounts, account balances, personal notes, payee names, or individual transaction histories are ever sent to Firebase or Google.
              </p>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mt-2" style={{ color: 'var(--text-muted)' }}>
              For more information on how Google handles Firebase data, please review:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2" style={{ color: 'var(--text-body)' }}>
              <li>
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                  Firebase Privacy and Security
                </a>
              </li>
              <li>
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                  How Google Uses Information From Sites or Apps That Use Our Services
                </a>
              </li>
            </ul>
          </section>

          {/* 6. Google Play Services */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              6. Google Play Services
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync is distributed through Google Play and may use Google Play services and related Google services. These services may process information according to Google&apos;s privacy practices.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              More information is available in Google&apos;s Privacy Policy:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                Google Privacy Policy
              </a>
            </p>
          </section>

          {/* 7. Expo and Application Framework Services */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              7. Expo and Application Framework Services
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync may use Expo and related software libraries to support application functionality. Depending on the specific Expo services enabled in the application, certain technical or diagnostic information may be processed by Expo or its service providers.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              For more information, please refer to Expo&apos;s privacy policy:{' '}
              <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                Expo Privacy Policy
              </a>
            </p>
          </section>

          {/* 8. Device Permissions */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              8. Device Permissions
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync may request permissions that are necessary for specific features of the App. These permissions may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2" style={{ color: 'var(--text-body)' }}>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Notifications:</strong> Used to provide budget alerts, reminders, and other notifications that you enable.
              </li>
              <li>
                <strong style={{ color: 'var(--text-title)' }}>Files / Storage:</strong> Used when you choose to export, generate, or save reports or other files created by the App.
              </li>
            </ul>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Permissions are requested only when required by the corresponding functionality. You can manage available permissions through your device settings.
            </p>
          </section>

          {/* 9. Data Security */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              9. Data Security
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Because your financial records are primarily stored locally on your device, the security of those records also depends on the security of your device, operating system, and device access controls.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              We recommend keeping your device secured with an appropriate password, PIN, biometric authentication, or other security mechanism.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              10. Children&apos;s Privacy
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Finsync is not specifically directed toward children. We do not knowingly collect personal information from children through our own servers.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              If you believe that a child has provided personal information to us, please contact us using the information provided below.
            </p>
          </section>

          {/* 11. Changes to This Privacy Policy */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              We may update this Privacy Policy from time to time to reflect changes to the App, applicable requirements, or our practices.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              When changes are made, the &quot;Last Updated&quot; date at the top of this page will be updated. You are encouraged to review this Privacy Policy periodically.
            </p>
          </section>

          {/* 12. Developer / Grievance Contact */}
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2" style={{ color: 'var(--text-title)', borderColor: 'var(--card-border)' }}>
              12. Developer / Grievance Contact
            </h2>
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border text-xs sm:text-sm space-y-2" style={{ backgroundColor: 'var(--card-inner-bg)', borderColor: 'var(--card-border)' }}>
              <p style={{ color: 'var(--text-body)' }}>
                Finsync is developed by <strong>Rohit Kumar</strong> and published under the name <strong>Nurvi Solutions</strong>.
              </p>
              <p style={{ color: 'var(--text-body)' }}>
                If you have any questions, concerns, complaints, or grievances regarding Finsync, its privacy practices, or this Privacy Policy, you may contact the developer using the details below:
              </p>
              <div className="pt-2 space-y-1">
                <p style={{ color: 'var(--text-body)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>Developer:</strong> Rohit Kumar
                </p>
                <p style={{ color: 'var(--text-body)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>Business / Brand:</strong> Nurvi Solutions
                </p>
                <p style={{ color: 'var(--text-body)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>Developer / Grievance Email:</strong>{' '}
                  <a href="mailto:rohit.rv536@gmail.com" className="text-indigo-500 hover:underline font-mono">
                    rohit.rv536@gmail.com
                  </a>
                </p>
                <p style={{ color: 'var(--text-body)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>Support Email:</strong>{' '}
                  <a href="mailto:support.nurvisolutions@gmail.com" className="text-indigo-500 hover:underline font-mono">
                    support.nurvisolutions@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs" style={{ borderColor: 'var(--card-border)' }}>
            <span style={{ color: 'var(--text-muted)' }}>
              © 2026 Finsync · Developed by Rohit Kumar (Nurvi Solutions)
            </span>
            <Link href="/terms" className="text-indigo-500 hover:underline font-semibold">
              View Terms and Conditions →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
