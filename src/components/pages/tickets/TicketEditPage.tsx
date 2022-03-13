import React, { useEffect } from "react";
import { Page } from "../../layouts/Page";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { LinkButton } from "../../LinkButton";
import { useTicket } from "../../../hooks/ticket/useTicket";
import { useTicketEdit } from "../../../hooks/ticket/useTicketEdit";
import { useTicketCreate } from "../../../hooks/ticket/useTicketCreate";
import { CreateTicketEntityDto } from "../../../types/ticket";
import { Phases } from "../../../types/phase";
import { useBoards } from "../../../hooks/board/useBoards";
import { LoadingPage } from "../LoadingPage";

export const TicketEditPage: React.FC = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const { ticket, ticketLoading, ticketError } = useTicket(id || "");
  const { edit, editLoading, editError } = useTicketEdit(id || "");
  const { create, createLoading, createError } = useTicketCreate();
  const { boards, loading } = useBoards();
  const { register, handleSubmit, reset } = useForm<CreateTicketEntityDto>();
  const navigate = useNavigate();
  useEffect(() => {
    reset(ticket);
  }, [ticket]);
  const onSubmit = (values: CreateTicketEntityDto) => {
    const cb = () => {
      navigate("/tickets");
    };
    if (isNew) create(values, cb);
    else edit(values, cb);
  };
  if ((!isNew && ticketLoading) || loading) return <LoadingPage />;
  return (
    <Page title={isNew ? "New ticket" : ticket?.title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input bg="white" {...register("title")} />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Description</FormLabel>
          <Textarea {...register("description")} />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Phase</FormLabel>
          <Select {...register("phase")}>
            {Phases.map((p) => (
              <option key={p.key} value={p.key}>
                {p.title}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Board</FormLabel>
          <Select {...register("board")}>
            {boards?.map((b) => (
              <option key={b._id} value={b._id}>
                {b.title}
              </option>
            ))}
          </Select>
        </FormControl>
        <ButtonGroup mt={5}>
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={editLoading || createLoading}
          >
            Save
          </Button>
          <LinkButton to="/tickets" colorScheme="red" variant="outline">
            Cancel
          </LinkButton>
        </ButtonGroup>
        {(ticketError || editError || createError) && (
          <Text mt={5} color="red">
            {ticketError || editError || createError}
          </Text>
        )}
      </form>
    </Page>
  );
};
