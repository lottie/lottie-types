import { Composition } from "./animation";
import { Helpers } from "./helpers";

export declare type Asset = Asset.Value;
export declare namespace Asset {
  interface Main extends Helpers.Name {
    /**
     * ID
     *
     * Unique identifier used by layers when referencing this asset
     * @default ""
     */
    id: string;
  }

  /**
   * Asset referencing a file
   */
  interface File extends Main {
    /**
     * Path
     *
     * Path to the directory containing an asset file
     * @default ""
     */
    u?: string;
    /**
     * Filename or Data URL
     */
    p: string;
    /**
     * Embedded
     *
     * Whether the asset is embedded
     * @default 0
     */
    e?: Helpers.IntegerBoolean;
  }

  /**
   * External image
   */
  interface Image extends File {
    /**
     * Width of the image
     * @default 0
     */
    w?: Helpers.Width;
    /**
     *
     * Height of the image
     * @default 0
     */
    h?: Helpers.Height;
    /**
     * Type
     * Marks as part of an image sequence if present
     */
    t?: "seq";
    /**
     * Slot ID
     *
     * One of the ID in the file's slots
     */
    sid?: Helpers.SlotID;
  }

  /**
   * External sound
   */
  interface Sound extends File {}

  /**
   * Asset containing an animation that can be referenced by layers.
   */
  interface Precomposition extends Main, Composition, Helpers.Framerate {
    /**
     * Extra
     *
     * Extra composition
     * @default 0
     */
    xt?: Helpers.IntegerBoolean;
  }

  /**
   * External data source, usually a JSON file"
   */
  interface DataSource extends File {
    /**
     * Type
     * @type integer
     */
    t: 3;
  }

  type Value = Image | Precomposition | Sound | DataSource;
}
