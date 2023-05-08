import { Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TicketType } from "../../../types/ticket.type";
import { joinPath } from "../../../utils/joinPath";

interface TicketListItemProps {
  ticket: TicketType;
}

export function TicketListItem({ ticket }: TicketListItemProps) {
  return (
    <Link to={joinPath("/tickets", ticket.id)}>
      <HStack
        spacing={5}
        borderColor="gray.200"
        borderRadius={5}
        borderWidth={1}
        px={5}
        py={3}
      >
        <Heading size="sm">{ticket.name}</Heading>
      </HStack>
    </Link>
  );
}
