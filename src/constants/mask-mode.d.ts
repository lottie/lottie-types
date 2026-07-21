import { Helpers } from "../helpers";

/**
 * How masks interact with each other. See https://helpx.adobe.com/after-effects/using/alpha-channels-masks-mattes.html
 */
export type MaskMode = Helpers.Values<typeof MaskMode>;
export namespace MaskMode {
  export type Value = MaskMode;

  export const No = "n";
  export type No = typeof No;
  export const Add = "a";
  export type Add = typeof Add;
  export const Subtract = "s";
  export type Subtract = typeof Subtract;
  export const Intersect = "i";
  export type Intersect = typeof Intersect;
  export const Lighten = "l";
  export type Lighten = typeof Lighten;
  export const Darken = "d";
  export type Darken = typeof Darken;
  export const Difference = "f";
  export type Difference = typeof Difference;

  /** @deprecated Use the {@linkcode MaskMode} namespace */
  export const enum VALUE {
    NO = No,
    ADD = Add,
    SUBTRACT = Subtract,
    INTERSECT = Intersect,
    LIGHTEN = Lighten,
    DARKEN = Darken,
    DIFFERENCE = Difference,
  }
}
