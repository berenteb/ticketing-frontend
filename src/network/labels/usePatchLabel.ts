import axios from "axios";
import { useMutation } from "react-query";
import { LabelPatchDto } from "../../types/label.type";
import { joinPath } from "../../utils/joinPath";

export function usePatchLabel(rawId: string | undefined) {
  const id = parseInt(rawId || "");
  return useMutation({
    mutationFn: async (label: LabelPatchDto) => {
      const response = await axios.patch(joinPath("/labels", id), label);
      return response.data;
    },
  });
}
