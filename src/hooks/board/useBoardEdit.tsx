import { useState } from "react";
import { BoardEntity, UpdateBoardEntityDto } from "../../types/board";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useBoardEdit = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const edit = (data: UpdateBoardEntityDto, callback: () => void) => {
    setLoading(true);
    axios
      .patch<BoardEntity>(`${Configuration.BACKEND_URL}/boards/${id}`, data)
      .then(callback)
      .catch(() => {
        setError("Board request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { edit, editLoading: loading, editError: error };
};
