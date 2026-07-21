import { Helpers } from "../helpers";

export type LayerStyleType = Helpers.Values<typeof LayerStyleType>;
export namespace LayerStyleType {
  export type Value = LayerStyleType;

  export const Stroke = 0;
  export type Stroke = typeof Stroke;
  export const DropShadow = 1;
  export type DropShadow = typeof DropShadow;
  export const InnerShadow = 2;
  export type InnerShadow = typeof InnerShadow;
  export const OuterGlow = 3;
  export type OuterGlow = typeof OuterGlow;
  export const InnerGlow = 4;
  export type InnerGlow = typeof InnerGlow;
  export const BevelEmboss = 5;
  export type BevelEmboss = typeof BevelEmboss;
  export const Satin = 6;
  export type Satin = typeof Satin;
  export const ColorOverlay = 7;
  export type ColorOverlay = typeof ColorOverlay;
  export const GradientOverlay = 8;
  export type GradientOverlay = typeof GradientOverlay;
}
