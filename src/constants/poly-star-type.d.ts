export declare namespace PolyStarType {
  /**
   * Star type, `1` for Star, `2` for Polygon
   */
  type Value = Star | Polygon;

  type Star = 1;
  type Polygon = 2;

  const enum VALUE {
    STAR = 1,
    POLYGON = 2,
  }
}
