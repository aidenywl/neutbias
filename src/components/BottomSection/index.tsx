import React, { FunctionComponent } from 'react';

import Anchor from '../../design-system/Anchor';
import BiasCard from '../BiasCard';
import Button from '../../design-system/Button';
import Heading from '../../design-system/Heading';
import Section from '../../design-system/Section';
import Text from '../../design-system/Text';

import { BIASES } from '../../constants/bias';

import styles from './styles.css';

const BottomSection: FunctionComponent<{}> = () => {
  const renderContent = () => {
    return BIASES.map((bias, i) => {
      return (
        <BiasCard
          description={bias.description}
          key={i}
          title={bias.name}
          versusTextOne={bias.biased}
          versusTextTwo={bias.unbiased}
        />
      );
    });
  };
  const renderAbout = () => {
    return (
      <div className={styles.about}>
        <Heading level="2">About The Project</Heading>
        <Text color="darkGrey" hyphensNone>
          This model is part of a project to compare the differences when using byte pair encoding
          tokenizers versus OpenNMT's default whitespace and punctuation tokenizer.
          <br />
          <br />
          OpenNMT-py is used to create a non-linear model with an Adam optimizer with an additive
          attention mechanism. The model used here is trained using the:
        </Text>
        <br />
        <ul>
          <li>
            <Text color="darkGrey" hyphensNone>
              standard OpenNMT whitespace and punctuation tokenizer
            </Text>
          </li>
          <li>
            <Text color="darkGrey" hyphensNone>
              a vocabulary size of 32000
            </Text>
          </li>
          <li>
            <Text color="darkGrey" hyphensNone>
              bi-directional 2-layer LSTM
            </Text>
          </li>
        </ul>
      </div>
    );
  };

  const renderLinks = () => {
    return (
      <div className={styles.links}>
        <Anchor
          target="_blank"
          to="https://stanford-cs221.github.io/autumn2019-extra/posters/144.pdf"
        >
          <Button className={styles.button} type="mainAction">
            Project Poster
          </Button>
        </Anchor>
        <Anchor
          target="_blank"
          to="https://drive.google.com/file/d/1TIZ1D4o9bT9QvZruH6c2uwWod0V0mLJM/view?usp=sharing"
        >
          <Button className={styles.button} type="mainAction">
            Project Paper
          </Button>
        </Anchor>
      </div>
    );
  };
  return (
    <Section className={styles.container} id="#about">
      <Heading level="2">Types of Biases Corrected:</Heading>
      <div className={styles.biasCards}>{renderContent()}</div>
      {renderAbout()}
      {renderLinks()}
      <div>
        <Text size="xxs" inline>
          Model accuracy is written incorrectly in the poster. Refer to the paper for the correct
          accuracy
        </Text>
      </div>
    </Section>
  );
};

export default BottomSection;
