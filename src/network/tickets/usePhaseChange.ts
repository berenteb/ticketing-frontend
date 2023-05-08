import axios from "axios";
import { useMutation } from "react-query";
import { Phase } from "../../types/ticket.type";
import { joinPath } from "../../utils/joinPath";

export function usePhaseChange(
  rawId: string | undefined,
  onSuccess?: () => void
) {
  const id = parseInt(rawId || "");
  return useMutation({
    mutationFn: async (phase: Phase) => {
      const response = await axios.patch(joinPath("/tickets", id), { phase });
      return response.data;
    },
    onSuccess,
  });
}
