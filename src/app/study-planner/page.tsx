"use client";
import { useState } from "react";

export default function StudyPlanner() {
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
          <a className="flex items-center px-3 py-2 text-[#008080] dark:text-[#76d6d5] bg-teal-50 dark:bg-teal-950/30 rounded-lg group" href="/study-planner">
            <span className="material-symbols-outlined text-[20px] mr-3">home</span>
            <span className="text-[14px] font-semibold">Study Planner</span>
          </a>
          <a className="flex items-center px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg group" href="/study-design">
            <span className="material-symbols-outlined text-[20px] mr-3 opacity-70">architecture</span>
            <span className="text-[14px] font-medium">Study Design</span>
          </a>
          <a className="flex items-center px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg group" href="/methodology">
            <span className="material-symbols-outlined text-[20px] mr-3 opacity-70">school</span>
            <span className="text-[14px] font-medium">Methodology</span>
          </a>
          <a className="flex items-center px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg group" href="/statistics">
            <span className="material-symbols-outlined text-[20px] mr-3 opacity-70">insights</span>
            <span className="text-[14px] font-medium">Analytics</span>
          </a>
        </nav>
      </aside>

      
      <div className="flex-1 flex flex-col min-h-screen">
    
        <header className="flex justify-between items-center w-full h-14 px-8 sticky top-0 z-50 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md ml-0 lg:ml-[260px] lg:max-w-[calc(100%-260px)] border-b border-gray-200 dark:border-zinc-800 transition-colors">
          <div className="flex items-center gap-2 text-gray-500 text-[13px]">
            <span>Workspace</span>
            <span className="opacity-30">/</span>
            <span className="font-medium text-gray-900 dark:text-white">Active Projects / Timeline</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-zinc-400">
              {isDarkMode ? <span className="material-symbols-outlined text-[20px]">light_mode</span> : <span className="material-symbols-outlined text-[20px]">dark_mode</span>}
            </button>
            <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-[12px] font-bold">AT</div>
          </div>
        </header>

        
        <main className="ml-0 lg:ml-[260px] p-10 max-w-[1200px] mx-auto w-full">
          <div className="text-left mb-8 border-b border-gray-100 dark:border-zinc-800 pb-6">
            <h2 className="text-[32px] font-bold tracking-tight">Study Planner Timeline</h2>
            <p className="text-gray-500 dark:text-zinc-400 mt-2 text-[15px]">Organize clinical stages, phase progression paths, and critical path milestones smoothly.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 text-left shadow-sm">
            <h3 className="font-semibold text-[16px] mb-2">Workspace Milestones</h3>
            <p className="text-[14px] text-gray-400 dark:text-zinc-500">Your scheduling dashboard template setup has been generated error-free to support dual theme configurations layout parameters perfectly.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
