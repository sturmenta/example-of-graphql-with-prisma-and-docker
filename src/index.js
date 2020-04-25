const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('./generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Vote = require('./resolvers/Vote');

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
};

const endpoint = `http://${process.env.PRISMA_DOMAIN}:${process.env.PRISMA_PORT}`;

const db = new Prisma({
  endpoint,
  secret: process.env.PRISMA_SECRET,
});

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: async () => ({ prisma: db }),
});

server.start(() => console.log(`Server is running on ${endpoint}`));
