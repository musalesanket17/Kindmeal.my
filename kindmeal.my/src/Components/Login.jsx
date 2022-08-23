import {
    Button,
    FormControl,
    Img,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Login</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Img
                src="https://www.kindmeal.my/images/logo-kindmeal.png"
                alt="Logo"
              />
              <Text ml="120px">Member Login</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <Input mb="10px" type="email" placeholder="Your Email" />
  
                <Input mb="10px" type="password" placeholder="Your Password" />
  
                <Button
                  p="15px 90px 15px 90px"
                  ml="80px"
                  bgColor="#04be5a"
                  color="#fff"
                  mb="10px"
                  fontSize="2xl"
                >
                  Login
                </Button>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default Login;