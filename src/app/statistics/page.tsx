"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import WorkflowNav from "@/components/WorkflowNav";
import Header from "@/components/Header";
import { useProtocol } from "@/context/ProtocolContext";

export default function StatisticsPlanning() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const {
    variableType,
    setVariableType,
    measurementScale,
    setMeasurementScale,
    groupStructure,
    setGroupStructure,
    distribution,
    setDistribution,
  } = useProtocol();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const selectClasses =
    "w-full bg-gray-50 dark:bg-[#0b1326] px-3 py-2 rounded-lg text-sm border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500";

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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 p-5 rounded-2xl shadow-sm transition-colors">
                <h3 className="text-sm font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="material-symbols-outlined text-[#008080] dark:text-[#76d6d5] text-xl">schema</span>
                  <span>Selection Parameters</span>
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">Variable Type</label>
                    <select
                      value={variableType}
                      onChange={(e) => setVariableType(e.target.value)}
                      className={selectClasses}
                    >
                      <option value="">Select...</option>
                      <option value="Outcome variable">Outcome variable</option>
                      <option value="Exposure variable">Exposure variable</option>
                      <option value="Confounding variable">Confounding variable</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">Measurement Scale</label>
                    <select
                      value={measurementScale}
                      onChange={(e) => setMeasurementScale(e.target.value)}
                      className={selectClasses}
                    >
                      <option value="">Select...</option>
                      <option value="Continuous">Continuous</option>
                      <option value="Categorical">Categorical</option>
                      <option value="Ordinal">Ordinal</option>
                      <option value="Binary">Binary</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">Group Structure</label>
                    <select
                      value={groupStructure}
                      onChange={(e) => setGroupStructure(e.target.value)}
                      className={selectClasses}
                    >
                      <option value="">Select...</option>
                      <option value="Independent groups">Independent groups</option>
                      <option value="Paired/matched groups">Paired/matched groups</option>
                      <option value="Single group">Single group</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">Distribution</label>
                    <select
                      value={distribution}
                      onChange={(e) => setDistribution(e.target.value)}
                      className={selectClasses}
                    >
                      <option value="">Select...</option>
                      <option value="Normal distribution">Normal distribution</option>
                      <option value="Non-normal distribution">Non-normal distribution</option>
                      <option value="Unknown / not yet tested">Unknown / not yet tested</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <WorkflowNav />
        </div>
      </div>
    </div>
  );
}
