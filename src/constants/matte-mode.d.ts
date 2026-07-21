import { Helpers } from "../helpers";

/**
 * How a layer should mask another layer
 */
export type MatteMode = Helpers.Values<typeof MatteMode>;
export namespace MatteMode {
  export type Value = MatteMode;

  export const Normal = 0;
  export type Normal = typeof Normal;
  export const Alpha = 1;
  export type Alpha = typeof Alpha;
  export const InvertedAlpha = 2;
  export type InvertedAlpha = typeof InvertedAlpha;
  export const Luma = 3;
  export type Luma = typeof Luma;
  export const InvertedLuma = 4;
  export type InvertedLuma = typeof InvertedLuma;

  /** @deprecated Use the {@linkcode MatteMode} namespace */
  export const enum VALUE {
    NORMAL = Normal,
    ALPHA = Alpha,
    INVERTED_ALPHA = InvertedAlpha,
    LUMA = Luma,
    INVERTED_LUMA = InvertedLuma,
  }
}
