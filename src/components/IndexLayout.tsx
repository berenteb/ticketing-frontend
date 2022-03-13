import React from "react";
import { Container } from "@chakra-ui/react";
import { NavBar } from "./navbar/NavBar";

export const IndexLayout: React.FC = ({ children }) => {
  return (
    <Container w="100%" maxW="50rem">
      <NavBar />
      {children}
    </Container>
  );
};
