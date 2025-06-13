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
      url: 'https://github.com/fraskhan',
    },
    {
      icon: 'bxl-linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/alfraskhan-jose',
    },
    {
      icon: 'bxl-gmail',
      label: 'Email',
      url: 'mailto:alfraskhan.jose@example.com',
    },
  ];

  return (
    <Box as="section" py={20} bg="gray.50" id="contact">
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
          Feel free to reach out to me at any of my social platforms or through this form!
        </Text>

        <VStack gap={12} align="stretch">
          <Box
            as="form"
            onSubmit={handleSubmit}
            p={8}
            bg="white"
            rounded="lg"
            boxShadow="md"
          >
            <VStack gap={6}>
              <Box width="full">
                <Text as="label" display="block" mb={2} fontWeight="medium">Name</Text>
                <Input
                  type="text"
                  placeholder="Your name"
                  bg="white"
                  required
                  borderColor="gray.300"
                  _hover={{ borderColor: "blue.300" }}
                  _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
                />
              </Box>

              <Box width="full">
                <Text as="label" display="block" mb={2} fontWeight="medium">Email</Text>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  bg="white"
                  required
                  borderColor="gray.300"
                  _hover={{ borderColor: "blue.300" }}
                  _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
                />
              </Box>

              <Box width="full">
                <Text as="label" display="block" mb={2} fontWeight="medium">Message</Text>
                <Textarea
                  placeholder="Your message"
                  rows={6}
                  bg="white"
                  required
                  borderColor="gray.300"
                  _hover={{ borderColor: "blue.300" }}
                  _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
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

          <Box textAlign="center" p={6}>
            <Heading as="h3" size="md" mb={6}>
              Connect With Me
            </Heading>
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
                    _hover={{ bg: 'blue.50', color: 'blue.600' }}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact; 