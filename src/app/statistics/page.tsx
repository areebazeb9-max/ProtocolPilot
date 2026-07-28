"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function StatisticsPlanning() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

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
        <div className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-8">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-1">
              <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">
                <a className="hover:text-[#008080] transition-colors" href="#">Projects</a>
                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                <a className="hover:text-[#008080] transition-colors" href="#">Phase 3 Trial</a>
                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                <span className="text-[#008080] dark:text-[#76d6d5]">Statistics</span>
              </nav>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Statistics Planning</h2>
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
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 p-5 rounded-2xl shadow-sm transition-colors">
                <h3 className="text-sm font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="material-symbols-outlined text-[#008080] dark:text-[#76d6d5] text-xl">schema</span>
                  <span>Selection Parameters</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-[#008080] dark:text-[#76d6d5] flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">Variable Type</label>
                      <div className="bg-gray-50 dark:bg-[#0b1326] px-3 py-2 rounded-lg text-sm border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white">Outcome variable</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-[#008080] dark:text-[#76d6d5] flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">Measurement Scale</label>
                      <div className="bg-gray-50 dark:bg-[#0b1326] px-3 py-2 rounded-lg text-sm border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white">Continuous</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}