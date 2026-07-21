import { Helpers } from "./helpers";

export declare type AnimatedProperty = AnimatedProperty.Value;
export declare namespace AnimatedProperty {
  /**
   * Bezier handle for keyframe interpolation
   */
  interface KeyframeBezierHandle {
    /**
     * Time component:\n0 means start time of the keyframe,\n1 means time of the next keyframe.
     *
     * @if type array
     * @then minItems: 1
     * @default 0
     */
    x: number[] | number;
    /**
     * Value interpolation component:\n0 means start value of the keyframe,\n1 means value at the next keyframe.
     *
     * @if type array
     * @then minItems: 1
     * @default 0
     */
    y: number[] | number;
  }

  /**
   * A Keyframes specifies the value at a specific time and the interpolation function to reach the next keyframe
   *
   * 'i' and 'o' are not included in the last element of the keyframe array usually when the
   * Bezier curve is not closed, or when the last vertex is defined by the last element is the
   * same as the first vertex.
   *
   * @if "h": { "const": 0 | undefined }
   * @then 'i' and 'o'
   */
  interface KeyframeBase {
    /**
     * Time
     * @default 0
     */
    t: Helpers.Time;
    /**
     * Hold
     * @default 0
     */
    h?: Helpers.IntegerBoolean;
    /**
     * In Tangent
     *
     * Easing tangent going into the next keyframe
     *
     * @if "h": { "const": 0 | undefined }
     * @then 'i' is present
     */
    i?: KeyframeBezierHandle;
    /**
     * Out Tangent
     *
     * Easing tangent leaving the current keyframe
     *
     * @if "h": { "const": 0 | undefined }
     * @then 'o' is present
     */
    o?: KeyframeBezierHandle;
    /**
     * Start
     */
    s: number[] | Helpers.Bezier[];
  }

  /**
   * A Keyframes specifies the value at a specific time and the interpolation function to reach the next keyframe.
   */
  interface Keyframe extends KeyframeBase {
    /**
     * Value
     *
     * Value at this keyframe. Note the if the property is a scalar, keyframe values are still represented as arrays
     */
    s: number[];
    /**
     * End Value
     *
     * Value at the end of the keyframe, note that this is deprecated and you should use s from the next keyframe to get this value
     *
     * @deprecated true
     */
    e?: number[];
  }

  /**
   * Keyframe holding Bezier objects
   */
  interface ShapeKeyframe extends KeyframeBase {
    /**
     * Keyframe end value
     *
     * depends on "v"
     */
    e?: Helpers.Bezier;
    /**
     * Start
     */
    s: Helpers.Bezier[];
  }

  interface Main
    extends Helpers.PropertyIndex,
      Helpers.VisualObject,
      Helpers.Expression {
    /**
     * Animated - Whether the property is animated
     * @default 0
     */
    a?: Helpers.IntegerBoolean;
    /**
     * 'k' is the list of keyframes that define the change and the rate of change of
     * an animated property between any given two frames. therefore, 'k' is require for
     * all animated properties.
     */
    k:
      | Keyframe[]
      | Helpers.ColorRgba
      | ShapeKeyframe[]
      | Helpers.Bezier
      | number[]
      | number;
    /**
     * Slot ID
     *
     * One of the ID in the file's slots
     */
    sid?: Helpers.SlotID;
  }

  /**
   * An animatable property that holds an array of numbers
   */
  interface MultiDimensional extends Main, Helpers.Length {
    /**
     * @if "a": { "const": 1  }
     * @then Animated value - Keyframe[];
     * @else Static Value
     */
    k: Keyframe[] | number[];
  }

  /**
   * An animatable property that holds a Color
   */
  interface Color extends Main {
    /**
     * @if "a": { "const": 1  }
     * @then Animated value - Keyframe[];
     * @else Static Value - Color
     */
    k: Keyframe[] | Helpers.ColorRgba;
  }

  /**
   * Represents colors and offsets in a gradient
   *
   * Colors are represented as a flat list interleaving offsets and color components in weird ways
   * There are two possible layouts:
   *
   * Without alpha, the colors are a sequence of offset, r, g, b
   *
   * With alpha, same as above but at the end of the list there is a sequence of offset, alpha.
   *
   */
  interface GradientColors {
    /**
     * Colors
     */
    k: MultiDimensional;
    /**
     * Count
     * Number of colors in `k`
     * @default 0
     */
    p: number;
  }

  interface PositionKeyframe extends Keyframe {
    /**
     * Value In Tangent
     * Tangent for values (eg: moving position around a curved path
     */
    ti?: number[];
    /**
     * Value Out Tangent
     * Tangent for values (eg: moving position around a curved path
     */
    to?: number[];
  }

  /**
   * An animatable property to represent a position in space
   */
  interface Position extends Main, Helpers.Length {
    /**
     * @if "a": { "const": 1  }
     * @then Animated Value - PositionKeyframe[]
     * @else Static Value - number[]
     */
    k: PositionKeyframe[] | number[];
  }

  /**
   * An animatable property that holds a Bezier
   */
  interface Shape extends Main {
    /**
     * @if "a": { "const": 1  }
     * @then Animated Value - ShapeKeyframe[]
     * @else Static Value - Bezier
     */
    k: ShapeKeyframe[] | Helpers.Bezier;
  }

  /**
   * An animatable property that holds a float
   */
  interface Value extends Main {
    /**
     * @if "a": { "const": 1  }
     * @then Animated Value - Keyframe[]
     * @else Static Value - number
     */
    k: Keyframe[] | number;
  }

  /**
   *  An animatable property that is split into individually anaimated components
   */
  interface SplitVector {
    /**
     * Split
     */
    s: true;
    x: Value;
    y: Value;
    z?: Value;
  }
}
