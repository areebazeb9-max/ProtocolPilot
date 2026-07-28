"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Methodology() {
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
        <main className="ml-0 lg:ml-[280px] p-10 max-w-[1200px] mx-auto w-full min-h-[calc(100vh-56px)]">

          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-[32px] font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Methodology Builder</h2>
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
              <details className="bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden group shadow-sm transition-colors" open>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-[#008080] dark:text-[#76d6d5] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">groups</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">Target Population</h3>
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
                      <textarea className="w-full bg-gray-50 dark:bg-[#0b1326] p-3 border border-gray-200 dark:border-zinc-800 rounded-lg text-[14px] focus:ring-2 focus:ring-teal-500 outline-none placeholder-gray-400 text-gray-900 dark:text-white" placeholder="e.g. Adults with hypertension..." rows={3}></textarea>
                    </div>

                    <div className="space-y-1.5 flex flex-col text-left">
                      <label className="text-[12px] font-semibold text-gray-500 dark:text-zinc-400">Age Range</label>
                      <div className="flex items-center gap-3 mt-auto">
                        <input className="w-full bg-gray-50 dark:bg-[#0b1326] p-2.5 border border-gray-200 dark:border-zinc-800 rounded-lg text-[14px] focus:ring-2 focus:ring-teal-500 outline-none text-gray-900 dark:text-white" placeholder="Min" type="number" />
                        <span className="text-gray-400 text-[12px] font-medium">to</span>
                        <input className="w-full bg-gray-50 dark:bg-[#0b1326] p-2.5 border border-gray-200 dark:border-zinc-800 rounded-lg text-[14px] focus:ring-2 focus:ring-teal-500 outline-none text-gray-900 dark:text-white" placeholder="Max" type="number" />
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