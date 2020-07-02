import React, { FunctionComponent } from 'react';

import BiasCard from '../BiasCard';
import Button from '../Button';
import Heading from '../Heading';
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

  const renderLinks = () => {
    return (
      <div className={styles.links}>
        <Button className={styles.button} type="mainAction">
          Project Poster
        </Button>
        <Button className={styles.button} type="mainAction">
          Draft Paper
        </Button>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <Heading level="2">Types of Biases Corrected:</Heading>
      {renderContent()}
      {renderAbout()}
      {renderLinks()}
      <div>
        <Text size="xxs" inline={true}>
          Model accuracy is written incorrectly in the poster.Refer to the paper for the correct
          accuracy
        </Text>
      </div>
    </div>
  );
};

export default BottomSection;
