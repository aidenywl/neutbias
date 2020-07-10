import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import Text from '../Text';

import styles from './styles.css';

export interface Props {
  className?: string;
  description: string;
  title: string;
  versusTextOne: string;
  versusTextTwo: string;
}

const BiasCard: FunctionComponent<Props> = ({
  className = '',
  description,
  title,
  versusTextOne,
  versusTextTwo,
}) => {
  const containerClassName = classNames(styles.container, className);
  return (
    <div className={containerClassName}>
      <Text className={styles.title} color="lightBlue" size="l">
        {title}
      </Text>
      <Text className={styles.description} color="white" size="m">
        {description}
      </Text>
      <div className={styles.versusSegment}>
        <br />
        <Text
          className={styles.versusText}
          color="grey80"
          size="s"
          textAlign="center"
        >{`"${versusTextOne}"`}</Text>
        <Text color="white" size="s" textAlign="center">
          vs
        </Text>
        <Text color="grey80" size="s" textAlign="center">{`"${versusTextTwo}"`}</Text>
      </div>
    </div>
  );
};

export default BiasCard;
