import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './styles.css';

export interface Props {
  children: string;
  className?: string;
  color?: 'darkBlue90' | 'darkGrey' | 'grey80' | 'lightBlue' | 'standardGrey' | 'white';
  decoration?: 'none';
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
  inline,
  overflow,
  singleline,
  size,
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
        [styles.colorStandardGrey]: color === 'standardGrey',
        [styles.colorWhite]: color === 'white',
      },
      {
        [styles.decorationNone]: decoration === 'none',
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
