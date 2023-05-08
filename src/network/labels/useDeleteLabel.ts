import axios from "axios";
import { useMutation } from "react-query";
import { joinPath } from "../../utils/joinPath";

export function useDeleteLabel(rawId: string | undefined) {
  const id = parseInt(rawId || "");
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(joinPath("/labels", id));
      return response.data;
    },
  });
}
