import {
  Card,
  CardBody,
  Container,
  ContainerProps,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { PropsWithChildren, ReactNode } from "react";
import { BackButton } from "../components/BackButton";

interface PageProps extends PropsWithChildren, ContainerProps {
  heading?: string;
  hideBackButton?: boolean;
  ctaButton?: ReactNode;
}

export function Page({
  children,
  heading,
  hideBackButton,
  ctaButton,
  ...props
}: PageProps) {
  return (
    <Container maxWidth="1000px" w="100%" mx="auto" {...props} py={5}>
      <VStack w="100%" alignItems="flex-start">
        {!hideBackButton && <BackButton />}
        <HStack justify="space-between" w="100%">
          {heading && <Heading>{heading}</Heading>}
          {ctaButton}
        </HStack>
        <Card w="100%">
          <CardBody>
            <VStack align="flex-start">{children}</VStack>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}
