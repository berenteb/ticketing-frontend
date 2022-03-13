import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { BoardEntity } from "../../types/board";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { FaRegStickyNote, FaTable } from "react-icons/fa";

type BoardProps = {
  board: BoardEntity;
  ticketCount: number;
};

export const Board: React.FC<BoardProps> = ({ board, ticketCount }) => {
  const navigate = useNavigate();
  return (
    <Box
      boxShadow="md"
      borderRadius="md"
      backgroundColor="white"
      p={5}
      mb={5}
      w="100%"
      cursor="pointer"
      transition="transform .1s ease"
      _hover={{ transform: "translateX(20px)" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      onClick={() => {
        navigate(board._id);
      }}
    >
      <HStack>
        <FaTable />
        <Text fontSize="xl" fontWeight="bold">
          {board.title}
        </Text>
        <HStack pl={3} color="gray.500">
          <FaRegStickyNote />
          <Text>{ticketCount}</Text>
        </HStack>
      </HStack>
      <ChevronRightIcon boxSize={10} />
    </Box>
  );
};
