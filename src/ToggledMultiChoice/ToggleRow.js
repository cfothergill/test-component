// @flow

import React from 'react';
import cx from 'classnames';
import './ToggleRow.scss';

type Props = {
  choices: Array<string>;
  value: number;
  onChange: (number) => void;
  disabled: boolean;
};

const ToggleRow = ({
  choices,
  value = 0,
  onChange,
  disabled,
}: Props) => (
  <div className={cx({
    'ToggleRow': true,
    'ToggleRow--disabled': disabled,
  })}>
    {choices.map((choice, idx) => (
      <button
        key={choice}
        disabled={disabled}
        onClick={() => onChange(idx)}
        className="ToggleRow__segment"
      >
        {choice}
      </button>
    ))}

    {choices.length && (
      <span
        className="ToggleRow__indicator"
        style={{
          width: `${100 / choices.length}%`,
          transform: `translateX(${100 * value}%)`
        }}
      />
    )}
  </div>
);

export default ToggleRow;
