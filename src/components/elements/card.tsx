import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box bg="white" boxShadow="md" borderRadius="md" p={5} mt={5} {...props}>
      {children}
    </Box>
  );
};
