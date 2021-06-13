import { Link } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";

export function ArtistCard({ children, id }) {
  return (
    <Box
      borderWidth={4}
      borderStyle="solid"
      borderColor="transparent"
      as={Link}
      to={`/profile/${id}`}
      mb={4}
      d="block"
      cursor="pointer"
      _hover={{
        borderColor: "blue.600",
      }}
      borderRadius={4}
      userSelect="none"
      transition="0.2s all"
    >
      {children}
    </Box>
  );
}

export function ArtistImage({ src }) {
  return <Image src={src} mb={2} borderRadius={2} mx="auto" />;
}

export function ArtistSummary({ name }) {
  return (
    <Box as="span" d="flex" flexDir="row" alignItems="center" px={2} py={2}>
      <Box as="span" d="block">
        <Text as="span" d="block">
          {name}
        </Text>
      </Box>
      <Box as="span" d="block" ml="auto">
        <Box
          as="span"
          d="inline-block"
          borderRadius={4}
          px={4}
          py={1}
          borderWidth={1}
          borderColor="blue.600"
          borderStyle="solid"
          fontSize="sm"
        >
          See Profile
        </Box>
      </Box>
    </Box>
  );
}
