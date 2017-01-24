import React, { Component, PropTypes } from 'react';

class SearchInputField extends Component {
  constructor(props) {
    super(props);

    this.displayName = 'SearchInputField';
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

    const iconClass = (() => `fa fa-search c-input-search__icon ${hasSearch}`)();

    // Display the (x) button if there's a search in progress...
    const showClearStyle = (() => `input-search__clear ${hasSearch}`)();

    return (
      <span className="c-input-search">
        <input
          ref={input => (this.searchInput = input)}
          value={this.state.query}
          onChange={this.onChange}
          type="text"
          className="input-search"
          placeholder={placeholder}
        />
        <button
          onClick={this.clearSearch}
          className={showClearStyle}
        >
          ×
        </button>
        <i className={iconClass} />
      </span>
    );
  }
}

SearchInputField.defaultProps = {
  placeholder: 'Search...',
};

SearchInputField.propTypes = {
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

export default SearchInputField;
