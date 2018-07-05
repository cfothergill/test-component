// @flow

import type { Toggles, Answer } from '../types';

type Input = {
  toggles: Toggles;
  answer: Answer;
}

const randomizedState = ({ toggles, answer }: Input) => {
  const togglesCopy = [...toggles];
  const answerCopy = [...answer];

  let current = toggles.length;

  while (current > 0) {
    const random = makeRandom(current);
    current = current - 1;

    swap(togglesCopy, current, random);
    swap(answerCopy, current, random);
  }

  return {
    toggles: togglesCopy,
    answer: answerCopy,
    value: generateInitialValue(togglesCopy),
  };
};

const generateInitialValue = (toggles: Toggles): Answer => {
  return toggles.map(choices => {
    return makeRandom(choices.length);
  });
};

const swap = (items: any[], from: number, to: number) => {
  let temp = items[from];
  items[from] = items[to];
  items[to] = temp;
};

const makeRandom = (max: number): number =>
  Math.floor(Math.random() * max);

export default randomizedState;
