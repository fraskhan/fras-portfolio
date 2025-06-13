import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Stack,
  Link,
} from '@chakra-ui/react';
import 'boxicons/css/boxicons.min.css';

const Projects = () => {
  const bgColor = 'white';
  const textColor = 'gray.600';
  const cardBg = 'gray.50';

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
      image: '/projects/taskmanager.jpg',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://taskmanager-demo.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization and reporting features.',
      image: '/projects/dashboard.jpg',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/dashboard',
      live: 'https://dashboard-demo.com',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          textAlign="center"
          mb={12}
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          Featured Projects
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: 'lg', md: 'xl' }}
          color={textColor}
          mb={16}
          maxW="3xl"
          mx="auto"
        >
          Here are some of my recent projects that showcase my skills and experience.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg={cardBg}
              rounded="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'translateY(-5px)' }}
            >
              <Image
                src={project.image}
                alt={project.title}
                height="200px"
                width="100%"
                objectFit="cover"
              />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text color={textColor} mb={4}>
                  {project.description}
                </Text>
                <Stack direction="row" gap={2} mb={4} flexWrap="wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <Text
                      key={techIndex}
                      fontSize="sm"
                      bg="blue.100"
                      color="blue.800"
                      px={2}
                      py={1}
                      rounded="md"
                    >
                      {tech}
                    </Text>
                  ))}
                </Stack>
                <Stack direction="row" gap={4}>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                    <Button variant="outline" size="sm">
                      <i className="bx bxl-github text-lg mr-2"></i>
                      GitHub
                    </Button>
                  </Link>
                  <Link href={project.live} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                    <Button colorScheme="blue" size="sm">
                      <i className="bx bx-link-external text-lg mr-2"></i>
                      Live Demo
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Projects; 