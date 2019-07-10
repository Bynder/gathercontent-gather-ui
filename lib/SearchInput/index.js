import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '../index';

class SearchInputField extends Component {
  static defaultProps = {
    placeholder: 'Search...',
    hideIcon: false,
    initialValue: ''
  };

  static propTypes = {
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
    hideIcon: PropTypes.bool,
    initialValue: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);

    this.state = { query: this.props.initialValue };
  }

  onChange(e) {
    this.props.onChangeHandler(e);
    this.setState({ query: e.target.value });
  }

  /**
   * Clears the search input (x) button
   * Runs the onChange callback with an empty value.
   */
  clearSearch() {
    this.setState({ query: '' });
    this.props.onChangeHandler({
      target: { value: '' }
    });
    this.searchInput.value = '';
  }

  render() {
    const { placeholder } = this.props;
    const hasSearch = this.state.query ? 'is-visible' : '';

    return (
      <span className="search-input">
        <input
          ref={input => {
            this.searchInput = input;
          }}
          value={this.state.query}
          onChange={this.onChange}
          type="text"
          className="search-input__input"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={this.clearSearch}
          className={`search-input__clear ${hasSearch}`}
        >
          ×
        </button>
        {!this.props.hideIcon && (
          <FontAwesomeIcon
            name="fa-search"
            className={`search-input__icon ${hasSearch}`}
          />
        )}
      </span>
    );
  }
}

export default SearchInputField;
