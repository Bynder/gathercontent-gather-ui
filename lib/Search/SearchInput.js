import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Icon, Button } from '../';
import { SearchContext } from './SearchProvider';

class SearchInput extends Component {
  state = {
    inputValue: '',
    isFocussed: false
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value});
    this.props.onChange(event.target.value);
    if (event.target.value.trim() === '') {
      return this.props.hideBody();
    }
    return this.props.displayBody();
  }

  clearInput = () => {
    this.setState({ inputValue: '' })
    this.props.onChange('');
    this.props.hideBody();
  };

  handleFocus = () => this.setState({ isFocussed: true });

  handleSearchClick = () => {
    this.setState({ isFocussed: true },
    () => this.textinput.focus());
  }

  render() {
    const classNames = cx(`search__input ${this.props.className}`, {
      'is-focus': this.props.showBody || this.state.isFocussed,
    });
    return (
      <div className={classNames}>
        <input
          className="search__input--input"
          onChange={this.handleChange}
          value={this.state.inputValue}
          onFocus={this.handleFocus}
          onBlur={() => this.setState({ isFocussed: false })}
          ref={textinput => {
            this.textinput = textinput;
          }}
        />
        <Button
          className="search__input--clear"
          types={['icon-only']}
          clickHandler={this.clearInput}
        >
          <Icon name="cross" />
        </Button>
        <Button
          className="search__input--start"
          types={['icon-only']}
          clickHandler={this.handleSearchClick}
        >
          <Icon name="comment" />
        </Button>
      </div>
    );
  }
}


SearchInput.defaultProps = {
  className: ''
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SearchInput;

export { SearchInput as PureSearchInput };
