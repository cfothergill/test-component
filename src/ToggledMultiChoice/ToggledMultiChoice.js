// @flow

import React, { Component } from 'react';
import cx from 'classnames';
import ToggleRow from './ToggleRow';
import './ToggledMultiChoice.scss';

type Props = {
  question: string;
  answers: Array<Array<string>>;
  value: number[];
  onChange: (number[]) => void;
  correct: boolean;
};

const ToggledMultiChoice = ({
  question,
  answers,
  value,
  onChange,
  correct,
}: Props) => (
  <div className={cx({
    'ToggledMultiChoice': true,
    'ToggledMultiChoice--correct': correct,
  })}>
    <p className="ToggledMultiChoice__question">
      {question}
    </p>

    {answers.map((choices, idx) => (
      <ToggleRow
        key={idx}
        choices={choices}
        value={value[idx]}
        disabled={correct}
        onChange={(selected) => {
          const newValue = [...value];
          newValue[idx] = selected;
          onChange(newValue);
        }}
      />
    ))}

    <p className="ToggledMultiChoice__result">
      {correct ? 'The answer is correct!' : 'The Answer is incorrect.'}
    </p>
  </div>
);

export default ToggledMultiChoice;
