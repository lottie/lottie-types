import { Helpers } from "../helpers";

export type ShapeType = Helpers.Values<typeof ShapeType>;
export namespace ShapeType {
  export type Value = ShapeType;

  export const Rectangle = "rc";
  export type Rectangle = typeof Rectangle;
  export const Ellipse = "el";
  export type Ellipse = typeof Ellipse;
  export const PolygonStar = "sr";
  export type PolygonStar = typeof PolygonStar;
  export const Path = "sh";
  export type Path = typeof Path;
  export const Fill = "fl";
  export type Fill = typeof Fill;
  export const Stroke = "st";
  export type Stroke = typeof Stroke;
  export const GradientFill = "gf";
  export type GradientFill = typeof GradientFill;
  export const GradientStroke = "gs";
  export type GradientStroke = typeof GradientStroke;
  export const Group = "gr";
  export type Group = typeof Group;
  export const Transform = "tr";
  export type Transform = typeof Transform;
  export const RoundedCorners = "rd";
  export type RoundedCorners = typeof RoundedCorners;
  export const PuckerBloat = "pb";
  export type PuckerBloat = typeof PuckerBloat;
  export const Merge = "mm";
  export type Merge = typeof Merge;
  export const Twist = "tw";
  export type Twist = typeof Twist;
  export const OffsetPath = "op";
  export type OffsetPath = typeof OffsetPath;
  export const ZigZag = "zz";
  export type ZigZag = typeof ZigZag;
  export const Modifier = ""; // null
  export type Modifier = typeof Modifier;
  export const Repeater = "rp";
  export type Repeater = typeof Repeater;
  export const Trim = "tm";
  export type Trim = typeof Trim;

  /** @deprecated Use the {@linkcode ShapeType} namespace */
  export const enum VALUE {
    RECTANGLE = Rectangle,
    ELLIPSE = Ellipse,
    POLYGON_STAR = PolygonStar,
    PATH = Path,
    FILL = Fill,
    STROKE = Stroke,
    GRADIENT_FILL = GradientFill,
    GRADIENT_STROKE = GradientStroke,
    GROUP = Group,
    TRANSFORM = Transform,
    ROUNDED_CORNERS = RoundedCorners,
    PUCKER_BLOAT = PuckerBloat,
    MERGE = Merge,
    TWIST = Twist,
    OFFSET_PATH = OffsetPath,
    ZIG_ZAG = ZigZag,
    MODIFIER = Modifier,
    REPEATER = Repeater,
    TRIM = Trim,
  }
}
