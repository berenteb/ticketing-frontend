import React from "react";
import { Page } from "../layouts/Page";
import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { Label } from "../elements/label";
import { LinkButton } from "../LinkButton";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { useLabels } from "../../hooks/label/useLabels";
import { LoadingPage } from "./LoadingPage";
import { Card } from "../elements/card";
import { FaTag } from "react-icons/fa";

export const LabelsPage: React.FC = () => {
  const { labels, loading } = useLabels();
  if (loading) return <LoadingPage />;
  return (
    <Page>
      <Heading as="h1">Labels</Heading>
      <LinkButton
        to="/labels/new/edit"
        leftIcon={<PlusSquareIcon />}
        colorScheme="blue"
        mt={5}
      >
        New
      </LinkButton>
      <Card w="100%">
        <HStack>
          <FaTag />
          <Heading size="sm">Created labels</Heading>
        </HStack>
        <Text color="gray.500" mt={2}>
          Click label to edit!
        </Text>
        <Flex mt={5} flexWrap="wrap">
          {labels?.map((l) => (
            <Label key={l.name} label={l} />
          ))}
        </Flex>
      </Card>
    </Page>
  );
};
