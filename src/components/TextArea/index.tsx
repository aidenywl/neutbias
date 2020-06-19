import classNames from 'classnames';
import React, {
  CompositionEvent,
  forwardRef,
  FocusEvent,
  FunctionComponent,
  KeyboardEvent,
  SyntheticEvent,
  useRef,
  useLayoutEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';

import Text from '../Text';

import styles from './styles.css';

interface Props {
  autoComplete?: 'off' | 'on';
  autoFocus?: boolean;
  className?: string;
  classNameTextArea?: string;
  classNameTextAreaWrapper?: string;
  disabled?: boolean;
  label?: string;
  maxLength?: number;
  minimizeLabel?: boolean;
  onBlur?: () => void;
  onChange?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
  onCompositionEnd?: (event: CompositionEvent<HTMLTextAreaElement>) => void;
  onCompositionStart?: (event: CompositionEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  resize?: 'none' | 'vertical';
  required?: boolean;
  rows?:
    | {
        maxCount: number;
        minCount: number;
        type: 'dynamic';
      }
    | {
        count: number;
        type: 'static';
      };
  value: string;
}

const TextArea: FunctionComponent<Props> = (props) => {
  const {
    autoComplete = 'off',
    autoFocus = false,
    className = '',
    classNameTextArea = '',
    classNameTextAreaWrapper = '',
    disabled = false,
    label,
    maxLength,
    minimizeLabel = false,
    onBlur,
    onCompositionEnd,
    onCompositionStart,
    onChange,
    onFocus,
    onKeyDown,
    placeholder = '',
    resize = 'none',
    required = false,
    rows = { count: 3, type: 'static' },
    value,
  } = props;
  const [focused, setFocused] = useState(false);

  const onTextAreaBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur();
    }
    setFocused(false);
  };

  const onTextAreaChange = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const onTextAreaFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (onFocus) {
      onFocus(e);
    }
    setFocused(true);
  };

  const containerClassName = classNames(styles.container, className);

  const textAreaWrapperClassName = classNames(styles.textAreaWrapper, classNameTextAreaWrapper);

  const textAreaClassName = classNames(
    styles.textArea,
    {
      [styles.textAreaShowPlaceholder]: !label || focused || !!value,
    },
    resize === 'vertical' ? styles.textAreaResizeVertical : styles.textAreaResizeNone,
    classNameTextArea,
  );
  return (
    <div className={containerClassName}>
      <div className={textAreaWrapperClassName}>
        <TextAreaLabel
          focused={focused}
          minimizeLabel={minimizeLabel}
          label={label}
          value={value}
        />
        <textarea
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={textAreaClassName}
          disabled={disabled}
          maxLength={maxLength}
          onBlur={onTextAreaBlur}
          onChange={onTextAreaChange}
          onCompositionStart={onCompositionStart}
          onCompositionEnd={onCompositionEnd}
          onFocus={onTextAreaFocus}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          required={required}
          rows={rows.type === 'static' ? rows.count : rows.minCount}
          value={value}
        />
      </div>
    </div>
  );
};

export default TextArea;

interface TextAreaLabelProps {
  focused: boolean;
  minimizeLabel: boolean;
  label?: string;
  value: string;
}

const TextAreaLabel: FunctionComponent<TextAreaLabelProps> = ({
  focused,
  label,
  minimizeLabel,
  value,
}) => {
  if (label == null) {
    return null;
  }

  const shouldMinimizeLabel = focused || minimizeLabel || !!value;
  const labelClassName = classNames(
    styles.label,
    shouldMinimizeLabel ? styles.labelMinimized : null,
  );

  return (
    <Text
      className={labelClassName}
      inline={true}
      singleline={true}
      size={shouldMinimizeLabel ? 's' : 'm'}
    >
      {label}
    </Text>
  );
};
