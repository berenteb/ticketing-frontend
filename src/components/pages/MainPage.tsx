import React from "react";
import { Page } from "../layouts/Page";
import {
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useBoards } from "../../hooks/board/useBoards";
import { LoadingPage } from "./LoadingPage";
import { BoardEntity } from "../../types/board";
import { TicketEntity } from "../../types/ticket";
import { LinkButton } from "../LinkButton";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useTickets } from "../../hooks/ticket/useTickets";

export const MainPage: React.FC = () => {
  const { boards, loading } = useBoards();
  const { tickets, ...other } = useTickets();
  const ticketsLoading = other.loading;
  if (loading || ticketsLoading) return <LoadingPage />;
  return (
    <Page>
      <Heading as="h1">Dashboard</Heading>
      {boards?.map((b) => (
        <DashSection
          key={b._id}
          board={b}
          tickets={tickets?.filter((t) => t.board === b._id) || []}
        />
      ))}
    </Page>
  );
};

type DashSectionProps = {
  board: BoardEntity;
  tickets: TicketEntity[];
};

const DashSection: React.FC<DashSectionProps> = ({ board, tickets }) => {
  const completed = tickets.filter((t) => t.phase === "CLOSED").length;
  return (
    <Flex
      align="center"
      justify="center"
      flexDirection="column"
      width="100%"
      my={10}
    >
      <Heading as="h2" fontSize="lg">
        {board.title}
      </Heading>
      <CircularProgress
        value={(completed / tickets.length) * 100}
        mt={5}
        size="xs"
      >
        <CircularProgressLabel fontSize="lg">
          Completed <br />
          {completed}/{tickets.length}
        </CircularProgressLabel>
      </CircularProgress>
      <LinkButton
        to={"/boards/" + board._id}
        rightIcon={<ChevronRightIcon />}
        mt={5}
      >
        Show board
      </LinkButton>
      <Divider mt={5} />
    </Flex>
  );
};
