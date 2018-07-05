// @flow

import * as React from 'react';
import cx from 'classnames';
import isEqual from 'lodash/isEqual';
import type { Toggles, Answer } from '../types';
import randomizedState from './randomizedState';
import calculateProgress from './calculateProgress';
import interpolateColor from './interpolateColor';
import ToggleRow from './ToggleRow';
import './ToggledMultiChoice.scss';

const INCORRECT_TOP = '#fa9161';
const INCORRECT_BOTTOM = '#f73b1c';

const CORRECT_TOP = '#47e4c1';
const CORRECT_BOTTOM = '#07cddd';

type Props = {
  question: string;
  toggles: Toggles;
  answer: Answer;
  disablesTogglesWhenAllComplete?: boolean;
};

type State = {
  prevToggles: Toggles;
  toggles: Toggles;
  answer: Answer;
  value: Answer;
};

class ToggledMultiChoice extends React.Component<Props, State> {
  state = {
    prevToggles: [],
    toggles: [],
    answer: [],
    value: [],
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.toggles !== state.prevToggles) {
      return {
        prevToggles: props.toggles,
        ...randomizedState(props),
      };
    }

    return null;
  }

  render() {
    const {
      question,
      disablesTogglesWhenAllComplete,
    } = this.props;

    const {
      answer,
      value,
      toggles,
    } = this.state;

    const correct = isEqual(answer, value);
    const progress = calculateProgress(answer, value);
    const from = interpolateColor(INCORRECT_TOP, CORRECT_TOP, progress);
    const to = interpolateColor(INCORRECT_BOTTOM, CORRECT_BOTTOM, progress);
    const gradient = `linear-gradient(${from}, ${to})`;

    return (
      <div
        className="ToggledMultiChoice"
        style={{ backgroundImage: gradient }}
      >
        <p className="ToggledMultiChoice__question">
          {question}
        </p>

        {toggles.map((choices, idx) => (
          <ToggleRow
            key={idx}
            choices={choices}
            value={value[idx]}
            disabled={disablesTogglesWhenAllComplete ?
              correct : value[idx] === answer[idx]}
            onChange={(selected) => {
              const newValue = [...value];
              newValue[idx] = selected;
              this.setState({ value: newValue });
            }}
          />
        ))}

        <p className="ToggledMultiChoice__result">
          {correct ? 'The answer is correct!' : 'The Answer is incorrect.'}
        </p>
      </div>
    );
  }
}

export default ToggledMultiChoice;
