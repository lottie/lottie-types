export declare namespace MaskMode {
  /**
   * How masks interact with each other. See https://helpx.adobe.com/after-effects/using/alpha-channels-masks-mattes.html
   */
  type Value = No | Add | Subtract | Intersect | Lighten | Darken | Difference;

  type No = "n";
  type Add = "a";
  type Subtract = "s";
  type Intersect = "i";
  type Lighten = "l";
  type Darken = "d";
  type Difference = "f";

  const enum VALUE {
    NO = "n",
    ADD = "a",
    SUBTRACT = "s",
    INTERSECT = "i",
    LIGHTEN = "l",
    DARKEN = "d",
    DIFFERENCE = "f",
  }
}
