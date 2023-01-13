export type Flock = {
  faith: number;
  resolve: number;
  contentment: number;
};

export type Consequence = {
  key: keyof Flock;
  value: number;
};

export type Choice = {
  nextId: number;
  name: string;
  summary: string;
  consequences?: Consequence[];
};

export type StoryNodeType =
  | 'chapter'
  | 'narration'
  | 'scripture'
  | 'decision'
  | 'reset';

export type StoryNode = {
  id: number;
  nextId?: number;
  soundId?: number;
  wait: number;
  type: StoryNodeType;
  text: string;
  choices?: Choice[];
};
