import axios from "axios";
import { useMutation } from "react-query";
import { joinPath } from "../../utils/joinPath";

export function useDeleteBoard(
  rawId: string | undefined,
  onSuccess?: () => void
) {
  const id = parseInt(rawId || "");
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(joinPath("/boards", id));
      return response.data;
    },
    onSuccess,
  });
}
