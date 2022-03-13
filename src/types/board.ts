export type BoardEntity = {
  _id: string;
  createdAt: Date;
  title: string;
};

export type CreateBoardEntityDto = {
  title: string;
};

export type UpdateBoardEntityDto = {
  title?: string;
};
