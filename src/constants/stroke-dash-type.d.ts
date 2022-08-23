export declare namespace StrokeDashType {
  /**
   * Type of a dash item in a stroked line
   */
  type Value = Default | Gap | Offset;

  type Default = "d";
  type Gap = "g";
  type Offset = "o";

  const enum VALUE {
    DEFAULT = "d",
    GAP = "g",
    OFFSET = "o",
  }
}
