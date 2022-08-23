export declare namespace GradientType {
  /**
   * Type of a gradient
   *
   * @default 1
   */
  type Value = Linear | Radial;

  type Linear = 1;
  type Radial = 2;

  const enum VALUE {
    LINEAR = 1,
    RADIAL = 2,
  }
}
