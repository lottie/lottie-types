import { Helpers } from "./helpers";
import { EffectValue as E } from "./effect-value";
import { EffectType } from "./constants/effect-type";

export declare type Effect = Effect.Value;
export declare namespace Effect {
  interface Main extends Helpers.VisualObject, Helpers.PropertyIndex {
    /** Effect Parameters */
    ef: E.Value[];
    ty: EffectType.Value;
    /** Enabled */
    en?: Helpers.IntegerBoolean;
    /**
     * NumberOfProperties
     */
    np?: number;
  }

  /**
   * Adds a shadow to the layer
   */
  interface DisplacementMap extends Main {
    ty: EffectType.DisplacementMap;
    ef: [
      /** Displacement Map Layer */
      E.Layer,
      /** Use For Horizontal Displacement */
      E.DropDown,
      /** Max Horizontal Displacement */
      E.Slider,
      /** Use For Vertical Displacement */
      E.DropDown,
      /** Max Vertical Displacement */
      E.Slider,
      /** Displacement Map Behavior */
      E.DropDown,
      /** Edge Behavior */
      E.DropDown,
      /** Expand Output */
      E.DropDown
    ];
  }

  interface DropShadow extends Main {
    ty: EffectType.DropShadow;
    ef: [
      /** Color */
      E.Color,
      /** Opacity between 0 and 255 */
      E.Slider,
      /** Angle */
      E.Angle,
      /** Distance */
      E.Slider,
      /** Blur */
      E.Slider
    ];
  }

  /**
   * Replaces the whole layer with the given color
   *
   * Opacity is in [0, 1]
   */
  interface Fill extends Main {
    ty: EffectType.Fill;
    ef: [
      /** 00 */
      E.Point,
      /** 01 */
      E.DropDown,
      /** Color */
      E.Color,
      /** Color */
      E.Color,
      /** 03 */
      E.DropDown,
      /** 04 */
      E.Slider,
      /** 05 */
      E.Slider,
      /** Opacity in [0, 1] */
      E.Slider
    ];
  }

  /**
   * Gaussian blur
   */
  interface GaussianBlur extends Main {
    ty: EffectType.GaussianBlur;
    ef: [
      /** Sigma */
      E.Slider,
      /** Dimensions */
      E.Slider,
      /** Wrap */
      E.Checkbox
    ];
  }

  interface Matte3 extends Main {
    ty: EffectType.Matte3;
    ef: [
      /** Index */
      E.Slider
    ];
  }

  interface MeshWarp extends Main {
    ty: EffectType.MeshWarp;
    ef: [
      /** Rows */
      E.Slider,
      /** Columns */
      E.Slider,
      /** Quality */
      E.Slider,
      /** 03 */
      E.NoValue
    ];
  }

  interface PaintOverTransparent extends Main {
    ty: EffectType.PaintOverTransparent;
    ef: [
      /** 00 */
      E.Slider
    ];
  }

  interface ProLevels extends Main {
    ty: EffectType.ProLevels;
    ef: [
      /** 00 */
      E.DropDown,
      /** 01 */
      E.NoValue,
      /** 02 */
      E.NoValue,
      /** comp_inblack */
      E.Slider,
      /** comp_inwhite */
      E.Slider,
      /** comp_gamma */
      E.Slider,
      /** comp_outblack */
      E.NoValue,
      /** comp_outwhite */
      E.NoValue,
      /** 08 */
      E.NoValue,
      /** 09 */
      E.Slider,
      /** r_inblack */
      E.Slider,
      /** r_inwhite */
      E.Slider,
      /** r_gamma */
      E.Slider,
      /** r_outblack */
      E.Slider,
      /** r_outwhite */
      E.Slider,
      /** 15 */
      E.Slider,
      /** 16 */
      E.Slider,
      /** g_inblack */
      E.Slider,
      /** g_inwhite */
      E.Slider,
      /** g_gamma */
      E.Slider,
      /** g_outblack */
      E.Slider,
      /** g_outwhite */
      E.Slider,
      /** 22 */
      E.Slider,
      /** 23 */
      E.Slider,
      /** b_inblack */
      E.Slider,
      /** b_inwhite */
      E.Slider,
      /** b_gamma */
      E.Slider,
      /** b_outblack */
      E.Slider,
      /** b_outwhite */
      E.Slider,
      /** 29 */
      E.Slider,
      /** a_inblack */
      E.Slider,
      /** a_inwhite */
      E.Slider,
      /** g_gamma */
      E.Slider,
      /** a_outblack */
      E.Slider,
      /** a_outwhite */
      E.Slider
    ];
  }

  interface Puppet extends Main {
    ty: EffectType.Puppet;
    ef: [
      /** Puppet Engine */
      E.DropDown,
      /** Mesh Rotation Refinement */
      E.Slider,
      /** On Transparent */
      E.DropDown,
      /** 03 */
      E.NoValue
    ];
  }

  interface RadialWipe extends Main {
    ty: EffectType.RadialWipe;
    ef: [
      /** Completion. Between 0 and 100 */
      E.Slider,
      /** Start Angle */
      E.Angle,
      /** Wipe Center */
      E.Point,
      /** Wipe */
      E.Slider,
      /** Feather */
      E.Slider
    ];
  }

  interface Spherize extends Main {
    ty: EffectType.Spherize;
    ef: [
      /** Radius */
      E.Slider,
      /** Center */
      E.Point
    ];
  }

  interface Stroke extends Main {
    ty: EffectType.Stroke;
    ef: [
      /** 00 */
      E.Color,
      /** 01 */
      E.Checkbox,
      /** 02 */
      E.Checkbox,
      /** Color */
      E.Color,
      /** 04 */
      E.Slider,
      /** 05 */
      E.Slider,
      /** 06 */
      E.Slider,
      /** 07 */
      E.Slider,
      /** 08 */
      E.Slider,
      /** 09 */
      E.DropDown,
      /** type */
      E.DropDown
    ];
  }

  /**
   * Colorizes the layer
   *
   * Opacity in [0, 100]
   */
  interface Tint extends Main {
    ty: EffectType.Tint;
    ef: [
      /**
       * Black Color.
       *
       * Tint of the darker parts of the layer.
       */
      E.Color,
      /**
       * White Color
       *
       * Tint of the lighter parts of the layer
       */
      E.Color,
      /**
       * Intensity
       *
       * Intensity of the effect, 0 means the layer is unchanged. 100 means full effect.
       */
      E.Slider
    ];
  }

  /**
   * Maps layers colors based on bright/mid/dark colors
   */
  interface Tritone extends Main {
    ty: EffectType.Tritone;
    ef: [
      /** Bright */
      E.Color,
      /** Mid */
      E.Color,
      /** Dark */
      E.Color
    ];
  }

  interface Wavy extends Main {
    ty: EffectType.Wavy;
    ef: [
      /** Radius */
      E.Slider,
      /** Center */
      E.Point,
      /** Conversion Type */
      E.DropDown,
      /** Speed */
      E.DropDown,
      /** Width */
      E.Slider,
      /** Height */
      E.Slider,
      /** Phase */
      E.Slider
    ];
  }

  /**
   * Some lottie files use `ty` = 5 for many different effects
   */
  interface Custom extends Main {
    ty: EffectType.Custom;
  }

  /**
   * Layer Effect
   */
  type Value =
    | Custom
    | DropShadow
    | Fill
    | GaussianBlur
    | Matte3
    | ProLevels
    | Stroke
    | Tint
    | Tritone
    | RadialWipe
    | Wavy
    | Puppet
    | Spherize
    | PaintOverTransparent
    | MeshWarp
    | DisplacementMap;
}
