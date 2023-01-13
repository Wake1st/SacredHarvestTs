import { flock, setFlock } from "./flock.mjs";
import { Consequence, Flock } from "./types.mjs";

export function handleConsequences(consequences: Consequence[]) {
  const oldFlock: Flock = { ...flock };
  consequences.forEach(({ key, value }: Consequence) => {
    oldFlock[key] += value;
  });
  setFlock(oldFlock);
}