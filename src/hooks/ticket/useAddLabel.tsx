import { useState } from "react";
import { TicketEntity } from "../../types/ticket";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useTicketLabelEdit = (ticketId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const addLabel = (labelId: string, callback: () => void) => {
    setLoading(true);
    axios
      .patch<TicketEntity>(
        `${Configuration.BACKEND_URL}/tickets/${ticketId}/labels/${labelId}`
      )
      .then(callback)
      .catch(() => {
        setError("Adding label failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const removeLabel = (labelId: string, callback: () => void) => {
    setLoading(true);
    axios
      .delete<TicketEntity>(
        `${Configuration.BACKEND_URL}/tickets/${ticketId}/labels/${labelId}`
      )
      .then(callback)
      .catch(() => {
        setError("Removing label failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    addLabel,
    removeLabel,
    ticketLabelEditLoading: loading,
    tickerLabelEditError: error,
  };
};
