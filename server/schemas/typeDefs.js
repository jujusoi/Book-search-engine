const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [String]!
    }

    type Query {
        users: [User]!
        user(_id: ID!): User
    }
`

module.exports = typeDefs;