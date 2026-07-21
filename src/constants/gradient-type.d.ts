import { Helpers } from "../helpers";

/**
 * Type of a gradient
 *
 * @default 1
 */
export type GradientType = Helpers.Values<typeof GradientType>;
export namespace GradientType {
  export type Value = GradientType;

  export const Linear = 1;
  export type Linear = typeof Linear;
  export const Radial = 2;
  export type Radial = typeof Radial;

  /** @deprecated Use the {@linkcode GradientType} namespace */
  export const enum VALUE {
    LINEAR = Linear,
    RADIAL = Radial,
  }
}
