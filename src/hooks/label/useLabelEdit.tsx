import { useState } from "react";
import { LabelEntity, UpdateLabelEntityDto } from "../../types/label";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useLabelEdit = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const edit = (data: UpdateLabelEntityDto, callback: () => void) => {
    setLoading(true);
    axios
      .patch<LabelEntity>(`${Configuration.BACKEND_URL}/labels/${id}`, data)
      .then(callback)
      .catch(() => {
        setError("Label request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { edit, editLoading: loading, editError: error };
};
