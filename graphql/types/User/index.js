export default `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type addUser {
        name: String!
        email: String!
    }

    type Query {
        user(id: ID!): User
        users: [User]
    }

    type Mutation {
        addUser(name: String!, email: String!): addUser
        editUser(id: ID!, name: String!, email: String!): User
        deleteUser(id: ID!): User
    }
`;