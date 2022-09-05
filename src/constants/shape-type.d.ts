export declare namespace ShapeType {
  type Value =
    | Rectangle
    | Ellipse
    | PolygonStar
    | Path
    | Fill
    | Stroke
    | GradientFill
    | GradientStroke
    | Group
    | Transform
    | RoundedCorners
    | PuckerBloat
    | Merge
    | Twist
    | OffsetPath
    | ZigZag
    | Modifier
    | Repeater
    | Trim;

  type Rectangle = "rc";
  type Ellipse = "el";
  type PolygonStar = "sr";
  type Path = "sh";
  type Fill = "fl";
  type Stroke = "st";
  type GradientFill = "gf";
  type GradientStroke = "gs";
  type Group = "gr";
  type Transform = "tr";
  type RoundedCorners = "rd";
  type PuckerBloat = "pb";
  type Merge = "mm";
  type Twist = "tw";
  type OffsetPath = "op";
  type ZigZag = "zz";
  type Modifier = ""; // null
  type Repeater = "rp";
  type Trim = "tm";

  const enum VALUE {
    RECTANGLE = "rc",
    ELLIPSE = "el",
    POLYGON_STAR = "sr",
    PATH = "sh",
    FILL = "fl",
    STROKE = "st",
    GRADIENT_FILL = "gf",
    GRADIENT_STROKE = "gs",
    GROUP = "gr",
    TRANSFORM = "tr",
    ROUNDED_CORNERS = "rd",
    PUCKER_BLOAT = "pb",
    MERGE = "mm",
    TWIST = "tw",
    OFFSET_PATH = "op",
    ZIG_ZAG = "zz",
    MODIFIER = "", // null
    REPEATER = "rp",
    TRIM = "tm",
  }
}
