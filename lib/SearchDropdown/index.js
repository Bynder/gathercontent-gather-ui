import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';
import DropdownMenu from '../DropdownMenu';

class SearchDropdown extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  updateInputValue = event => {
    this.props.handleOnChange(event);
    this.setState({ inputValue: event.target.value });
  }

  clearInputValue = () => {
    this.setState({ inputValue: '' });
    this.props.onInputClear();
  }

  render() {
    const {
      alignRight,
      className,
      listClassName,
      fullWidth,
      resultsTitle
    } = this.props;

    const hasResults = this.props.results.length > 0;

    const title = {
        name: resultsTitle,
        action: this.clearInputValue,
        additional: <Icon name="cross" text="close" hideText />,
        type: 'title',
      };

    const items = DropdownMenu.makeItems([title, ...this.props.results]);

    const menuClass = cx(`search-dropdown ${className}`, {
      dropup: this.props.direction === 'up',
      'full-width': fullWidth,
      open: hasResults,
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
          placeholder={this.props.placeholder}
        />
        {hasResults > 0 &&
          <ul className={listClass}>{items}</ul>
        }
      </div>
    );
  }
}

export default SearchDropdown;
