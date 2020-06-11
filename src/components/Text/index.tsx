import React, { FunctionComponent } from 'react';

import styles from './styles.css';

export interface Props {
  value: string;
}

const Text: FunctionComponent<Props> = (props) => {
  return <h1 className={styles.header}>{props.value}</h1>;
};

export default Text;
