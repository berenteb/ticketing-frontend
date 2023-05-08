import {
  Button,
  ButtonGroup,
  HStack,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { LinkButton } from "../../components/LinkButton";
import { Page } from "../../layout/Page";
import { useBoard } from "../../network/boards/useBoard";
import { useDeleteTicket } from "../../network/tickets/useDeleteTicket";
import { usePhaseChange } from "../../network/tickets/usePhaseChange";
import { useTicket } from "../../network/tickets/useTicket";
import { Phase, PhaseString } from "../../types/ticket.type";
import { LoadingPage } from "../Loading.page";

export function TicketPage() {
  const { id } = useParams();
  const { data, isLoading, refetch } = useTicket(id);
  const navigate = useNavigate();
  const { isLoading: isDeleteLoading, mutate: deleteFn } = useDeleteTicket(
    id,
    () => navigate(-1)
  );
  const { isLoading: isChangeLoading, mutate } = usePhaseChange(id, refetch);
  const { data: board } = useBoard(data?.boardId.toString());
  if (!data && isLoading) return <LoadingPage />;
  if (!data) return <Navigate to="/boards" />;
  return (
    <Page
      heading={data.name}
      ctaButton={
        <ButtonGroup>
          <LinkButton to="edit">Edit</LinkButton>
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
      <HStack>
        <Select
          value={data.phase}
          onChange={(evt) => mutate(evt.target.value as Phase)}
        >
          {Object.entries(PhaseString).map(([key, value]) => (
            <option key={key} value={key}>
              {value.label}
            </option>
          ))}
        </Select>
        {isChangeLoading && <Spinner />}
      </HStack>
      <Text>{board?.title}</Text>
      <Text>{data.description}</Text>
    </Page>
  );
}
