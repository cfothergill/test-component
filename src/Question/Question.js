// @flow

import * as React from 'react';
import isEqual from 'lodash/isEqual';

type Config = {
  correct: boolean;
  onChange: (any) => void;
  value: any;
};

type Props = {
  initialValue: any;
  answer: any;
  children: (Config) => React.Node;
};

type State = {
  value: any;
};

class Question extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { initialValue } = this.props;
    this.state = { value: initialValue };
  }

  _handleChange = (value: any) =>
    this.setState({ value });

  render() {
    const {
      answer,
      children,
    } = this.props;

    const {
      value,
    } = this.state;

    return children({
      correct: isEqual(value, answer),
      onChange: this._handleChange,
      value,
    });
  }
}

export default Question;
