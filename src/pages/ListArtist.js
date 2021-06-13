import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Spinner, Box, Text } from "@chakra-ui/react";

import { POPULAR_ARTIST } from "../graphql/popularArtist";

import { ArtistCard, ArtistImage, ArtistSummary } from "../components/Artist";
import { Alert, AlertContent } from "../components/Alert";
import { Column, Row } from "../components/Layout";

function ListArtist() {
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
    <Row>
      {data.popular_artists?.artists?.map((artist) => (
        <Column key={artist.id} lg={8}>
          <ArtistCard id={artist.id}>
            <ArtistImage src={artist.imageUrl} />
            <ArtistSummary name={artist.name} />
          </ArtistCard>
        </Column>
      ))}
    </Row>
  );
}

export function PageListArtist() {
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
      <ListArtist />
    </Box>
  );
}
