import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <Box
      as="section"
      py={20}
      bg="white"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          align="center"
          justify="space-between"
        >
          <Box flex={1}>
            <Heading
              as="h1"
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, blue.600)"
              bgClip="text"
            >
              Full Stack Developer
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              mb={8}
              maxW="2xl"
            >
              I build modern web applications with a focus on user experience,
              performance, and scalability. Let's create something amazing together.
            </Text>
            <Stack direction="row" spacing={4}>
              <Button
                leftIcon={<i className="bx bxl-github text-xl"></i>}
                colorScheme="gray"
                variant="solid"
                size="lg"
              >
                GitHub
              </Button>
              <Button
                leftIcon={<i className="bx bxl-linkedin text-xl"></i>}
                colorScheme="blue"
                variant="solid"
                size="lg"
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero; 