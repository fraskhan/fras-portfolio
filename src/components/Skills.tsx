import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import 'boxicons/css/boxicons.min.css';

const Skills = () => {
  const bgColor = 'white';
  const textColor = 'gray.600';
  const cardBg = 'gray.50';

  const skills = [
    {
      name: 'Frontend',
      icon: 'bx-code-alt',
      description: 'React, TypeScript, HTML5, CSS3, JavaScript',
    },
    {
      name: 'Backend',
      icon: 'bx-server',
      description: 'Node.js, Express, Python, Django, REST APIs',
    },
    {
      name: 'Database',
      icon: 'bx-data',
      description: 'MongoDB, PostgreSQL, MySQL, Redis',
    },
    {
      name: 'DevOps',
      icon: 'bx-cloud',
      description: 'Docker, AWS, CI/CD, Linux',
    },
    {
      name: 'Version Control',
      icon: 'bx-git-branch',
      description: 'Git, GitHub, GitLab, Bitbucket',
    },
    {
      name: 'Full Stack',
      icon: 'bx-layer',
      description: 'MERN Stack, MEAN Stack, JAMstack',
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
          Skills & Technologies
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: 'lg', md: 'xl' }}
          color={textColor}
          mb={16}
          maxW="3xl"
          mx="auto"
        >
          Here are the technologies and tools I work with to bring ideas to life.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {skills.map((skill, index) => (
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
                <i className={`bx ${skill.icon} text-4xl`}></i>
              </Box>
              <Text fontWeight="bold" mb={2}>
                {skill.name}
              </Text>
              <Text color={textColor}>
                {skill.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Skills; 