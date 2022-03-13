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
import { useLabel } from "../../../hooks/label/useLabel";
import { useLabelEdit } from "../../../hooks/label/useLabelEdit";
import { useLabelCreate } from "../../../hooks/label/useLabelCreate";
import { LabelEntity } from "../../../types/label";
import { LinkButton } from "../../LinkButton";
import { LoadingPage } from "../LoadingPage";

export const LabelEditPage: React.FC = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const { label, labelLoading, labelError } = useLabel(id || "");
  const { edit, editLoading, editError } = useLabelEdit(id || "");
  const { create, createLoading, createError } = useLabelCreate();
  const { register, handleSubmit, reset } = useForm<LabelEntity>();
  const navigate = useNavigate();
  useEffect(() => {
    reset(label);
  }, [label]);
  const onSubmit = (values: LabelEntity) => {
    const cb = () => {
      navigate("/labels");
    };
    if (isNew) create(values, cb);
    else edit(values, cb);
  };
  if (!isNew && labelLoading) return <LoadingPage />;
  return (
    <Page title={isNew ? "New label" : label?.name}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input bg="white" {...register("name")} />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Color</FormLabel>
          <input type="color" {...register("color")} />
        </FormControl>
        <ButtonGroup mt={5}>
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={editLoading || createLoading}
          >
            Save
          </Button>
          <LinkButton to="/labels" colorScheme="red" variant="outline">
            Cancel
          </LinkButton>
        </ButtonGroup>
        {(labelError || editError || createError) && (
          <Text mt={5} color="red">
            {labelError || editError || createError}
          </Text>
        )}
      </form>
    </Page>
  );
};
