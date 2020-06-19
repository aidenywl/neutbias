import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './styles.css';

export interface Props {
  children: string;
  className?: string;
  color?: 'darkBlue90' | 'darkGrey' | 'lightGrey' | 'standardGrey' | 'white70';
  hyphensNone?: boolean;
  inline?: boolean;
  level?: '1' | '2' | '3';
  overflow?: 'normal' | 'breakWord';
  singleline?: boolean;
  tag?: 'h1' | 'h2' | 'h3';
  textAlign?: 'center' | 'left' | 'right';
  weight?: 'regular' | 'semibold';
}

const Heading: FunctionComponent<Props> = ({
  children,
  className = '',
  color = 'darkBlue90',
  hyphensNone = false,
  inline = false,
  level = '1',
  overflow = 'normal',
  singleline = false,
  tag,
  textAlign = 'left',
  weight = 'regular',
}) => {
  const getHeadingClassNames = (): string => {
    const commonClassNames = [
      styles.heading,
      {
        [styles.colorDarkBlue90]: color === 'darkBlue90',
        [styles.colorDarkGrey]: color === 'darkGrey',
        [styles.colorLightGrey]: color === 'lightGrey',
        [styles.colorStandardGrey]: color === 'standardGrey',
        [styles.colorWhite70]: color === 'white70',
      },
      {
        [styles.hyphensNone]: hyphensNone,
      },
      { [styles.overflowBreakWord]: overflow === 'breakWord' },
      { [styles.singleline]: singleline },
      {
        [styles.textAlignCenter]: textAlign === 'center',
        [styles.textAlignLeft]: textAlign === 'left',
        [styles.textAlignRight]: textAlign === 'right',
      },
      {
        [styles.weightRegular]: weight === 'regular',
        [styles.weightSemibold]: weight === 'semibold',
      },
      { [styles.inline]: inline },
    ];
    return classNames(commonClassNames, className, {
      [styles.level1]: level === '1',
      [styles.level2]: level === '2',
      [styles.level3]: level === '3',
    });
  };

  const headingClassName = getHeadingClassNames();
  if (tag) {
    const Tag = tag;
    return <Tag className={headingClassName}>{children}</Tag>;
  } else {
    switch (level) {
      case '1':
        return <h1 className={headingClassName}>{children}</h1>;
      case '2':
        return <h2 className={headingClassName}>{children}</h2>;
      case '3':
        return <h3 className={headingClassName}>{children}</h3>;
      default:
        throw new Error("Heading: Invalid value for 'level'");
    }
  }
};

export default Heading;
