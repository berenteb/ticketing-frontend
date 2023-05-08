import { LabelType, LabelTypeDto } from "./label.type";
import { PrismaDocumentType } from "./prismaDocument.type";

export type TicketPatchDto = Pick<
  TicketType,
  "name" | "description" | "boardId"
>;

export type TicketTypeDto = {
  labels: LabelTypeDto[];
} & Omit<TicketType, "labels">;

export type TicketType = {
  name: string;
  description: string;
  phase: Phase;
  boardId: number;
  labels: LabelType[];
} & PrismaDocumentType;

export enum Phase {
  CREATED = "CREATED",
  IN_PROGRESS = "IN_PROGRESS",
  UNDER_REVIEW = "UNDER_REVIEW",
  CLOSED = "CLOSED",
}

export const PhaseString: Record<Phase, { label: string; color: string }> = {
  [Phase.CREATED]: { label: "Created", color: "gray" },
  [Phase.IN_PROGRESS]: { label: "In Progress", color: "blue" },
  [Phase.UNDER_REVIEW]: { label: "Under Review", color: "yellow" },
  [Phase.CLOSED]: { label: "Closed", color: "green" },
};
