"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WorkflowNav from "@/components/WorkflowNav";
import { useProtocol } from "@/context/ProtocolContext";
import { generateProtocolPdf } from "@/lib/generatePdf";

export default function ProtocolCompleteness() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const {
    studyTitle,
    hasIntervention,
    populationDescription,
    ageMin,
    ageMax,
    variableType,
    measurementScale,
    groupStructure,
    distribution,
  } = useProtocol();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleExport = () => {
    generateProtocolPdf({
      studyTitle,
      hasIntervention,
      populationDescription,
      ageMin,
      ageMax,
      variableType,
      measurementScale,
      groupStructure,
      distribution,
    });
  };

  const isFilled = (value: string | boolean | null) =>
    value !== "" && value !== null && value !== undefined;

  const sections = [
    { label: "Study Planner", complete: isFilled(studyTitle) },
    { label: "Study Design", complete: isFilled(hasIntervention) },
    {
      label: "Methodology",
      complete: isFilled(populationDescription) && isFilled(ageMin) && isFilled(ageMax),
    },
    {
      label: "Statistics",
      complete:
        isFilled(variableType) &&
        isFilled(measurementScale) &&
        isFilled(groupStructure) &&
        isFilled(distribution),
    },
  ];

  const totalFields = 9;
  const filledCount = [
    studyTitle,
    hasIntervention,
    populationDescription,
    ageMin,
    ageMax,
    variableType,
    measurementScale,
    groupStructure,
    distribution,
  ].filter(isFilled).length;

  const completionPercent = Math.round((filledCount / totalFields) * 100);

  return (
    <div className={`min-h-screen flex overflow-x-hidden font-sans transition-colors duration-300 ${isDarkMode ? 'dark bg-[#0b1326] text-[#dae2fd]' : 'bg-[#ffffff] text-gray-900'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="ml-0 lg:ml-[280px] p-8 max-w-[1440px] w-full text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <nav className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                <span>Projects</span>
                <span className="opacity-30">/</span>
                <span className="text-[#008080] dark:text-[#76d6d5]">Protocol Preview</span>
              </nav>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Protocol Completeness Check</h2>
              <p className="text-gray-500 dark:text-zinc-400 mt-2 max-w-2xl text-sm leading-relaxed">
                Live progress based on the information you&apos;ve entered across each step.
              </p>
            </div>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-6 py-3 bg-[#008080] dark:bg-[#76d6d5] text-white dark:text-[#003737] font-semibold text-sm rounded-lg hover:opacity-90 transition-all shadow-lg shadow-teal-500/20 shrink-0"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Export as PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="col-span-12 md:col-span-4 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 p-8 flex flex-col items-center justify-center text-center rounded-xl shadow-sm transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Overall Completeness</h3>
              <div className="relative w-32 h-32 flex items-center justify-center border-4 border-teal-50 dark:border-teal-950/40 rounded-full mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{completionPercent}%</span>
                  <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase mt-0.5">
                    {completionPercent === 100 ? "Ready" : completionPercent === 0 ? "Not Started" : "In Progress"}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-[220px] leading-relaxed">
                {completionPercent === 100
                  ? "All sections are filled in. Your protocol is ready to export."
                  : `${filledCount} of ${totalFields} fields completed across your protocol.`}
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#008080] dark:text-[#76d6d5]">fact_check</span>
                  Section Checklist
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 rounded-full">
                  {sections.filter((s) => s.complete).length} of {sections.length} sections
                </span>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-zinc-800">
                {sections.map((section) => (
                  <div key={section.label} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`material-symbols-outlined ${
                          section.complete ? "text-teal-500" : "text-gray-300 dark:text-zinc-600"
                        }`}
                      >
                        {section.complete ? "check_circle" : "radio_button_unchecked"}
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{section.label}</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase ${
                        section.complete ? "text-teal-600 dark:text-teal-400" : "text-gray-400"
                      }`}
                    >
                      {section.complete ? "Complete" : "Incomplete"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <WorkflowNav />
        </main>
      </div>
    </div>
  );
}