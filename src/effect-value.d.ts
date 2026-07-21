import { AnimatedProperty as A } from "./animated-property";
import { Helpers } from "./helpers";
import { EffectValueType } from "./constants/effect-value-type";

export declare type EffectValue = EffectValue.Value;
export declare namespace EffectValue {
  interface Main extends Helpers.VisualObject, Helpers.PropertyIndex {
    ty?: EffectValueType.Value;
    v?: A.Value | A.Color | A.MultiDimensional | number;
  }

  interface NoValue extends Main {}

  interface Angle extends Main {
    ty: EffectValueType.Angle;
    v?: A.Value;
  }

  interface Checkbox extends Main {
    ty: EffectValueType.Checkbox;
    v?: A.Value;
  }

  interface Color extends Main {
    ty: EffectValueType.Color;
    v?: A.Color;
  }

  interface DropDown extends Main {
    ty: EffectValueType.Dropdown;
    v?: A.Value;
  }

  interface IgnoredValue extends Main {
    ty: EffectValueType.Ignored;
    v?: number;
  }

  interface Layer extends Main {
    ty: EffectValueType.Layer;
    v?: A.Value;
  }

  interface Point extends Main {
    ty: EffectValueType.Point;
    v?: A.MultiDimensional;
  }

  interface Slider extends Main {
    ty: EffectValueType.Slider;
    v?: A.Value;
  }

  type Value =
    | NoValue
    | Angle
    | Checkbox
    | Color
    | DropDown
    | IgnoredValue
    | Layer
    | Point
    | Slider;
}
