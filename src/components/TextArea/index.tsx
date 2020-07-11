import classNames from 'classnames';
import React, {
  CompositionEvent,
  FocusEvent,
  FunctionComponent,
  KeyboardEvent,
  SyntheticEvent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import Text from '../Text';

import styles from './styles.css';

interface Props {
  autoComplete?: 'off' | 'on';
  autoFocus?: boolean;
  className?: string;
  classNameTextArea?: string;
  classNameTextAreaWrapper?: string;
  disabled?: boolean;
  error?: string;
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

const BORDER_WIDTH = 1;
const LINE_HEIGHT = 24;

const TextArea: FunctionComponent<Props> = (props) => {
  const {
    autoComplete = 'off',
    autoFocus = false,
    className = '',
    classNameTextArea = '',
    classNameTextAreaWrapper = '',
    disabled = false,
    error,
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

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (rows.type !== 'dynamic' || textAreaRef.current === null) {
      return;
    }
    const maxHeight = rows.maxCount * LINE_HEIGHT;
    textAreaRef.current.style.maxHeight = `${maxHeight}px`;
  }, []);

  useLayoutEffect(() => {
    function updateTextAreaHeigt() {
      if (textAreaRef.current === null) {
        return;
      }
      textAreaRef.current.style.height = 'auto';

      const height = calculateNodeHeight(textAreaRef.current.scrollHeight);

      textAreaRef.current.style.height = `${height}px`;
    }

    if (rows.type === 'dynamic') {
      updateTextAreaHeigt();
    }
  }, [rows, value]);

  const showMaxLength = maxLength != null;

  const onTextAreaBlur = () => {
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

  const errorClassName = classNames(
    showMaxLength ? styles.errorTextWithMaxLength : styles.errorText,
  );
  const textAreaWrapperClassName = classNames(
    styles.textAreaWrapper,
    { [styles.textAreaWrapperError]: error },
    classNameTextAreaWrapper,
  );

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
          ref={textAreaRef}
          required={required}
          rows={rows.type === 'static' ? rows.count : rows.minCount}
          value={value}
        />
      </div>
      <div className={styles.details}>
        {error && (
          <Text color="red90" className={errorClassName} inline={true} singleline={true} size="s">
            {error}
          </Text>
        )}
        {showMaxLength && (
          <Text
            className={styles.maxLength}
            color="darkBlue90"
            inline={true}
            singleline={true}
            size="s"
            textAlign="right"
          >
            {`${value.length}/${String(maxLength)}`}
          </Text>
        )}
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
      size={shouldMinimizeLabel ? 'm' : 'l'}
    >
      {label}
    </Text>
  );
};

function calculateNodeHeight(scrollHeight: number): number {
  // Values are hardcoded instead of using window.getComputedStyle
  // for performance savings.

  const height = scrollHeight + BORDER_WIDTH * 2;

  return height;
}
