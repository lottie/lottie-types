import { Helpers } from "../helpers";

/**
 * Rule used to handle multiple shapes rendered with the same fill object
 */
export type FillRule = Helpers.Values<typeof FillRule>;
export namespace FillRule {
  export type Value = FillRule;

  export const NonZero = 1;
  export type NonZero = typeof NonZero;
  export const EvenOdd = 2;
  export type EvenOdd = typeof EvenOdd;

  /** @deprecated Use the {@linkcode FillRule} namespace */
  export const enum VALUE {
    NON_ZERO = NonZero,
    EVEN_ODD = EvenOdd,
  }
}
