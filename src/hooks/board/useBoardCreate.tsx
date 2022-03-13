import { useState } from "react";
import { BoardEntity, CreateBoardEntityDto } from "../../types/board";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useBoardCreate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const create = (data: CreateBoardEntityDto, callback: () => void) => {
    setLoading(true);
    axios
      .post<BoardEntity>(`${Configuration.BACKEND_URL}/boards`, data)
      .then(callback)
      .catch(() => {
        setError("Board request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { create, createLoading: loading, createError: error };
};
