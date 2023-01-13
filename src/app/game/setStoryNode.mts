import { playChant, playSoundEffect, playWhispers } from "../audio/index.mjs";
import { displayDecision, displayReset, displayTimelineItem } from "../display/index.mjs";
import { setStoryIndex, storyIndex } from "./storyIndex.mjs";
import { StoryNode } from "./types.mjs";

export function setStoryNode({ 
  type, 
  text, 
  choices, 
  soundId 
}: StoryNode) {
  switch (type) {
    case 'chapter':
      displayTimelineItem(text, 'h3', ['chapter', 'fade-in-left']);
      playSoundEffect('boom', { volume: 0.3 });
      setStoryIndex(storyIndex + 1);
      break;
    case 'narration':
      displayTimelineItem(text, 'p', ['naration', 'fade-in-down']);
      playWhispers();
      setStoryIndex(storyIndex + 1);
      break;
    case 'scripture':
      displayTimelineItem(text, 'p', ['scripture', 'fade-in']);
      playChant(soundId!);
      setStoryIndex(storyIndex + 1);
      break;
    case 'decision':
      displayDecision(text, choices!);
      playSoundEffect('gong');
      break;
    case 'reset':
      displayReset(text);
      break;
    default:
      console.error(`Cannot read type: ${type}`);
      break;
  }
}