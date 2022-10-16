export declare namespace BlendMode {
  /**
   * Layer and shape blend mode
   */
  type Value =
    | Normal
    | Multiply
    | Screen
    | Overlay
    | Darken
    | Lighten
    | ColorDodge
    | ColorBurn
    | HardLight
    | SoftLight
    | Difference
    | Exclusion
    | Hue
    | Saturation
    | Color
    | Luminosity;

  type Normal = 0;
  type Multiply = 1;
  type Screen = 2;
  type Overlay = 3;
  type Darken = 4;
  type Lighten = 5;
  type ColorDodge = 6;
  type ColorBurn = 7;
  type HardLight = 8;
  type SoftLight = 9;
  type Difference = 10;
  type Exclusion = 11;
  type Hue = 12;
  type Saturation = 13;
  type Color = 14;
  type Luminosity = 15;
  type Add = 16;
  type HardMix = 17;

  const enum VALUE {
    NORMAL = 0,
    MULTIPLY = 1,
    SCREEN = 2,
    OVERLAY = 3,
    DARKEN = 4,
    LIGHTEN = 5,
    COLOR_DODGE = 6,
    COLOR_BURN = 7,
    HARD_LIGHT = 8,
    SOFT_LIGHT = 9,
    DIFFERENCE = 10,
    EXCLUSION = 11,
    HUE = 12,
    SATURATION = 13,
    COLOR = 14,
    LUMINOSITY = 15,
    ADD = 16,
    HARD_MIX = 17,
  }
}
