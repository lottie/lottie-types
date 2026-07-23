---
"@lottie-animation-community/lottie-types": minor
---

Export runtime constant namespaces for ESM and CommonJS consumers while preserving the legacy enum type API. The deprecated numeric `.VALUE` and `.VALUES` compatibility enums now exist at runtime, so their objects include TypeScript's numeric reverse mappings in addition to their named keys.

Note for consumers of the deprecated `.VALUE`/`.VALUES` enums: these were previously ambient `const enum`s that TypeScript inlined at compile time, so no runtime dependency existed. Code using them now compiles to a real runtime import of this package — if you use these values, make sure the package is installed at runtime (not only in `devDependencies`).
