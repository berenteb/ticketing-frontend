import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useNavigate } from "react-router";

type LinkButtonProps = {
  to: string;
};

export const LinkButton: React.FC<LinkButtonProps & ButtonProps> = ({
  to,
  children,
  ...props
}) => {
  const navigate = useNavigate();
  return (
    <Button
      {...props}
      onClick={() => {
        navigate(to);
      }}
    >
      {children}
    </Button>
  );
};
