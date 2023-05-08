import axios from "axios";
import { useMutation } from "react-query";
import { LabelPatchDto } from "../../types/label.type";

export function useCreateLabel() {
  return useMutation({
    mutationFn: async (label: LabelPatchDto) => {
      const response = await axios.post("/labels", label);
      return response.data;
    },
  });
}
