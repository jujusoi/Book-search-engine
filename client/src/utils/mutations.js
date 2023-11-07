import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
    mutation saveBook($userId: ID!, $bookInfo: BookTypes!) {
        saveBook(userId: $userId, bookInfo: $bookInfo) {
            _id,
            username,
            email,
            savedBooks {
                bookId,
                authors,
                title,
                description,
                image,
                link,
            },
        },
    },
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($userId: ID!, $bookId: String!) {
        deleteBook(userId: $userId, bookId: $bookId) {
            _id,
            username,
            email,
            savedBooks {
                bookId,
                authors,
                title,
                description,
                image,
                link,
            },
        },
    },
`;

export const CREATE_USER = gql`
 mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
    token,
    user {
        _id,
        username,
    },
    },
 },
`;

export const LOGIN = gql`
 mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token,
        user {
            _id,
            username
        },
    },
 },
`;