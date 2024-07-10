# Running Bun With MongoDB

This is the code example for the Running Bun With MongoDB tutorial.

To run this project, you need to install bun, as explained on their [website](https://bun.sh).

>If you don't want to install bun, you can use the docker image `oven/bun` to run the project. Replace `bun` with the following command.

```bash
docker run --rm --init --ulimit memlock=-1:-1 -v .:/opt/app -p 3000:3000 -w /opt/app -e PORT=3000 oven/bun <params>
```

>ie. `bun install` becomes `docker run --rm --init --ulimit memlock=-1:-1 -v .:/opt/app -p 3000:3000 -w /opt/app -e PORT=3000 oven/bun install`
:::

## TLDR

If you want to start with a MongoDB and Bun template, you can run the following commands.

```bash
git clone https://github.com/mongodb-developer/bun-with-mongodb
cd bun-with-mongodb
bun i
echo "MONGODB_URI=<your_atlas_connection_string>" > .env
bun run index.ts
```
