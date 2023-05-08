import { Button, ButtonProps } from "@chakra-ui/react";
import { To, useNavigate } from "react-router-dom";

interface LinkButtonProps extends ButtonProps {
  to: To | number;
}

export function LinkButton({ to, ...props }: LinkButtonProps) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        if (typeof to === "number") navigate(to);
        else navigate(to);
      }}
      {...props}
    />
  );
}
