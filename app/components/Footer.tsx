'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 sm:py-12 border-t text-xs" style={{ borderColor: 'var(--card-border)', color: 'var(--text-subtle)' }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-md overflow-hidden ring-1 ring-white/10 p-[1px] bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0">
            <Image src="/icon.png" alt="Finsync Logo" width={20} height={20} className="w-full h-full object-cover rounded-[5px]" />
          </div>
          <p>© 2026 Finsync — Developed by Rohit Kumar (Nurvi Solutions). All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <Link href="/privacy" className="hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
          <Link href="/terms" className="hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-muted)' }}>Terms and Conditions</Link>
          <a href="mailto:support.nurvisolutions@gmail.com" className="hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-muted)' }}>Support</a>
        </div>
      </div>
    </footer>
  );
}
