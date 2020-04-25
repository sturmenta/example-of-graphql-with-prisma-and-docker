## signup

```
mutation {
  signup(
    name: "Alice"
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}
```

## login

```
mutation {
  login (
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      name
    }
  }
}
```
