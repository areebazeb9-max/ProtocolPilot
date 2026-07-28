"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/", icon: "dashboard" },
  { label: "Study Planner", href: "/study-planner", icon: "calendar_today" },
  { label: "Study Design", href: "/study-design", icon: "architecture" },
  { label: "Methodology", href: "/methodology", icon: "school" },
  { label: "Statistics", href: "/statistics", icon: "insights" },
  { label: "Protocol Preview", href: "/protocol", icon: "assignment" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-[280px] z-40 bg-white dark:bg-[#060e20] border-r border-gray-200 dark:border-[#3e4949] p-6 text-left">
      <div className="mb-10 pl-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[#008080] dark:text-[#76d6d5] text-xl font-bold">science</span>
          <h1 className="text-md font-bold tracking-tight text-gray-900 dark:text-white uppercase">ProtocolPilot</h1>
        </div>
        <p className="text-gray-400 dark:text-[#bdc9c8] text-[9px] uppercase tracking-[0.2em] ml-7 font-bold opacity-60">Precision Research</p>
      </div>

      <button className="mb-6 w-full py-2.5 px-4 bg-[#76d6d5]/10 dark:bg-[#76d6d5] border border-[#76d6d5]/30 text-[#008080] dark:text-[#003737] rounded-lg font-bold flex items-center justify-center gap-2 text-sm">
        <span className="material-symbols-outlined text-md font-bold">add</span>
        New Protocol
      </button>

      <nav className="flex-1 space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "text-[#008080] dark:text-[#dae2fd] bg-teal-50/60 dark:bg-[#2d3449]/50 font-semibold border border-teal-100/50 dark:border-[#3e4949]/30"
                  : "text-gray-500 dark:text-[#bdc9c8] hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-200 dark:border-[#3e4949] px-2">
        <div className="flex items-center gap-3 p-2.5 bg-gray-50 dark:bg-[#171f33] rounded-xl border border-gray-100 dark:border-zinc-800/50">
          <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">AT</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold leading-none dark:text-white">Dr. Aris</p>
            <p className="text-[10px] text-gray-400 uppercase font-semibold mt-1">Investigator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}