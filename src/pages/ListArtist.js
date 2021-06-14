import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  Spinner,
  Box,
  Alert,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";

import { POPULAR_ARTIST } from "../graphql/Artist";

import { ArtistCard, ArtistImage, ArtistSummary } from "../components/Artist";

export function PageListArtist() {
  const [page] = useState(1);

  const { loading, error, data } = useQuery(POPULAR_ARTIST, {
    variables: {
      size: page * 12,
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
        <AlertTitle>{error.name}</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Box d="flex" flexDir="row" flexWrap="wrap">
      {data.popular_artists?.artists?.map((artist) => (
        <Box key={artist.id} w="full" maxW="25%">
          <ArtistCard id={artist.id}>
            <ArtistImage src={artist.imageUrl} name={artist.name} />
            <ArtistSummary name={artist.name} />
          </ArtistCard>
        </Box>
      ))}
    </Box>
  );
}
