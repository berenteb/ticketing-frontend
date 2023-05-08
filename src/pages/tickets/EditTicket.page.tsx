import { Navigate, useParams } from "react-router-dom";
import { Page } from "../../layout/Page";
import { usePatchTicket } from "../../network/tickets/usePatchTicket";
import { useTicket } from "../../network/tickets/useTicket";
import { joinPath } from "../../utils/joinPath";
import { LoadingPage } from "../Loading.page";
import { TicketForm } from "./components/TicketForm";

export function EditTicketPage() {
  const { id } = useParams();
  const { data, isLoading } = useTicket(id);
  const { isLoading: isSaveLoading, isSuccess, mutate } = usePatchTicket(id);
  if (isLoading) return <LoadingPage />;
  if (!data) return <Navigate to="/tickets" />;
  if (isSuccess) return <Navigate to={joinPath("/tickets", id || "")} />;
  return (
    <Page heading={"Edit " + data.name}>
      <TicketForm ticket={data} onSubmit={mutate} isLoading={isSaveLoading} />
    </Page>
  );
}
