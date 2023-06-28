# Contributing
To setup and test, follow these steps:

```sh
git clone https://github.com/voorhoede/vue-components.git
cd vue-components
npm ci
npm test
```

## General Prerequisites
Node.js, [latest LTS is recommended](https://nodejs.org/en/about/releases/).

### Tips
- To manage the packages we use [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces).
- To manage publishing and changelog we use [changesets](https://github.com/changesets/changesets).

## Git Commit Messages
Write the message in present tense beginning with an uppercase letter, structured like this:

```
<subject>
<BLANK LINE>
<body>
```

Example

```
Clarify missing vue slot error

Closes #1
```
