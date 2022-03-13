import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        width: "100%",
        minHeight: "100%",
        backgroundColor: "gray.50",
      },
    },
  },
});

export default customTheme;
