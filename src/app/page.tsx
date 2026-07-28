"use client";
import { useState } from "react";

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => { setIsDarkMode(!isDarkMode); if (!isDarkMode) { document.documentElement.classList.add("dark"); } else { document.documentElement.classList.remove("dark"); } };

  return (
    <div className={`min-h-screen flex overflow-x-hidden font-sans transition-colors duration-300 ${isDarkMode ? 'dark bg-[#0b1326] text-[#dae2fd]' : 'bg-[#ffffff] text-gray-900'}`}>
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-[280px] z-40 bg-white dark:bg-[#060e20] border-r border-gray-200 dark:border-[#3e4949] p-6 text-left">
        <div className="mb-10 pl-2">
          <div className="flex items-center gap-2 mb-1"><span className="material-symbols-outlined text-[#008080] dark:text-[#76d6d5] text-xl font-bold">science</span><h1 className="text-md font-bold tracking-tight text-gray-900 dark:text-white uppercase">ProtocolPilot</h1></div>
          <p className="text-gray-400 dark:text-[#bdc9c8] text-[9px] uppercase tracking-[0.2em] ml-7 font-bold opacity-60">Precision Research</p>
        </div>
        <button className="mb-6 w-full py-2.5 px-4 bg-[#76d6d5]/10 dark:bg-[#76d6d5] border border-[#76d6d5]/30 text-[#008080] dark:text-[#003737] rounded-lg font-bold flex items-center justify-center gap-2 text-sm"><span className="material-symbols-outlined text-md font-bold">add</span>New Protocol</button>
        <nav className="flex-1 space-y-1 px-2">
          <a className="flex items-center gap-3 px-3 py-2 text-[#008080] dark:text-[#dae2fd] bg-teal-50/60 dark:bg-[#2d3449]/50 rounded-lg font-semibold border border-teal-100/50 dark:border-[#3e4949]/30" href="/"><span className="material-symbols-outlined text-lg">dashboard</span><span className="text-sm">Dashboard</span></a>
          <a className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-[#bdc9c8] hover:text-gray-900 dark:hover:text-white rounded-lg" href="/study-planner"><span className="material-symbols-outlined text-lg">calendar_today</span><span className="text-sm">Study Planner</span></a>
          <a className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-[#bdc9c8] hover:text-gray-900 dark:hover:text-white rounded-lg" href="/study-design"><span className="material-symbols-outlined text-lg">architecture</span><span className="text-sm">Study Design</span></a>
          <a className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-[#bdc9c8] hover:text-gray-900 dark:hover:text-white rounded-lg" href="/methodology"><span className="material-symbols-outlined text-lg">school</span><span className="text-sm">Methodology</span></a>
          <a className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-[#bdc9c8] hover:text-gray-900 dark:hover:text-white rounded-lg" href="/protocol"><span className="material-symbols-outlined text-lg">assignment</span><span className="text-sm">Protocol Check</span></a>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-[#3e4949] px-2"><div className="flex items-center gap-3 p-2.5 bg-gray-50 dark:bg-[#171f33] rounded-xl border border-gray-100 dark:border-zinc-800/50"><div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">AT</div><div className="flex-1 min-w-0"><p className="text-xs font-bold leading-none dark:text-white">Dr. Aris</p><p className="text-[10px] text-gray-400 uppercase font-semibold mt-1">Investigator</p></div></div></div>
      </aside>
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="flex justify-between items-center w-full h-16 px-8 sticky top-0 z-50 bg-white/80 dark:bg-[#0b1326]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#3e4949]">
          <div className="flex items-center bg-gray-50 dark:bg-[#171f33] border border-gray-200 dark:border-zinc-800 rounded-lg px-4 py-1.5 w-80"><span className="material-symbols-outlined text-gray-400 text-md">search</span><input className="bg-transparent border-none focus:ring-0 text-xs w-full ml-2 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none" placeholder="Search research protocols..." type="text" /></div>
          <div className="flex items-center gap-6">
            <button onClick={toggleTheme} className="text-gray-500 dark:text-[#bdc9c8] hover:opacity-80 transition-all">{isDarkMode ? <span className="material-symbols-outlined text-[20px]">light_mode</span> : <span className="material-symbols-outlined text-[20px]">dark_mode</span>}</button>
            <div className="text-[10px] font-bold text-gray-400 dark:text-[#bdc9c8]/70 border border-gray-200 dark:border-[#3e4949] rounded px-2.5 py-1 uppercase bg-gray-50 dark:bg-[#131b2e]">METRO HEALTH CLINICAL</div>
          </div>
        </header>
        <main className="ml-0 lg:ml-[280px] p-8 max-w-[1400px] w-full mx-auto text-left space-y-8 flex-1">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b border-gray-100 dark:border-zinc-800 pb-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">Welcome back, Dr. Aris</h2>
              <p className="text-gray-500 dark:text-zinc-400 mt-1.5 text-sm leading-relaxed">Your clinical portfolio currently contains 8 active protocols and 3 pending submissions. Review your recent activity and upcoming milestones below.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-gray-50 dark:bg-[#131b2e] border border-gray-100 dark:border-zinc-800 p-4 rounded-xl text-center w-28 shadow-sm"><span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Active Projects</span><span className="text-2xl font-extrabold text-gray-900 dark:text-white">08</span></div>
              <div className="bg-gray-50 dark:bg-[#131b2e] border border-gray-100 dark:border-zinc-800 p-4 rounded-xl text-center w-28 shadow-sm"><span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Next Deadline</span><span className="text-2xl font-extrabold text-red-500 dark:text-red-400">2d</span></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8 bg-teal-50/20 dark:bg-[#131b2e] border border-teal-100 dark:border-zinc-800 p-8 rounded-xl flex flex-col justify-between text-left relative overflow-hidden transition-colors shadow-sm">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 text-[#008080] dark:text-[#76d6d5] text-[10px] font-bold uppercase rounded-full tracking-wider"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />Resume Drafting</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug max-w-xl">Protocol CR-204: Neuro-Visual Response in Elderly Patients</h3>
                <p className="text-xs text-gray-500 dark:text-[#bdc9c8]/70 leading-relaxed max-w-xl">Section 4: Patient Recruitment Methodology is 65% complete. Research suggests adding a diversity inclusion statement for local demographics.</p>
              </div>
              <div className="flex gap-3 mt-8">
                <button className="px-5 py-2 bg-[#008080] dark:bg-[#76d6d5] text-white dark:text-[#003737] font-semibold text-xs rounded-lg hover:opacity-90 transition-all">Continue Draft</button>
                <button className="px-5 py-2 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold text-xs rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">Preview Protocol</button>
              </div>
            </div>
            <div className="lg:col-span-4 bg-gray-50 dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 p-8 rounded-xl flex flex-col items-center justify-center text-center transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#222a3d] flex items-center justify-center text-gray-400 dark:text-zinc-500 mb-4 border border-gray-200 dark:border-zinc-800"><span className="material-symbols-outlined text-2xl">assignment_add</span></div>
              <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2">Create New Study</h4>
              <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">Start a fresh clinical protocol from pre-approved institutional templates.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-9 space-y-4">
              <div className="flex justify-between items-center"><h3 className="text-sm font-bold text-gray-900 dark:text-white">My Research Projects</h3><span className="text-xs text-gray-400 font-medium">View All Projects</span></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm text-left flex flex-col justify-between min-h-[160px]">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold uppercase rounded mb-3 tracking-wider">In Progress</span>
                    <h4 className="text-xs font-bold leading-tight mb-2">Surgical Robotics: Phase II Interface Stability</h4>
                    <p className="text-[11px] text-gray-400 line-clamp-2">Investigating haptic feedback latency outcomes across robotic-assisted procedures.</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm text-left flex flex-col justify-between min-h-[160px]">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-gray-200/60 dark:bg-zinc-700/50 text-gray-600 dark:text-zinc-300 text-[9px] font-bold uppercase rounded mb-3 tracking-wider">Draft</span>
                    <h4 className="text-xs font-bold leading-tight mb-2">Oncology Biomarkers for Early Detection</h4>
                    <p className="text-[11px] text-gray-400 line-clamp-2">Initial literature review and cohort identification phase for new screening tools.</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm text-left flex flex-col justify-between min-h-[160px]">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-teal-500/10 text-[#008080] dark:text-[#76d6d5] text-[9px] font-bold uppercase rounded mb-3 tracking-wider">Complete</span>
                    <h4 className="text-xs font-bold leading-tight mb-2">Vaccine Efficacy Post-Storage Analysis</h4>
                    <p className="text-[11px] text-gray-400 line-clamp-2">Final results submitted to the Institutional Review Board for final clearance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Deadlines</h3>
              <div className="bg-white dark:bg-[#131b2e] border-l-4 border-red-500 border-y border-r border-gray-200 dark:border-zinc-800 rounded-r-xl p-4 shadow-sm text-left">
                <p className="text-[9px] font-bold text-red-500 uppercase mb-1 tracking-wider">Critical &bull; 48h Remaining</p>
                <h5 className="text-xs font-bold text-gray-900 dark:text-white mb-1">Ethics Submission</h5>
                <p className="text-[11px] text-gray-400 leading-relaxed">Protocol CR-204 needs final board signature before end of week.</p>
              </div>
              <div className="bg-white dark:bg-[#131b2e] border-l-4 border-[#76d6d5] border-y border-r border-gray-200 dark:border-zinc-800 rounded-r-xl p-4 shadow-sm text-left">
                <p className="text-[9px] font-bold text-[#008080] dark:text-[#76d6d5] uppercase mb-1 tracking-wider">Institutional &bull; 5 Days</p>
                <h5 className="text-xs font-bold text-gray-900 dark:text-white mb-1">Abstract Deadline</h5>
                <p className="text-[11px] text-gray-400 leading-relaxed">Global Research Summit 2024 portal closes.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
