<p align="center">
  <img src=".github/images/logo.png" width="200" style="border-radius: 25px;" />
</p>

# Utils

![GitHub](https://img.shields.io/github/license/Xenfo/utils)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![codecov](https://codecov.io/gh/Xenfo/atomic/branch/master/graph/badge.svg?token=TCd33PxwSY)](https://codecov.io/gh/Xenfo/utils)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Structure](#structure)
- [Usage](#usage)
  - [Via CLI](#via-cli)
  - [Via Expo](#via-expo)
- [What is Utils](#what-is-utils)
- [Contribution](#contribution)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Structure

| Codebase             | Description         |
| -------------------- | ------------------- |
| [Lib](/packages/lib) | Project library     |
| [App](/packages/app) | App for the library |

## Usage

Install [Node.JS](https://nodejs.org/en/) then run the following commands.

```sh
# Clone the repository
git clone https://github.com/Xenfo/utils.git

# CD into the repository
cd utils

# Install dependencies
yarn
```

### Via CLI

```sh
yarn lerna run --scope @xenfo/utils build
yarn lerna exec --scope @xenfo/utils yarn shell
```

Now you will be in an interactive shell with the `Utils` object. Use the `Utils` object by doing `Utils.subSection.method`, eg: `Utils.math.gcf(12, 16)`.

To exit the interactive shell, press <kbd>CTRL</kbd>+<kbd>D</kbd>.

### Via Expo

Go to [Expo Go](https://expo.dev/tools) and scroll to the `Run your project with Expo Go`, then download the app for your platform.

```sh
yarn lerna exec --scope app yarn start
```

On iOS: Scan the QR code in your terminal or in your browser using your camera.
</br>
On Android: Scan the QR code in your terminal or in your browser using the Expo Go app.

To stop the app, press <kbd>CTRL</kbd>+<kbd>C</kbd>.

## What is Utils

Utils is a collection of utilities that help you with your annoying everyday tasks. This project is fully open sourced and tries to avoid third party libraries.

## Contribution

Utils is open to contributions, but I recommend opening an issue on GitHub with your idea before implementing it so that you can receive feedback.

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on how to contribute to this project.

## License

Utils is [MIT licensed](/LICENSE).
