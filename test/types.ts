import {
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
} from "@lottie-animation-community/lottie-types";

const blend: BlendMode = BlendMode.Normal;
const blendMember: BlendMode.Normal = BlendMode.Normal;
const legacyBlend: BlendMode.Value = BlendMode.VALUE.NORMAL;
const legacyBlendEnum: BlendMode.VALUE = BlendMode.VALUE.NORMAL;

const compositeAbove: Composite.Above = 2;
const compositeBelow: Composite.Below = 1;
const legacyCompositeEnum: Composite.VALUE = Composite.VALUE.ABOVE;
const legacyEffectEnum: EffectType.VALUE = EffectType.VALUE.TINT;
const legacyEffectValueEnum: EffectValueType.VALUE =
  EffectValueType.VALUE.SLIDER;
const legacyFillRuleEnum: FillRule.VALUE = FillRule.VALUE.NON_ZERO;
const legacyGradientEnum: GradientType.VALUE = GradientType.VALUE.LINEAR;
const layerStyle: LayerStyleType = LayerStyleType.Stroke;
const layerStyleMember: LayerStyleType.GradientOverlay =
  LayerStyleType.GradientOverlay;
const layer: LayerType = LayerType.Text;
const legacyLayerEnum: LayerType.VALUE = LayerType.VALUE.TEXT;
const legacyLineCapEnum: LineCap.VALUE = LineCap.VALUE.BUTT;
const legacyLineJoinEnum: LineJoin.VALUE = LineJoin.VALUE.MITER;
const legacyMaskEnum: MaskMode.VALUE = MaskMode.VALUE.ADD;
const legacyMatteEnum: MatteMode.VALUE = MatteMode.VALUE.ALPHA;
const legacyPolyStarEnum: PolyStarType.VALUE = PolyStarType.VALUE.STAR;
const legacyShapeDirectionEnum: ShapeDirection.VALUE =
  ShapeDirection.VALUE.CLOCKWISE;
const legacyShapeEnum: ShapeType.VALUE = ShapeType.VALUE.RECTANGLE;
const legacyStrokeDashEnum: StrokeDashType.VALUE = StrokeDashType.VALUE.DEFAULT;
const legacyTrimEnum: TrimMultipleShapes.VALUES =
  TrimMultipleShapes.VALUES.SIMULTANEOUSLY;

const textCaps: TextType.Caps = TextType.Caps.AllCaps;
const textValue: TextType = TextType.Caps.AllCaps;
const legacyTextBased: TextType.BASED = TextType.BASED.CHARACTERS;
const legacyTextCaps: TextType.TEXT_CAPS = TextType.TEXT_CAPS.ALL_CAPS;
const legacyTextGrouping: TextType.GROUPING = TextType.GROUPING.WORD;
const legacyTextJustify: TextType.JUSTIFY = TextType.JUSTIFY.CENTER;
const legacyTextShape: TextType.SHAPE = TextType.SHAPE.SQUARE;
const legacyFontOrigin: TextType.FONT_PATH_ORIGIN =
  TextType.FONT_PATH_ORIGIN.LOCAL;
const legacyVerticalJustify: TextType.VERTICAL_JUSTIFY =
  TextType.VERTICAL_JUSTIFY.TOP;
const legacyRangeMode: TextType.RANGE_SELECTOR_MODE =
  TextType.RANGE_SELECTOR_MODE.ADD;
const legacyRegular: TextType.Regular = TextType.Regular;
const legacyAllCaps: TextType.AllCaps = TextType.AllCaps;
const legacySmallCaps: TextType.SmallCaps = TextType.SmallCaps;

// @ts-expect-error BlendMode only includes documented literals.
const invalidBlend: BlendMode = 99;

// @ts-expect-error Namespace objects are not valid numeric TextType values.
const invalidTextValue: TextType = TextType.Caps;

void [
  blend,
  blendMember,
  legacyBlend,
  legacyBlendEnum,
  compositeAbove,
  compositeBelow,
  legacyCompositeEnum,
  legacyEffectEnum,
  legacyEffectValueEnum,
  legacyFillRuleEnum,
  legacyGradientEnum,
  layerStyle,
  layerStyleMember,
  layer,
  legacyLayerEnum,
  legacyLineCapEnum,
  legacyLineJoinEnum,
  legacyMaskEnum,
  legacyMatteEnum,
  legacyPolyStarEnum,
  legacyShapeDirectionEnum,
  legacyShapeEnum,
  legacyStrokeDashEnum,
  legacyTrimEnum,
  textCaps,
  textValue,
  legacyTextBased,
  legacyTextCaps,
  legacyTextGrouping,
  legacyTextJustify,
  legacyTextShape,
  legacyFontOrigin,
  legacyVerticalJustify,
  legacyRangeMode,
  legacyRegular,
  legacyAllCaps,
  legacySmallCaps,
  invalidBlend,
  invalidTextValue,
];
