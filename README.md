# prisma-graphql


## first start
```
# be sure of all cleaned
https://github.com/docker/compose/issues/4950#issuecomment-398879461

prisma init
docker-machine start default
docker-machine env
eval $(docker-machine env)
docker-compose up -d
# ask for docker-machine ip
docker-machine ip default
# edit prisma.yml `endpoint: http://localhost:4466` -> endpoint: http://192.168.99.100:4466
prisma deploy
```

## run
```
docker-machine start default
docker-machine env
eval $(docker-machine env)
docker-compose up -d
prisma deploy

# http://192.168.99.100:4466/ -> graphql playground
# http://192.168.99.100:4466/_admin -> prisma admin
```

### notes

- if use the following line in prisma.yml generate a `prisma token` for prevent error

```
secret: ${env:PRISMA_MANAGEMENT_API_SECRET}
```

