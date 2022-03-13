import React, { useEffect } from "react";
import { Page } from "../../layouts/Page";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { LinkButton } from "../../LinkButton";
import { useBoard } from "../../../hooks/board/useBoard";
import { useBoardEdit } from "../../../hooks/board/useBoardEdit";
import { useBoardCreate } from "../../../hooks/board/useBoardCreate";
import { CreateBoardEntityDto } from "../../../types/board";
import { LoadingPage } from "../LoadingPage";

export const BoardEditPage: React.FC = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const { board, boardLoading, boardError } = useBoard(id || "");
  const { edit, editLoading, editError } = useBoardEdit(id || "");
  const { create, createLoading, createError } = useBoardCreate();
  const { register, handleSubmit, reset } = useForm<CreateBoardEntityDto>();
  const navigate = useNavigate();
  useEffect(() => {
    reset(board);
  }, [board]);
  const onSubmit = (values: CreateBoardEntityDto) => {
    const cb = () => {
      navigate("/boards");
    };
    if (isNew) create(values, cb);
    else edit(values, cb);
  };
  if (!isNew && boardLoading) return <LoadingPage />;
  return (
    <Page title={isNew ? "New ticket" : board?.title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input bg="white" {...register("title")} />
        </FormControl>
        <ButtonGroup mt={5}>
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={editLoading || createLoading}
          >
            Save
          </Button>
          <LinkButton to="/boards" colorScheme="red" variant="outline">
            Cancel
          </LinkButton>
        </ButtonGroup>
        {(boardError || editError || createError) && (
          <Text mt={5} color="red">
            {boardError || editError || createError}
          </Text>
        )}
      </form>
    </Page>
  );
};
