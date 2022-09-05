export declare namespace TextType {
  type Based = Characters | CharacterExcludingSpaces | Words | Lines;
  type Characters = 1;
  type CharacterExcludingSpaces = 2;
  type Words = 3;
  type Lines = 4;

  const enum BASED {
    CHARACTERS = 1,
    CHARACTER_EXCLUDING_SPACES = 2,
    WORDS = 3,
    LINES = 4,
  }

  /**
   * @default 0
   */
  type Caps = Regular | AllCaps | SmallCaps;
  type Regular = 0;
  type AllCaps = 1;
  type SmallCaps = 2;

  const enum TEXT_CAPS {
    REGULAR = 0,
    ALL_CAPS = 1,
    SMALL_CAPS = 2,
  }

  type Grouping = Characters | Word | Line | All;
  type Word = 2;
  type Line = 3;
  type All = 4;

  const enum GROUPING {
    CHARACTERS = 1,
    WORD = 2,
    LINE = 3,
    ALL = 4,
  }

  /**
   * Text alignment / justification
   *
   * @default 0
   */
  type Justify =
    | Left
    | Right
    | Center
    | WithLastLineLeft
    | WithLastLineRight
    | WithLastLineCenter
    | WithLastLineFull;

  type Left = 0;
  type Right = 1;
  type Center = 2;
  type WithLastLineLeft = 3;
  type WithLastLineRight = 4;
  type WithLastLineCenter = 5;
  type WithLastLineFull = 6;

  const enum JUSTIFY {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
    WITH_LAST_LINE_LEFT = 3,
    WITH_LAST_LINE_RIGHT = 4,
    WITH_LAST_LINE_CENTER = 5,
    WITH_LAST_LINE_FULL = 6,
  }

  type Shape = Square | RampUp | RampDown | Triangle | Round | Smooth;
  type Square = 1;
  type RampUp = 2;
  type RampDown = 3;
  type Triangle = 4;
  type Round = 5;
  type Smooth = 6;

  const enum SHAPE {
    SQUARE = 1,
    RAMP_UP = 2,
    RAMP_DOWN = 3,
    TRIANGLE = 4,
    ROUND = 5,
    SMOOTH = 6,
  }

  type FontPathOrigin = Local | CssUrl | ScriptUrl | FontUrl;
  type Local = 0;
  type CssUrl = 1;
  type ScriptUrl = 2;
  type FontUrl = 3;

  const enum FONT_PATH_ORIGIN {
    LOCAL = 0,
    CSS_URL = 1,
    SCRIPT_URL = 2,
    FONT_URL = 3,
  }

  type VerticalJustify =
    | VerticalJustifyTop
    | VerticalJustifyCenter
    | VerticalJustifyBottom;

  type VerticalJustifyTop = 0;
  type VerticalJustifyCenter = 1;
  type VerticalJustifyBottom = 2;

  const enum VERTICAL_JUSTIFY {
    TOP = 0,
    CENTER = 1,
    BOTTOM = 2,
  }

  type RangeSelectorMode = Add | Subtract | Intersect | Min | Max | Difference;

  type Add = 0;
  type Subtract = 1;
  type Intersect = 2;
  type Min = 3;
  type Max = 4;
  type Difference = 5;

  enum RANGE_SELECTOR_MODE {
    ADD = 0,
    SUBTRACT = 1,
    INTERSECT = 2,
    MIN = 3,
    MAX = 4,
    DIFFERENCE = 5,
  }
}
