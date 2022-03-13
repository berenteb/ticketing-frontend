import React, { useState } from "react";
import { Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { LinkButton } from "../LinkButton";
import { FaEquals, FaTimes } from "react-icons/fa";

type NavBarItemProps = {
  title: string;
  href: string;
};

const NavBarItems: NavBarItemProps[] = [
  { title: "Home", href: "/" },
  { title: "Tickets", href: "/tickets" },
  { title: "Boards", href: "/boards" },
  { title: "Labels", href: "/labels" },
];

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Flex align="center" justify="space-between" py={5}>
        <HStack>
          <Heading color="blue.800">Ticketing</Heading>
        </HStack>
        <HStack display={["none", null, "flex"]}>
          {NavBarItems.map((item) => (
            <LinkButton
              key={item.title}
              colorScheme="blue"
              variant="ghost"
              to={item.href}
            >
              {item.title}
            </LinkButton>
          ))}
        </HStack>
        <Button
          display={["block", null, "none"]}
          colorScheme="blue"
          variant="ghost"
          fontSize="xl"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <FaTimes /> : <FaEquals />}
        </Button>
      </Flex>
      <VStack
        w="100%"
        display={[open ? "block" : "none", null, "none"]}
        onClick={(event) => {
          if ((event.target as Element).closest(".navLink")) setOpen(false);
        }}
      >
        {NavBarItems.map((item) => (
          <LinkButton
            className="navLink"
            key={item.title}
            colorScheme="blue"
            variant="unstyled"
            w="100%"
            to={item.href}
          >
            {item.title}
          </LinkButton>
        ))}
      </VStack>
    </>
  );
};
