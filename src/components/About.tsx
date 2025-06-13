import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  List,
  ListItem,
  ListIcon,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import 'boxicons/css/boxicons.min.css';

const About = () => {
  const textColor = 'gray.600';

  // Tech stack categories
  const techStack = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Java'],
    frameworks: ['React', 'Streamlit', 'Flask', 'Django', 'Spring Boot'],
    databases: ['MySQL', 'PostgreSQL', 'SQLite', 'Supabase'],
  };

  return (
    <Box as="section" py={20} bg="gray.50" id="about">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          textAlign="center"
          mb={12}
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          About Me
        </Heading>

        {/* Personal Information */}
        <Stack spacing={8} mb={12}>
          <Box>
            <Heading as="h3" size="lg" mb={4} color="blue.500">
              Personal Information
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Box>
                <Stack spacing={3}>
                  <Text fontSize="lg" fontWeight="bold">Full Name</Text>
                  <Text fontSize="lg" color={textColor}>AL-FRASKHAN A. JOSE</Text>
                  
                  <Text fontSize="lg" fontWeight="bold">Profession</Text>
                  <Text fontSize="lg" color={textColor}>Full Stack Developer</Text>
                  <Text fontSize="lg" color={textColor}>Aspiring Software Engineer</Text>
                </Stack>
              </Box>
              
              <Box>
                <Stack spacing={3}>
                  <Text fontSize="lg" fontWeight="bold">Current Employment</Text>
                  <Text fontSize="lg" color={textColor}>Position: Full Stack Developer</Text>
                  <Text fontSize="lg" color={textColor}>Company: ALTSOLUTIONS</Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Education */}
          <Box>
            <Heading as="h3" size="lg" mb={4} color="blue.500">
              Education
            </Heading>
            <Box p={6} bg="white" rounded="lg" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold">IT Graduate</Text>
              <Text fontSize="lg" color={textColor}>Pilar College</Text>
              <Text fontSize="lg" color={textColor}>Graduation Year: 2025</Text>
            </Box>
          </Box>

          {/* Interests & Expertise */}
          <Box>
            <Heading as="h3" size="lg" mb={4} color="blue.500">
              Interests & Expertise
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Text as="span" fontSize="lg" color={textColor}>Web & App Development</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Text as="span" fontSize="lg" color={textColor}>Data Analytics (future interest)</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Text as="span" fontSize="lg" color={textColor}>IT Support & System Efficiency</Text>
              </ListItem>
            </List>
          </Box>
        </Stack>

        <Divider my={12} />

        {/* Tech Stack */}
        <Box>
          <Heading as="h3" size="lg" mb={6} textAlign="center" color="blue.500">
            Tech Stack
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="lg" boxShadow="md">
              <Flex align="center" mb={4}>
                <i className="bx bx-code text-3xl text-blue-500 mr-2"></i>
                <Heading as="h4" size="md">Languages</Heading>
              </Flex>
              <List spacing={2}>
                {techStack.languages.map((lang, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {lang}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box p={6} bg="white" rounded="lg" boxShadow="md">
              <Flex align="center" mb={4}>
                <i className="bx bx-cube text-3xl text-blue-500 mr-2"></i>
                <Heading as="h4" size="md">Frameworks</Heading>
              </Flex>
              <List spacing={2}>
                {techStack.frameworks.map((framework, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {framework}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box p={6} bg="white" rounded="lg" boxShadow="md">
              <Flex align="center" mb={4}>
                <i className="bx bx-data text-3xl text-blue-500 mr-2"></i>
                <Heading as="h4" size="md">Databases</Heading>
              </Flex>
              <List spacing={2}>
                {techStack.databases.map((db, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {db}
                  </ListItem>
                ))}
              </List>
            </Box>
          </SimpleGrid>
        </Box>

        {/* GitHub Stats */}
        <Box mt={12} textAlign="center">
          <Heading as="h3" size="lg" mb={4} color="blue.500">
            GitHub Activity
          </Heading>
          <Text fontSize="lg" color={textColor}>
            GitHub Username: <Text as="span" fontWeight="bold">fraskhan</Text>
          </Text>
          <Text fontSize="lg" color={textColor} mb={4}>
            Stats & Streak publicly visible via GitHub README.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 