import React, { FunctionComponent } from 'react';

import Heading from '../Heading';
import TextArea from '../TextArea';

import styles from './styles.css';

const TopSection: FunctionComponent<{}> = () => {
  return (
    <div className={styles.container}>
      <Heading className={styles.heading} color="white70" textAlign="center" level="3">
        Neutralize English Linguistic Bias with a Bidirectional LSTM NLP model.
      </Heading>
      <div className={styles.content}>
        <TextArea
          className={styles.textarea}
          label="Enter Text to Neutralize"
          rows={{ count: 2, type: 'static' }}
          value={''}
        />
        <TextArea
          className={styles.textarea}
          disabled={true}
          label="Neutralized Text"
          minimizeLabel={true}
          rows={{ minCount: 1, maxCount: 5, type: 'dynamic' }}
          value={''}
        />
      </div>
    </div>
  );
};

export default TopSection;
