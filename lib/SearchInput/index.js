import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '../index';

const SearchInputField = ({
  placeholder,
  onChangeHandler,
  onClearHandler,
  hideIcon,
  value
}) => {
  const hasSearch = value ? 'is-visible' : '';

  return (
    <span className="search-input">
      <input
        value={value}
        onChange={e => onChangeHandler(e)}
        type="text"
        className="search-input__input"
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={onClearHandler}
        className={`search-input__clear ${hasSearch}`}
      >
        ×
      </button>
      {!hideIcon && (
        <FontAwesomeIcon
          name="fa-search"
          className={`search-input__icon ${hasSearch}`}
        />
      )}
    </span>
  );
};

SearchInputField.defaultProps = {
  placeholder: 'Search...',
  hideIcon: false,
  value: ''
};

SearchInputField.propTypes = {
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  onClearHandler: PropTypes.func.isRequired,
  hideIcon: PropTypes.bool,
  value: PropTypes.string
};

export default SearchInputField;
