export declare namespace LayerType {
  type Value =
    | Precomposition
    | SolidColor
    | Image
    | Null
    | Shape
    | Text
    | Audio
    | VideoPlaceholder
    | ImageSequence
    | Video
    | ImagePlaceholder
    | Guide
    | Adjustment
    | Camera
    | Light
    | Data;

  type Precomposition = 0;
  type SolidColor = 1;
  type Image = 2;
  type Null = 3;
  type Shape = 4;
  type Text = 5;
  type Audio = 6;
  type VideoPlaceholder = 7;
  type ImageSequence = 8;
  type Video = 9;
  type ImagePlaceholder = 10;
  type Guide = 11;
  type Adjustment = 12;
  type Camera = 13;
  type Light = 14;
  type Data = 15;

  const enum VALUE {
    PRECOMPOSITION = 0,
    SOLID_COLOR = 1,
    IMAGE = 2,
    NULL = 3,
    SHAPE = 4,
    TEXT = 5,
    AUDIO = 6,
    VIDEO_PLACEHOLDER = 7,
    IMAGE_SEQUENCE = 8,
    VIDEO = 9,
    IMAGE_PLACEHOLDER = 10,
    GUIDE = 11,
    ADJUSTMENT = 12,
    CAMERA = 13,
    LIGHT = 14,
    DATA = 15,
  }
}
