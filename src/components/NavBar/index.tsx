import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Heading from '../Heading';

import styles from './styles.css';

const Navbar: FunctionComponent<{}> = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.about}>
        <Link to="/#about">
          <Heading level="2">ABOUT</Heading>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
