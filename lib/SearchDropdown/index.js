import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';
import DropdownMenu from '../DropdownMenu';

class SearchDropdown extends Component {

  render() {
    const {
      alignRight,
      className,
      listClassName,
      fullWidth,
      resultsTitle
    } = this.props;

    let items = this.props.results;

    const hasResults = items.length > 0;

    items = DropdownMenu.makeItems(this.props.results);

    const menuClass = cx(`dropdown ${className}`, {
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
          onChange={this.props.handleOnChange}
          type="text"
          className="search-input__input"
          placeholder={this.props.placeholder}
        />
        {hasResults &&
          <ul className={listClass}>{items}</ul>
        }
      </div>
    );
  }
}

export default SearchDropdown;
