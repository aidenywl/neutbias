import React, { FunctionComponent } from 'react';

import BottomSection from './BottomSection';
import NavBar from './NavBar';
import TopSection from './TopSection';

import './styles.css';
import styles from './styles.css';

const App: FunctionComponent<{}> = () => {
  return (
    <div className={styles.background}>
      <NavBar />
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default App;
