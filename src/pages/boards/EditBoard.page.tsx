import { Navigate, useParams } from "react-router-dom";
import { Page } from "../../layout/Page";
import { useBoard } from "../../network/boards/useBoard";
import { usePatchBoard } from "../../network/boards/usePatchBoard";
import { joinPath } from "../../utils/joinPath";
import { LoadingPage } from "../Loading.page";
import { BoardForm } from "./components/BoardForm";

export function EditBoardPage() {
  const { id } = useParams();
  const { data, isLoading } = useBoard(id);
  const { isLoading: isSaveLoading, isSuccess, mutate } = usePatchBoard(id);
  if (isLoading) return <LoadingPage />;
  if (!data) return <Navigate to="/boards" />;
  if (isSuccess) return <Navigate to={joinPath("/boards", id || "")} />;
  return (
    <Page heading={"Edit " + data.title}>
      <BoardForm board={data} onSubmit={mutate} isLoading={isSaveLoading} />
    </Page>
  );
}
