import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BoardPatchDto, BoardType } from "../../../types/board.type";

interface BoardFormProps {
  board?: BoardType;
  onSubmit: (board: BoardPatchDto) => void;
  isLoading: boolean;
}

export function BoardForm({ board, onSubmit, isLoading }: BoardFormProps) {
  const { register, handleSubmit } = useForm<BoardPatchDto>({
    defaultValues: board ? { title: board.title } : undefined,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Table title</FormLabel>
        <Input {...register("title", { required: true })} />
      </FormControl>
      <Button mt={5} isLoading={isLoading} type="submit">
        {board ? "Save" : "Create"}
      </Button>
    </form>
  );
}
