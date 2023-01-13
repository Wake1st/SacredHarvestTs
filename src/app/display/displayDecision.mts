import { Choice } from "../index.mjs";
import { 
  choicesContainer, 
  createChoiceContainer, 
  currentDecision, 
  decisionTitle 
} from "./index.mjs";

export function displayDecision(text: string, choices: Choice[]) {
  //  show decision box
  currentDecision.classList.remove('hidden');
  currentDecision.classList.remove('fade-out-down');
  currentDecision.classList.add('fade-in-up');

  //  insert decision
  decisionTitle.innerHTML = text;

  //  insert choices
  choicesContainer.innerHTML = '';
  choices.forEach(choice => {
    const con = createChoiceContainer(choice);
    choicesContainer.appendChild(con);
  });
}