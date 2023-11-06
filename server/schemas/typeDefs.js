const typeDefs = `
    type Book {
        _id: ID!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    type User {
        _id: ID!
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        profile: User
      }

    type Query {
        user(_id: ID!): User
    }
`

module.exports = typeDefs;