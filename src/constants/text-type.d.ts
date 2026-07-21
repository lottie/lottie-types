import { Helpers } from "../helpers";

export type TextType = Helpers.Values<typeof TextType>;
export namespace TextType {
  export type Based = Helpers.Values<typeof Based>;
  export namespace Based {
    export type Value = Based;

    export const Characters = 1;
    export type Characters = typeof Characters;
    export const CharacterExcludingSpaces = 2;
    export type CharacterExcludingSpaces = typeof CharacterExcludingSpaces;
    export const Words = 3;
    export type Words = typeof Words;
    export const Lines = 4;
    export type Lines = typeof Lines;
  }
  /** @deprecated Use the {@linkcode TextType.Based} namespace */
  export enum BASED {
    CHARACTERS = Based.Characters,
    CHARACTER_EXCLUDING_SPACES = Based.CharacterExcludingSpaces,
    WORDS = Based.Words,
    LINES = Based.Lines,
  }

  /**
   * @default 0
   */
  export type Caps = Helpers.Values<typeof Caps>;
  export namespace Caps {
    export type Value = Caps;

    export const Regular = 0;
    export type Regular = typeof Regular;
    export const AllCaps = 1;
    export type AllCaps = typeof AllCaps;
    export const SmallCaps = 2;
    export type SmallCaps = typeof SmallCaps;
  }
  export enum TEXT_CAPS {
    REGULAR = Caps.Regular,
    ALL_CAPS = Caps.AllCaps,
    SMALL_CAPS = Caps.SmallCaps,
  }

  export type Grouping = Helpers.Values<typeof Grouping>;
  export namespace Grouping {
    export type Value = Grouping;

    export const Characters = 1;
    export type Characters = typeof Characters;
    export const Word = 2;
    export type Word = typeof Word;
    export const Line = 3;
    export type Line = typeof Line;
    export const All = 4;
    export type All = typeof All;
  }
  /** @deprecated Use the {@linkcode TextType.Grouping} namespace */
  export enum GROUPING {
    CHARACTERS = Grouping.Characters,
    WORD = Grouping.Word,
    LINE = Grouping.Line,
    ALL = Grouping.All,
  }

  /**
   * Text alignment / justification
   *
   * @default 0
   */
  export type Justify = Helpers.Values<typeof Justify>;
  export namespace Justify {
    export type Value = Justify;

    export const Left = 0;
    export type Left = typeof Left;
    export const Right = 1;
    export type Right = typeof Right;
    export const Center = 2;
    export type Center = typeof Center;
    export const WithLastLineLeft = 3;
    export type WithLastLineLeft = typeof WithLastLineLeft;
    export const WithLastLineRight = 4;
    export type WithLastLineRight = typeof WithLastLineRight;
    export const WithLastLineCenter = 5;
    export type WithLastLineCenter = typeof WithLastLineCenter;
    export const WithLastLineFull = 6;
    export type WithLastLineFull = typeof WithLastLineFull;
  }
  /** @deprecated Use the {@linkcode TextType.Justify} namespace */
  export enum JUSTIFY {
    LEFT = Justify.Left,
    RIGHT = Justify.Right,
    CENTER = Justify.Center,
    WITH_LAST_LINE_LEFT = Justify.WithLastLineLeft,
    WITH_LAST_LINE_RIGHT = Justify.WithLastLineRight,
    WITH_LAST_LINE_CENTER = Justify.WithLastLineCenter,
    WITH_LAST_LINE_FULL = Justify.WithLastLineFull,
  }

  export type Shape = Helpers.Values<typeof Shape>;
  export namespace Shape {
    export type Value = Shape;

    export const Square = 1;
    export type Square = typeof Square;
    export const RampUp = 2;
    export type RampUp = typeof RampUp;
    export const RampDown = 3;
    export type RampDown = typeof RampDown;
    export const Triangle = 4;
    export type Triangle = typeof Triangle;
    export const Round = 5;
    export type Round = typeof Round;
    export const Smooth = 6;
    export type Smooth = typeof Smooth;
  }
  /** @deprecated Use the {@linkcode TextType.Shape} namespace */
  export enum SHAPE {
    SQUARE = Shape.Square,
    RAMP_UP = Shape.RampUp,
    RAMP_DOWN = Shape.RampDown,
    TRIANGLE = Shape.Triangle,
    ROUND = Shape.Round,
    SMOOTH = Shape.Smooth,
  }

  export type FontPathOrigin = Helpers.Values<typeof FontPathOrigin>;
  export namespace FontPathOrigin {
    export type Value = FontPathOrigin;

    export const Local = 0;
    export type Local = typeof Local;
    export const CssUrl = 1;
    export type CssUrl = typeof CssUrl;
    export const ScriptUrl = 2;
    export type ScriptUrl = typeof ScriptUrl;
    export const FontUrl = 3;
    export type FontUrl = typeof FontUrl;
  }
  /** @deprecated Use the {@linkcode TextType.FontPathOrigin} namespace */
  export enum FONT_PATH_ORIGIN {
    LOCAL = FontPathOrigin.Local,
    CSS_URL = FontPathOrigin.CssUrl,
    SCRIPT_URL = FontPathOrigin.ScriptUrl,
    FONT_URL = FontPathOrigin.FontUrl,
  }

  export type VerticalJustify = Helpers.Values<typeof VerticalJustify>;
  export namespace VerticalJustify {
    export type Value = VerticalJustify;

    export const Top = 0;
    export type Top = typeof Top;
    export const Center = 1;
    export type Center = typeof Center;
    export const Bottom = 2;
    export type Bottom = typeof Bottom;
  }
  /** @deprecated Use the {@linkcode TextType.VerticalJustify} namespace */
  export enum VERTICAL_JUSTIFY {
    TOP = VerticalJustify.Top,
    CENTER = VerticalJustify.Center,
    BOTTOM = VerticalJustify.Bottom,
  }

  export type RangeSelectorMode = Helpers.Values<typeof RangeSelectorMode>;
  export namespace RangeSelectorMode {
    export type Value = RangeSelectorMode;

    export const Add = 0;
    export type Add = typeof Add;
    export const Subtract = 1;
    export type Subtract = typeof Subtract;
    export const Intersect = 2;
    export type Intersect = typeof Intersect;
    export const Min = 3;
    export type Min = typeof Min;
    export const Max = 4;
    export type Max = typeof Max;
    export const Difference = 5;
    export type Difference = typeof Difference;
  }
  /** @deprecated Use the {@linkcode TextType.RangeSelectorMode} namespace */
  export enum RANGE_SELECTOR_MODE {
    ADD = RangeSelectorMode.Add,
    SUBTRACT = RangeSelectorMode.Subtract,
    INTERSECT = RangeSelectorMode.Intersect,
    MIN = RangeSelectorMode.Min,
    MAX = RangeSelectorMode.Max,
    DIFFERENCE = RangeSelectorMode.Difference,
  }

  /** @deprecated Use {@linkcode TextType.Based.Characters} or {@linkcode TextType.Grouping.Characters} */
  export const Characters = Based.Characters;
  export type Characters = typeof Characters;
  /** @deprecated Use {@linkcode TextType.Based.CharacterExcludingSpaces} */
  export const CharacterExcludingSpaces = Based.CharacterExcludingSpaces;
  export type CharacterExcludingSpaces = typeof CharacterExcludingSpaces;
  /** @deprecated Use {@linkcode TextType.Based.Words} */
  export const Words = Based.Words;
  export type Words = typeof Words;
  /** @deprecated Use {@linkcode TextType.Based.Lines} */
  export const Lines = Based.Lines;
  export type Lines = typeof Lines;
  /** @deprecated Use {@linkcode TextType.Grouping.Word} */
  export const Word = Grouping.Word;
  export type Word = typeof Word;
  /** @deprecated Use {@linkcode TextType.Grouping.Line} */
  export const Line = Grouping.Line;
  export type Line = typeof Line;
  /** @deprecated Use {@linkcode TextType.Grouping.All} */
  export const All = Grouping.All;
  export type All = typeof All;
  /** @deprecated Use {@linkcode TextType.Justify.Left} */
  export const Left = Justify.Left;
  export type Left = typeof Left;
  /** @deprecated Use {@linkcode TextType.Justify.Right} */
  export const Right = Justify.Right;
  export type Right = typeof Right;
  /** @deprecated Use {@linkcode TextType.Justify.Center} */
  export const Center = Justify.Center;
  export type Center = typeof Center;
  /** @deprecated Use {@linkcode TextType.Justify.WithLastLineLeft} */
  export const WithLastLineLeft = Justify.WithLastLineLeft;
  export type WithLastLineLeft = typeof WithLastLineLeft;
  /** @deprecated Use {@linkcode TextType.Justify.WithLastLineRight} */
  export const WithLastLineRight = Justify.WithLastLineRight;
  export type WithLastLineRight = typeof WithLastLineRight;
  /** @deprecated Use {@linkcode TextType.Justify.WithLastLineCenter} */
  export const WithLastLineCenter = Justify.WithLastLineCenter;
  export type WithLastLineCenter = typeof WithLastLineCenter;
  /** @deprecated Use {@linkcode TextType.Justify.WithLastLineFull} */
  export const WithLastLineFull = Justify.WithLastLineFull;
  export type WithLastLineFull = typeof WithLastLineFull;
  /** @deprecated Use {@linkcode TextType.Shape.Square} */
  export const Square = Shape.Square;
  export type Square = typeof Square;
  /** @deprecated Use {@linkcode TextType.Shape.RampUp} */
  export const RampUp = Shape.RampUp;
  export type RampUp = typeof RampUp;
  /** @deprecated Use {@linkcode TextType.Shape.RampDown} */
  export const RampDown = Shape.RampDown;
  export type RampDown = typeof RampDown;
  /** @deprecated Use {@linkcode TextType.Shape.Triangle} */
  export const Triangle = Shape.Triangle;
  export type Triangle = typeof Triangle;
  /** @deprecated Use {@linkcode TextType.Shape.Round} */
  export const Round = Shape.Round;
  export type Round = typeof Round;
  /** @deprecated Use {@linkcode TextType.Shape.Smooth} */
  export const Smooth = Shape.Smooth;
  export type Smooth = typeof Smooth;
  /** @deprecated Use {@linkcode TextType.FontPathOrigin.Local} */
  export const Local = FontPathOrigin.Local;
  export type Local = typeof Local;
  /** @deprecated Use {@linkcode TextType.FontPathOrigin.CssUrl} */
  export const CssUrl = FontPathOrigin.CssUrl;
  export type CssUrl = typeof CssUrl;
  /** @deprecated Use {@linkcode TextType.FontPathOrigin.ScriptUrl} */
  export const ScriptUrl = FontPathOrigin.ScriptUrl;
  export type ScriptUrl = typeof ScriptUrl;
  /** @deprecated Use {@linkcode TextType.FontPathOrigin.FontUrl} */
  export const FontUrl = FontPathOrigin.FontUrl;
  export type FontUrl = typeof FontUrl;
  /** @deprecated Use {@linkcode TextType.VerticalJustify.Top} */
  export const VerticalJustifyTop = VerticalJustify.Top;
  export type VerticalJustifyTop = typeof VerticalJustifyTop;
  /** @deprecated Use {@linkcode TextType.VerticalJustify.Center} */
  export const VerticalJustifyCenter = VerticalJustify.Center;
  export type VerticalJustifyCenter = typeof VerticalJustifyCenter;
  /** @deprecated Use {@linkcode TextType.VerticalJustify.Bottom} */
  export const VerticalJustifyBottom = VerticalJustify.Bottom;
  export type VerticalJustifyBottom = typeof VerticalJustifyBottom;
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Add} */
  export const Add = RangeSelectorMode.Add;
  export type Add = typeof Add;
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Subtract} */
  export const Subtract = RangeSelectorMode.Subtract;
  export type Subtract = typeof Subtract;
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Intersect} */
  export const Intersect = RangeSelectorMode.Intersect;
  export type Intersect = typeof Intersect;
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Min} */
  export const Min = RangeSelectorMode.Min;
  export type Min = typeof Min;
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Max} */
  export const Max = RangeSelectorMode.Max;
  export type Max = typeof Max;
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Difference} */
  export const Difference = RangeSelectorMode.Difference;
  export type Difference = typeof Difference;
}
