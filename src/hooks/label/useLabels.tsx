import { useLayoutEffect, useState } from "react";
import { LabelEntity } from "../../types/label";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useLabels = () => {
  const [labels, setLabels] = useState<LabelEntity[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    setLoading(true);
    axios
      .get<LabelEntity[]>(`${Configuration.BACKEND_URL}/labels`)
      .then((res) => {
        setLabels(res.data);
      })
      .catch(() => {
        setError("Label request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { labels, loading, error };
};
