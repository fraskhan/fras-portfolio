import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  useToast,
  Link,
} from '@chakra-ui/react';
import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  const toast = useToast();
  const bgColor = 'white';
  const textColor = 'gray.600';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    toast({
      title: 'Message sent!',
      description: "I'll get back to you soon.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const socialLinks = [
    {
      icon: 'bxl-github',
      label: 'GitHub',
      url: 'https://github.com/yourusername',
    },
    {
      icon: 'bxl-linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      icon: 'bxl-twitter',
      label: 'Twitter',
      url: 'https://twitter.com/yourusername',
    },
    {
      icon: 'bxl-gmail',
      label: 'Email',
      url: 'mailto:your.email@example.com',
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
          Get In Touch
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: 'lg', md: 'xl' }}
          color={textColor}
          mb={16}
          maxW="3xl"
          mx="auto"
        >
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </Text>

        <VStack gap={12} align="stretch">
          <Box
            as="form"
            onSubmit={handleSubmit}
            p={8}
            bg="gray.50"
            rounded="lg"
            boxShadow="md"
          >
            <VStack gap={6}>
              <Box>
                <Text as="label" display="block" mb={2}>Name</Text>
                <Input
                  type="text"
                  placeholder="Your name"
                  bg="white"
                  required
                />
              </Box>

              <Box>
                <Text as="label" display="block" mb={2}>Email</Text>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  bg="white"
                  required
                />
              </Box>

              <Box>
                <Text as="label" display="block" mb={2}>Message</Text>
                <Textarea
                  placeholder="Your message"
                  rows={6}
                  bg="white"
                  required
                />
              </Box>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                width="full"
              >
                Send Message
              </Button>
            </VStack>
          </Box>

          <HStack
            justify="center"
            gap={8}
            flexWrap="wrap"
          >
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: 'none' }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  leftIcon={<i className={`bx ${link.icon} text-xl`}></i>}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </HStack>
        </VStack>
      </Container>
    </section>
  );
};

export default Contact; 