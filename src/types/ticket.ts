export type TicketEntity = {
  _id: string;
  createdAt: Date;
  title: string;
  description?: string;
  phase?: string;
  labels?: string[];
  board?: string;
};

export type CreateTicketEntityDto = {
  title: string;
  description?: string;
  phase?: string;
  labels?: string[];
  board: string;
};

export type UpdateTicketEntityDto = {
  title?: string;
  description?: string;
  phase?: string;
  labels?: string[];
  board?: string;
};
