import React, { FunctionComponent } from 'react';

import Heading from '../Heading';

import styles from './styles.css';

const NavBar: FunctionComponent<{}> = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.about}>
        <a href="#">
          <Heading level="2">ABOUT</Heading>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
