// @flow

const calculateProgress = (answer: number[], value: number[]): number => {
  const increment = 1 / answer.length;

  return answer
    .map((val, idx) => val === value[idx] ? increment : 0)
    .reduce((acc, cur) => acc + cur, 0);
};

export default calculateProgress;
