import { useLayoutEffect, useState } from "react";
import { TicketEntity } from "../../types/ticket";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useTicket = (id: string) => {
  const [ticket, setTicket] = useState<TicketEntity>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    getTicket();
  }, []);

  const getTicket = () => {
    if (id !== "new") {
      setLoading(true);
      axios
        .get<TicketEntity>(`${Configuration.BACKEND_URL}/tickets/${id}`)
        .then((res) => {
          setTicket(res.data);
        })
        .catch(() => {
          setError("Ticket request failed.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return { ticket, getTicket, ticketLoading: loading, ticketError: error };
};
