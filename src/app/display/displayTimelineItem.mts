import { timelineItems } from "./index.mjs";

export function displayTimelineItem(
  text: string, 
  element: string, 
  classes: string[]
) {
  const el = document.createElement(element);
  el.innerHTML = text;
  el.classList.add('timeline-item', ...classes);
  timelineItems.appendChild(el);
}