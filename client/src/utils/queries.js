import { gql } from '@apollo/client'; 

export const QUERY_CHARACTERS = gql`
    query allCharacters {
        characters{
            _id
            name
            type
            brand
            bio
            record
        }
    }
`
export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
  }
}
`;
