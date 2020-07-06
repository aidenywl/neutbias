// Allows es6 syntax with generators for redux-saga.
import 'regenerator-runtime/runtime';
import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import BottomSection from './BottomSection';
import Navbar from './Navbar';
import ScrollHandler from './ScrollHandler';
import TopSection from './TopSection';

import './styles.css';
import styles from './styles.css';

const App: FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div className={styles.background}>
        <Navbar />
        <ScrollHandler />
        <main>
          <TopSection />
          <BottomSection />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
