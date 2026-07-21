import { Helpers } from "../helpers";

/**
 * Style at a sharp corner of a stoked line
 */
export type LineJoin = Helpers.Values<typeof LineJoin>;
export namespace LineJoin {
  export type Value = LineJoin;

  export const Miter = 1;
  export type Miter = typeof Miter;
  export const Round = 2;
  export type Round = typeof Round;
  export const Bevel = 3;
  export type Bevel = typeof Bevel;

  /** @deprecated Use the {@linkcode LineJoin} namespace */
  export const enum VALUE {
    MITER = Miter,
    ROUND = Round,
    BEVEL = Bevel,
  }
}
