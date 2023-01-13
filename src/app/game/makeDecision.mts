import { playSoundEffect } from "../index.mjs";
import type { Consequence } from "./types.mjs";
import { setStoryIndex } from "./storyIndex.mjs";
import { handleConsequences } from "./handleConsquences.mjs";

export function makeDecision(id: number, consequences?: Consequence[]) {
  setStoryIndex(id);

  if (consequences) {
    handleConsequences(consequences);
  }

  playSoundEffect('ring');
}