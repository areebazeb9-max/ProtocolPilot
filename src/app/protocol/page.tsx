"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function ProtocolCompleteness() {
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
        <main className="ml-0 lg:ml-[280px] p-8 max-w-[1440px] w-full text-left">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <nav className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                <a className="hover:text-[#008080] transition-colors" href="#">Projects</a>
                <span className="opacity-30">/</span>
                <a className="hover:text-[#008080] transition-colors" href="#">Efficacy Trial A-42</a>
                <span className="opacity-30">/</span>
                <span className="text-[#008080] dark:text-[#76d6d5]">Review &amp; Export</span>
              </nav>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Protocol Completeness Check</h2>
              <p className="text-gray-500 dark:text-zinc-400 mt-2 max-w-2xl text-sm leading-relaxed">Final validation of your clinical protocol against standard reporting guidelines (CONSORT/SPIRIT).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="col-span-12 md:col-span-4 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 p-8 flex flex-col items-center justify-center text-center rounded-xl shadow-sm transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Overall Completeness</h3>
              <div className="relative w-32 h-32 flex items-center justify-center border-4 border-teal-50 dark:border-teal-950/40 rounded-full mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-gray-900 dark:text-white">92%</span>
                  <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase mt-0.5">Ready</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-[220px] leading-relaxed">Your protocol is nearly ready for institutional review board submission.</p>
            </div>

            <div className="col-span-12 md:col-span-8 bg-gray-50 dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 p-8 rounded-xl relative overflow-hidden transition-colors flex flex-col justify-center">
              <div className="flex items-start gap-5 relative z-10 text-left">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-[#008080] dark:text-[#76d6d5] shrink-0 border border-teal-100 dark:border-teal-900">
                  <span className="material-symbols-outlined text-[28px]">auto_awesome</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#008080] dark:text-[#76d6d5] mb-2">AI Protocol Assistant</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                    AI Suggestion: Consider adding a secondary outcome to strengthen your study&apos;s impact. Analysis suggests that including &quot;Patient-Reported Quality of Life (QoL)&quot; would align this study with current FDA submission trends for this therapeutic area.
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