"use strict";
const assert = require("node:assert/strict");

// SCREAMING_SNAKE legacy enum keys map onto the PascalCase namespace
// constants, e.g. GRADIENT_FILL -> GradientFill, MATTE3 -> Matte3.
const pascal = (key) =>
  key
    .split("_")
    .map((part) => part[0] + part.slice(1).toLowerCase())
    .join("");

// Numeric enums also carry reverse-mapped numeric keys; skip those.
const memberKeys = (legacyEnum) =>
  Object.keys(legacyEnum).filter((key) => Number.isNaN(Number(key)));

module.exports = (lottie) => {
  const {
    BlendMode,
    Composite,
    EffectType,
    EffectValueType,
    FillRule,
    GradientType,
    LayerStyleType,
    LayerType,
    LineCap,
    LineJoin,
    MaskMode,
    MatteMode,
    PolyStarType,
    ShapeDirection,
    ShapeType,
    StrokeDashType,
    TextType,
    TrimMultipleShapes,
  } = lottie;

  // Spot-check every namespace against the Lottie spec values.
  assert.equal(BlendMode.Normal, 0);
  assert.equal(BlendMode.HardMix, 17);
  assert.equal(Composite.Above, 2);
  assert.equal(Composite.Below, 1);
  assert.equal(EffectType.Custom, 5);
  assert.equal(EffectType.Puppet, 34);
  assert.equal(EffectValueType.Slider, 0);
  assert.equal(EffectValueType.Ignored, 6);
  assert.equal(EffectValueType.Layer, 10);
  assert.equal(FillRule.NonZero, 1);
  assert.equal(FillRule.EvenOdd, 2);
  assert.equal(GradientType.Linear, 1);
  assert.equal(GradientType.Radial, 2);
  assert.equal(LayerStyleType.Stroke, 0);
  assert.equal(LayerStyleType.GradientOverlay, 8);
  assert.equal(LayerType.Precomposition, 0);
  assert.equal(LayerType.Text, 5);
  assert.equal(LayerType.Data, 15);
  assert.equal(LineCap.Butt, 1);
  assert.equal(LineCap.Square, 3);
  assert.equal(LineJoin.Miter, 1);
  assert.equal(LineJoin.Bevel, 3);
  assert.equal(MaskMode.No, "n");
  assert.equal(MaskMode.Add, "a");
  assert.equal(MaskMode.Difference, "f");
  assert.equal(MatteMode.Normal, 0);
  assert.equal(MatteMode.InvertedLuma, 4);
  assert.equal(PolyStarType.Star, 1);
  assert.equal(PolyStarType.Polygon, 2);
  assert.equal(ShapeDirection.Normal, 0);
  assert.equal(ShapeDirection.ClockwiseReversed, 3);
  assert.equal(ShapeType.Rectangle, "rc");
  assert.equal(ShapeType.Modifier, "");
  assert.equal(ShapeType.Trim, "tm");
  assert.equal(StrokeDashType.Default, "d");
  assert.equal(StrokeDashType.Offset, "o");
  assert.equal(TextType.Based.Characters, 1);
  assert.equal(TextType.Based.Lines, 4);
  assert.equal(TextType.Caps.Regular, 0);
  assert.equal(TextType.Caps.SmallCaps, 2);
  assert.equal(TextType.Grouping.All, 4);
  assert.equal(TextType.Justify.WithLastLineFull, 6);
  assert.equal(TextType.Shape.Smooth, 6);
  assert.equal(TextType.FontPathOrigin.FontUrl, 3);
  assert.equal(TextType.VerticalJustify.Bottom, 2);
  assert.equal(TextType.RangeSelectorMode.Difference, 5);
  assert.equal(TrimMultipleShapes.Individually, 1);
  assert.equal(TrimMultipleShapes.Simultaneously, 2);

  // Deprecated flat aliases stay in lockstep with their sources.
  assert.equal(TextType.Regular, TextType.Caps.Regular);
  assert.equal(TextType.AllCaps, TextType.Caps.AllCaps);
  assert.equal(TextType.SmallCaps, TextType.Caps.SmallCaps);
  assert.equal(TextType.Lines, TextType.Based.Lines);
  assert.equal(TextType.Word, TextType.Grouping.Word);

  // Every legacy enum member mirrors its namespace constant.
  const legacyEnums = [
    [BlendMode.VALUE, BlendMode, "BlendMode.VALUE"],
    [Composite.VALUE, Composite, "Composite.VALUE"],
    [EffectType.VALUE, EffectType, "EffectType.VALUE"],
    [EffectValueType.VALUE, EffectValueType, "EffectValueType.VALUE"],
    [FillRule.VALUE, FillRule, "FillRule.VALUE"],
    [GradientType.VALUE, GradientType, "GradientType.VALUE"],
    [LayerType.VALUE, LayerType, "LayerType.VALUE"],
    [LineCap.VALUE, LineCap, "LineCap.VALUE"],
    [LineJoin.VALUE, LineJoin, "LineJoin.VALUE"],
    [MaskMode.VALUE, MaskMode, "MaskMode.VALUE"],
    [MatteMode.VALUE, MatteMode, "MatteMode.VALUE"],
    [PolyStarType.VALUE, PolyStarType, "PolyStarType.VALUE"],
    [ShapeDirection.VALUE, ShapeDirection, "ShapeDirection.VALUE"],
    [ShapeType.VALUE, ShapeType, "ShapeType.VALUE"],
    [StrokeDashType.VALUE, StrokeDashType, "StrokeDashType.VALUE"],
    [
      TrimMultipleShapes.VALUES,
      TrimMultipleShapes,
      "TrimMultipleShapes.VALUES",
    ],
    [TextType.BASED, TextType.Based, "TextType.BASED"],
    [TextType.TEXT_CAPS, TextType.Caps, "TextType.TEXT_CAPS"],
    [TextType.GROUPING, TextType.Grouping, "TextType.GROUPING"],
    [TextType.JUSTIFY, TextType.Justify, "TextType.JUSTIFY"],
    [TextType.SHAPE, TextType.Shape, "TextType.SHAPE"],
    [
      TextType.FONT_PATH_ORIGIN,
      TextType.FontPathOrigin,
      "TextType.FONT_PATH_ORIGIN",
    ],
    [
      TextType.VERTICAL_JUSTIFY,
      TextType.VerticalJustify,
      "TextType.VERTICAL_JUSTIFY",
    ],
    [
      TextType.RANGE_SELECTOR_MODE,
      TextType.RangeSelectorMode,
      "TextType.RANGE_SELECTOR_MODE",
    ],
  ];
  for (const [legacyEnum, namespace, label] of legacyEnums) {
    const keys = memberKeys(legacyEnum);
    assert.ok(keys.length > 0, `${label} has no members`);
    for (const key of keys) {
      const constant = pascal(key);
      assert.ok(
        constant in namespace,
        `${label}.${key} has no ${constant} constant`,
      );
      assert.equal(legacyEnum[key], namespace[constant], `${label}.${key}`);
    }
  }
};
