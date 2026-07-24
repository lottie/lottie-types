# @lottie-animation-community/lottie-types

## 1.3.0

### Minor Changes

- 1e5605f: - feat: export runtime constant namespaces for ESM and CommonJS consumers
  - feat: ship dedicated ESM (`index.js`) and CommonJS (`index.cjs`) entry points with per-condition type declarations (`index.d.ts` / `index.d.cts`)
  - feat: make the deprecated `.VALUE`/`.VALUES` compatibility enums available at runtime
  - feat: restore the deprecated `TextType.Regular`, `TextType.AllCaps`, and `TextType.SmallCaps` aliases
  - feat: declare `sideEffects: false` so bundlers can tree-shake the package
  - fix: resolve types for CommonJS TypeScript consumers under `node16`/`nodenext`
  - fix: reject namespace objects in the `TextType` value union
  - fix: add the missing `@deprecated` tag to `TextType.TEXT_CAPS`

### Patch Changes

- c683f9d: fix(composite): correct repeater stacking values to `Below = 1` and `Above = 2`

## 1.2.0

### Minor Changes

- bda29aa: fix: properly generate schema with v1.1.0

### Patch Changes

- 404e17b: fix(blend-mode): include missing Add & HardMix"

## 1.1.0

### Minor Changes

- 15187f9: fix(text): sync with lottie-docs & adjust naming & structure
- c412e2b: feat(layer): visual cp and ct
- 230611f: fix(layer): "t" prop value has to be Text.Data in layer.text
- d52428c: feat: slots and slotId props

### Patch Changes

- 53dc386: fix(layer): move MatteParent Main to Visual with additional info
- 2ce591b: fix(animated-property): updated keyframe bezier handles to number types
- 814ba3f: feat(layer): new Track Matte Parent prop for layer-visual

## 1.0.0

### Major Changes

- ff3e85c: feat: major v1.0.0 release
