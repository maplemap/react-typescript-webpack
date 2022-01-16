import React from 'react';

import {render} from 'react-dom';

import {App} from './app/app';

const node = document.getElementById('root');

if (node) {
  render(<App />, node);
}
