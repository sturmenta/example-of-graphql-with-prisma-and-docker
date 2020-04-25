const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('./generated/prisma-client');
const resolvers = require('./resolvers');

const db = new Prisma({
  endpoint: `http://${process.env.PRISMA_DOMAIN}:${process.env.PRISMA_PORT}`,
  secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
});

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: async () => ({ prisma: db }),
});

server.start({ port: process.env.SERVER_PORT }, () =>
  console.log(`Server is running on http://localhost:${process.env.SERVER_PORT}`)
);
