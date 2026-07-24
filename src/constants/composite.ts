import { Helpers } from "../helpers";

/**
 * How to stack copies in a repeater
 */
export type Composite = Helpers.Values<typeof Composite>;
export namespace Composite {
  export type Value = Composite;

  export const Above = 2;
  export type Above = typeof Above;
  export const Below = 1;
  export type Below = typeof Below;

  /** @deprecated Use the {@linkcode Composite} namespace */
  export enum VALUE {
    ABOVE = Above,
    BELOW = Below,
  }
}
