import { useState } from "react";
import { CreateTicketEntityDto, TicketEntity } from "../../types/ticket";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useTicketCreate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const create = (data: CreateTicketEntityDto, callback: () => void) => {
    setLoading(true);
    axios
      .post<TicketEntity>(`${Configuration.BACKEND_URL}/tickets`, data)
      .then(callback)
      .catch(() => {
        setError("Ticket request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { create, createLoading: loading, createError: error };
};
