docker run --rm --init --ulimit memlock=-1:-1 -v .:/opt/app -w /opt/app oven/bun init

bun add mongodb
bun --watch run index.ts

# app

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.17. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
