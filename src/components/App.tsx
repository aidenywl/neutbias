import React from 'react';

import styles from './styles.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className={styles.header}>Hello World!</h1>
      </div>
    );
  }
}

export default App;
