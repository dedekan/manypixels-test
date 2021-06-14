import { gql } from "@apollo/client";

export const DETAIL_ARTIST = gql`
  query GetDetailArtist($id: String!) {
    artist(id: $id) {
      name
      imageUrl
      bio
      gender
      hometown
      nationality
      artworks {
        title
        imageUrl
      }
    }
  }
`;

export const POPULAR_ARTIST = gql`
  query GetPopularArtists($size: Int) {
    popular_artists(size: $size) {
      artists {
        id
        name
        imageUrl
      }
    }
  }
`;
