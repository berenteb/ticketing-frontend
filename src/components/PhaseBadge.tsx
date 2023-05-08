import { Badge } from "@chakra-ui/react";
import { Phase, PhaseString } from "../types/ticket.type";

interface PhaseBadgeProps {
  phase: Phase;
}

export function PhaseBadge({ phase }: PhaseBadgeProps) {
  const phaseObject = PhaseString[phase];
  return <Badge colorScheme={phaseObject.color}>{phaseObject.label}</Badge>;
}
