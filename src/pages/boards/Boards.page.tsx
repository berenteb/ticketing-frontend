import { Flex } from "@chakra-ui/react";
import { LinkButton } from "../../components/LinkButton";
import { Page } from "../../layout/Page";
import { useBoards } from "../../network/boards/useBoards";
import { LoadingPage } from "../Loading.page";
import { BoardListItem } from "./components/BoardListItem";

export function BoardsPage() {
  const { data, isLoading } = useBoards();
  if (isLoading) return <LoadingPage />;
  return (
    <Page
      heading="Boards"
      ctaButton={<LinkButton to="/boards/new">New</LinkButton>}
    >
      <>
        <Flex gap={5}>
          {data?.map((b) => (
            <BoardListItem key={b.id} board={b} />
          ))}
        </Flex>
      </>
    </Page>
  );
}
