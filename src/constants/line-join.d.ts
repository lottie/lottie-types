export declare namespace LineJoin {
  /**
   * Style at a sharp corner of a stoked line
   */
  type Value = Miter | Round | Bevel;

  type Miter = 1;
  type Round = 2;
  type Bevel = 3;

  const enum VALUE {
    MITER = 1,
    ROUND = 2,
    BEVEL = 3,
  }
}
