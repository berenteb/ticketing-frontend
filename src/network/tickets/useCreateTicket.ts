import axios from "axios";
import { useMutation } from "react-query";
import { TicketPatchDto } from "../../types/ticket.type";

export function useCreateTicket() {
  return useMutation({
    mutationFn: async (ticket: TicketPatchDto) => {
      const response = await axios.post("/tickets", ticket);
      return response.data;
    },
  });
}
