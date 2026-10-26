'use client';

import React from 'react';

export default function AmbientGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[450px] bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent blur-[80px] sm:blur-[120px] rounded-full transition-opacity" 
        style={{ opacity: 'var(--glow-indigo-opacity)' }}
      />
      <div 
        className="absolute top-[35%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-500 blur-[90px] sm:blur-[130px] rounded-full transition-opacity" 
        style={{ opacity: 'var(--glow-emerald-opacity)' }}
      />
    </div>
  );
}
