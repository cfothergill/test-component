// @flow

import * as React from 'react';
import './Root.scss';

type Props = {
  children: React.Node;
};

const Root = ({
  children,
}: Props) => (
  <div className="Root">
    {children}
  </div>
);

export default Root;
