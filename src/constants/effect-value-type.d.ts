export declare namespace EffectValueType {
  type Value =
    | Checkbox
    | Color
    | Dropdown
    | Ignored
    | Layer
    | Point
    | Slider
    | Angle;

  type Checkbox = 4;
  type Color = 2;
  type Dropdown = 7;
  type Ignored = 6;
  type Layer = 10;
  type Point = 3;
  type Slider = 0;
  type Angle = 1;

  const enum VALUE {
    CHECKBOX = 4,
    COLOR = 2,
    DROPDOWN = 7,
    IGNORED = 6,
    LAYER = 10,
    POINT = 3,
    SLIDER = 0,
    ANGLE = 1,
  }
}
