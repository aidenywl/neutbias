// Allows es6 syntax with generators for redux-saga.
import 'regenerator-runtime/runtime';
import React, { FunctionComponent } from 'react';

import BottomSection from './BottomSection';
import Navbar from './Navbar';
import TopSection from './TopSection';

import './styles.css';
import styles from './styles.css';

const App: FunctionComponent<{}> = () => {
  return (
    <div className={styles.background}>
      <Navbar />
      <main>
        <TopSection />
        <BottomSection />
      </main>
    </div>
  );
};

export default App;
