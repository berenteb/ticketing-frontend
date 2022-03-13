export type LabelEntity = {
  _id: string;
  createdAt: Date;
  name: string;
  color: string;
};

export type CreateLabelEntityDto = {
  name: string;
  color?: string;
};

export type UpdateLabelEntityDto = {
  name?: string;
  color?: string;
};
