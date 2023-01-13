import { Choice } from "../index.mjs";
import { displayDecision } from "./index.mjs";

export function displayReset(text: string) {
  const choices: Choice[] = [
    {
      nextId: 0,
      name: 'Serve Again...',
      summary: 'and let the harvest be plentiful.',
    },
  ];

  displayDecision(text, choices);
}
