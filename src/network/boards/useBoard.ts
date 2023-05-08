import axios from "axios";
import { useQuery } from "react-query";
import { BoardTypeDto } from "../../types/board.type";
import { convertBoard } from "../../utils/convert";
import { joinPath } from "../../utils/joinPath";

export function useBoard(rawId: string | undefined) {
  const id = parseInt(rawId || "");
  return useQuery(["boards", id], async () => {
    const response = await axios.get<BoardTypeDto>(joinPath("/boards", id));
    return convertBoard(response.data);
  });
}
