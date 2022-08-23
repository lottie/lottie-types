import { Asset } from "./asset";
import { Layer } from "./layer";
import { Text } from "./text";
import { Helpers } from "./helpers";

/**
 * Defines named portions of the composition.
 */
export type Marker = {
  /**
   * Comment
   */
  cm?: string;
  tm?: Helpers.Time;
  /**
   * Duration
   */
  dr?: number;
};

/**
 * Base class for layer holders
 */
export interface Composition {
  layers: Layer.Value[];
}

/**
 * Document metadata
 */
export interface Metadata {
  /**
   * Author
   */
  a?: string;
  /**
   * Keywords
   */
  k?: string | string[];
  /**
   * Description
   */
  d?: string;
  /**
   * ThemeColor
   */
  tc?: string;
  /**
   * Generator
   *
   * Software used to generate the file
   */
  g?: string;
}

/**
 * Motion blur settings
 */
export interface MotionBlur {
  /**
   * Shutter Angle
   *
   * Angle in degrees
   * AE default: 180
   * Skottie default: O ([0, 720])
   */
  sa?: number;
  /**
   * Shutter Phase
   *
   * Angle in degrees
   * AE default: -90
   * Skottie default: 0 ([-360, 360])
   */
  sp?: number;
  /**
   * Samples Per Frame
   * AE default: 16
   * Skottie default: 1 ([1, 64])
   */
  spf?: number;
  /**
   * Adaptive Sample Limit
   *
   * (not yet supported in any known Lottie player)
   * AE default: 128
   * 2D layer motion automatically uses more samples per frame
   * when needed, up to the value specified by Adaptive Sample Limit.
   */
  asl?: number;
}

/**
 * Top level object, describing the animation
 */
export interface Animation
  extends Helpers.VisualObject,
    Helpers.Threedimensional,
    Helpers.Framerate,
    Composition {
  /**
   * Version
   * @default 5.5.2
   */
  v?: string;
  /**
   * "In Point", which frame the animation starts at (usually 0)
   * @default 0
   */
  ip: Helpers.InPoint;
  /**
   * "Out Point", which frame the animation stops/loops at, which makes this the duration in frames when `ip` is 0
   * @default 60
   */
  op: Helpers.OutPoint;
  /**
   * Width of the animation
   * @default 512
   */
  w: Helpers.Width;
  /**
   * Height of the animation
   * @default 512
   */
  h: Helpers.Height;
  /**
   * List of assets that can be referenced by layers
   */
  assets?: Asset.Value[];
  /**
   * Extra Compositions
   *
   * List of Extra compositions not referenced by anything
   */
  comps?: Asset.Precomposition[];
  fonts?: Text.FontList;
  /**
   * Data defining text characters as lottie shapes. If present a player
   * might only render characters defined here and nothing else.
   */
  chars?: Text.CharacterData[];
  meta?: Metadata;
  /**
   * User Metadata
   *
   * User-defined metadata
   */
  metadata?: object;
  /**
   * Markers defining named sections of the composition.
   */
  markers?: Marker[];
  mb?: MotionBlur;
}
