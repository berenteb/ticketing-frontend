import { Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BoardType } from "../../../types/board.type";
import { joinPath } from "../../../utils/joinPath";

interface BoardListItemProps {
  board: BoardType;
}

export function BoardListItem({ board }: BoardListItemProps) {
  return (
    <Link to={joinPath("/boards", board.id)}>
      <HStack
        spacing={5}
        borderColor="gray.200"
        borderRadius={5}
        borderWidth={1}
        px={5}
        py={3}
      >
        <Heading size="md">{board.title}</Heading>
      </HStack>
    </Link>
  );
}
