import classNames from 'classnames';
import React, { FunctionComponent, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import Heading from '../Heading';
import Section from '../Section';
import TextArea from '../TextArea';

import {
  translationBiasTextFormUpdate,
  translationSubmitBiasedText,
  selectInputValue,
  selectLoading,
  selectOutputValue,
  selectErrorValue,
} from '../../data/translation';

import styles from './styles.css';

const TopSection: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const biasedInput = useSelector(selectInputValue);
  const loading = useSelector(selectLoading);
  const debiasedOutput = useSelector(selectOutputValue);
  const error = useSelector(selectErrorValue);

  const onBiasedInputChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    dispatch(translationBiasTextFormUpdate(e.currentTarget.value));
  };

  const onAboutClick = () => {
    document.getElementById('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const onFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    // Call preventDefault() to avoid the jsdom error
    // "Not implemented: HTMLFormElement.prototype.submit"
    // during tests
    e.preventDefault();
    dispatch(translationSubmitBiasedText(biasedInput));
  };

  const renderForm = () => {
    return (
      <>
        <TextArea
          className={styles.textarea}
          error={error}
          label="Enter Text to Neutralize"
          maxLength={500}
          onChange={onBiasedInputChange}
          rows={{ minCount: 3, maxCount: 6, type: 'dynamic' }}
          value={biasedInput}
        />
        <Button
          buttonType="submit"
          className={styles.textareaSubmit}
          loading={loading}
          type="mainAction"
        >
          {'Neutralize Bias'}
        </Button>
      </>
    );
  };

  const textAreaResultClassNames = classNames(styles.textarea, styles.textAreaResultInitial, {
    [styles.textAreaResultDisplay]: debiasedOutput !== '',
  });

  return (
    <Section className={styles.container}>
      <Heading className={styles.heading} color="white70" textAlign="center" level="3">
        Neutralize Single-Word English Linguistic Bias with a Bidirectional LSTM NLP model.
        <br />
        {'This model is trained to neutralize '}
        <u className={styles.headingLink} onClick={onAboutClick}>
          three types of biases.
        </u>
      </Heading>
      <div className={styles.content}>
        <form onSubmit={onFormSubmit}>{renderForm()}</form>
        <TextArea
          className={textAreaResultClassNames}
          disabled={true}
          label="Neutralized Text"
          minimizeLabel={true}
          rows={{ minCount: 1, maxCount: 6, type: 'dynamic' }}
          value={debiasedOutput}
        />
      </div>
    </Section>
  );
};

export default TopSection;
