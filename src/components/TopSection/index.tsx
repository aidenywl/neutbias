import React, { FunctionComponent, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import Button from '../Button';
import Heading from '../Heading';
import TextArea from '../TextArea';

import { selectInputValue } from '../../data/translation';

import styles from './styles.css';

const TopSection: FunctionComponent<{}> = () => {
  const biasedInput = useSelector(selectInputValue);

  const onFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    // Call preventDefault() to avoid the jsdom error
    // "Not implemented: HTMLFormElement.prototype.submit"
    // during tests
    e.preventDefault();
  };

  const renderForm = () => {
    return (
      <>
        <TextArea
          className={styles.textarea}
          label="Enter Text to Neutralize"
          rows={{ count: 2, type: 'static' }}
          value={''}
        />
        <Button type="mainSubmit">{'Neutralize Bias'}</Button>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <Heading className={styles.heading} color="white70" textAlign="center" level="3">
        Neutralize English Linguistic Bias with a Bidirectional LSTM NLP model.
      </Heading>
      <div className={styles.content}>
        <form onSubmit={onFormSubmit}>{renderForm()}</form>

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
