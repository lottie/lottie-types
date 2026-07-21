import { Helpers } from "../helpers";

/**
 * Layer and shape blend mode
 */
export type BlendMode = Helpers.Values<typeof BlendMode>;
export namespace BlendMode {
  export type Value = BlendMode;

  export const Normal = 0;
  export type Normal = typeof Normal;
  export const Multiply = 1;
  export type Multiply = typeof Multiply;
  export const Screen = 2;
  export type Screen = typeof Screen;
  export const Overlay = 3;
  export type Overlay = typeof Overlay;
  export const Darken = 4;
  export type Darken = typeof Darken;
  export const Lighten = 5;
  export type Lighten = typeof Lighten;
  export const ColorDodge = 6;
  export type ColorDodge = typeof ColorDodge;
  export const ColorBurn = 7;
  export type ColorBurn = typeof ColorBurn;
  export const HardLight = 8;
  export type HardLight = typeof HardLight;
  export const SoftLight = 9;
  export type SoftLight = typeof SoftLight;
  export const Difference = 10;
  export type Difference = typeof Difference;
  export const Exclusion = 11;
  export type Exclusion = typeof Exclusion;
  export const Hue = 12;
  export type Hue = typeof Hue;
  export const Saturation = 13;
  export type Saturation = typeof Saturation;
  export const Color = 14;
  export type Color = typeof Color;
  export const Luminosity = 15;
  export type Luminosity = typeof Luminosity;
  export const Add = 16;
  export type Add = typeof Add;
  export const HardMix = 17;
  export type HardMix = typeof HardMix;

  /** @deprecated Use the {@linkcode BlendMode} namespace */
  export const enum VALUE {
    NORMAL = Normal,
    MULTIPLY = Multiply,
    SCREEN = Screen,
    OVERLAY = Overlay,
    DARKEN = Darken,
    LIGHTEN = Lighten,
    COLOR_DODGE = ColorDodge,
    COLOR_BURN = ColorBurn,
    HARD_LIGHT = HardLight,
    SOFT_LIGHT = SoftLight,
    DIFFERENCE = Difference,
    EXCLUSION = Exclusion,
    HUE = Hue,
    SATURATION = Saturation,
    COLOR = Color,
    LUMINOSITY = Luminosity,
    ADD = Add,
    HARD_MIX = HardMix,
  }
}
