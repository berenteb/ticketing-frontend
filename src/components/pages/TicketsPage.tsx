import React from "react";
import { Page } from "../layouts/Page";
import { Flex, Heading } from "@chakra-ui/react";
import { Ticket } from "../elements/ticket";
import { useTickets } from "../../hooks/ticket/useTickets";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { LinkButton } from "../LinkButton";
import { LoadingPage } from "./LoadingPage";

export const TicketsPage: React.FC = () => {
  const { tickets, loading } = useTickets();
  if (loading) return <LoadingPage />;
  return (
    <Page>
      <Heading as="h1">Tickets</Heading>
      <LinkButton
        to="/tickets/new/edit"
        leftIcon={<PlusSquareIcon />}
        colorScheme="blue"
        mt={5}
      >
        New
      </LinkButton>
      <Flex mt={5} flexWrap="wrap">
        {tickets?.map((t) => (
          <Ticket key={t._id} ticket={t} />
        ))}
      </Flex>
    </Page>
  );
};
