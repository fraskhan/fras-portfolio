import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import 'boxicons/css/boxicons.min.css';

const About = () => {
  const bgColor = 'white';
  const textColor = 'gray.600';
  const cardBg = 'gray.50';

  const features = [
    {
      icon: 'bx-code-alt',
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using modern frameworks and libraries.',
    },
    {
      icon: 'bx-server',
      title: 'Backend Development',
      description: 'Creating robust server-side applications and RESTful APIs with Node.js and Express.',
    },
    {
      icon: 'bx-data',
      title: 'Database Management',
      description: 'Designing and optimizing database schemas using SQL and NoSQL solutions.',
    },
    {
      icon: 'bx-layer',
      title: 'Full Stack Integration',
      description: 'Seamlessly connecting frontend and backend systems for optimal performance.',
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
          About Me
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: 'lg', md: 'xl' }}
          color={textColor}
          mb={16}
          maxW="3xl"
          mx="auto"
        >
          I am a passionate full stack developer with expertise in building modern web applications.
          My focus is on creating efficient, scalable, and user-friendly solutions.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
          {features.map((feature, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              rounded="lg"
              boxShadow="md"
              textAlign="center"
            >
              <Box
                as="span"
                display="inline-block"
                w={12}
                h={12}
                color="blue.500"
                mb={4}
              >
                <i className={`bx ${feature.icon} text-4xl`}></i>
              </Box>
              <Heading as="h3" size="md" mb={2}>
                {feature.title}
              </Heading>
              <Text color={textColor}>
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default About; 