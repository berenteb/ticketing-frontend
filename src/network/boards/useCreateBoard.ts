import axios from "axios";
import { useMutation } from "react-query";
import { BoardPatchDto } from "../../types/board.type";

export function useCreateBoard() {
  return useMutation({
    mutationFn: async (board: BoardPatchDto) => {
      const response = await axios.post("/boards", board);
      return response.data;
    },
  });
}
