import chantData from '../../data/chants.mjs';
import { Chant } from './types.mjs';

let chants: Chant[] = chantData;

export function loadChants() {
  const newChants = chants.map(chant => ({
    ...chant,
    audio: new Audio(`./assets/audio/chants/${chant.file}`),
  }));
  chants = [...newChants];
}

export function playChant(chantId: number, volume: number = 0.3) {
  const chant = chants.find(({ id }) => id === chantId);

  if (chant && chant.audio) {
    chant.audio.volume = volume;
    chant.audio.play();
  } else {
    console.error(`could not find change chant with id: ${chantId}`);
  }
}
