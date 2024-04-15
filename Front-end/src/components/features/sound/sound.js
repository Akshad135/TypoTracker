import typeSoft from "../../../assets/sound/typeSoft.wav";
import keyboard from "../../../assets/sound/keyboard.wav";

const SOUND_MAP = {
  keyboard: keyboard,
  typewriter: typeSoft,
};

const soundOptions = [{ label: "keyboard" }, { label: "typewriter" }];

const SOUND_MODE = "sound";
const DEFAULT_SOUND_TYPE_KEY = "sound-type";
const SOUND_MODE_TOOLTIP = "typing sound";

export {
  soundOptions,
  DEFAULT_SOUND_TYPE_KEY,
  SOUND_MODE,
  SOUND_MODE_TOOLTIP,
  SOUND_MAP,
};
