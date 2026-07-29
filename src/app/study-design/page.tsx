"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import WorkflowNav from "@/components/WorkflowNav";
import Header from "@/components/Header";

export default function StudyDesign() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
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
    <div className={`min-h-screen flex overflow-x-hidden font-sans transition-colors duration-300 ${isDarkMode ? 'dark bg-[#0b1326] text-[#dae2fd]' : 'bg-[#ffffff] text-gray-900'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="ml-0 lg:ml-[280px] p-10 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6 border-b border-gray-100 dark:border-zinc-800 pb-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-[32px] font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Protocol Setup</h2>
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
              <section className="bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm transition-colors">
                <div className="flex items-center gap-2 mb-10 border-b border-gray-100 dark:border-zinc-800 pb-4">
                  <span className="material-symbols-outlined text-[#008080]">account_tree</span>
                  <h3 className="font-semibold text-[16px] text-gray-900 dark:text-white">Decision Logic flow</h3>
                </div>

                <div className="max-w-md mx-auto text-center mb-12">
                  <p className="text-[13px] text-gray-400 uppercase tracking-widest font-bold mb-4">Core Structural Question</p>
                  <h4 className="text-[20px] font-medium leading-relaxed text-gray-900 dark:text-white">&quot;Is an intervention involved in your study layout models?&quot;</h4>

                  <div className="flex justify-center gap-3 mt-8">
                    <button onClick={() => setHasIntervention(true)} className={`px-6 py-2 rounded-md border text-[14px] font-medium transition-all w-28 ${hasIntervention === true ? 'bg-[#008080] text-white border-[#008080]' : 'border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}>Yes</button>
                    <button onClick={() => setHasIntervention(false)} className={`px-6 py-2 rounded-md border text-[14px] font-medium transition-all w-28 flex items-center justify-center gap-2 ${hasIntervention === false ? 'bg-[#008080] text-white border-[#008080]' : 'border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}>
                      {hasIntervention === false && <span className="material-symbols-outlined text-[18px]">check</span>}No
                    </button>
                  </div>
                </div>

                <div className="relative h-[160px] w-full border border-dashed border-gray-200 dark:border-zinc-800 rounded-lg flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0b1326] transition-colors">
                  <div className="px-4 py-1.5 bg-white dark:bg-[#131b2e] border border-[#008080] text-[#008080] dark:text-[#76d6d5] text-[12px] font-bold rounded-full shadow-sm mb-2">{hasIntervention ? "Interventional Architecture" : "Observational Framework"}</div>
                  <div className="text-gray-500 text-sm font-medium">Branching: <span className="text-gray-900 dark:text-white font-semibold">{hasIntervention ? "RCT Configuration Model" : "Cohort Protocol Strategy"}</span></div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <section className="bg-white dark:bg-[#131b2e] rounded-xl p-6 border border-gray-200 dark:border-zinc-800 shadow-sm transition-colors text-left">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-100 dark:border-zinc-800 pb-3">
                  <span className="material-symbols-outlined text-gray-400">assignment</span>
                  <h3 className="font-semibold text-[14px] text-gray-900 dark:text-white">Protocol Summary</h3>
                </div>
                <ul className="space-y-3 text-[13px]">
                  <li className="flex justify-between py-1 border-b border-gray-50/50 dark:border-zinc-800"><span className="text-gray-400">Study Class:</span><span className="font-medium text-gray-900 dark:text-white">{hasIntervention ? "Interventional" : "Observational"}</span></li>
                  <li className="flex justify-between py-1"><span className="text-gray-400">Masking Matrix:</span><span className="font-medium text-gray-900 dark:text-white">{hasIntervention ? "Double-Blind" : "Open Status"}</span></li>
                </ul>
              </section>
            </div>
          </div>
        <WorkflowNav />
        </main>
      </div>
    </div>
  );
}