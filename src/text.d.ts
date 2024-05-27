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
  interface CharacterData {
    data: CharacterShapes | CharacterPrecomp;
    /**
     * Character
     * @default ""
     */
    ch: string;
    /**
     * @default ""
     */
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
     * CSS class applied to text objects using this font
     */
    fClass?: Helpers.CssClass;
  }

  interface FontList {
    list?: Font[];
  }

  /**
   * Uses the path described by a layer mask to put the text on said path.
   */
  interface FollowPath {
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
  type Style = Helpers.Transform & {
    /**
     * Stroke Width
     */
    sw?: A.Value;
    /**
     * Stroke Color
     */
    sc?: A.Color;
    /**
     * Stroke Hue
     */
    sh?: A.Value;
    /**
     * Stroke Saturation
     */
    ss?: A.Value;
    /**
     * Stroke Brightness
     */
    sb?: A.Value;
    /**
     * Stroke Opacity
     */
    so?: A.Value;
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
     * Fill Opacity
     */
    fo?: A.Value;
    /**
     * Fill Brightness
     */
    fb?: A.Value;
    /**
     * Tracking
     */
    t?: A.Value;
    /**
     * Blur
     */
    bl?: A.Value;
    /**
     * Line Spacing
     */
    ls?: A.Value;
  };

  /**
   * Animated Text Document
   * Animated property representing the text contents
   */
  interface AnimatedDocument extends Helpers.Expression {
    k: DocumentKeyframe[];
  }

  /**
   * Text Range Selector
   */
  interface Selector {
    /**
     * Expressible
     */
    t: Helpers.IntegerBoolean;
    /**
     * Max Ease
     */
    xe?: A.Value;
    /**
     * Min Ease
     */
    ne?: A.Value;
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
    rn?: Helpers.IntegerBoolean;
    /**
     * Shape
     */
    sh: TextType.Shape;
    /**
     * Offset
     */
    o?: A.Value;
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
  }

  /**
   * Range of text with custom animations and style
   */
  interface Range extends Helpers.Name {
    /**
     * Transform
     */
    a?: Style;
    s?: Selector;
  }

  /**
   * Text Alignment Options
   */
  interface AlignmentOptions {
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
     * Font Size
     *
     * @default 10
     */
    s: FontSize;
    /**
     * Line Height
     *
     * Distance between lines on multiline or wrapped text
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
     * Text
     *
     * Text, note that newlines are encoded with \\r
     * @default ''
     */
    t: string;
    /**
     * Justify
     *
     * @default 0
     */
    j?: TextType.Justify;
    /**
     * Text Caps
     */
    ca?: TextType.Caps;
    /**
     * Text Tracking
     */
    tr?: number;
    /**
     * Baseline Shift
     */
    ls?: number;
    /**
     * Vertical justification. (Skottie)
     */
    vj?: TextType.VerticalJustify;
  }

  /**
   * Text Document Keyframe
   *
   * A keyframe containing a text document
   */
  interface DocumentKeyframe {
    /**
     * Start
     */
    s: Document;
    /**
     * Start time of keyframe segment.
     *
     * @default 0
     */
    t: Helpers.Time;
  }

  /**
   * Text Data
   *
   * Animated property representing the text contents
   */
  interface Data {
    a: Range[];
    d: AnimatedDocument;
    m: AlignmentOptions;
    p: FollowPath;
  }
}
