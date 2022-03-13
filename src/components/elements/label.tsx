import React from "react";
import { Box } from "@chakra-ui/react";
import { LabelEntity } from "../../types/label";
import { useNavigate } from "react-router";

type LabelProps = {
  label: LabelEntity;
  onClick?: () => void;
};

export const Label: React.FC<LabelProps> = ({ label, onClick }) => {
  const navigate = useNavigate();
  return (
    <Box
      px={3}
      py={1}
      color={label.color}
      border={"2px solid " + label.color}
      backgroundColor={label.color + "10"}
      borderRadius="full"
      mr={5}
      mb={5}
      cursor="pointer"
      onClick={
        onClick ||
        (() => {
          navigate(`/labels/${label._id}/edit`);
        })
      }
    >
      {label.name}
    </Box>
  );
};
