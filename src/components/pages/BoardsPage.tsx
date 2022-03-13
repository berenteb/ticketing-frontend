import React from "react";
import { Page } from "../layouts/Page";
import { Flex, Heading } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { LinkButton } from "../LinkButton";
import { useBoards } from "../../hooks/board/useBoards";
import { Board } from "../elements/board";
import { LoadingPage } from "./LoadingPage";
import { useTickets } from "../../hooks/ticket/useTickets";

export const BoardsPage: React.FC = () => {
  const { boards, loading } = useBoards();
  const { tickets, ...other } = useTickets();
  if (loading || other.loading) return <LoadingPage />;
  return (
    <Page>
      <Heading as="h1">Boards</Heading>
      <LinkButton
        to="/boards/new/edit"
        leftIcon={<PlusSquareIcon />}
        colorScheme="blue"
        mt={5}
      >
        New
      </LinkButton>
      <Flex mt={5} w="100%" flexDirection="column">
        {boards?.map((b) => (
          <Board
            key={b._id}
            board={b}
            ticketCount={tickets?.filter((t) => t.board === b._id).length || 0}
          />
        ))}
      </Flex>
    </Page>
  );
};
