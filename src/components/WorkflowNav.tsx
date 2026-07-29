"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { workflowSteps } from "@/lib/workflowSteps";

export default function WorkflowNav() {
  const pathname = usePathname();
  const currentIndex = workflowSteps.findIndex((step) => step.href === pathname);

  // If this page isn't part of the 5-step workflow, render nothing.
  if (currentIndex === -1) return null;

  const previousStep = currentIndex > 0 ? workflowSteps[currentIndex - 1] : null;
  const nextStep =
    currentIndex < workflowSteps.length - 1 ? workflowSteps[currentIndex + 1] : null;

  // Study Planner's "Back" goes to Dashboard, since it's step 1 of 5.
  const backHref = previousStep ? previousStep.href : "/";
  const backLabel = previousStep ? previousStep.label : "Dashboard";

  return (
    <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100 dark:border-zinc-800">
      <Link
        href={backHref}
        className="px-5 py-2 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all"
      >
        ← Back to {backLabel}
      </Link>

      {nextStep && (
        <Link
          href={nextStep.href}
          className="px-5 py-2 bg-[#008080] dark:bg-[#76d6d5] text-white dark:text-[#003737] font-semibold text-sm rounded-lg hover:opacity-90 transition-all"
        >
          Continue to {nextStep.label} →
        </Link>
      )}
    </div>
  );
}