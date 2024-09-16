# sponi's Development Guidelines

## Table of Contents

- [sponi's Development Guidelines](#sponis-development-guidelines)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
    - [Tools](#tools)
    - [Extensions](#extensions)
  - [Commit Conventions](#commit-conventions)

## Requirements

### Tools

- Environment: `Node.js v20.17.0`
  - You can download it from [here](https://nodejs.org/en/download/).
- Package manager: `yarn`
  - To install it, run `npm i -g yarn` after installing Node.js.
- Code editor: `Visual Studio Code`
  - You can download it from [here](https://code.visualstudio.com/).
- Dev tools: `Expo Go`
  - You can download it from [here](https://expo.dev/go).
  - Please choose `SDK 51`

### Extensions

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Commit Conventions

Format: `<type>: <subject>`

Conventions:

- `add`: Add a new code what does not exist.
- `update`: Update an existing code.
- `fix`: Fix a bug, issue, or error, tool scan warning.
- `docs`: Update or add documentation.
- `feat`: Add a new feature. (Usually used in the PR title)
