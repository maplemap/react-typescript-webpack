import * as React from 'react';

import {render} from '@testing-library/react';

import {App} from '../app';

describe('`App` component', () => {
  it('should render `App` component', () => {
    const {baseElement} = render(<App />);

    expect(baseElement).toBeTruthy();
  });
});
