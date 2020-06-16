import React, { FunctionComponent } from 'react';

import styles from './styles.css';

const NavBar: FunctionComponent<{}> = () => {
  return (
    <nav className={styles.container}>
      <a className={styles.title} href="#">
        NEUTRALIZE BIAS
      </a>
      <div className={styles.about}>
        <a href="#">
          <span>ABOUT</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
