import React, { FunctionComponent } from 'react';

import BiasCard from '../BiasCard';
import Button from '../Button';
import Heading from '../Heading';
import Section from '../Section';
import Text from '../Text';

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
      <div>
        <Heading level="2">About The Project</Heading>
        <Text>
          OpenNMT-py is used to create a non-linear model with an Adam optimizer with an additive
          attention mechanism (Bahdanau et al.)
        </Text>
      </div>
    );
  };

  const onPosterButtonClick = () => {
    window.open('https://stanford-cs221.github.io/autumn2019-extra/posters/144.pdf', '_blank');
  };

  const onDraftPaperClick = () => {
    window.open();
  };

  const renderLinks = () => {
    return (
      <div className={styles.links}>
        <Button className={styles.button} onClick={onPosterButtonClick} type="mainAction">
          Project Poster
        </Button>
        <Button className={styles.button} type="mainAction">
          Draft Paper
        </Button>
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
        <Text size="xxs" inline={true}>
          Model accuracy is written incorrectly in the poster.Refer to the paper for the correct
          accuracy
        </Text>
      </div>
    </Section>
  );
};

export default BottomSection;
