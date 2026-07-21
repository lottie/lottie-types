import assert from "node:assert/strict";

import {
  BlendMode,
  LayerType,
  MaskMode,
  TextType,
  TrimMultipleShapes,
} from "@lottie-animation-community/lottie-types";

assert.equal(BlendMode.Normal, 0);
assert.equal(BlendMode.VALUE.NORMAL, BlendMode.Normal);
assert.equal(LayerType.VALUE.TEXT, LayerType.Text);
assert.equal(MaskMode.VALUE.ADD, MaskMode.Add);
assert.equal(TextType.TEXT_CAPS.ALL_CAPS, TextType.Caps.AllCaps);
assert.equal(TextType.Regular, TextType.Caps.Regular);
assert.equal(TextType.AllCaps, TextType.Caps.AllCaps);
assert.equal(TextType.SmallCaps, TextType.Caps.SmallCaps);
assert.equal(
  TrimMultipleShapes.VALUES.SIMULTANEOUSLY,
  TrimMultipleShapes.Simultaneously,
);
