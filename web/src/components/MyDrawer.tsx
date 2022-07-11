import {
  Drawer,
  useDisclosure,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  IconButton,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";

import { DragHandleIcon, CloseIcon, CheckCircleIcon, AddIcon, UnlockIcon } from "@chakra-ui/icons";

import React from "react";
import Link from "next/link";

export default function MyDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        position="fixed"
        top={4}
        left={4}
        icon={isOpen ? <CloseIcon /> : <DragHandleIcon />}
        aria-label="Toggle Theme"
        colorScheme="green"
        variant="outline"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={AddIcon} color="green.500" />
                 <Link href="/register">
                  <a>register</a>
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={DragHandleIcon} color="green.500" />
                <Link href="/">
                  <a>Home</a>
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={UnlockIcon} color="green.500" />
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </ListItem>
              {/* You can also use custom icons from react-icons */}
      
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
