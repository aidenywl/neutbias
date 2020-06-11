import React from 'react';

import styles from './styles.css';

class Text extends React.PureComponent {
  render() {
    return <h1 className={styles.header}>Hello World!</h1>;
  }
}

export default Text;
