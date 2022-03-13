import { useState } from "react";
import { CreateLabelEntityDto, LabelEntity } from "../../types/label";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useLabelCreate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const create = (data: CreateLabelEntityDto, callback: () => void) => {
    setLoading(true);
    axios
      .post<LabelEntity>(`${Configuration.BACKEND_URL}/labels`, data)
      .then(callback)
      .catch(() => {
        setError("Label request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { create, createLoading: loading, createError: error };
};
