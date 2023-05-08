import { PrismaDocumentType } from "./prismaDocument.type";

export type LabelPatchDto = Pick<LabelType, "name" | "color">;

export type LabelTypeDto = { createdAt: string } & Omit<LabelType, "createdAt">;

export type LabelType = {
  name: string;
  color: string;
  createdAt: Date;
} & PrismaDocumentType;
