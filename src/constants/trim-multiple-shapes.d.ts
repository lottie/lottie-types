export declare namespace TrimMultipleShapes {
  /**
   * How to handle multiple shapes in trim path
   */
  type Value = Individually | Simultaneously;

  type Individually = 1;
  type Simultaneously = 2;

  const enum VALUES {
    INDIVIDUALLY = 1,
    SIMULTANEOUSLY = 2,
  }
}
