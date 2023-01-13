import { Flock } from "./types.mjs";

export let flock: Flock = {
  faith: 5,
  resolve: 5,
  contentment: 5,
};

export function setFlock(newFlock: Flock) {
  flock = {...flock, ...newFlock};
}
