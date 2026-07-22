import {
  BlendMode,
  LayerType,
  TextType,
} from "@lottie-animation-community/lottie-types";

const blend: BlendMode = BlendMode.Normal;
const legacyBlend: BlendMode.VALUE = BlendMode.VALUE.NORMAL;
const layer: LayerType = LayerType.Text;
const textCaps: TextType.Caps = TextType.Caps.AllCaps;

void [blend, legacyBlend, layer, textCaps];
