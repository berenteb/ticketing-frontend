import { useLayoutEffect, useState } from "react";
import { BoardEntity } from "../../types/board";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useBoards = () => {
  const [boards, setBoards] = useState<BoardEntity[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    setLoading(true);
    axios
      .get<BoardEntity[]>(`${Configuration.BACKEND_URL}/boards`)
      .then((res) => {
        setBoards(res.data);
      })
      .catch(() => {
        setError("Board request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { boards, loading, error };
};
