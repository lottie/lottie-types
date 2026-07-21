import { Helpers } from "../helpers";

/**
 * Star type, `1` for Star, `2` for Polygon
 */
export type PolyStarType = Helpers.Values<typeof PolyStarType>;
export namespace PolyStarType {
  export type Value = PolyStarType;

  export const Star = 1;
  export type Star = typeof Star;
  export const Polygon = 2;
  export type Polygon = typeof Polygon;

  /** @deprecated Use the {@linkcode PolyStarType} namespace */
  export const enum VALUE {
    STAR = Star,
    POLYGON = Polygon,
  }
}
