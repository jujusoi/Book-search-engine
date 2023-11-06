import { gql } from '@apollo/client';

export const QUERY_SINGLE_PROFILE = gql`
    query singleUser($userId: ID!) {
        user(userId: $userId) {
            _id
            username: String
            email: String
            password: String
            savedBooks: {
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