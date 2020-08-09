import classNames from 'classnames';
import React, { FunctionComponent, useState, useEffect } from 'react';

import Heading from '../../design-system/Heading';

import styles from './styles.css';

const HEIGHT_LIMIT = 4;

const Navbar: FunctionComponent<{}> = () => {
  const [applyBackground, setBackground] = useState(false);

  const onAboutClick = () => {
    document.getElementById('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const shouldApplyBackground = window.pageYOffset > HEIGHT_LIMIT;

    if (shouldApplyBackground && !applyBackground) {
      setBackground(true);
      return;
    }
    setBackground(false);
  };
  // We use useEffect because this only happens after the browser layout and paint.
  // So it won't block rendering.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return function listenerCleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const containerClassName = classNames(styles.container, {
    [styles.containerDark]: applyBackground,
  });

  return (
    <nav className={containerClassName}>
      <div className={styles.about} onClick={onAboutClick}>
        <Heading level="2">ABOUT</Heading>
      </div>
    </nav>
  );
};

export default Navbar;
