import classNames from 'classnames';
import React, { FunctionComponent, ReactNode, SyntheticEvent } from 'react';

import styles from './styles.css';

export interface Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLAnchorElement>) => void;
  target?: '_blank' | '_self';
  to: string;
  type?: 'button' | 'text';
}

const Anchor: FunctionComponent<Props> = ({ children, className, onClick, target, to, type }) => {
  const containerClassNames = classNames(className, styles.link, {
    [styles.button]: type === 'button',
  });
  return (
    <a
      className={containerClassNames}
      href={to}
      onClick={onClick ? onClick : undefined}
      rel="Noopener noreferrer"
      target={target}
    >
      {children}
    </a>
  );
};

export default Anchor;
