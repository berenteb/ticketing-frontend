import { useState } from "react";
import { TicketEntity, UpdateTicketEntityDto } from "../../types/ticket";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useTicketEdit = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const edit = (data: UpdateTicketEntityDto, callback: () => void) => {
    setLoading(true);
    axios
      .patch<TicketEntity>(`${Configuration.BACKEND_URL}/tickets/${id}`, data)
      .then(callback)
      .catch(() => {
        setError("Ticket request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { edit, editLoading: loading, editError: error };
};
