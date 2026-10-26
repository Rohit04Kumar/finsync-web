'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../theme-context';

export default function Header() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="sticky top-0 z-50">
      {/* ── Tier 1: Brand Bar ── */}
      <div className="header-top-tier">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-14 sm:h-16 flex items-center justify-between">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 logo-glow group">
              <div className="logo-ring relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-1 ring-white/10 p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 flex-shrink-0 transition-shadow duration-300">
                <Image 
                  src="/icon.png" 
                  alt="Finsync Logo" 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-cover rounded-[9px]"
                  priority
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight transition-colors" style={{ color: 'var(--text-title)' }}>
                  Finsync
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 border border-indigo-500/20">
                  v1.3.1
                </span>
              </div>
            </Link>

            {/* Right: Theme + Contact */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle */}
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

              {/* Contact Support - Glassmorphic */}
              <a
                href="mailto:rohit.rv536@gmail.com?subject=Finsync%20Support%20Request"
                className="contact-btn-glass"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">Contact</span>
                <span className="sm:hidden">Mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gradient Divider ── */}
      <div className="header-gradient-divider" />

      {/* ── Tier 2: Navigation Strip ── */}
      <div className="header-nav-strip border-b" style={{ borderColor: 'var(--card-border)' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="h-10 sm:h-11 flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth">
            <a href="#features" className="nav-pill">
              Features
            </a>
            <a href="#google-drive-security" className="nav-pill flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              Drive Safety
            </a>
            <Link href="/privacy" className="nav-pill">
              Privacy
            </Link>
            <Link href="/terms" className="nav-pill">
              Terms
            </Link>
            <a href="#developer" className="nav-pill">
              Developer
            </a>
            <a href="#google-drive-security" className="nav-pill nav-pill-active flex items-center gap-1.5">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              OAuth 2.0
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
