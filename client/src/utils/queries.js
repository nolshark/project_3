import { gql } from '@apollo/client'; 

export const QUERY_USERS = gql`
    query allUsers{
        _id
        username
    }
`

export const QUERY_CHARACTERS = gql`
    query allCharacters {
        characters{
            _id
            name
            specialty
            ip
            bio
            source
        }
    }
`