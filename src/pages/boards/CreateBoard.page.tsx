import { Navigate } from "react-router-dom";
import { Page } from "../../layout/Page";
import { useCreateBoard } from "../../network/boards/useCreateBoard";
import { joinPath } from "../../utils/joinPath";
import { BoardForm } from "./components/BoardForm";

export function CreateBoardPage() {
  const { data, isLoading, isSuccess, mutate } = useCreateBoard();
  if (isSuccess) return <Navigate to={joinPath("/boards", data.id || "")} />;
  return (
    <Page heading="Create new board">
      <BoardForm onSubmit={mutate} isLoading={isLoading} />
    </Page>
  );
}
