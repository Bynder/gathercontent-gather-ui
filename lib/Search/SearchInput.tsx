import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import ShortcutTrigger from '../ShortcutTrigger';

class SearchInput extends Component {
  state = {
    inputValue: '',
    isFocussed: false
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
    this.props.onChange(event.target.value);
    if (event.target.value.trim() === '') {
      return this.props.hideBody();
    }
    return this.props.displayBody();
  };

  clearInput = () => {
    this.handleChange({ target: { value: '' } });
    this.handleSearchClick();
  };

  handleFocus = () =>
    this.setState({ isFocussed: true }, () => {
      if (this.state.inputValue !== '' && !this.props.showBody) {
        this.props.displayBody();
      }
    });

  handleSearchClick = () => {
    this.setState({ isFocussed: true }, () => this.textinput.focus());
  };

  handleEscape = () => {
    this.props.hideBody();
    this.setState({ isFocussed: false });
  };

  render() {
    const classNames = cx(`search__input ${this.props.className}`, {
      'is-focus': this.props.showBody || this.state.isFocussed
    });
    return (
      <div className={classNames}>
        <ShortcutTrigger
          shortcutKey="Escape"
          onShortcutTrigger={this.handleEscape}
        />
        <input
          className="search__input--input"
          onChange={this.handleChange}
          value={this.state.inputValue}
          onFocus={this.handleFocus}
          onBlur={() => this.setState({ isFocussed: false })}
          ref={textinput => {
            this.textinput = textinput;
          }}
          onKeyPress={this.handleKeyPress}
        />
        <Button
          className="search__input--clear"
          types={['icon-only']}
          clickHandler={this.clearInput}
        >
          <Icon name="cancel" />
        </Button>
        <Button
          className="search__input--start"
          types={['icon-only']}
          clickHandler={this.handleSearchClick}
        >
          <Icon name="search" />
        </Button>
      </div>
    );
  }
}

SearchInput.defaultProps = {
  className: '',
  showBody: false
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  hideBody: PropTypes.func.isRequired,
  displayBody: PropTypes.func.isRequired,
  showBody: PropTypes.bool
};

export default SearchInput;
