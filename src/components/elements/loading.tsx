import React, { useState } from "react";
import { Spinner, useTimeout } from "@chakra-ui/react";

export const Loading: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  useTimeout(() => {
    setShow(true);
  }, 2000);
  if (!show) return null;
  return <Spinner size="xl" />;
};
