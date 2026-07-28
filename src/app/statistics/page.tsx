"use client";
import { useState } from "react";

export default function StatisticsPlanning() {
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
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 bg-teal-50 dark:bg-teal-950/40 rounded flex items-center justify-center text-[#008080] dark:text-[#76d6d5]">
              <span className="material-symbols-outlined text-xl">science</span>
            </div>
            <div className="text-left">
              <h1 className="text-lg font-bold tracking-tight">ProtocolPilot</h1>
              <p className="text-[10px] text-[#008080] dark:text-[#76d6d5] font-bold tracking-widest uppercase">Precision Research</p>
            </div>
          </div>
          
          <button className="w-full bg-[#008080] hover:bg-[#006a6a] dark:bg-teal-600 dark:hover:bg-teal-500 text-white py-2.5 rounded-xl font-semibold mb-8 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-xl">add</span>
            <span>New Protocol</span>
          </button>
          
          <nav className="space-y-0.5 text-left">
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all rounded-lg group" href="/study-planner">
              <span className="material-symbols-outlined text-xl group-hover:text-[#008080]">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all rounded-lg group" href="/study-design">
              <span className="material-symbols-outlined text-xl group-hover:text-[#008080]">architecture</span>
              <span className="text-sm font-medium">Study Design</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all rounded-lg group" href="/methodology">
              <span className="material-symbols-outlined text-xl group-hover:text-[#008080]">school</span>
              <span className="text-sm font-medium">Methodology</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 text-[#008080] dark:text-[#76d6d5] bg-teal-50 dark:bg-teal-950/30 rounded-lg group" href="/statistics">
              <span className="material-symbols-outlined text-xl">insights</span>
              <span className="text-sm font-semibold">Statistics</span>
            </a>
          </nav>
        </div>
        
        <div className="mt-auto p-4 border-t border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer text-left">
            <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold border border-teal-700 shadow-sm">
              AT
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Dr. Aris Thorne</p>
              <p className="text-[11px] text-gray-400 truncate">Principal Investigator</p>
            </div>
          </div>
        </div>
      </aside>

      
      <main className="flex-grow ml-0 lg:ml-[260px] min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center h-14 px-6 md:px-8 sticky top-0 z-50 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 transition-colors">
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-gray-400 text-lg">search</span>
              <input className="pl-10 pr-4 py-1.5 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-sm w-72 focus:ring-1 focus:ring-teal-500 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none" placeholder="Search protocols..." type="text" />
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            {/* Fully Functional Theme Switching System Trigger Row Button */}
            <button onClick={toggleTheme} className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all" title="Toggle theme">
              {isDarkMode ? <span className="material-symbols-outlined text-[22px]">light_mode</span> : <span className="material-symbols-outlined text-[22px]">dark_mode</span>}
            </button>
            <button className="relative w-9 h-9 flex items-center justify-center rounded-full text-gray-500 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        
        <div className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-8">
          {/* Breadcrumbs & Title */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-1">
              <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">
                <a className="hover:text-[#008080] transition-colors" href="#">Projects</a>
                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                <a className="hover:text-[#008080] transition-colors" href="#">Phase 3 Trial</a>
                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                <span className="text-[#008080] dark:text-[#76d6d5]">Statistics</span>
              </nav>
              <h2 className="text-3xl font-bold tracking-tight">Statistics Planning</h2>
            </div>
            
            <div className="w-full md:w-64">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Analysis Progress</span>
                <span className="text-[11px] font-bold text-[#008080] dark:text-[#76d6d5]">80% Complete</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#008080] shadow-[0_0_8px_rgba(0,128,128,0.4)]" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            {/* Selection Parameters Sidebar Row Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-5 rounded-2xl shadow-sm transition-colors">
                <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#008080] dark:text-[#76d6d5] text-xl">schema</span>
                  <span>Selection Parameters</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-[#008080] dark:text-[#76d6d5] flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">Variable Type</label>
                      <div className="bg-gray-50 dark:bg-zinc-950 px-3 py-2 rounded-lg text-sm border border-gray-200 dark:border-zinc-800">Outcome variable</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-[#008080] dark:text-[#76d6d5] flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">Measurement Scale</label>
                      <div className="bg-gray-50 dark:bg-zinc-950 px-3 py-2 rounded-lg text-sm border border-gray-200 dark:border-zinc-800">Continuous</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
