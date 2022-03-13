export type PhaseType = {
  key: string;
  title: string;
};
export const Phases: PhaseType[] = [
  {
    key: "CREATED",
    title: "Created",
  },
  {
    key: "IN_PROGRESS",
    title: "In progress",
  },
  {
    key: "UNDER_REVIEW",
    title: "Under review",
  },
  {
    key: "CLOSED",
    title: "Closed",
  },
];

export const getPhaseTitle = (key?: string) => {
  return Phases.find((p) => p.key === key)?.title || "Unknown";
};
