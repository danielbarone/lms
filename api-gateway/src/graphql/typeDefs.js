import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type User {
    contactId: String!
    firstName: String!
    lastName: String!
    email: String!
    id: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Order {
    id: ID!
    user: User!
    firstName: String!
    age: Int!
    address: String!
    radius: Int!
    notes: String
    app: String!
    status: Int!
    createdAt: Date!
    updatedAt: Date!
  }

  type Result {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    order: Order!
    image: String!
  }

  type Mutation {
    createUser(contactId: String!, firstName: String!, lastName: String!, email: String!, password: String!): User!
    updateUserPassword(email: String!, password: String!): UserSession!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
    createOrder(userId: ID!, firstName: String!, age: Int!, address: String!, radius: Int!, app: String!): Order!
    createResult(orderId: ID!, image: String!): Result!
  }

  type Query {
    orders: [Order!]!
    order(id: ID!): Order
    userSession(me: Boolean!): UserSession
    results(orderId: ID!): [Result!]!
  }
`;

export default typeDefs;
