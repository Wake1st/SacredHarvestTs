import { bgMusic } from '../display/index.mjs';

export function setMusicVolume(volume: number) {
  bgMusic.volume = volume;
}
