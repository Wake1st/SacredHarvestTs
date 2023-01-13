import { loadChants, setMusicVolume } from './audio/index.mjs';
import { loop } from './game/index.mjs';

function setup() {
  loadChants();
  setMusicVolume(0.2);
}

export function run() {
  setup();
  
  //  start the game loop
  loop();
}
