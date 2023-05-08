import { BoardType, BoardTypeDto } from "../types/board.type";
import { LabelType, LabelTypeDto } from "../types/label.type";
import { TicketType, TicketTypeDto } from "../types/ticket.type";

export function convertLabel(dto: LabelTypeDto): LabelType {
  return { ...dto, createdAt: new Date(dto.createdAt) };
}

export function convertTicket(dto: TicketTypeDto): TicketType {
  return { ...dto, labels: dto.labels?.map(convertLabel) || [] };
}

export function convertBoard(dto: BoardTypeDto): BoardType {
  return { ...dto, tickets: dto.tickets?.map(convertTicket) || [] };
}
