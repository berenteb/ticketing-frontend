import React from "react";
import { Page } from "../../layouts/Page";
import { ButtonGroup, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { LinkButton } from "../../LinkButton";
import { EditIcon, TimeIcon } from "@chakra-ui/icons";
import { useTicket } from "../../../hooks/ticket/useTicket";
import { useParams } from "react-router";
import { FaTable, FaTag, FaThLarge } from "react-icons/fa";
import { getPhaseTitle } from "../../../types/phase";
import { LoadingPage } from "../LoadingPage";
import { useLabels } from "../../../hooks/label/useLabels";
import { Label } from "../../elements/label";
import { Card } from "../../elements/card";
import { CgNotes } from "react-icons/cg";
import { useBoard } from "../../../hooks/board/useBoard";

export const TicketViewPage: React.FC = () => {
  const { id } = useParams();
  const { ticket, ticketLoading } = useTicket(id || "");
  const { labels, loading } = useLabels();
  const { board } = useBoard(ticket?.board || "");
  if (ticketLoading || loading) return <LoadingPage />;
  return (
    <Page title={ticket?.title}>
      <HStack mt={5}>
        <TimeIcon />
        <Text>{new Date(ticket?.createdAt || "").toLocaleDateString()}</Text>
      </HStack>
      <HStack mt={5}>
        <FaThLarge />
        <Text>{getPhaseTitle(ticket?.phase)}</Text>
      </HStack>
      <HStack mt={5}>
        <FaTable />
        <Text>{board?.title || "Unknown"}</Text>
      </HStack>
      <Card>
        <HStack>
          <CgNotes />
          <Heading size="sm">Description</Heading>
        </HStack>
        <Text mt={3}>{ticket?.description}</Text>
      </Card>
      {ticket?.labels && (
        <Flex mt={5}>
          {ticket.labels.map((id) => {
            const label = labels?.find((l) => l._id === id);
            if (!label) return null;
            return <Label key={id} label={label} />;
          })}
        </Flex>
      )}
      <ButtonGroup>
        <LinkButton to="labels" leftIcon={<FaTag />} mt={5}>
          Labels
        </LinkButton>
        <LinkButton to="edit" leftIcon={<EditIcon />} colorScheme="blue" mt={5}>
          Edit
        </LinkButton>
      </ButtonGroup>
    </Page>
  );
};
