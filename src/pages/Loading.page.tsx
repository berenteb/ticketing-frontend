import { Card, Center, Heading, Spinner, VStack } from "@chakra-ui/react";
import { Page } from "../layout/Page";

export function LoadingPage() {
  return (
    <Page>
      <Center mx="auto" h="100vh">
        <Card p={5}>
          <VStack>
            <Spinner size="xl" />
            <Heading>Loading</Heading>
          </VStack>
        </Card>
      </Center>
    </Page>
  );
}
