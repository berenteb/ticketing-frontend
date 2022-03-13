import { useLayoutEffect, useState } from "react";
import { TicketEntity } from "../../types/ticket";
import axios from "axios";
import Configuration from "../../utils/configuration";

export const useTickets = () => {
  const [tickets, setTickets] = useState<TicketEntity[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    setLoading(true);
    axios
      .get<TicketEntity[]>(`${Configuration.BACKEND_URL}/tickets`)
      .then((res) => {
        setTickets(res.data);
      })
      .catch(() => {
        setError("Ticket request failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { tickets, loading, error };
};
