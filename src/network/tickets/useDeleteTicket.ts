import axios from "axios";
import { useMutation } from "react-query";
import { joinPath } from "../../utils/joinPath";

export function useDeleteTicket(
  rawId: string | undefined,
  onSuccess: () => void
) {
  const id = parseInt(rawId || "");
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(joinPath("/tickets", id));
      return response.data;
    },
    onSuccess,
  });
}
