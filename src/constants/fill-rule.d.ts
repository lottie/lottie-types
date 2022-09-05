export declare namespace FillRule {
  /**
   * Rule used to handle multiple shapes rendered with the same fill object
   */
  type Value = NonZero | EvenOdd;

  type NonZero = 1;
  type EvenOdd = 2;

  const enum VALUE {
    NON_ZERO = 1,
    EVEN_ODD = 2,
  }
}
