# What does this project do?

It's a journaling app to motivate you to write 750 words per day. Inspired by 750words.com.

# How do I get started?

For local development, from root, run `npm i` once, then `npm run dev` to start both Express and React instances.

# Development

## Backend

### Db

- From root, run `bash bin/makefile`.

### Endpoint testing

- From backend directory, run `npm run test`.

# Challenges

- Populate database before test
  - Using/not using fixtures since you will need to maintain it each time changes are made to your models. (https://stackoverflow.com/a/43718623/348282)