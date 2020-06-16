import React, { FunctionComponent } from 'react';

import styles from './styles.css';

const Button: FunctionComponent<{ text: string }> = ({ text = '' }) => {
  return <button>{text}</button>;
};

export default Button;
