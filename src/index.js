// @flow

import './reset.scss';

import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import ToggledMultiChoice from './ToggledMultiChoice';

const node = document.querySelector('[data-app]');

if (node !== null) {
  render((
    <Root>
      <ToggledMultiChoice
        disablesTogglesWhenAllComplete
        answer={[0,1,1,0,2]}
        question="An animal cell contains:"
        toggles={[
          ['Cell wall', 'Ribosomes', 'Test'],
          ['Cytoplasm', 'Chloroplast'],
          ['Partially permeable membrane', 'Impermeable membrane'],
          ['Cellulose', 'Mitochondria', 'Another'],
          ['Option 1', 'Option 2', 'Option 3'],
        ]}
      />
    </Root>
  ), node);
}
