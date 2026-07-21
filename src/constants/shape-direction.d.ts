import { Helpers } from "../helpers";

/**
 * Drawing direction of the shape curve, useful for trim path
 */
export type ShapeDirection = Helpers.Values<typeof ShapeDirection>;
export namespace ShapeDirection {
  export type Value = ShapeDirection;

  /**
   * Default Clockwise
   */
  export const Normal = 0;
  export type Normal = typeof Normal;

  /**
   * Usually clockwise
   */
  export const Clockwise = 1;
  export type Clockwise = typeof Clockwise;

  /**
   * Usually counter clockwise
   */
  export const ClockwiseReversed = 3;
  export type ClockwiseReversed = typeof ClockwiseReversed;

  /** @deprecated Use the {@linkcode ShapeDirection} namespace */
  export const enum VALUE {
    NORMAL = Normal,
    CLOCKWISE = Clockwise,
    CLOCKWISE_REVERSED = ClockwiseReversed,
  }
}
