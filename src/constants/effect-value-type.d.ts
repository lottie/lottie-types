import { Helpers } from "../helpers";

export type EffectValueType = Helpers.Values<typeof EffectValueType>;
export namespace EffectValueType {
  export type Value = EffectValueType;

  export const Slider = 0;
  export type Slider = typeof Slider;
  export const Angle = 1;
  export type Angle = typeof Angle;
  export const Color = 2;
  export type Color = typeof Color;
  export const Point = 3;
  export type Point = typeof Point;
  export const Checkbox = 4;
  export type Checkbox = typeof Checkbox;
  export const Ignored = 6;
  export type Ignored = typeof Ignored;
  export const Dropdown = 7;
  export type Dropdown = typeof Dropdown;
  export const Layer = 10;
  export type Layer = typeof Layer;

  /** @deprecated Use the {@linkcode EffectValueType} namespace */
  export const enum VALUE {
    SLIDER = Slider,
    ANGLE = Angle,
    COLOR = Color,
    POINT = Point,
    CHECKBOX = Checkbox,
    IGNORED = Ignored,
    DROPDOWN = Dropdown,
    LAYER = Layer,
  }
}
