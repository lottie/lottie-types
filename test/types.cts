import {
  BlendMode,
  LayerStyleType,
  LayerType,
  TextType,
} from "@lottie-animation-community/lottie-types";

const blend: BlendMode = BlendMode.Normal;
const legacyBlend: BlendMode.VALUE = BlendMode.VALUE.NORMAL;
const layerStyle: LayerStyleType = LayerStyleType.Stroke;
const layer: LayerType = LayerType.Text;
const textCaps: TextType.Caps = TextType.Caps.AllCaps;

void [blend, legacyBlend, layerStyle, layer, textCaps];
