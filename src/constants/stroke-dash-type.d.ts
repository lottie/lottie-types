import { Helpers } from "../helpers";

/**
 * Type of a dash item in a stroked line
 */
export type StrokeDashType = Helpers.Values<typeof StrokeDashType>;
export namespace StrokeDashType {
  export type Value = StrokeDashType;

  export const Default = "d";
  export type Default = typeof Default;
  export const Gap = "g";
  export type Gap = typeof Gap;
  export const Offset = "o";
  export type Offset = typeof Offset;

  /** @deprecated Use the {@linkcode StrokeDashType} namespace */
  export const enum VALUE {
    DEFAULT = Default,
    GAP = Gap,
    OFFSET = Offset,
  }
}
