import { Helpers } from "../helpers";

/**
 * How to handle multiple shapes in trim path
 */
export type TrimMultipleShapes = Helpers.Values<typeof TrimMultipleShapes>;
export namespace TrimMultipleShapes {
  export type Value = TrimMultipleShapes;

  export const Individually = 1;
  export type Individually = typeof Individually;
  export const Simultaneously = 2;
  export type Simultaneously = typeof Simultaneously;

  /** @deprecated Use the {@linkcode TrimMultipleShapes} namespace */
  export const enum VALUES {
    INDIVIDUALLY = Individually,
    SIMULTANEOUSLY = Simultaneously,
  }
}
