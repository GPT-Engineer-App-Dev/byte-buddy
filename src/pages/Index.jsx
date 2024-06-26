import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import CodeEditor from '../components/CodeEditor';
import { useState } from 'react';
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setEnrolled(true);
  };

  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">Welcome to CodeMaster</Heading>
        <Text fontSize="lg">Your journey to becoming a coding master starts here. Learn, practice, and master coding skills with our interactive platform.</Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box p={4} m={2} borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center">
            <FaCode size="3em" />
            <Heading as="h3" size="md" mt={4}>Learn</Heading>
            <Text mt={2}>Access a wide range of coding tutorials and resources.</Text>
          </Box>
          <Box p={4} m={2} borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center">
            <FaLaptopCode size="3em" />
            <Heading as="h3" size="md" mt={4}>Practice</Heading>
            <Text mt={2}>Hone your skills with interactive coding challenges.</Text>
          </Box>
          <Box p={4} m={2} borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center">
            <FaChalkboardTeacher size="3em" />
            <Heading as="h3" size="md" mt={4}>Master</Heading>
            <Text mt={2}>Become a coding expert with our advanced courses.</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      <Button colorScheme="teal" size="lg" onClick={handleEnroll}>Enroll in Course</Button>
        {enrolled && <Text fontSize="lg" color="green.500">You have successfully enrolled in the course!</Text>}
      <CodeEditor />
      </VStack>
    </Container>
  );
};

export default Index;