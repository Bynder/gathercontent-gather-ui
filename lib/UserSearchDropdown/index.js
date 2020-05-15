import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import Icon from '../Icon';
import TooltipWrapper from '../TooltipWrapper';
import UserSearch from '../UserSearch';

class UserSearchDropdown extends Component {
  searchInputRef = React.createRef();

  focusSearch = ({ type }) => {
    if (type === 'ACTIVE') {
      this.searchInputRef.current.focus();
    }
  };

  render() {
    const icon = this.props.useAtIcon ? 'at' : 'addPerson';
    return (
      <Dropdown
        id="user-search"
        className={`user-search__dropdown ${this.props.className}`}
        onToggle={this.focusSearch}
        autoPosition={this.props.dropdownAutoPosition}
      >
        <TooltipWrapper
          id="user-search-tooltop"
          tooltipText={this.props.tooltipText}
          placement="top"
        >
          <Dropdown.Trigger useButton types={['icon-only']}>
            <Icon name={icon} title="Open user search" />
          </Dropdown.Trigger>
        </TooltipWrapper>
        <Dropdown.Content collapse fixRight>
          <UserSearch
            ref={this.searchInputRef}
            users={this.props.users}
            addUser={this.props.addUser}
            displayEmail={this.props.displayEmail}
            searchHeading={this.props.searchHeading}
            hideAfterPerformingAction
          />
        </Dropdown.Content>
      </Dropdown>
    );
  }
}

UserSearchDropdown.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addUser: PropTypes.func.isRequired,
  displayEmail: PropTypes.bool.isRequired,
  dropdownAutoPosition: PropTypes.bool.isRequired,
  searchHeading: PropTypes.string,
  tooltipText: PropTypes.string,
  className: PropTypes.string,
  useAtIcon: PropTypes.bool
};

UserSearchDropdown.defaultProps = {
  searchHeading: 'Search...',
  tooltipText: '',
  className: '',
  useAtIcon: false
};

export default UserSearchDropdown;
