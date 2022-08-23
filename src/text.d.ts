import { TextType } from "./constants/text-type";
import { AnimatedProperty as A } from "./animated-property";
import { Helpers } from "./helpers";
import { Shape } from "./shape";

export declare namespace Text {
  /**
   * @default ""
   */
  type FontFamily = string;
  type FontSize = number;
  type FontStyle = string;

  /**
   * Defines a character as shapes
   */
  interface CharacterShapes {
    /**
     * Shape forming the character
     */
    shapes: Shape.Value[];
  }

  /**
   * Defines a character as a precomp layer
   */
  interface CharacterPrecomp {
    /**
     * Reference Id
     *
     * ID of the precomp as specified in the assets
     */
    refId: Helpers.ID;
    /**
     * Transform
     *
     * Layer transform
     */
    ks?: Helpers.Transform;
    /**
     * In Point
     *
     * Frame when the layer becomes visible
     *
     * @default 0
     */
    ip?: Helpers.InPoint;
    /**
     * Out Point
     *
     * Frame when the layer becomes invisible
     * @default 99999
     */
    op?: Helpers.OutPoint;
    /**
     * Time Stretch
     * @default 1
     */
    sr?: Helpers.Time;
    /**
     * Start Time
     *
     * @default 0
     */
    st?: Helpers.Time;
  }

  /**
   * Defines character shapes
   */
  interface CharacterData extends Data {
    data: CharacterShapes | CharacterPrecomp;
    /**
     * Character
     * @default ""
     */
    ch: string;
    fFamily: FontFamily;
    /**
     * @default 0
     */
    size: FontSize;
    /**
     * @default ""
     */
    style: FontStyle;
    w: Helpers.Width;
  }

  /*
   * Describes how a font with given settings should be loaded
   */
  interface Font {
    /**
     * Ascent
     *
     * Text will be moved down based on this value
     */
    ascent?: number;
    /**
     * Font Family
     *
     * @default "sans"
     */
    fFamily: FontFamily;
    /**
     * Font Name
     *
     * Name used by text documents to reference this font, usually it's `fFamily` followed by `fStyle`
     * @default "sans-regular"
     */
    fName: string;
    /**
     * Font Style
     *
     * @default "Regular"
     * @example ["Regular", "Bold", "Bold Italic"]
     */
    fStyle: FontStyle;
    /**
     * Font Path
     */
    fPath?: string;
    /**
     * Font Weight
     */
    fWeight?: string;
    /**
     * Origin
     */
    origin: TextType.FontPathOrigin;
    /**
     * Font CSS Class
     *
     * A class applied to text objects using this font
     */
    fClass?: Helpers.CssClass;
  }

  interface FontList {
    list: Font[];
  }

  /**
   * Uses the path described by a layer mask to put the text on said path.
   */
  interface MaskedPath {
    /**
     * Mask
     *
     * Index of the mask to use
     *
     * @type integer
     */
    m?: number;
    /**
     * First Margin
     */
    f?: A.Value;
    /**
     * Last Margin
     */
    l?: A.Value;
    /**
     * Reverse Path
     */
    r?: A.Value;
    /**
     * Force Alignment
     */
    a?: A.Value;
    /**
     * Perpendicular To Path
     */
    p?: A.Value;
  }

  /**
   * Text Animator Data Property
   */
  type AnimatorDataProperty = Helpers.Transform & {
    /**
     * Rotate X
     */
    rx?: A.Value;
    /**
     * Rotate Y
     */
    ry?: A.Value;
    /**
     * Stroke Width
     */
    sw?: A.Value;
    /**
     * Stroke Color
     */
    sc?: A.Color;
    /**
     * Fill Color
     */
    fc?: A.Color;
    /**
     * Fill Hue
     */
    fh?: A.Value;
    /**
     * Fill Saturation
     */
    fs?: A.Value;
    /**
     * Fill Brightness
     */
    fb?: A.Value;
    /**
     * Tracking
     */
    t?: A.Value;
    /**
     * Scale
     */
    s?: A.MultiDimensional;
  };

  interface SelectorProperty {
    /**
     * Expressible
     */
    t: Helpers.IntegerBoolean;
    /**
     * Max Ease
     */
    xe: A.Value;
    /**
     * Min Ease
     */
    ne: A.Value;
    /**
     * Max Amount
     */
    a: A.Value;
    /**
     * Based On
     */
    b: TextType.Based;
    /**
     * Randomize
     */
    rn: Helpers.IntegerBoolean;
    /**
     * Shape
     */
    sh: TextType.Shape;
    /**
     * Offset
     */
    o: A.Value;
    /**
     * Range Units
     *
     * @type integer
     */
    r?: number;
    /**
     * Selector Smoothness
     */
    sm?: A.Value;
    /**
     * Start
     */
    s?: A.Value;
    /**
     * End
     */
    e?: A.Value;
    /**
     * Mode
     */
    m?: TextType.RangeSelectorMode;
  }

  interface Selector extends Helpers.Name {
    /**
     * Transform
     */
    a?: {
      s: A.Position;
    };
    s?: SelectorProperty;
  }

  /**
   * Text More Options
   */
  interface MoreOptions {
    /**
     * Alignment
     *
     * Group alignment
     */
    a?: A.MultiDimensional;
    /**
     * Anchor point grouping
     */
    g?: TextType.Grouping;
  }

  /**
   * Text Document
   *
   * Note that for multi-line text, lines are separated by \\r
   */
  interface Document {
    /**
     * Font Family
     * @default ""
     */
    f: FontFamily;
    /**
     * Fill Color
     * @default [0,0,0]
     */
    fc: Helpers.ColorRgba;
    /**
     * Stroke Color
     */
    sc?: Helpers.ColorRgba;

    /**
     * Stroke Width
     * @default 0
     */
    sw?: number;
    /**
     * Stroke Over Fill
     * Render stroke above the fill
     */
    of?: boolean;
    /**
     * @default 10
     */
    s: FontSize;
    /**
     * LineHeight
     * Line height when wrapping
     */
    lh?: number;
    /**
     * Wrap Size
     *
     * Size of the box containing the text
     */
    sz?: [number, number];
    /**
     * Wrap Position
     *
     * Position of the box containing the text
     */
    ps?: [number, number];
    /**
     * note that newlines are encoded with \\r
     *
     * @default ''
     */
    t: string;
    /**
     * @default 0
     */
    j?: TextType.Justify;
    ca?: TextType.Caps;
    /**
     * Text Tracking
     */
    tr?: number;
    /**
     * Baseline Shify
     */
    ls?: number;
    /**
     * Vertical justification. (Skottie)
     */
    vj?: TextType.VerticalJustify;
  }

  interface DataKeyframe {
    /**
     * Start
     */
    s: Document;
    /** Start time of keyframe segment. */
    t: Helpers.Time;
  }

  /**
   * Text Data
   *
   * Animated property representing the text contents
   */
  interface Data extends Helpers.Expression {
    k: DataKeyframe[];
  }

  type AnimatorDataProperties = AnimatorDataProperty | Selector;

  interface AnimatorData {
    a: AnimatorDataProperties[];
    d: Data;
    m: MoreOptions;
    p: MaskedPath;
  }
}
