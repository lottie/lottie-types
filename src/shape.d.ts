import { AnimatedProperty as A } from "./animated-property";
import { Helpers } from "./helpers";
import { BlendMode } from "./constants/blend-mode";
import { ShapeType } from "./constants/shape-type";
import { ShapeDirection } from "./constants/shape-direction";
import { LineCap } from "./constants/line-cap";
import { LineJoin } from "./constants/line-join";
import { FillRule } from "./constants/fill-rule";
import { GradientType } from "./constants/gradient-type";
import { StrokeDashType } from "./constants/stroke-dash-type";
import { Composite } from "./constants/composite";
import { TrimMultipleShapes } from "./constants/trim-multiple-shapes";
import { PolyStarType } from "./constants/poly-star-type";

export declare type Shape = Shape.Value;
export declare namespace Shape {
  type Opacity = A;

  /**
   * Base class for all elements of ShapeLayer and Group
   */
  interface Element extends Helpers.VisualObject, Helpers.PropertyIndex {
    /**
     * Whether the shape is hidden
     */
    hd?: Helpers.Hidden;
    ty: ShapeType.Value;
    bm?: BlendMode.Value;
    /**
     * Property Index
     *
     * Index used in expressions
     */
    cix?: Helpers.Index;
    /**
     * CSS Class
     *
     * CSS class used by the SVG renderer.
     */
    cl?: Helpers.CssClass;
    /**
     * Shape XML ID
     *
     * ID attribute used by the SVG renderer.
     */
    ln?: Helpers.ID;
  }

  /**
   * Drawable shape
   */
  interface Main extends Element {
    /**
     * Direction
     *
     * Direction the shape is drawn as, mostly relevant when using trim path
     */
    d?: ShapeDirection.Value;
  }

  interface Ellipse extends Main {
    ty: ShapeType.Ellipse;
    /**
     * Position
     */
    p: A.Position;
    /**
     * Size
     */
    s: A.MultiDimensional;
  }

  /**
   * Solid fill color
   */
  interface Fill extends Element {
    ty: ShapeType.Fill;
    o: Opacity;
    /**
     * Color
     */
    c: A.Color;
    /**
     * Fill Rule
     */
    r?: FillRule.Value;
  }

  interface Gradient extends Element {
    /**
     * StartPoint
     */
    s: A.MultiDimensional;
    /**
     * EndPoint
     */
    e: A.MultiDimensional;
    t?: GradientType.Value;
    /**
     * Highlight Length
     */
    h?: A.Value;
    /**
     * Highlight Angle
     */
    a?: A.Value;
    /**
     * Colors
     */
    g: A.GradientColors;
  }

  interface GradientFill extends Gradient {
    ty: ShapeType.GradientFill;
    o: Opacity;
    r?: FillRule.Value;
  }

  /**
   * An item used to described the dashe pattern in a stroked path
   */
  interface StrokeDash extends Helpers.VisualObject {
    /**
     * @default 'd'
     */
    n?: StrokeDashType.Value;
    /**
     * Length
     */
    v?: A.Value;
  }

  interface BaseStroke {
    /**
     * @default 2
     */
    lc?: LineCap.Value;
    /**
     * @default 2
     */
    lj?: LineJoin.Value;
    /**
     * Miter Limit
     * @default 0
     */
    ml?: number;
    /**
     * Animatable alternative to ml
     */
    ml2?: A.Value;
    o: Opacity;
    /**
     * Width
     */
    w: A.Value;
    /**
     * Dashes
     */
    d?: StrokeDash[];
  }

  interface GradientStroke extends Gradient, BaseStroke {
    ty: ShapeType.GradientStroke;
  }

  /**
   * Shape Element that can contain other shapes
   */
  interface Group extends Element {
    ty: ShapeType.Group;
    /**
     * NumberOfProperties
     */
    np?: number;
    it?: Value[];
    /**
     * Property Index
     *
     * Index used in expressions
     * @type integer
     */
    cix?: number;
  }

  /**
   * Animatable Bezier curve
   */
  interface Path extends Main {
    ty: ShapeType.Path;
    /**
     * Shape
     */
    ks: A.Shape;
    ind?: Helpers.Index;
  }

  interface IPolyStar extends Main {
    ty: ShapeType.PolygonStar;
    /**
     * Position
     */
    p: A.Position;
    /**
     * Outer Radius
     */
    or: A.Value;
    /**
     * Outer Roundness
     *
     * Outer Roundness as a percentage
     */
    os: A.Value;
    /**
     * Rotation, clockwise in degrees
     */
    r: A.Value;
    /**
     * Points
     */
    pt: A.Value;
    /**
     * @default 1
     */
    sy?: PolyStarType.Value;
  }

  interface Polygon extends IPolyStar {
    sy: PolyStarType.Polygon;
  }

  interface Star extends IPolyStar {
    sy: PolyStarType.Star;
    /**
     * Inner Radius
     */
    ir: A.Value;
    /**
     * Inner Roundness
     *
     * Inner Roundness as a percentage
     */
    is: A.Value;
  }

  /**
   * Star or regular polygon
   * @if { "sy": 1 }
   * @then Star
   * @else Polygon
   */
  type PolyStar = Star | Polygon;

  /**
   * Interpolates the shape with its center point and bezier tangents with the opposite direction
   */
  interface PuckerBloat extends Element {
    ty: ShapeType.PuckerBloat;
    /**
     * Amount
     *
     * Amount as a percentage
     */
    a?: A.Value;
  }

  /**
   * A simple rectangle shape
   */
  interface Rectangle extends Main {
    ty: ShapeType.Rectangle;
    /**
     * Position
     *
     * Center of the rectangle
     */
    p: A.Position;
    /**
     * Size
     */
    s: A.MultiDimensional;
    /**
     * Rounded
     */
    r: A.Value;
  }

  interface Modifier extends Element {}

  /**
   * Transform used by a repeater, the transform is applied to each subsequent repeated object.
   */
  type RepeaterTransform = Helpers.Transform & {
    /**
     * Start Opacity
     *
     * Opacity of the first repeated object.
     */
    so?: Opacity;
    /**
     * End Opacity
     *
     * Opacity of the last repeated object.
     */
    eo?: Opacity;
  };

  /**
   * Duplicates previous shapes in a group
   */
  interface Repeater extends Modifier {
    ty: ShapeType.Repeater;
    /**
     * Copies
     */
    c: A.Value;
    /**
     * Offset
     */
    o?: A.Value;
    /**
     * @default 1
     */
    m?: Composite.Value;
    /**
     * Transform
     */
    tr: RepeaterTransform;
  }

  /**
   * Rounds corners of other shapes
   */
  interface RoundedCorners extends Modifier {
    ty: ShapeType.RoundedCorners;
    /**
     * Radius
     */
    r: A.Value;
  }

  /**
   * Solid stroke
   */
  interface Stroke extends Element, BaseStroke {
    ty: ShapeType.Stroke;
    /**
     * Color
     */
    c: A.MultiDimensional;
  }

  /**
   * Group transform
   */
  type Transform = Element &
    Helpers.Transform & {
      ty: ShapeType.Transform;
    };

  /**
   * Trims shapes into a segment
   */
  interface Trim extends Modifier {
    ty: ShapeType.Trim;
    /**
     * Start
     */
    s: A.Value;
    /**
     * End
     */
    e: A.Value;
    /**
     * Offset
     */
    o: A.Value;
    /**
     * Multiple
     */
    m?: TrimMultipleShapes.Value;
  }

  interface Twist extends Element {
    ty: ShapeType.Twist;
    /**
     * Angle
     */
    a?: A.Value;
    /**
     * Center
     */
    c?: A.MultiDimensional;
  }

  interface Merge extends Element {
    ty: ShapeType.Merge;
    /**
     * Merge Mode
     * @default 1
     */
    mm?: number;
  }

  /**
   * Interpolates the shape with its center point and bezier tangents with the opposite direction
   */
  interface OffsetPath extends Element {
    ty: ShapeType.OffsetPath;
    /**
     * Amount
     */
    a?: A.Value;
    /**
     * @default 2
     */
    lj?: LineJoin.Value;
    /**
     * Miter Limit
     */
    ml?: A.Value;
  }

  /**
   * Changes the edges of affected shapes into a series of peaks and valleys of uniform size
   */
  interface ZigZags extends Element {
    ty: ShapeType.ZigZag;
    /**
     * Roundness
     *
     * Radius to maked it a smoother curve
     */
    r?: A.Value;
    /**
     * Size
     *
     * Distance between peaks and troughs
     */
    s?: A.Value;
    /**
     * Points
     *
     * Number of ridges
     */
    pt?: A.Value;
  }

  /**
   * List of valid shapes (prev. Shape List)
   */
  type Value =
    | Ellipse
    | Fill
    | GradientFill
    | GradientStroke
    | Group
    | Path
    | PolyStar
    | PuckerBloat
    | Rectangle
    | Repeater
    | RoundedCorners
    | Stroke
    | Transform
    | Trim
    | Twist
    | Merge
    | OffsetPath
    | ZigZags;
}
