import { Link } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";

export function ArtistCard({ children, id }) {
  return (
    <Box
      as={Link}
      to={`/profile/${id}`}
      d="block"
      cursor="pointer"
      userSelect="none"
      transition="0.2s all"
      pos="relative"
      _hover={{
        // '& .artist-image': {
        //   opacity: 0.5
        // },
        "& .artist-content": {
          opacity: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
        },
      }}
    >
      {children}
    </Box>
  );
}

export function ArtistImage({ src, name }) {
  return (
    <Image
      className="artist-image"
      src={src}
      alt={name}
      w="full"
      borderRadius={2}
      mx="auto"
      opacity={1}
    />
  );
}

export function ArtistSummary({ name }) {
  return (
    <Box
      className="artist-content"
      pos="absolute"
      top="0"
      left="0"
      width="full"
      height="full"
      px={3}
      opacity={0}
      transition="0.2s all"
      d="flex"
      flexDir="row"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        as="span"
        d="block"
        textAlign="center"
        color="white"
        fontWeight="600"
      >
        {name} &rarr;
      </Text>
    </Box>
  );
}
