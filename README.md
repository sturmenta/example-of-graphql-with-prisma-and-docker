# graphql with local prisma and docker

- [install docker](https://www.robinwieruch.de/docker-macos)
- [install mongodb](https://gist.github.com/sturmenta/cf19baa91b1d79d8ae2b305fb7e1f799)

## run

```
yarn start
```

### notes

- example queries in ./queriesExamples.md

- auth in graphql.playground (get with `prisma token`)

```
{
  "Authorization": "Bearer <token>"
}
```

## sources

[graphql use](https://www.howtographql.com/graphql-js/0-introduction/)
[docker configuration](https://dev.to/alvarojsnish/graphql-mongo-v2-the-easy-way-6cb)
[prisma configuration](https://www.nocountryforgeeks.com/contruye-un-server-graphql-con-prisma/)
