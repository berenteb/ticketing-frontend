import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

type PageProps = {
  title?: string;
};

export const Page: React.FC<PageProps> = ({ children, title }) => {
  return (
    <Flex width="100%" align="flex-start" flexDirection="column">
      {title && <Heading as="h1">{title}</Heading>}
      {children}
    </Flex>
  );
};
