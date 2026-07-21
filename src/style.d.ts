import { AnimatedProperty as A } from "./animated-property";
import { Helpers } from "./helpers";
import { LayerStyleType } from "./constants/layer-style-type";
import { GradientType } from "./constants/gradient-type";

export declare type Style = Style.Value;
export declare namespace Style {
  type OpacityValue = A.Value;

  type ColorValue = A.Color;

  type AngleValue = A.Value;

  interface ChokeSpread {
    ch?: A.Value;
  }

  interface BlendMode {
    bm?: A.Value;
  }

  interface Opacity {
    o?: OpacityValue;
  }

  /**
   * Size or Blur Size
   */
  interface Size {
    s?: A.Value;
  }

  interface Noise {
    no?: A.Value;
  }

  interface Distance {
    d?: A.Value;
  }

  interface Color {
    c?: ColorValue;
  }

  /**
   * Local light angle
   */
  interface Angle {
    a?: AngleValue;
  }
  /**
   * Layer Style
   *
   * Style applied to a layer
   */
  interface Layer extends Helpers.VisualObject {
    /**
     * Type
     *
     * Style Type
     * @type integer
     */
    ty: LayerStyleType.Value;
  }

  interface Stroke extends Layer, Size, Color {
    ty: LayerStyleType.Stroke;
  }

  interface DropShadow
    extends Layer,
      Color,
      Opacity,
      Angle,
      Size,
      Distance,
      ChokeSpread,
      BlendMode,
      Noise {
    ty: LayerStyleType.DropShadow;
    /**
     * Layer Conceal
     *
     * Layer knowck out drop shadow
     */
    lc?: A.Value;
  }

  interface InnerShadow
    extends Layer,
      Color,
      Opacity,
      Angle,
      Size,
      Distance,
      ChokeSpread,
      BlendMode,
      Noise {
    ty: LayerStyleType.InnerShadow;
  }

  interface OuterGlow
    extends Layer,
      Color,
      Opacity,
      ChokeSpread,
      BlendMode,
      Noise {
    ty: LayerStyleType.OuterGlow;
    /**
     * Range
     */
    r?: A.Value;
    /**
     * Jitter
     */
    j?: A.Value;
  }

  interface InnerGlow extends Omit<OuterGlow, "ty"> {
    ty: LayerStyleType.InnerGlow;
    /**
     * Source
     */
    sr?: A.Value;
  }

  interface BevelEmboss extends Layer, Size, Angle {
    ty: LayerStyleType.BevelEmboss;
    /**
     * Bevel Style
     */
    bs?: A.Value;
    /**
     * Technique
     */
    bt?: A.Value;
    /**
     * Strength
     */
    sr?: A.Value;
    /**
     * Soften
     */
    sf?: A.Value;
    /**
     * Global Angle
     *
     * Use global light
     */
    ga?: AngleValue;
    /**
     * Altitude
     *
     * Local lighting altitude
     */
    ll?: A.Value;
    /**
     * Highlight Mode
     */
    hm?: A.Value;
    /**
     * Highlight Color
     */
    hc?: ColorValue;
    /**
     * Highlight Opacity
     */
    ho?: OpacityValue;
    /**
     * Shadow Mode
     */
    sm?: A.Value;
    /**
     * Shadow Color
     */
    sc?: ColorValue;
    /**
     * Shadow Opacity
     */
    so?: OpacityValue;
  }

  interface Satin
    extends Layer,
      BlendMode,
      Color,
      Opacity,
      Angle,
      Distance,
      Size {
    ty: LayerStyleType.Satin;
    /**
     * Invert
     */
    in?: A.Value;
  }

  interface ColorOverlay extends Layer, BlendMode, Color {
    ty: LayerStyleType.ColorOverlay;
    /**
     * Opacity
     */
    so?: OpacityValue;
  }

  interface GradientOverlay extends Layer, BlendMode, Opacity, Angle {
    ty: LayerStyleType.GradientOverlay;
    /**
     * Gradient
     */
    gf?: A.GradientColors;
    /**
     * Smoothness
     */
    gs?: A.Value;
    /**
     * Gradient Type
     */
    gt?: GradientType.Value;
    /**
     * Reverse
     */
    re?: A.Value;
    /**
     * Align
     *
     * Align with layer
     */
    al?: A.Value;
    /**
     * Scale
     */
    s?: A.Value;
    /**
     * Offset
     */
    of?: A.Value;
  }

  type Value =
    | Stroke
    | DropShadow
    | InnerShadow
    | OuterGlow
    | InnerGlow
    | BevelEmboss
    | Satin
    | ColorOverlay
    | GradientOverlay;
}
