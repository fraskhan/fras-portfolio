import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
} from '@chakra-ui/react';

const Experience = () => {
  const bgColor = 'white';
  const textColor = 'gray.600';
  const cardBg = 'gray.50';

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: [
        'Led the development of a microservices-based e-commerce platform serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Optimized database queries improving application performance by 40%',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2019 - 2021',
      description: [
        'Developed and maintained multiple client projects using React and Node.js',
        'Implemented RESTful APIs and integrated third-party services',
        'Collaborated with UX designers to create responsive web applications',
        'Reduced bug reports by 30% through comprehensive testing',
      ],
      technologies: ['React', 'Express', 'PostgreSQL', 'Redux', 'Jest'],
    },
    {
      title: 'Junior Developer',
      company: 'WebTech Solutions',
      period: '2018 - 2019',
      description: [
        'Built responsive web applications using modern JavaScript frameworks',
        'Worked on both frontend and backend development tasks',
        'Participated in agile development processes',
        'Contributed to open-source projects',
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MySQL'],
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
          Work Experience
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: 'lg', md: 'xl' }}
          color={textColor}
          mb={16}
          maxW="3xl"
          mx="auto"
        >
          My professional journey and achievements in the tech industry.
        </Text>

        <VStack gap={12} align="stretch">
          {experiences.map((exp, index) => (
            <Box
              key={index}
              p={6}
              bg={cardBg}
              rounded="lg"
              boxShadow="md"
            >
              <VStack align="start" gap={4}>
                <HStack justify="space-between" width="100%">
                  <Box>
                    <Heading as="h3" size="md">
                      {exp.title}
                    </Heading>
                    <Text color="blue.500" fontWeight="medium">
                      {exp.company}
                    </Text>
                  </Box>
                  <Badge colorScheme="blue" fontSize="sm">
                    {exp.period}
                  </Badge>
                </HStack>

                <VStack align="start" gap={2}>
                  {exp.description.map((item, idx) => (
                    <Text key={idx} color={textColor}>
                      • {item}
                    </Text>
                  ))}
                </VStack>

                <HStack gap={2} flexWrap="wrap">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} colorScheme="gray" variant="subtle">
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </section>
  );
};

export default Experience; 