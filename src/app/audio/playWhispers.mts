import { getRandomInt, lerp } from "../utils.mjs";

const whispers = [
  new Audio('./assets/audio/Whispers1.wav'),
  new Audio('./assets/audio/Whispers2.wav'),
  new Audio('./assets/audio/Whispers3.wav'),
];

export function playWhispers(volumeMin: number = 0.6, volumnMax: number = 0.8) {
  whispers.forEach(whisper => {
    //  randomly play
    if (getRandomInt(2) % 2 === 0) {
      whisper.volume = lerp(volumeMin, volumnMax, Math.random());
      whisper.play();
    }
  });
}