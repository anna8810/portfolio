import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Fancy } from './components/Fancy';

const App = () => (
  <Fragment>
    <h1>Hej Anna!</h1>
    <Fancy></Fancy>
  </Fragment>
);

render(<App />, document.getElementById('__root'));
