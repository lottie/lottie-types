export declare namespace Composite {
  /**
   * How to stack copies in a repeater
   */
  type Value = Above | Below;

  type Above = 1;
  type Below = 2;

  const enum VALUE {
    ABOVE = 1,
    BELOW = 2,
  }
}
