"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { workflowSteps } from "@/lib/workflowSteps";
import { useProtocol } from "@/context/ProtocolContext";
import { useAuth } from "@/context/AuthContext";

export default function WorkflowNav() {
  const pathname = usePathname();
  const currentIndex = workflowSteps.findIndex((step) => step.href === pathname);
  const { saveProgress, isSaving, lastSavedAt } = useProtocol();
  const { user } = useAuth();

  if (currentIndex === -1) return null;

  const previousStep = currentIndex > 0 ? workflowSteps[currentIndex - 1] : null;
  const nextStep =
    currentIndex < workflowSteps.length - 1 ? workflowSteps[currentIndex + 1] : null;

  const backHref = previousStep ? previousStep.href : "/";
  const backLabel = previousStep ? previousStep.label : "Dashboard";

  return (
    <div className="mt-10 pt-6 border-t border-gray-100 dark:border-zinc-800 space-y-4">
      {user ? (
        <div className="flex items-center gap-3">
          <button
            onClick={saveProgress}
            disabled={isSaving}
            className="px-4 py-2 bg-teal-50 dark:bg-teal-950/30 text-[#008080] dark:text-[#76d6d5] font-semibold text-sm rounded-lg hover:bg-teal-100 dark:hover:bg-teal-950/50 transition-all disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Progress"}
          </button>
          {lastSavedAt && !isSaving && (
            <span className="text-xs text-gray-400">
              Saved at {lastSavedAt.toLocaleTimeString()}
            </span>
          )}
        </div>
      ) : (
        <p className="text-xs text-gray-400">
          <Link href="/login" className="text-[#008080] dark:text-[#76d6d5] font-semibold hover:underline">
            Log in
          </Link>{" "}
          to save your progress permanently.
        </p>
      )}

      <div className="flex justify-between items-center">
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
    </div>
  );
}