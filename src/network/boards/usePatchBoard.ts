import axios from "axios";
import { useMutation } from "react-query";
import { BoardPatchDto } from "../../types/board.type";
import { joinPath } from "../../utils/joinPath";

export function usePatchBoard(rawId: string | undefined) {
  const id = parseInt(rawId || "");
  return useMutation({
    mutationFn: async (board: BoardPatchDto) => {
      const response = await axios.patch(joinPath("/boards", id), board);
      return response.data;
    },
  });
}
