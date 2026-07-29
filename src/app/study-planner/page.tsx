"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WorkflowNav from "@/components/WorkflowNav";
import { useProtocol } from "@/context/ProtocolContext";

export default function StudyPlanner() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { studyTitle, setStudyTitle } = useProtocol();

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
          <div className="text-left mb-8 border-b border-gray-100 dark:border-zinc-800 pb-6">
            <h2 className="text-[32px] font-bold tracking-tight text-gray-900 dark:text-white">Study Planner Timeline</h2>
            <p className="text-gray-500 dark:text-zinc-400 mt-2 text-[15px]">Organize clinical stages, phase progression paths, and critical path milestones smoothly.</p>
          </div>

          <div className="bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 rounded-xl p-8 text-left shadow-sm space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                Study Title
              </label>
              <input
                type="text"
                value={studyTitle}
                onChange={(e) => setStudyTitle(e.target.value)}
                placeholder="e.g., Efficacy of Telemedicine in Post-Surgical Recovery"
                className="w-full bg-gray-50 dark:bg-[#0b1326] border border-gray-200 dark:border-zinc-800 p-4 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <h3 className="font-semibold text-[16px] mb-2 text-gray-900 dark:text-white">Workspace Milestones</h3>
              <p className="text-[14px] text-gray-400 dark:text-zinc-500">Your scheduling dashboard template setup has been generated error-free to support dual theme configurations layout parameters perfectly.</p>
            </div>
          </div>

          <WorkflowNav />
        </main>
      </div>
    </div>
  );
}