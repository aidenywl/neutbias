import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import constants from '../constants';

import styles from './styles.css';

interface Props {
  className?: string;
  color?: 'darkBlue90' | 'white';
  size?: 's' | 'm' | 'l';
}

const Loading: FunctionComponent<Props> = ({ className = '', color = 'white', size }) => {
  const containerClassName = classNames(styles.container, className);
  const spinnerClassName = classNames(styles.spinner, {
    [styles.spinnerSizeS]: size === 's',
    [styles.spinnerSizeM]: size === 'm',
    [styles.spinnerSizeL]: size === 'l',
  });

  let stroke = constants.white;
  switch (color) {
    case 'white':
      stroke = constants.white;
      break;
    case 'darkBlue90':
      stroke = constants.darkBlue90;
      break;
    default:
      stroke = constants.white;
  }

  return (
    <div className={containerClassName}>
      <svg className={spinnerClassName} viewBox="0 0 50 50">
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={stroke}
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default Loading;
