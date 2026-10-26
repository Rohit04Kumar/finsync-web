'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Small sub-components used only within the hero ── */

interface MetricCardProps {
  label: string;
  value: string;
  detail: string;
  detailColor: string;
}

function MetricCard({ label, value, detail, detailColor }: MetricCardProps) {
  return (
    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl" style={{ backgroundColor: 'var(--metric-card-bg)', border: '1px solid var(--metric-card-border)' }}>
      <p className="text-[11px] sm:text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</p>
      <p className="text-xs sm:text-base font-bold mt-0.5 truncate" style={{ color: 'var(--text-title)' }}>{value}</p>
      <span className={`text-[10px] sm:text-[11px] font-medium ${detailColor}`}>{detail}</span>
    </div>
  );
}

interface FloatingImageCardProps {
  position: string;
  badgeLabel: string;
  badgeClass: string;
  title: string;
  subtitle: string;
  iconBgClass: string;
  iconBorderClass: string;
  icon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

function FloatingImageCard({
  position,
  badgeLabel,
  badgeClass,
  title,
  subtitle,
  iconBgClass,
  iconBorderClass,
  icon,
  imageSrc,
  imageAlt,
}: FloatingImageCardProps) {
  return (
    <div
      className={`hidden lg:flex absolute ${position} w-[240px] xl:w-[270px] p-3 rounded-2xl app-card shadow-2xl border flex-col gap-2.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-20 text-left`}
      style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className={`w-7 h-7 rounded-lg ${iconBgClass} border ${iconBorderClass} flex items-center justify-center flex-shrink-0`}>
            {icon}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold leading-tight truncate" style={{ color: 'var(--text-title)' }}>{title}</p>
            <p className="text-[10px] leading-tight truncate" style={{ color: 'var(--text-muted)' }}>{subtitle}</p>
          </div>
        </div>
        <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeClass}`}>
          {badgeLabel}
        </span>
      </div>

      <div className="relative rounded-xl overflow-hidden border shadow-inner bg-slate-950/40" style={{ borderColor: 'var(--card-border)' }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="w-full h-auto object-cover select-none pointer-events-none"
        />
      </div>
    </div>
  );
}

/* ── Main export ── */

export default function HeroSection() {
  return (
    <section className="relative z-10 pt-10 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Pill Badge */}
          <div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium mb-5 sm:mb-6 backdrop-blur-sm max-w-full"
            style={{ backgroundColor: 'var(--badge-bg)', border: '1px solid var(--badge-border)', color: 'var(--badge-text)' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0 animate-ping"></span>
            <span className="truncate">Zero-Server Architecture · 100% Offline-First</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.12]" style={{ color: 'var(--text-title)' }}>
            Master Your Money with{" "}
            <span className="gradient-text-hero block sm:inline">
              Absolute Privacy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl font-normal leading-relaxed px-2" style={{ color: 'var(--text-body)' }}>
            Track daily expenses, set category limits, manage loans & debts, and sync encrypted backups directly to your personal Google Drive. 
            <span className="font-semibold block mt-1 sm:mt-2" style={{ color: 'var(--text-title)' }}>
              We never host or store your financial entries on external databases.
            </span>
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="#features"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl sm:rounded-2xl btn-primary font-semibold text-sm text-center"
            >
              Explore App Features
            </a>
            <Link
              href="/privacy"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl sm:rounded-2xl btn-secondary font-semibold text-sm text-center"
            >
              Read Privacy Policy
            </Link>
          </div>

          {/* ─── Real App Device Showcase ─── */}
          <div className="relative mt-12 sm:mt-16 mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl flex items-center justify-center">
            {/* Radial Glow Behind Phone */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-emerald-500/20 blur-[80px] sm:blur-[110px] rounded-full scale-110 -z-10 pointer-events-none"
            />

            {/* Smartphone Frame */}
            <div className="relative mx-auto w-[270px] sm:w-[310px] md:w-[340px] rounded-[42px] sm:rounded-[46px] p-2.5 sm:p-3 bg-gradient-to-b from-slate-600 via-slate-800 to-black shadow-2xl ring-1 ring-white/20">
              {/* Speaker Grill */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1 bg-slate-800/90 rounded-full z-30" />

              {/* Inner Screen */}
              <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden bg-slate-950 border border-black shadow-inner aspect-[9/19.5]">
                {/* Camera Punchhole */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-900 ring-1 ring-white/10" />
                </div>

                {/* Real App Screenshot Image */}
                <Image
                  src="/app-mockup.png"
                  alt="Finsync - Real Application Interface"
                  width={720}
                  height={1560}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  priority
                />

                {/* Glossy Screen Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] pointer-events-none z-10" />
              </div>
            </div>

            {/* Floating Card Left: Backup & Restore */}
            <FloatingImageCard
              position="-left-10 xl:-left-24 top-20"
              title="Backup & Restore"
              subtitle="JSON & CSV Export"
              badgeLabel="100% Offline"
              badgeClass="bg-purple-500/10 text-purple-400 border border-purple-500/20"
              iconBgClass="bg-purple-500/10"
              iconBorderClass="border-purple-500/20"
              icon={
                <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              }
              imageSrc="/backup-restore-card.png"
              imageAlt="Finsync Data Backup & Restore"
            />

            {/* Floating Card Right: Google Drive Cloud Sync */}
            <FloatingImageCard
              position="-right-10 xl:-right-24 bottom-20"
              title="Google Drive Sync"
              subtitle="Automated & Private"
              badgeLabel="Live Sync"
              badgeClass="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              iconBgClass="bg-blue-500/10"
              iconBorderClass="border-blue-500/20"
              icon={
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              }
              imageSrc="/cloud-sync-card.png"
              imageAlt="Finsync Cloud Sync Google Drive"
            />
          </div>

          {/* Quick Metrics Badge Row */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-left" style={{ borderColor: 'var(--card-border)' }}>
            <MetricCard label="Data Storage" value="100% Local Device" detail="Zero External Servers" detailColor="text-emerald-500" />
            <MetricCard label="Cloud Backup" value="Google Drive" detail="Hidden App Folder" detailColor="text-indigo-500" />
            <MetricCard label="Tracking Tools" value="Expenses & Debts" detail="Lending / Borrowing" detailColor="text-purple-500" />
            <MetricCard label="Localization" value="10 Languages" detail="Global Currencies" detailColor="text-amber-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
