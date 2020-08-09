import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import styles from './styles.css';

export interface Props {
  children: ReactNode;
  className?: string;
  color?: 'darkBlue90' | 'darkGrey' | 'grey80' | 'lightBlue' | 'red90' | 'standardGrey' | 'white';
  decoration?: 'none';
  hyphensNone?: boolean;
  inline?: boolean;
  overflow?: 'normal' | 'breakWord';
  singleline?: boolean;
  size?: 'l' | 'm' | 's' | 'xs' | 'xxs';
  textAlign?: 'center' | 'left' | 'right';
  weight?: 'regular' | 'semibold';
}

const Text: FunctionComponent<Props> = ({
  children,
  className,
  color,
  decoration,
  hyphensNone,
  inline,
  overflow,
  singleline,
  size = 'm',
  textAlign,
  weight,
}) => {
  const getTextClassName = (): string => {
    const commonClassNames = [
      styles.text,
      {
        [styles.colorDarkBlue90]: color === 'darkBlue90',
        [styles.colorDarkGrey]: color === 'darkGrey',
        [styles.colorLightGrey]: color === 'grey80',
        [styles.colorLightBlue]: color === 'lightBlue',
        [styles.colorRed90]: color === 'red90',
        [styles.colorStandardGrey]: color === 'standardGrey',
        [styles.colorWhite]: color === 'white',
      },
      {
        [styles.decorationNone]: decoration === 'none',
      },
      {
        [styles.hyphensNone]: hyphensNone,
      },
      {
        [styles.overflowNormal]: overflow === 'normal',
        [styles.overflowBreakWord]: overflow === 'breakWord',
      },
      {
        [styles.multiline]: !singleline,
        [styles.singleline]: singleline,
      },
      {
        [styles.textAlignCenter]: textAlign === 'center',
        [styles.textAlignLeft]: textAlign === 'left',
        [styles.textAlignRight]: textAlign === 'right',
      },
      {
        [styles.weightRegular]: weight === 'regular',
        [styles.weightSemibold]: weight === 'semibold',
      },
    ];

    return classNames(commonClassNames, className, {
      [styles.sizeL]: size === 'l',
      [styles.sizeM]: size === 'm',
      [styles.sizeS]: size === 's',
      [styles.sizeXS]: size === 'xs',
      [styles.sizeXXS]: size === 'xxs',
    });
  };

  const textClassName = getTextClassName();

  if (!inline) {
    return <p className={textClassName}>{children}</p>;
  } else {
    return <span className={textClassName}>{children}</span>;
  }
};

export default Text;
