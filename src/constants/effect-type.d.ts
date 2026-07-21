import { Helpers } from "../helpers";

export type EffectType = Helpers.Values<typeof EffectType>;
export namespace EffectType {
  export type Value = EffectType;

  export const Custom = 5;
  export type Custom = typeof Custom;
  export const PaintOverTransparent = 7;
  export type PaintOverTransparent = typeof PaintOverTransparent;
  export const Tint = 20;
  export type Tint = typeof Tint;
  export const Fill = 21;
  export type Fill = typeof Fill;
  export const Stroke = 22;
  export type Stroke = typeof Stroke;
  export const Tritone = 23;
  export type Tritone = typeof Tritone;
  export const ProLevels = 24;
  export type ProLevels = typeof ProLevels;
  export const DropShadow = 25;
  export type DropShadow = typeof DropShadow;
  export const RadialWipe = 26;
  export type RadialWipe = typeof RadialWipe;
  export const DisplacementMap = 27;
  export type DisplacementMap = typeof DisplacementMap;
  export const Matte3 = 28;
  export type Matte3 = typeof Matte3;
  export const GaussianBlur = 29;
  export type GaussianBlur = typeof GaussianBlur;
  export const MeshWarp = 31;
  export type MeshWarp = typeof MeshWarp;
  export const Wavy = 32;
  export type Wavy = typeof Wavy;
  export const Spherize = 33;
  export type Spherize = typeof Spherize;
  export const Puppet = 34;
  export type Puppet = typeof Puppet;

  /** @deprecated Use the {@linkcode EffectType} namespace */
  export const enum VALUE {
    CUSTOM = Custom,
    PAINT_OVER_TRANSPARENT = PaintOverTransparent,
    TINT = Tint,
    FILL = Fill,
    STROKE = Stroke,
    TRITONE = Tritone,
    PRO_LEVELS = ProLevels,
    DROP_SHADOW = DropShadow,
    RADIAL_WIPE = RadialWipe,
    DISPLACEMENT_MAP = DisplacementMap,
    MATTE3 = Matte3,
    GAUSSIAN_BLUR = GaussianBlur,
    MESH_WARP = MeshWarp,
    WAVY = Wavy,
    SPHERIZE = Spherize,
    PUPPET = Puppet,
  }
}
