"use client";
import { usePathname } from "next/navigation";
import { workflowSteps } from "@/lib/workflowSteps";

type HeaderProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const pathname = usePathname();
  const currentIndex = workflowSteps.findIndex((step) => step.href === pathname);
  const isInWorkflow = currentIndex !== -1;

  return (
    <header className="flex justify-between items-center w-full h-16 px-8 sticky top-0 z-50 bg-white/80 dark:bg-[#0b1326]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#3e4949]">
      <div className="flex items-center bg-gray-50 dark:bg-[#171f33] border border-gray-200 dark:border-zinc-800 rounded-lg px-4 py-1.5 w-80">
        <span className="material-symbols-outlined text-gray-400 text-md">search</span>
        <input
          className="bg-transparent border-none focus:ring-0 text-xs w-full ml-2 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none"
          placeholder="Search research protocols..."
          type="text"
        />
      </div>

      <div className="flex items-center gap-6">
        {isInWorkflow && (
          <span className="text-[11px] font-bold text-[#008080] dark:text-[#76d6d5] uppercase tracking-wider border border-[#008080]/30 dark:border-[#76d6d5]/30 rounded-full px-3 py-1">
            Step {currentIndex + 1} of {workflowSteps.length}
          </span>
        )}
        <button
          onClick={toggleTheme}
          className="text-gray-500 dark:text-[#bdc9c8] hover:opacity-80 transition-all"
        >
          {isDarkMode ? (
            <span className="material-symbols-outlined text-[20px]">light_mode</span>
          ) : (
            <span className="material-symbols-outlined text-[20px]">dark_mode</span>
          )}
        </button>
        <div className="text-[10px] font-bold text-gray-400 dark:text-[#bdc9c8]/70 border border-gray-200 dark:border-[#3e4949] rounded px-2.5 py-1 uppercase bg-gray-50 dark:bg-[#131b2e]">
          METRO HEALTH CLINICAL
        </div>
      </div>
    </header>
  );
}