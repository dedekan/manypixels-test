import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Text,
  Spinner,
  Alert,
  AlertDescription,
  Avatar,
  Button,
  Image,
  AlertTitle,
} from "@chakra-ui/react";
import { Row, Column } from "../components/Layout";
import { DETAIL_ARTIST } from "../graphql/Artist";

export function PageDetailArtist() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(DETAIL_ARTIST, {
    variables: {
      id,
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
    <Box maxW={["container.sm", "container.md", "container.lg"]} mx="auto">
      <Box d="flex" flexDir="row" py={8}>
        <Box d="flex" flexDir="row" userSelect="none">
          <Avatar src={data.artist.imageUrl} size="lg" />
          <Box pl={4}>
            <Text fontSize="3xl" userSelect="none" fontWeight="600">
              {data.artist.name}
            </Text>
            <Text>{data.artist.bio}</Text>
          </Box>
        </Box>
        <Box ml="auto">
          <Button
            as={Link}
            to="/"
            variant="solid"
            colorScheme="orange"
            rounded="full"
          >
            Back to List
          </Button>
        </Box>
      </Box>
      <Box userSelect="none">
        <Text mb={4} fontSize="lg" fontWeight="600">
          Artworks
        </Text>
        <Row totalColumn={30}>
          {data.artist?.artworks?.map((artwork) => (
            <Column key={artwork.id} lg={6}>
              <Box mb={4}>
                <Image src={artwork.imageUrl} mb={2} borderRadius={4} />
                <Text>{artwork.title}</Text>
              </Box>
            </Column>
          ))}
        </Row>
      </Box>
    </Box>
  );
}
