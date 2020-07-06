import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import styles from './styles.css';

export interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: FunctionComponent<Props> = ({ children, className, id }) => {
  const sectionClassName = classNames(styles.container, className);
  return (
    <div className={sectionClassName} id={id}>
      {children}
    </div>
  );
};

export default Section;
