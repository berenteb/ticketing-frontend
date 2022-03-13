import React, { useMemo } from "react";
import { Page } from "../../layouts/Page";
import { useParams } from "react-router";
import { useBoard } from "../../../hooks/board/useBoard";
import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { EditIcon, TimeIcon } from "@chakra-ui/icons";
import { LinkButton } from "../../LinkButton";
import { useTickets } from "../../../hooks/ticket/useTickets";
import { TicketEntity } from "../../../types/ticket";
import { Ticket } from "../../elements/ticket";
import { Phases } from "../../../types/phase";
import { LoadingPage } from "../LoadingPage";

export const BoardViewPage: React.FC = () => {
  const { id } = useParams();
  const { board, boardLoading } = useBoard(id || "");
  const { tickets, loading } = useTickets();
  const relatedTickets = useMemo<TicketEntity[]>(
    () => tickets?.filter((t) => t.board === board?._id) || [],
    [tickets, board]
  );
  if (boardLoading || loading) return <LoadingPage />;
  return (
    <Page title={board?.title}>
      <HStack mt={5}>
        <TimeIcon />
        <Text>{new Date(board?.createdAt || "").toLocaleDateString()}</Text>
      </HStack>
      <LinkButton to="edit" leftIcon={<EditIcon />} mt={5}>
        Edit
      </LinkButton>
      {Phases.map((phase) => (
        <PhaseSection
          key={phase.key}
          title={phase.title}
          tickets={relatedTickets.filter((t) => t.phase === phase.key)}
        />
      ))}
    </Page>
  );
};

type PhaseSectionProps = {
  title: string;
  tickets: TicketEntity[];
};

const PhaseSection: React.FC<PhaseSectionProps> = ({ title, tickets }) => {
  return (
    <Flex flexDirection="column" mt={10}>
      <Heading fontSize="lg">{title}</Heading>
      <Flex mt={5}>
        {tickets?.map((t) => (
          <Ticket key={t._id} ticket={t} />
        ))}
      </Flex>
    </Flex>
  );
};
