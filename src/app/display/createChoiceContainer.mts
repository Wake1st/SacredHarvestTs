import { 
  Choice, 
  choicesContainer, 
  currentDecision, 
  makeDecision,
} from "../index.mjs";

export function createChoiceContainer({
  nextId,
  name,
  summary,
  consequences,
}: Choice) {
  const choiceContainer = document.createElement('div');
  choiceContainer.classList.add('choice-container');

  choiceContainer.addEventListener('click', () => {
    //  hide decision box
    currentDecision.classList.remove('fade-in-up');
    currentDecision.classList.add('fade-out-down');

    //  wipe internals
    choicesContainer.innerHTML = '';

    //  changes around making a decision
    makeDecision(nextId, consequences);
  });

  const titleEl = document.createElement('h4');
  titleEl.classList.add('choice-title');
  titleEl.innerHTML = name;
  choiceContainer.appendChild(titleEl);

  //  not everything needs to be summed up
  if (summary) {
    const summaryEl = document.createElement('p');
    summaryEl.classList.add('choice-summary');
    summaryEl.innerHTML = summary;
    choiceContainer.appendChild(summaryEl);
  }

  return choiceContainer;
}