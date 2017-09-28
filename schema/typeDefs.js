module.exports = `
    scalar Date
    
    type Post {
        id: ID!
        title: String!
        content: String
        tags: [String!]
        comments: [Comment]
        author: User
        timestamp: Date
        public: Boolean
    }

    type User {
        id: ID!
        name: String!
        email: String!
        twitter: String
    }

    type Comment {
        id: ID!
        author: User,
        content: String!
        timestamp: Date
    }

    type Query {
        posts: [Post]
        post(id: ID!): Post
        user(id: ID!): User
        comments(id: ID!): [Comment]
    }
`;