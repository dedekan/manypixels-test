import { gql } from "@apollo/client";

export const POPULAR_ARTIST = gql`
  query GetPopularArtists($size: Int) {
    popular_artists(size: $size) {
      artists {
        id
        name
        imageUrl
        bio
        initials
        birthday
        artworks {
          title
        }
      }
    }
  }
`;
