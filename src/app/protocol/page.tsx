"use client";
import { useState } from "react";

export default function ProtocolCompleteness() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`min-h-screen flex overflow-x-hidden selection:bg-teal-500/20 transition-colors duration-300 ${isDarkMode ? 'dark bg-[#111111] text-white' : 'bg-[#ffffff] text-gray-900'}`}>
      
      {/* SideNavBar Shell */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-[280px] z-40 bg-white dark:bg-[#111111] border-r border-gray-200 dark:border-zinc-800 transition-colors">
        <div className="p-6 text-left">
          <h1 className="text-xl font-bold tracking-tight text-[#008080] dark:text-[#76d6d5]">ProtocolPilot</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-0.5">Precision Research</p>
        </div>
        
        <nav className="flex-1 px-4 mt-4 space-y-1 text-left">
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg" href="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg" href="/study-planner">
            <span className="material-symbols-outlined">home</span>
            <span className="text-sm font-medium">Study Planner</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg" href="/study-design">
            <span className="material-symbols-outlined">architecture</span>
            <span className="text-sm font-medium">Study Design</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg" href="/methodology">
            <span className="material-symbols-outlined">description</span>
            <span className="text-sm font-medium">Templates</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#008080] dark:text-[#76d6d5] bg-teal-50 dark:bg-teal-950/30 rounded-lg font-bold" href="/protocol">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-sm font-semibold">Protocol Check</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg" href="/statistics">
            <span className="material-symbols-outlined">insights</span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
        </nav>
      </aside>

      {/* Main Layout Container Wrapper */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* TopNavBar Shell */}
        <header className="flex justify-between items-center w-full h-16 px-8 sticky top-0 z-50 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md ml-0 lg:ml-[280px] lg:max-w-[calc(100%-280px)] border-b border-gray-200 dark:border-zinc-800 transition-colors">
          <div className="flex items-center bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full px-4 py-1.5 w-96">
            <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none" placeholder="Search research projects..." type="text" />
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors" title="Toggle theme">
              {isDarkMode ? <span className="material-symbols-outlined">light_mode</span> : <span className="material-symbols-outlined">dark_mode</span>}
            </button>
            <div className="flex items-center gap-2.5 pl-2 text-left">
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-[12px] font-bold border border-teal-700 shadow-sm">
                ER
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="ml-0 lg:ml-[280px] p-8 max-w-[1440px] w-full text-left">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <nav className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                <a className="hover:text-[#008080] transition-colors" href="#">Projects</a>
                <span className="opacity-30">/</span>
                <a className="hover:text-[#008080] transition-colors" href="#">Efficacy Trial A-42</a>
                <span className="opacity-30">/</span>
                <span className="text-[#008080] dark:text-[#76d6d5]">Review &amp; Export</span>
              </nav>
              <h2 className="text-3xl font-bold tracking-tight">Protocol Completeness Check</h2>
              <p className="text-gray-500 dark:text-zinc-400 mt-2 max-w-2xl text-sm leading-relaxed">Final validation of your clinical protocol against standard reporting guidelines (CONSORT/SPIRIT).</p>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Overall Completeness Card */}
            <div className="col-span-12 md:col-span-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-8 flex flex-col items-center justify-center text-center rounded-xl shadow-sm transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Overall Completeness</h3>
              <div className="relative w-32 h-32 flex items-center justify-center border-4 border-teal-50 dark:border-teal-950/40 rounded-full mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold">92%</span>
                  <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase mt-0.5">Ready</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-[220px] leading-relaxed">Your protocol is nearly ready for institutional review board submission.</p>
            </div>

            {/* AI Protocol Assistant Card */}
            <div className="col-span-12 md:col-span-8 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-8 rounded-xl relative overflow-hidden transition-colors flex flex-col justify-center">
              <div className="flex items-start gap-5 relative z-10 text-left">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-[#008080] dark:text-[#76d6d5] shrink-0 border border-teal-100 dark:border-teal-900">
                  <span className="material-symbols-outlined text-[28px]">auto_awesome</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#008080] dark:text-[#76d6d5] mb-2">AI Protocol Assistant</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                    AI Suggestion: Consider adding a secondary outcome to strengthen your study's impact. Analysis suggests that including "Patient-Reported Quality of Life (QoL)" would align this study with current FDA submission trends for this therapeutic area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
