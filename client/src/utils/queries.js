import { gql } from '@apollo/client';

export const QUERY_SINGLE_PROFILE = gql`
    query singleUser($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
            password
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
`;