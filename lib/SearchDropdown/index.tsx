import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';
import SearchResults from './SearchResults';

class SearchDropdown extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    };

    this.input = React.createRef();
  }

  updateInputValue = event => {
    this.props.handleOnChange(event);
    this.setState({ inputValue: event.target.value });
  };

  clearInputValue = () => {
    this.setState({ inputValue: '' });
    this.props.onInputClear();
  };

  render() {
    const {
      alignRight,
      className,
      listClassName,
      fullWidth,
      resultsTitle,
      focusOnMount,
      placeholder
    } = this.props;

    const showResults =
      this.props.results.length > 0 && this.state.inputValue.length > 0;

    const menuClass = cx(`search-dropdown ${className}`, {
      dropup: this.props.direction === 'up',
      'full-width': fullWidth,
      open: showResults
    });

    const listClass = cx(`dropdown-menu ${listClassName}`, {
      'align-right': alignRight
    });

    return (
      <div className={menuClass}>
        <input
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          type="text"
          className="dropdown-search__input"
          placeholder={placeholder}
          autoFocus={focusOnMount} // eslint-disable-line jsx-a11y/no-autofocus
          ref={this.input}
        />

        {showResults && (
          <ul className={listClass}>
            <li className="dropdown__item dropdown__item--title">
              <button
                type="button"
                className="dropdown__link dropdown__title"
                onClick={this.clearInputValue}
              >
                <span className="dropdown__item--name">{resultsTitle}</span>
                <span className="dropdown__item--additional">
                  <Icon name="cross" text="close" hideText />
                </span>
              </button>
            </li>
            <SearchResults
              results={this.props.results}
              input={this.input.current}
              hideResults={this.clearInputValue}
            />
          </ul>
        )}
      </div>
    );
  }
}

SearchDropdown.defaultProps = {
  placeholder: 'Search...',
  alignRight: false,
  results: [],
  className: '',
  listClassName: '',
  fullWidth: false,
  resultsTitle: 'Results',
  handleOnChange: () => {},
  onInputClear: () => {},
  direction: 'down',
  focusOnMount: false
};

SearchDropdown.propTypes = {
  placeholder: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape()),
  alignRight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  direction: PropTypes.string,
  resultsTitle: PropTypes.string,
  listClassName: PropTypes.string,
  handleOnChange: PropTypes.func,
  onInputClear: PropTypes.func,
  focusOnMount: PropTypes.bool
};

export default SearchDropdown;
