import React, { FunctionComponent } from 'react';

import Heading from '../Heading';

import styles from './styles.css';

const Navbar: FunctionComponent<{}> = () => {
  const onAboutClick = () => {
    document.getElementById('#about')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={styles.container}>
      <div className={styles.about} onClick={onAboutClick}>
        <Heading level="2">ABOUT</Heading>
      </div>
    </nav>
  );
};

export default Navbar;
