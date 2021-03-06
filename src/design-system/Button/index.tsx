import classNames from 'classnames';
import React, { FunctionComponent, ReactNode, SyntheticEvent } from 'react';

import Loading from '../Loading';

import styles from './styles.css';

export interface Props {
  buttonType?: 'button' | 'submit';
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  size?: 's' | 'm';
  type?: 'mainAction' | 'icon' | 'infoButton' | 'outline';
}
const Button: FunctionComponent<Props> = ({
  buttonType = 'button',
  children,
  className,
  disabled = false,
  loading,
  onClick,
  onMouseEnter,
  onMouseLeave,
  size = 'm',
  type = 'infoButton',
}) => {
  const onButtonClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  const onButtonMouseEnter = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  const onButtonMouseLeave = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };

  const buttonClassName = classNames(
    styles.button,
    styles.desktopButton,
    {
      [styles.small]: size === 's',
      [styles.medium]: size === 'm',
      [styles.mainAction]: type === 'mainAction',
      [styles.infoButton]: type === 'infoButton',
      [styles.outline]: type === 'outline',
    },
    loading
      ? {
          [styles.mainActionLoading]: type === 'mainAction',
          [styles.outlineLoading]: type === 'outline',
        }
      : null,
    className,
  );

  const loadingColor = 'darkBlue90';

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onButtonClick}
      onMouseEnter={onButtonMouseEnter}
      onMouseLeave={onButtonMouseLeave}
      role={buttonType === 'submit' ? 'submitButton' : undefined}
      type={buttonType}
    >
      {loading ? (
        <Loading className={styles.loadingIndicator} color={loadingColor} size="s" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
