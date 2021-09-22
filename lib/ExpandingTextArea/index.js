import React, { useState, useEffect, useRef } from 'react';
import debounce from 'debounce';
import PropTypes from 'prop-types';
import cx from 'classnames';

export function ExpandingTextArea({ placeholder, handleOnChange, handleOnBlur, onRowCountChange, value, focusOnMount, setValue, className, minRows, maxRows, hasError, errorMessage, handleOnFocus, ...rest }) {
  const [inputValue, setInputValue] = useState('');
  const [rowCount, setRowCount] = useState(1);
  const [rowHeight, setRowHeight] = useState(0);
  const [padding, setPadding] = useState(0);
  const inputRef = useRef(null);

  const calculateRows = (
    newRowHeight = rowHeight,
    newPadding = padding
  ) => {
    let newRows = ~~((inputRef.current.scrollHeight - newPadding) / newRowHeight);
    if (newRows <= 0 || newRows < minRows) {
      newRows = minRows;
    }
    if (maxRows && newRows > maxRows) {
      newRows = maxRows;
    }
    return newRows;
  };

  const resizeTextArea = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.rows = 1;
    const newRows = calculateRows();
    if (newRows === rowCount) {
      inputRef.current.rows = newRows;
    }
    if (newRows !== rowCount) {
      onRowCountChange();
    }
    setRowCount(newRows);
  }

  const setInitialRows = () => {
    const inputStyle = window.getComputedStyle(inputRef.current);
    const newRowHeight = parseInt(inputStyle.lineHeight, 10);

    const newPadding =
      parseInt(inputStyle.paddingTop, 10) +
      parseInt(inputStyle.paddingBottom, 10);
    const initialRows = calculateRows(newRowHeight, newPadding);
    setRowHeight(newRowHeight);
    setPadding(newPadding);
    setRowCount(initialRows);
  }

  const handleChange = e => {
    handleOnChange(e);
    if (!setValue) {
      setInputValue(e.target.value);
      resizeTextArea();
    }
  }

  useEffect(() => {
    setInitialRows();
    window.addEventListener('resize', resizeTextArea);

    return () => {
      window.removeEventListener('resize', resizeTextArea);
    }
  }, []);

  useEffect(() => {
    if (!value) {
      setRowCount(minRows);
    }
    if (padding && rowHeight) {
      resizeTextArea();
    }
  }, [value]);

  const classNames = cx(`expanding-textarea ${className}`, {
    'expanding-textarea--has-error': hasError
  });

  return (
    <>
      <textarea
        className={classNames}
        ref={inputRef}
        value={inputValue || value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        rows={rowCount}
        {...rest}
      />
      {hasError && errorMessage && (
        <span role="alert" className="expanding-textarea__error-message">
          {errorMessage}
        </span>
      )}
    </>
  )
};

ExpandingTextArea.defaultProps = {
  handleOnChange: () => {},
  handleOnFocus: () => {},
  handleOnBlur: () => {},
  onRowCountChange: () => {},
  value: '',
  focusOnMount: false,
  setValue: false,
  className: '',
  minRows: 1,
  maxRows: null,
  hasError: false,
  errorMessage: ''
};

export default ExpandingTextArea;
