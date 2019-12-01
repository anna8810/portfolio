import React from 'react';
import { render } from 'react-dom';
import { FadeInSection } from './components/FadeInSection';
import Projects from './components/Projects';
import { Info } from './components/Info';
import { Header } from './components/Header';
import './bootstrap.theme.scss';

const App = () => (
  <div className='App'>
    <Header />
    <div className='container'>
      <FadeInSection>
        <Info />
        <Projects />
      </FadeInSection>
    </div>
  </div>
);

render(<App />, document.getElementById('__root'));
