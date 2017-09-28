const {GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

/*
    Here we define some dummy data. This could easily be a database or remote API.
*/
const posts = [
    {
        id: '1',
        title: "My first post",
        content: "This is my first example blog post. Hope you all like it.",
        tags: [ "blog", "first"],
        author: '1234',
        timestamp: new Date('2017-09-28T09:31:45.974Z'),
        public: true
    },
    {
        id: '2',
        title: "Fastify is really awesome!",
        content: "You should give it a try.",
        tags: [ "fastify", "nodejs"],
        author: '1234',
        timestamp: new Date('2017-09-28T09:31:45.974Z'),
        public: true
    }
];

const users = [
    {
        id: '1234',
        name: 'Nigel',
        email: 'nigel@mapwolf.net',
        twitter: 'nigelhanlon'      
    }
];

const comments = [
    {
        id: '4096',
        postId: '1',
        author: '1234',
        content: 'This blog post is really good!',
        timestamp: new Date('2017-09-28T09:31:45.974Z')
    }
];

/*
    Here we define the resolver functions to map our data to our schema.

    We also define Date as a custom scalar type.
    More info here: http://dev.apollodata.com/tools/graphql-tools/scalars.html
*/
module.exports = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
          return new Date(value); // value from the client
        },
        serialize(value) {
          return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
          if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10); // ast value is always in string format
          }
          return null;
        },
    }),
    Query: {
        posts: () => posts,
        post: (obj, args, context) => posts.find( (post) => post.id === args.id ),
        comments: (obj, args, context) => comments.filter( (comment) => comment.postId === args.id ), 
        user: (obj, args, context) => users.find( (user) => user.id === args.id )
    },
    Post: {
        author: (post, args, context) => users.find( (user) => user.id === post.author ),
        comments: (post, args, context) => comments.filter( (comment) => comment.postId === post.id )
    },
    Comment: {
        author: (comment, args, context) => users.find( (user) => user.id === comment.author )
    }
};