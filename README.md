# React from Scratch

## Backgrounds
* [GraphQL](https://graphql.org/learn/ "Introduction to GraphQL")
* [React](https://reactjs.org/tutorial/tutorial.html "Tutorial: Intro to React")
* ~~gRPC~~

## Requirements

* Yarn 1.7+
* Node 9+
* Recommended OS as Windows 10 or Ubuntu 18

## Quick start

1. Rename .env.sample file to .env, 

   ```bash
   mv ./.env.sample ./.env
   ```
   and setup environment variables in .env file
   ```bash
   NODE_ENV=development
   PORT=3000
   ...
   ```

2. Install package manager Yarn
   1. At [yarnpkg.com](https://yarnpkg.com, "Yarn")
   2. Or with NPM

      ```bash
      npm -g install yarn
      ```

3. Install dependencies

   ```bash
   yarn install
   ```

4. Run nodemon to compile the code in realtime

   ```bash
   yarn dev
   ```

5. Happy hacking!
