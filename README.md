# Apollo Sandbox

Enhance your Strapi Admin Interface with Apollo Sandbox, an alternative GraphQL Explorer. Simplify development and testing of GraphQL queries and mutations directly within the Strapi Admin Interface. Explore your API schema, test queries in real-time, and iterate faster with this powerful plugin.

## About
This plugin integrates Apollo Sandbox for a powerful GraphQL Explorer in your Strapi Admin Interface.

## Installation
Install Strapi with this Quickstart command to create a Strapi project instantly:

```bash
# with yarn
yarn create strapi-app my-project --quickstart
# with npm/npx
npx create-strapi-app my-project --quickstart
```
This command generates a brand new project with the default features (authentication, permissions, content management, content type builder & file upload). The Quickstart command installs Strapi using a SQLite database which is used for prototyping in development.

### Add the Apollo Sandbox plugin:
```bash
yarn add @creazy/strapi-plugin-apollo-sandbox@latest
# or
npm i -S @creazy/strapi-plugin-apollo-sandbox@latest
```

After successful installation, you've to build a fresh package that includes plugin UI. To archive that simply use:

```bash
yarn build && yarn develop
# or
npm run build && npm run develop
```
or just run Strapi in the development mode with --watch-admin option:

```bash
yarn develop --watch-admin
#or
npm run develop --watch-admin
```

The Apollo Sandbox plugin should appear in the Plugins section of Strapi sidebar after you run the app again.

## Requirements
Complete installation requirements are exact same as for Strapi itself and can be found in the documentation under Installation Requirements.

Supported Strapi versions:

- Strapi v4.x.x

Node / NPM versions:

- NodeJS >= 14.21 < 19
- NPM >= 7.x

We recommend always using the latest version of Strapi to start your new projects.

## Contributing
Feel free to fork and make a Pull Request to this plugin project. All the input is warmly welcome!

## Show your support
Give a star if this project helped you.

## License
MIT License Copyright (c) 2023 creazy231.

## Community support
For general help using Strapi, please refer to the official Strapi documentation. For additional help with this plugin, you can reach out to me on the Strapi Discord channel or on Twitter.
