import axios from "axios";
import { useQuery } from "react-query";
import { TicketTypeDto } from "../../types/ticket.type";
import { convertTicket } from "../../utils/convert";
import { joinPath } from "../../utils/joinPath";

export function useTicket(rawId: string | undefined) {
  const id = parseInt(rawId || "");
  return useQuery(["ticket", id], async () => {
    const response = await axios.get<TicketTypeDto>(joinPath("/tickets", id));
    return convertTicket(response.data);
  });
}
