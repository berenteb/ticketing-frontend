import { Button, ButtonGroup, Grid, VStack } from "@chakra-ui/react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { LinkButton } from "../../components/LinkButton";
import { PhaseBadge } from "../../components/PhaseBadge";
import { Page } from "../../layout/Page";
import { useBoard } from "../../network/boards/useBoard";
import { useDeleteBoard } from "../../network/boards/useDeleteBoard";
import { Phase, PhaseString } from "../../types/ticket.type";
import { LoadingPage } from "../Loading.page";
import { TicketListItem } from "./components/TicketListItem";

export function BoardPage() {
  const { id } = useParams();
  const { data, isLoading } = useBoard(id);
  const navigate = useNavigate();
  const { isLoading: isDeleteLoading, mutate: deleteFn } = useDeleteBoard(
    id,
    () => navigate("/boards")
  );
  if (isLoading) return <LoadingPage />;
  if (!data) return <Navigate to="/boards" />;
  return (
    <Page
      heading={data.title}
      ctaButton={
        <ButtonGroup>
          <LinkButton to={"/tickets/new?board=" + data.id}>
            New ticket
          </LinkButton>
          <Button
            isLoading={isDeleteLoading}
            colorScheme="red"
            variant="ghost"
            onClick={() => deleteFn()}
          >
            Delete
          </Button>
        </ButtonGroup>
      }
    >
      <>
        <LinkButton to="edit">Edit</LinkButton>
        <Grid
          borderColor="gray.200"
          borderRadius={5}
          borderWidth={1}
          px={5}
          py={3}
          gap={5}
          w="100%"
          templateColumns={`repeat(${Object.keys(PhaseString).length}, 1fr)`}
        >
          {Object.keys(PhaseString).map((phase) => (
            <VStack key={phase} w="100%">
              <PhaseBadge key={phase} phase={phase as Phase} />
              {data?.tickets
                .filter((t) => t.phase === phase)
                .map((t) => (
                  <TicketListItem key={t.id} ticket={t} />
                ))}
            </VStack>
          ))}
        </Grid>
      </>
    </Page>
  );
}
