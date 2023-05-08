import { Navigate, useSearchParams } from "react-router-dom";
import { Page } from "../../layout/Page";
import { useCreateTicket } from "../../network/tickets/useCreateTicket";
import { joinPath } from "../../utils/joinPath";
import { TicketForm } from "./components/TicketForm";

export function CreateTicketPage() {
  const { data, isLoading, isSuccess, mutate } = useCreateTicket();
  const [searchParams] = useSearchParams();

  if (isSuccess) return <Navigate to={joinPath("/tickets", data.id || "")} />;
  return (
    <Page heading="Create new ticket">
      <TicketForm
        selectedBoardId={searchParams.get("board")}
        onSubmit={mutate}
        isLoading={isLoading}
      />
    </Page>
  );
}
