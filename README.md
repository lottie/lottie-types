# lottie-types

## Installation

```bash
npm install --save @lottie-animation-community/lottie-types
```

## Summary

This package contains type definitions and runtime constants for the Lottie animation format, with dedicated ESM and CommonJS entry points.

```ts
import { BlendMode, LayerType } from "@lottie-animation-community/lottie-types";

const blendMode: BlendMode = BlendMode.Normal;
const layerType: LayerType = LayerType.Text;
```

```js
const { BlendMode } = require("@lottie-animation-community/lottie-types");
```

The deprecated uppercase enum names remain available for compatibility:

```ts
const blendMode: BlendMode.VALUE = BlendMode.VALUE.NORMAL;
```

Since the constants exist at runtime, install the package as a regular dependency (not a `devDependency`) if you use them as values rather than only as types.

## Details

The project has been migrated from the [lottiefiles](https://github.com/lottiefiles) organization that has been used internally. The definition types have been built based on [lottie-docs/schema](https://lottiefiles.github.io/lottie-docs/schema/) with a few differences: firstly, some
additional informative type comments have been added through testing the schema types with real Lottie data; secondly,
the types constructed in a way to avoid duplications.

Instead of writing the types manually, generating it automatically was considered but wasn't successful, for
reason that most of the tools such as [quicktype](https://quicktype.io/),
[json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript) and
[transform](https://github.com/ritz078/transform) don't work well with huge JSON-schema structures with many nested
layers and don't support [json-schema/draft/2020-12](https://json-schema.org/draft/2020-12/release-notes.html) features
such as complicated conditionals, prefixItems, and some def reference scenarios.

The schema definitions have been synced with [marcusstenbeck/lottie-types](https://github.com/marcusstenbeck/lottie-types) as well.

## Plan

- auto-generate types from [lottie-docs/schema](https://lottiefiles.github.io/lottie-docs/schema/)
- publish the final definition bundle to [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

## Contribution

The following steps will get you setup to contribute changes to this repo:

1. Fork the repo

2. Run `yarn install` to get dependencies packages

3. Sync any schema changes with [lottie-docs](https://github.com/LottieFiles/lottie-docs)

4. Add changesets running `yarn changelog` for any reasonable change to your codebase. You must ensure Changesets are
   included when making a Pull Request to merge to main branches. Please refer to the [changeset docs](https://github.com/changesets/changesets)

5. Create a PR from `feature-branch` to `main`

6. After merging to `main` the Github action will create another PR for only version bumping and changelog, which you
   have to merge the PR manually

7. the package will be released to the NPM and GitHub registry after the merging the Changeset PR

## Commands

| Command                  | Description                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| `yarn clean`             | Deletes the generated package entry points                           |
| `yarn test`              | Builds and validates types plus ESM and CommonJS runtime exports     |
| `yarn format:prettier`   | Format the code using prettier                                       |
| `yarn build`             | Bundles runtime constants and declarations into package entry points |
| `yarn changelog`         | Add a changeset changelog entry                                      |
| `yarn changelog:check`   | Check pending changesets                                             |
| `yarn changelog:version` | Update all the workspace projects versions using changesets          |
| `yarn changelog:publish` | Publish the packages to the package repository                       |

## License

[MIT](./LICENSE) © [lottie-animation-community](https://github.com/lottie)
