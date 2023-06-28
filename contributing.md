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

## Publishing
All notable changes to this project will be documented in the package changelog files.  
Their format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). To manage changelog generation and publishing we use [changesets](https://github.com/changesets/changesets).
