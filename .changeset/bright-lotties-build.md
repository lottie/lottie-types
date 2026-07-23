---
"@lottie-animation-community/lottie-types": minor
---

- feat: export runtime constant namespaces for ESM and CommonJS consumers
- feat: ship dedicated ESM (`index.js`) and CommonJS (`index.cjs`) entry points with per-condition type declarations (`index.d.ts` / `index.d.cts`)
- feat: make the deprecated `.VALUE`/`.VALUES` compatibility enums available at runtime
- feat: restore the deprecated `TextType.Regular`, `TextType.AllCaps`, and `TextType.SmallCaps` aliases
- feat: declare `sideEffects: false` so bundlers can tree-shake the package
- fix: resolve types for CommonJS TypeScript consumers under `node16`/`nodenext`
- fix: reject namespace objects in the `TextType` value union
- fix: add the missing `@deprecated` tag to `TextType.TEXT_CAPS`
