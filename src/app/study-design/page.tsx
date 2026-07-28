"use client";
import { useState } from "react";

export default function StudyDesign() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [hasIntervention, setHasIntervention] = useState<boolean | null>(false);

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
            <span className="text-[14px] font-medium">Study Planner</span>
          </a>
          <a className="flex items-center px-3 py-2 text-[#008080] dark:text-[#76d6d5] bg-teal-50 dark:bg-teal-950/30 rounded-lg group" href="/study-design">
            <span className="material-symbols-outlined text-[20px] mr-3">architecture</span>
            <span className="text-[14px] font-semibold">Study Design</span>
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
            <span>Projects</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="font-medium">Study Design Assistant</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-zinc-400">
              {isDarkMode ? <span className="material-symbols-outlined text-[20px]">light_mode</span> : <span className="material-symbols-outlined text-[20px]">dark_mode</span>}
            </button>
            <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-[12px] font-bold">AT</div>
          </div>
        </header>

        
        <main className="ml-0 lg:ml-[260px] p-10 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6 border-b border-gray-100 dark:border-zinc-800 pb-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-[32px] font-bold tracking-tight leading-tight">Protocol Setup</h2>
              <p className="text-gray-500 dark:text-zinc-400 mt-2 text-[15px]">Define the core architectural logic models of your upcoming clinical framework study patterns.</p>
            </div>
            <div className="w-full md:w-64 text-right">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status Matrix</span>
                <span className="text-[13px] font-semibold text-teal-600 dark:text-teal-400">40% Complete</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#008080] h-full w-[40%] transition-all duration-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-8 space-y-8">
              <section className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm transition-colors">
                <div className="flex items-center gap-2 mb-10 border-b border-gray-100 dark:border-zinc-800 pb-4">
                  <span className="material-symbols-outlined text-[#008080]">account_tree</span>
                  <h3 className="font-semibold text-[16px]">Decision Logic flow</h3>
                </div>
                
                <div className="max-w-md mx-auto text-center mb-12">
                  <p className="text-[13px] text-gray-400 uppercase tracking-widest font-bold mb-4">Core Structural Question</p>
                  <h4 className="text-[20px] font-medium leading-relaxed">"Is an intervention involved in your study layout models?"</h4>
                  
                  <div className="flex justify-center gap-3 mt-8">
                    <button onClick={() => setHasIntervention(true)} className={`px-6 py-2 rounded-md border text-[14px] font-medium transition-all w-28 ${hasIntervention === true ? 'bg-[#008080] text-white border-[#008080]' : 'border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}>Yes</button>
                    <button onClick={() => setHasIntervention(false)} className={`px-6 py-2 rounded-md border text-[14px] font-medium transition-all w-28 flex items-center justify-center gap-2 ${hasIntervention === false ? 'bg-[#008080] text-white border-[#008080]' : 'border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}>
                      {hasIntervention === false && <span className="material-symbols-outlined text-[18px]">check</span>}No
                    </button>
                  </div>
                </div>

                <div className="relative h-[160px] w-full border border-dashed border-gray-200 dark:border-zinc-800 rounded-lg flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950 transition-colors">
                  <div className="px-4 py-1.5 bg-white dark:bg-zinc-900 border border-[#008080] text-[#008080] dark:text-[#76d6d5] text-[12px] font-bold rounded-full shadow-sm mb-2">{hasIntervention ? "Interventional Architecture" : "Observational Framework"}</div>
                  <div className="text-gray-500 text-sm font-medium">Branching: <span className="text-gray-900 dark:text-white font-semibold">{hasIntervention ? "RCT Configuration Model" : "Cohort Protocol Strategy"}</span></div>
                </div>
              </section>
            </div>

    
            <div className="lg:col-span-4 space-y-8">
              <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-gray-200 dark:border-zinc-800 shadow-sm transition-colors text-left">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-100 dark:border-zinc-800 pb-3">
                  <span className="material-symbols-outlined text-gray-400">assignment</span>
                  <h3 className="font-semibold text-[14px]">Protocol Summary</h3>
                </div>
                <ul className="space-y-3 text-[13px]">
                  <li className="flex justify-between py-1 border-b border-gray-50/50 dark:border-zinc-800"><span className="text-gray-400">Study Class:</span><span className="font-medium">{hasIntervention ? "Interventional" : "Observational"}</span></li>
                  <li className="flex justify-between py-1"><span className="text-gray-400">Masking Matrix:</span><span className="font-medium">{hasIntervention ? "Double-Blind" : "Open Status"}</span></li>
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
