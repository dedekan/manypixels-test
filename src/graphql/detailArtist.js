import { gql } from "@apollo/client";

export const DETAIL_ARTIST = gql`
  query GetDetailArtist($id: String!) {
    artist(id: $id) {
      name
      imageUrl
      bio
      initials
      gender
      birthday
      hometown
      nationality
      artworks {
        title
        date
        imageUrl
      }
    }
  }
`;
