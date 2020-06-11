import React from 'react';

import Text from './Text';

import './styles.css';
import styles from './styles.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.background}>
        <Text />
      </div>
    );
  }
}

export default App;
