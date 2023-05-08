import { PrismaDocumentType } from "./prismaDocument.type";
import { TicketType, TicketTypeDto } from "./ticket.type";

export type BoardPatchDto = Pick<BoardType, "title">;

export type BoardTypeDto = { tickets: TicketTypeDto[] } & Omit<
  BoardType,
  "tickets"
>;

export type BoardType = {
  title: string;
  tickets: TicketType[];
} & PrismaDocumentType;
