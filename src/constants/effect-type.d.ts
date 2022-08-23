export declare namespace EffectType {
  type Value =
    | DropShadow
    | Fill
    | GaussianBlur
    | Matte3
    | ProLevels
    | Stroke
    | Tint
    | Tritone
    | RadialWipe
    | Wavy
    | Puppet
    | Spherize
    | PaintOverTransparent
    | MeshWarp
    | DisplacementMap
    | Custom;

  type DropShadow = 25;
  type Fill = 21;
  type GaussianBlur = 29;
  type Matte3 = 28;
  type ProLevels = 24;
  type Stroke = 22;
  type Tint = 20;
  type Tritone = 23;
  type RadialWipe = 26;
  type Wavy = 32;
  type Puppet = 34;
  type Spherize = 33;
  type PaintOverTransparent = 7;
  type MeshWarp = 31;
  type DisplacementMap = 27;
  type Custom = 5;

  const enum VALUE {
    DROP_SHADOW = 25,
    FILL = 21,
    GAUSSIAN_BLUR = 29,
    MATTE3 = 28,
    PRO_LEVELS = 24,
    STROKE = 22,
    TINT = 20,
    TRITONE = 23,
    RADIAL_WIPE = 26,
    WAVY = 32,
    PUPPET = 34,
    SPHERIZE = 33,
    PAINT_OVER_TRANSPARENT = 7,
    MESH_WARP = 31,
    DISPLACEMENT_MAP = 27,
    CUSTOM = 5,
  }
}
