import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useBoards } from "../../../network/boards/useBoards";
import { TicketPatchDto, TicketType } from "../../../types/ticket.type";

interface TicketFormProps {
  ticket?: TicketType;
  onSubmit: (ticket: TicketPatchDto) => void;
  isLoading: boolean;
  selectedBoardId?: string | null;
}

interface TicketFormType extends Omit<TicketPatchDto, "boardId"> {
  boardId: string;
}

export function TicketForm({
  ticket,
  onSubmit,
  isLoading,
  selectedBoardId,
}: TicketFormProps) {
  const { data, isLoading: areBoardsLoading } = useBoards();
  const { register, handleSubmit } = useForm<TicketFormType>({
    defaultValues: ticket
      ? {
          name: ticket.name,
          description: ticket.description,
          boardId: ticket.boardId.toString(),
        }
      : { boardId: selectedBoardId ?? undefined },
  });
  const onSubmitSafe = (values: TicketFormType) => {
    onSubmit({ ...values, boardId: parseInt(values.boardId) });
  };
  return (
    <form onSubmit={handleSubmit(onSubmitSafe)}>
      <FormControl>
        <FormLabel>Ticket title</FormLabel>
        <Input {...register("name", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Board</FormLabel>
        <Select
          disabled={areBoardsLoading}
          defaultValue={selectedBoardId ?? undefined}
          {...register("boardId", { required: true })}
        >
          {data?.map((b) => (
            <option key={b.id} value={b.id.toString()}>
              {b.title}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea {...register("description", { required: true })} />
      </FormControl>
      <Button mt={5} isLoading={isLoading || areBoardsLoading} type="submit">
        {ticket ? "Save" : "Create"}
      </Button>
    </form>
  );
}
