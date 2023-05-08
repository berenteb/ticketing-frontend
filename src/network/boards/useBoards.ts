import axios from "axios";
import { useQuery } from "react-query";
import { BoardType, BoardTypeDto } from "../../types/board.type";
import { convertBoard } from "../../utils/convert";

export function useBoards() {
  return useQuery("boards", async () => {
    const response = await axios.get<BoardTypeDto[]>("/boards");
    return response.data.map<BoardType>(convertBoard);
  });
}
