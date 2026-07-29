export type WorkflowStep = {
  label: string;
  href: string;
};

export const workflowSteps: WorkflowStep[] = [
  { label: "Study Planner", href: "/study-planner" },
  { label: "Study Design", href: "/study-design" },
  { label: "Methodology", href: "/methodology" },
  { label: "Statistics", href: "/statistics" },
  { label: "Protocol Preview", href: "/protocol" },
];