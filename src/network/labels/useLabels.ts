import axios from "axios";
import { useQuery } from "react-query";
import { LabelType, LabelTypeDto } from "../../types/label.type";
import { convertLabel } from "../../utils/convert";

export function useLabels() {
  return useQuery("labels", async () => {
    const response = await axios.get<LabelTypeDto[]>("/labels");
    return response.data.map<LabelType>(convertLabel);
  });
}
