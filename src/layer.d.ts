import { Helpers } from "./helpers";
import { BlendMode } from "./constants/blend-mode";
import { MatteMode } from "./constants/matte-mode";
import { LayerType } from "./constants/layer-type";
import { AnimatedProperty as A } from "./animated-property";
import { Text } from "./text";
import { Effect } from "./effect";
import { Shape } from "./shape";
import { Style } from "./style";

export declare type Layer = Layer.Value;
export declare namespace Layer {
  interface Main extends Helpers.VisualObject, Helpers.Threedimensional {
    /**
     * Whether the layer is hidden
     */
    hd?: Helpers.Hidden;
    ty: LayerType.Value;
    /**
     * Index that can be used for parenting and referenced in expressions
     * @type integer
     */
    ind?: Helpers.Index;
    /**
     * Parent Index
     *
     * Must be the `ind` property of another Layer
     */
    parent?: number;
    /**
     * Time Stretch
     */
    sr?: Helpers.Time;
    /**
     * In Point - Frame when the layer becomes visible
     */
    ip: Helpers.InPoint;
    /**
     * Out Point - Frame when the layer becomes invisible
     */
    op: Helpers.OutPoint;
    /**
     * Start Time
     */
    st?: Helpers.Time;
  }

  interface AudioSettings {
    /**
     * Level
     */
    lv: A.MultiDimensional;
  }

  /**
   * A layer playing sounds
   */
  interface Audio extends Main {
    ty: LayerType.Audio;
    au: AudioSettings;
    /**
     * Sound Id
     *
     * ID of the sound as specified in the assets.
     */
    refId?: Helpers.ID;
  }

  /**
   * Layer used to affect visual elements
   */
  interface Visual extends Main {
    /**
     * Collapse Transform
     *
     * This is deprecated in favour of "ct"
     * @deprecated true
     */
    cp?: boolean;
    /**
     * Layer Transform
     */
    ks: Helpers.Transform;
    /**
     * AutoOrient
     *
     * If 1, The layer will rotate itself to match its animated position path
     * @default 0
     */
    ao?: Helpers.IntegerBoolean;
    /**
     * Matte mode, the layer will inherit the transparency from the layer above
     * */
    tt?: MatteMode.Value;
    /**
     * Matte parent
     *
     * Index of the layer used as matte, if omitted assume the layer above the current one
     *
     * "type": "integer"
     */
    tp?: number;
    /**
     * Matte Target
     */
    td?: number;
    /**
     * Whether the layer has masks applied
     */
    hasMask?: boolean;
    /** List of Masks */
    masksProperties?: Helpers.Mask[];
    /**
     * List of Effects
     */
    ef?: Effect.Value[];
    /**
     * Motion Blur
     *
     * Whether motion blur is enabled for the layer
     */
    mb?: boolean;
    /**
     * Layer Style
     *
     * Styling effects for this layer
     */
    sy?: Style.Value[];
    /**
     * Collapse Transform
     *
     * Marks that transforms should be applied before masks
     * @default 0
     */
    ct?: Helpers.IntegerBoolean;
    /**
     * Blend Mode
     * @default 0
     */
    bm?: BlendMode.Value;
    /**
     * CSS class used by the SVG renderer
     */
    cl?: Helpers.CssClass;
    /**
     * Layer XML ID
     *
     * ID attribute used by the SVG renderer
     */
    ln?: Helpers.ID;
    /**
     * Layer XML tag name
     *
     * tag name used by the SVG renderer
     */
    tg?: string;
  }

  /**
   * Layer that renders a Precomposition asset
   */
  interface Precomposition extends Visual {
    ty: LayerType.Precomposition;
    /**
     * Reference ID
     *
     * ID of the precomp as specified in the assets
     */
    refId: Helpers.ID;
    /**
     * Width of the clipping rect
     */
    w: Helpers.Width;
    /**
     * Height of the clipping rect
     */
    h: Helpers.Height;
    /**
     * Time Remapping
     */
    tm?: A.Value;
  }

  /**
   * Layer containing Shapes
   */
  interface Shape extends Visual {
    ty: LayerType.Shape;
    shapes: Shape.Value[];
  }

  /**
   * Layer with a solid color rectangle
   */
  interface SolidColor extends Visual {
    ty: LayerType.SolidColor;
    /**
     * Color
     *
     * Color of the layer, unlike most other places, the color is a `#rrggbb` hex string
     */
    sc: string;
    /**
     * @default 512
     */
    sh: Helpers.Height;
    /**
     * @default 512
     */
    sw: Helpers.Width;
  }

  /**
   * Layer that shows an image asset
   */
  interface Image extends Visual {
    ty: LayerType.Image;
    /**
     * Image ID
     *
     * ID of the image as specified in the assets
     * @default ""
     */
    refId: Helpers.ID;
  }

  /**
   * Layer with no data, useful to group layers together
   */
  interface Null extends Visual {
    ty: LayerType.Null;
  }

  /**
   * Layer with some text
   */
  interface Text extends Visual {
    ty: LayerType.Text;
    /**
     * Data
     */
    t: Text.Data;
  }

  interface Camera extends Main {
    ty: LayerType.Camera;
    /**
     * Perspective
     *
     * Distance from the Z=0 plane.\nSmall values yield a higher perspective effect.
     */
    pe: A.Value;
    ks: Helpers.Transform;
  }

  interface Data extends Main {
    ty: LayerType.Data;
    /**
     * Data source ID
     *
     * ID of the data source in assets
     */
    refId?: Helpers.ID;
  }

  interface VideoPlaceholder extends Main {
    ty: LayerType.VideoPlaceholder;
  }

  interface ImageSequence extends Main {
    ty: LayerType.ImageSequence;
  }

  interface Video extends Main {
    ty: LayerType.Video;
  }

  interface ImagePlaceholder extends Main {
    ty: LayerType.ImagePlaceholder;
  }

  interface Guide extends Main {
    ty: LayerType.Guide;
  }

  interface Adjustment extends Main {
    ty: LayerType.Adjustment;
  }

  interface Light extends Main {
    ty: LayerType.Light;
  }

  type Value =
    | Audio
    | Precomposition
    | SolidColor
    | Image
    | Null
    | Shape
    | Text
    | Camera
    | VideoPlaceholder
    | Data
    | ImageSequence
    | Video
    | ImagePlaceholder
    | Guide
    | Adjustment
    | Light;
}
