import { useLayoutEffect, useState } from "react";
import { BoardEntity } from "../../types/board";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useBoard = (id: string) => {
  const [board, setBoard] = useState<BoardEntity>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    if (id !== "new") {
      setLoading(true);
      axios
        .get<BoardEntity>(`${Configuration.BACKEND_URL}/boards/${id}`)
        .then((res) => {
          setBoard(res.data);
        })
        .catch(() => {
          setError("Board request failed.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return { board, boardLoading: loading, boardError: error };
};
