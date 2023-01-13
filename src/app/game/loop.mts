import storyNodeData from '../../data/storyNodes.mjs';
import {
  choicesContainer,
  scrollToBottom,
  timelineItems,
} from '../display/index.mjs';
import { setStoryNode } from './setStoryNode.mjs';
import { setStoryIndex, storyIndex } from './storyIndex.mjs';
import { StoryNode } from './types.mjs';

let storyNodes: any = storyNodeData;

export function loop() {
  if (storyIndex === 0) {
    timelineItems.innerHTML = '';
    choicesContainer.innerHTML = '';
  }

  const storyNode: StoryNode =
    storyNodes.find(({ id }: any) => id === storyIndex) ??
    storyNodes.find(({ id }: any) => id === -1)!;

  setStoryNode(storyNode);

  //  sometimes we skip to another story node
  if (storyNode.nextId) {
    setStoryIndex(storyNode.nextId);
  }

  //  ensure we're at the bottom - where the latest storyNodes are
  scrollToBottom();
}