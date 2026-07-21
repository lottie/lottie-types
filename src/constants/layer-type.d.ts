import { Helpers } from "../helpers";

export type LayerType = Helpers.Values<typeof LayerType>;
export namespace LayerType {
  export type Value = LayerType;

  export const Precomposition = 0;
  export type Precomposition = typeof Precomposition;
  export const SolidColor = 1;
  export type SolidColor = typeof SolidColor;
  export const Image = 2;
  export type Image = typeof Image;
  export const Null = 3;
  export type Null = typeof Null;
  export const Shape = 4;
  export type Shape = typeof Shape;
  export const Text = 5;
  export type Text = typeof Text;
  export const Audio = 6;
  export type Audio = typeof Audio;
  export const VideoPlaceholder = 7;
  export type VideoPlaceholder = typeof VideoPlaceholder;
  export const ImageSequence = 8;
  export type ImageSequence = typeof ImageSequence;
  export const Video = 9;
  export type Video = typeof Video;
  export const ImagePlaceholder = 10;
  export type ImagePlaceholder = typeof ImagePlaceholder;
  export const Guide = 11;
  export type Guide = typeof Guide;
  export const Adjustment = 12;
  export type Adjustment = typeof Adjustment;
  export const Camera = 13;
  export type Camera = typeof Camera;
  export const Light = 14;
  export type Light = typeof Light;
  export const Data = 15;
  export type Data = typeof Data;

  /** @deprecated Use the {@linkcode LayerType} namespace */
  export const enum VALUE {
    PRECOMPOSITION = Precomposition,
    SOLID_COLOR = SolidColor,
    IMAGE = Image,
    NULL = Null,
    SHAPE = Shape,
    TEXT = Text,
    AUDIO = Audio,
    VIDEO_PLACEHOLDER = VideoPlaceholder,
    IMAGE_SEQUENCE = ImageSequence,
    VIDEO = Video,
    IMAGE_PLACEHOLDER = ImagePlaceholder,
    GUIDE = Guide,
    ADJUSTMENT = Adjustment,
    CAMERA = Camera,
    LIGHT = Light,
    DATA = Data,
  }
}
