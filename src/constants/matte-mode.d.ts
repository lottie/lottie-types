export declare namespace MatteMode {
  /**
   * How a layer should mask another layer
   */
  type Value = Normal | Alpha | InvertedAlpha | Luma | InvertedLuma;

  type Normal = 0;
  type Alpha = 1;
  type InvertedAlpha = 2;
  type Luma = 3;
  type InvertedLuma = 4;

  const enum VALUE {
    NORMAL = 0,
    ALPHA = 1,
    INVERTED_ALPHA = 2,
    LUMA = 3,
    INVERTED_LUMA = 4,
  }
}
