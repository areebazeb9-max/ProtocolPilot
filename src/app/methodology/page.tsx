"use client";
import { useState } from "react";

export default function Methodology() {
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
    <div className={`min-h-screen flex overflow-x-hidden selection:bg-teal-500/20 transition-colors duration-200 ${isDarkMode ? 'dark bg-[#111111] text-white' : 'bg-[#ffffff] text-gray-900'}`}>
      
      
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-[260px] z-40 bg-white dark:bg-[#111111] border-r border-gray-200 dark:border-zinc-800 transition-colors">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-[#008080] rounded flex items-center justify-center text-white text-[12px] font-bold">PP</div>
            <h1 className="font-bold tracking-tight">ProtocolPilot</h1>
          </div>
          <p className="text-gray-400 text-[11px] font-medium tracking-wide uppercase opacity-60">Research Hub</p>
        </div>
        
        <nav className="flex-1 px-3 space-y-0.5">
          <a className="flex items-center px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg group" href="/study-planner">
            <span className="material-symbols-outlined text-[20px] mr-3 opacity-70">home</span>
            <span className="text-[14px] font-medium">Dashboard</span>
          </a>
          <a className="flex items-center px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg group" href="/study-design">
            <span className="material-symbols-outlined text-[20px] mr-3 opacity-70">architecture</span>
            <span className="text-[14px] font-medium">Study Design</span>
          </a>
          <a className="flex items-center px-3 py-2 text-[#008080] dark:text-[#76d6d5] bg-teal-50 dark:bg-teal-950/30 rounded-lg group" href="/methodology">
            <span className="material-symbols-outlined text-[20px] mr-3">school</span>
            <span className="text-[14px] font-semibold">Methodology</span>
          </a>
          <a className="flex items-center px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg group" href="/statistics">
            <span className="material-symbols-outlined text-[20px] mr-3 opacity-70">insights</span>
            <span className="text-[14px] font-medium">Analytics</span>
          </a>
        </nav>
        
        <div className="p-4">
          <button className="w-full py-2.5 px-4 bg-black dark:bg-white text-white dark:text-black text-[13px] font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-sm">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Protocol
          </button>
        </div>
      </aside>

      
      <div className="flex-1 flex flex-col min-h-screen">
        
        <header className="flex justify-between items-center w-full h-14 px-8 sticky top-0 z-50 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md ml-0 lg:ml-[260px] lg:max-w-[calc(100%-260px)] border-b border-gray-200 dark:border-zinc-800 transition-colors">
          <div className="flex items-center gap-2 text-gray-500 text-[13px]">
            <span className="hover:text-[#008080] cursor-pointer transition-colors">Workspace</span>
            <span className="opacity-30">/</span>
            <span className="hover:text-[#008080] cursor-pointer transition-colors">Cardiac Rhythm 2024</span>
            <span className="opacity-30">/</span>
            <span className="font-medium text-gray-900 dark:text-white">Methodology</span>
          </div>
          
          <div className="flex items-center gap-4">
            
            <button 
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-zinc-400"
              title="Toggle theme"
            >
              {isDarkMode ? (
                <span className="material-symbols-outlined text-[20px]">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-[20px]">dark_mode</span>
              )}
            </button>
            
            <div className="flex items-center gap-2.5 pl-2 cursor-pointer group">
              <div className="text-right">
                <p className="text-[13px] font-semibold leading-none group-hover:text-[#008080] transition-colors dark:text-white">Dr. Aris Thorne</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-[12px] font-bold border border-teal-700">
                AT
              </div>
            </div>
          </div>
        </header>

        
        <main className="ml-0 lg:ml-[260px] p-10 max-w-[1200px] mx-auto w-full min-h-[calc(100vh-56px)]">

          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-[32px] font-bold tracking-tight leading-tight">Methodology Builder</h2>
              <p className="text-gray-500 dark:text-zinc-400 mt-2 text-[15px] leading-relaxed">
                Design your study framework with precision. Define populations, settings, and criteria to align with global research standards.
              </p>
            </div>
            
            <div className="w-full md:w-64 text-right">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Completion Status</span>
                <span className="text-[13px] font-semibold text-teal-600 dark:text-teal-400">60%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#008080] h-full w-[60%] transition-all duration-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
            
            <div className="space-y-4">
              <details className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden group shadow-sm transition-colors" open>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-[#008080] dark:text-[#76d6d5] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">groups</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-[15px] font-semibold">Target Population</h3>
                      <p className="text-[13px] text-gray-400">Define who your study participants are</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined transition-transform text-gray-400 group-open:rotate-180">expand_more</span>
                </summary>
                
                <div className="px-6 pb-8 pt-2 space-y-5 border-t border-gray-100 dark:border-zinc-800/60">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5 flex flex-col text-left">
                      <label className="text-[12px] font-semibold text-gray-500 dark:text-zinc-400 flex items-center gap-1.5">
                        Description
                        <span className="material-symbols-outlined text-[14px] opacity-40 cursor-help">help</span>
                      </label>
                      <textarea className="w-full bg-gray-50 dark:bg-zinc-950 p-3 border border-gray-200 dark:border-zinc-800 rounded-lg text-[14px] focus:ring-2 focus:ring-teal-500 outline-none placeholder-gray-400 text-gray-900 dark:text-white" placeholder="e.g. Adults with hypertension..." rows={3}></textarea>
                    </div>
                    
                    <div className="space-y-1.5 flex flex-col text-left">
                      <label className="text-[12px] font-semibold text-gray-500 dark:text-zinc-400">Age Range</label>
                      <div className="flex items-center gap-3 mt-auto">
                        <input className="w-full bg-gray-50 dark:bg-zinc-950 p-2.5 border border-gray-200 dark:border-zinc-800 rounded-lg text-[14px] focus:ring-2 focus:ring-teal-500 outline-none text-gray-900 dark:text-white" placeholder="Min" type="number" />
                        <span className="text-gray-400 text-[12px] font-medium">to</span>
                        <input className="w-full bg-gray-50 dark:bg-zinc-950 p-2.5 border border-gray-200 dark:border-zinc-800 rounded-lg text-[14px] focus:ring-2 focus:ring-teal-500 outline-none text-gray-900 dark:text-white" placeholder="Max" type="number" />
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
