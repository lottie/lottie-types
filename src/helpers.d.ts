import { AnimatedProperty as A } from "./animated-property";
import { MaskMode } from "./constants/mask-mode";

export declare namespace Helpers {
  /**
   * Index used in expressions
   */
  type PropertyIndex = {
    ix?: number;
  };

  /**
   * Name, as seen from editors and the like
   * @note mainly for labeling
   */
  type Name = {
    nm?: string;
  };

  /**
   * Match name, used in expressions. Mainly for scripting
   * and packaging. Unique identifier
   */
  type MatchName = {
    mn?: string;
  };

  type Expression = {
    x?: string;
  };

  /**
   * @default 0
   */
  type Width = number;

  /**
   * @default 0
   */
  type Height = number;

  /**
   * @default ""
   */
  type ID = string;

  type Hidden = boolean;

  type Index = number;

  type CssClass = string;

  type InPoint = number;

  type OutPoint = number;

  /**
   * Framerate in frames per second
   * @default 60
   */
  type Framerate = {
    fr?: number;
  };

  /**
   * @default 0
   */
  type Time = number;

  type VisualObject = Name & MatchName;

  /**
   * Represents boolean values as an integer. 0 is false, 1 is true.
   * @default 0
   */
  type IntegerBoolean = 0 | 1;

  /**
   * Color as a [r, g, b] array with values in [0, 1]
   * @minimum 0
   * @maximum 1
   */
  type ColorRgba = [number, number, number] | [number, number, number, number];

  /**
   * Whether the animation has 3D layers. Lottie doesn't actually support 3D stuff so this should always be 0
   */
  type Threedimensional = {
    ddd?: IntegerBoolean;
  };

  /**
   * Number of components in the value arrays.\nIf present values will be truncated or expanded to match this length when accessed from expressions.
   * @type integer
   */
  type Length = {
    l?: number;
  };

  /**
   * Rotation in degrees, clockwise
   */
  type RotationClockwise = {
    r: A.Value;
  };

  type RotationXYZ = {
    /**
     * X Rotation - Split rotation component
     */
    rx?: A.Value;
    /**
     * Y Rotation - Split rotation component
     */
    ry?: A.Value;
    /**
     * ZRotation - Split rotation component, equivalent to `r` when not split
     */
    rz?: A.Value;
    /**
     * Orientation
     */
    or?: A.MultiDimensional;
  };

  type TransformRotation = RotationClockwise | RotationXYZ;

  /**
   * Layer transform
   */
  type Transform = TransformRotation &
    VisualObject & {
      /**
       * Anchor point
       *
       * a position (relative to its parent) around which transformations are applied (ie: center for rotation / scale)
       */
      a?: A.Position;
      /**
       * Scale factor, `[100, 100]` for no scaling
       */
      s?: A.MultiDimensional;
      /**
       * Opacity
       */
      o?: A.Value;
      /**
       * Skew
       *
       * Skew amount as an angle in degrees
       */
      sk?: A.Value;
      /**
       * Skew Axis
       *
       * Direction along which skew is applied, in degrees (`0` skews along the X axis, `90` along the Y axis)
       */
      sa?: A.Value;
      /**
       * Position - Translation or Translation with split components
       */
      p?: A.Position | A.SplitVector;
    };

  /**
   * Bezier shape used to mask/clip a layer
   */
  type Mask = Helpers.VisualObject & {
    /**
     * Inverted
     * @default false
     */
    inv?: boolean;
    /**
     * Mask Vertices
     */
    pt?: A.Shape;
    /**
     * Opacity
     */
    o?: A.Value;
    /**
     * Mode
     * @default 'i' (ModeIntersect)
     */
    mode?: MaskMode.Value;
    /**
     * Dilate
     */
    x?: A.Value;
  };

  /**
   * Single bezier curve
   */
  interface Bezier {
    /**
     * Closed
     * @default False
     */
    c?: boolean;
    /**
     * In Tangents
     *
     * Array of points, each point is an array of coordinates.
     * These points are along the `in` tangents relative to the corresponding `v`.
     *
     * @default []
     */
    i: number[][];
    /**
     * Out Tangents
     *
     * Array of points, each point is an array of coordinates.
     * These points are along the `out` tangents relative to the corresponding `v`.
     */
    o: number[][];
    /**
     * Vertices
     *
     * Array of points, each point is an array of coordinates.
     * These points are along the bezier path
     */
    v: number[][];
  }

  /**
   * One of the ID in the file's slots
   */
  type SlotID = string;

  /**
   * Used for record enums. Excludes uppercase keys used for backwards compatibility from the record.
   */
  type Values<T extends Record<string, any>> = T extends Record<infer K, any>
    ? K extends string
      ? T[ExcludeUppercase<K>]
      : never
    : never;
  type ExcludeUppercase<T extends string> = T extends Uppercase<T> ? never : T;
}
