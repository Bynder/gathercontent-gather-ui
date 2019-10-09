import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const SearchInputField = ({
  placeholder,
  onChangeHandler,
  onClearHandler,
  hideIcon,
  value,
  label,
  id
}) => {
  const hasSearch = value ? 'is-visible' : '';

  return (
    <span className="search-input">
      {label && (
        <label className="visually-hidden" htmlFor={id}>
          {label}
        </label>
      )}
      {!hideIcon && <Icon name="search" className="search-input__icon" />}
      <input
        value={value}
        onChange={e => onChangeHandler(e)}
        type="text"
        className="search-input__input"
        placeholder={placeholder}
        id={id}
      />
      <button
        type="button"
        onClick={onClearHandler}
        className={`search-input__clear ${hasSearch}`}
      >
        ×
      </button>
    </span>
  );
};

SearchInputField.defaultProps = {
  placeholder: 'Search...',
  hideIcon: false,
  value: '',
  label: null,
  id: null
};

SearchInputField.propTypes = {
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  onClearHandler: PropTypes.func.isRequired,
  hideIcon: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string
};

export default SearchInputField;
