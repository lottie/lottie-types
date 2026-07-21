import { Helpers } from "../helpers";

/**
 * Style at the end of a stoked line
 */
export type LineCap = Helpers.Values<typeof LineCap>;
export namespace LineCap {
  export type Value = LineCap;

  export const Butt = 1;
  export type Butt = typeof Butt;
  export const Round = 2;
  export type Round = typeof Round;
  export const Square = 3;
  export type Square = typeof Square;

  /** @deprecated Use the {@linkcode LineCap} namespace */
  export const enum VALUE {
    BUTT = Butt,
    ROUND = Round,
    SQUARE = Square,
  }
}
