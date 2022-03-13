import { useLayoutEffect, useState } from "react";
import { LabelEntity } from "../../types/label";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useLabel = (id: string) => {
  const [label, setLabel] = useState<LabelEntity>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    if (id !== "new") {
      setLoading(true);
      axios
        .get<LabelEntity>(`${Configuration.BACKEND_URL}/labels/${id}`)
        .then((res) => {
          setLabel(res.data);
        })
        .catch(() => {
          setError("Label request failed.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return { label, labelLoading: loading, labelError: error };
};
