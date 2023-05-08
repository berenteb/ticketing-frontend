import axios from "axios";
import { useMutation } from "react-query";
import { TicketPatchDto } from "../../types/ticket.type";
import { joinPath } from "../../utils/joinPath";

export function usePatchTicket(rawId: string | undefined) {
  const id = parseInt(rawId || "");
  return useMutation({
    mutationFn: async (ticket: TicketPatchDto) => {
      const response = await axios.patch(joinPath("/tickets", id), ticket);
      return response.data;
    },
  });
}
