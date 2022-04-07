import React from "react";
import { Page } from "../../layouts/Page";
import { useParams } from "react-router";
import { useTicket } from "../../../hooks/ticket/useTicket";
import { LoadingPage } from "../LoadingPage";
import { useTicketLabelEdit } from "../../../hooks/ticket/useAddLabel";
import { useLabels } from "../../../hooks/label/useLabels";
import { Divider, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { Label } from "../../elements/label";
import { Card } from "../../elements/card";
import { FaCheck, FaTag } from "react-icons/fa";
import { LinkButton } from "../../LinkButton";

export const TicketLabelsPage: React.FC = () => {
  const { id } = useParams();
  const { ticket, ticketLoading, getTicket } = useTicket(id || "");
  const { addLabel, removeLabel } = useTicketLabelEdit(id || "");
  const { labels, loading } = useLabels();
  if (ticketLoading || loading) return <LoadingPage />;
  return (
    <Page title="Edit labels">
      <Heading size="md" color="gray.500" mt={5}>
        {ticket?.title}
      </Heading>
      <Card w="100%">
        <HStack>
          <FaTag />
          <Heading size="sm">Applied labels</Heading>
        </HStack>
        <Text color="gray.500" mt={2}>
          Click label to remove!
        </Text>
        <Flex mt={5} flexWrap="wrap">
          {(labels?.filter((l) => ticket?.labels?.includes(l._id)) || []).map(
            (label) => (
              <Label
                key={label._id}
                label={label}
                onClick={() => {
                  removeLabel(label._id, getTicket);
                }}
              />
            )
          )}
        </Flex>
      </Card>
      <Divider mt={5} opacity={1} borderColor="gray.300" />
      <Card w="100%">
        <HStack>
          <FaTag />
          <Heading size="sm">Available labels</Heading>
        </HStack>
        <Text color="gray.500" mt={2}>
          Click label to add!
        </Text>
        <Flex mt={5} flexWrap="wrap">
          {(labels?.filter((l) => !ticket?.labels?.includes(l._id)) || []).map(
            (label) => (
              <Label
                label={label}
                key={label._id}
                onClick={() => {
                  addLabel(label._id, getTicket);
                }}
              />
            )
          )}
        </Flex>
      </Card>
      <LinkButton
        leftIcon={<FaCheck />}
        to={`/tickets/${id}`}
        colorScheme="blue"
        mt={5}
      >
        Done
      </LinkButton>
    </Page>
  );
};
