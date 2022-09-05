export declare namespace ShapeDirection {
  /**
   * Drawing direction of the shape curve, useful for trim path
   */
  type Value = Normal | Clockwise | ClockwiseReversed;

  /**
   * Default Clockwise
   */
  type Normal = 0;

  /**
   * Usually clockwise
   */
  type Clockwise = 1;

  /**
   * Usually counter clockwise
   */
  type ClockwiseReversed = 3;

  const enum VALUE {
    NORMAL = 0,
    CLOCKWISE = 1,
    CLOCKWISE_REVERSED = 3,
  }
}
