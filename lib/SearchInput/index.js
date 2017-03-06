import React, { Component, PropTypes } from 'react';
import { FontAwesomeIcon } from '../index';

class SearchInputField extends Component {
  static defaultProps = {
    placeholder: 'Search...',
  };

  static propTypes = {
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);

    this.state = { query: '' };
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
      target: { value: '' },
    });
    this.searchInput.value = '';
  }

  render() {
    const { placeholder } = this.props;
    const hasSearch = this.state.query ? 'is-visible' : '';

    return (
      <span className="search-input">
        <input
          ref={input => (this.searchInput = input)}
          value={this.state.query}
          onChange={this.onChange}
          type="text"
          className="search-input__input"
          placeholder={placeholder}
        />
        <button
          onClick={this.clearSearch}
          className={`search-input__clear ${hasSearch}`}
        >
          ×
        </button>
        <FontAwesomeIcon
          name="fa-search"
          className={`search-input__icon ${hasSearch}`}
        />
      </span>
    );
  }
}

export default SearchInputField;
