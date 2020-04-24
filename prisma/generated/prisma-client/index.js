"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://${process.env["PRISMA_DOMAIN"]}:${
    process.env["PRISMA_PORT"]
  }`,
  secret: `${process.env["PRISMA_MANAGEMENT_API_SECRET"]}`
});
exports.prisma = new exports.Prisma();
