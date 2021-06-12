import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Box, Image, Text } from "@chakra-ui/react";

import { Alert, AlertContent } from "../components/Alert";
import { Column, Row } from "../components/Layout";
import { POPULAR_ARTIST } from "../graphql/popularArtist";

export function ListArtist() {
  const [page] = useState(1);

  const { loading, error, data } = useQuery(POPULAR_ARTIST, {
    variables: {
      size: page * 9,
    },
  });

  if (loading) {
    return (
      <Box
        d="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert>
        <AlertContent>{error}</AlertContent>
      </Alert>
    );
  }

  return (
    <Box maxW={["container.sm", "container.md", "container.lg"]} mx="auto">
      <Text
        fontSize="3xl"
        textAlign="center"
        userSelect="none"
        py="35px"
        textTransform="uppercase"
        fontWeight="600"
        letterSpacing={1.3}
      >
        Featured Artist
      </Text>
      <Row>
        {data.popular_artists?.artists?.map((artist) => (
          <Column key={artist.id} lg={8}>
            <Box
              borderWidth={4}
              borderStyle="solid"
              borderColor="transparent"
              as={Link}
              to={`/profile/${artist.id}`}
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
              <Image
                src={artist.imageUrl}
                width="100%"
                mb={2}
                borderRadius={2}
                mx="auto"
              />
              <Box
                as="span"
                d="flex"
                flexDir="row"
                alignItems="center"
                px={2}
                py={2}
              >
                <Box as="span" d="block">
                  <Text as="span" d="block">
                    {artist.name}
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
            </Box>
          </Column>
        ))}
      </Row>
    </Box>
  );
}
