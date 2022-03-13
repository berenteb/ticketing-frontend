import React from "react";
import { Page } from "../layouts/Page";
import { Loading } from "../elements/loading";
import { Center } from "@chakra-ui/react";

export const LoadingPage: React.FC = () => {
  return (
    <Page>
      <Center w="100%">
        <Loading />
      </Center>
    </Page>
  );
};
