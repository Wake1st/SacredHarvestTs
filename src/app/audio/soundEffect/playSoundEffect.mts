import { SoundEffect, SoundOptions } from "./types.mjs";

const soundEffects = {
  boom: new Audio('./assets/audio/Boom.wav'),
  gong: new Audio('./assets/audio/Gong.wav'),
  ring: new Audio('./assets/audio/Ring.wav'),
};

export function playSoundEffect(name: SoundEffect, options?: SoundOptions) {
  const effect = soundEffects[name];

  effect.volume = options?.volume ?? 1;
  effect.play();
}
