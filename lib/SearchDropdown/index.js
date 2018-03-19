import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';
import DropdownMenu from '../DropdownMenu';

class SearchDropdown extends Component {
  handleOnChange = e => {
    console.log('im called');
    this.filterItems(e);
  }

  render() {
    let { items } = this.props;
    const {
      caret,
      downIcon,
      type,
      shouldDisplay,
      alignRight,
      className,
      listClassName,
      fullWidth
    } = this.props;

    const menuClass = cx(`dropdown ${className}`, {
      'is-visible': shouldDisplay,
      'is-hidden': !shouldDisplay,
      'open is-active': this.state.selected,
      dropup: this.props.direction === 'up',
      'full-width': fullWidth
    });

    const listClass = cx(`dropdown-menu ${listClassName}`, {
      'align-right': alignRight
    });

    items = DropdownMenu.makeItems(this.state.searchResults);

    return (
      <div className={menuClass}>
        <input
          onChange={this.handleOnChange}
          type="text"
          className="search-input__input"
          placeholder={this.props.placeholder}
        />
        {(this.state.searchResults.length > 0) &&
          <ul className={listClass}>{items}</ul>
        }
      </div>
    );
  }
}

export default SearchDropdown;
