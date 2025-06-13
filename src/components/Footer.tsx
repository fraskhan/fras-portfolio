import React from 'react';
import {
  Box,
  Container,
  Text,
  HStack,
  Link,
} from '@chakra-ui/react';

const Footer = () => {
  const bgColor = 'gray.50';
  const textColor = 'gray.600';

  return (
    <Box as="footer" py={8} bg={bgColor}>
      <Container maxW="container.xl">
        <HStack
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap={4}
        >
          <Text color={textColor}>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Text>

          <HStack gap={6}>
            <Link href="/privacy" color={textColor}>
              Privacy Policy
            </Link>
            <Link href="/terms" color={textColor}>
              Terms of Service
            </Link>
            <Link href="/sitemap" color={textColor}>
              Sitemap
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer; 