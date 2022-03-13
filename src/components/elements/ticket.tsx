import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { TicketEntity } from "../../types/ticket";
import { getPhaseTitle } from "../../types/phase";
import { useNavigate } from "react-router";
import { FaTable } from "react-icons/fa";

type TicketProps = {
  ticket: TicketEntity;
};

export const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const navigate = useNavigate();
  return (
    <Box
      boxShadow="md"
      borderRadius="md"
      backgroundColor="white"
      p={5}
      mr={5}
      mb={5}
      w="fit-content"
      maxW="100%"
      cursor="pointer"
      transition="background-color .1s ease"
      _hover={{ bgColor: "gray.50" }}
      onClick={() => {
        navigate("/tickets/" + ticket._id);
      }}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={3}>
        {ticket.title}
      </Text>

      <HStack>
        <FaTable fill="gray" />
        <Text color="gray.500">{getPhaseTitle(ticket.phase)}</Text>
      </HStack>
    </Box>
  );
};
