import { gql } from "@apollo/client";

export const POPULAR_ARTIST = gql`
  query GetPopularArtists($size: Number!) {
    popular_artists(size: $size) {
      artists {
        name
        imageUrl
        bio
        initials
        meta
        gender
        birthday
        artworks {
          title
        }
      }
    }
  }
`;
