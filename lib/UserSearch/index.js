import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  Icon,
  Avatar,
  AvatarInformation,
  TooltipWrapper
} from '../../lib/';
import { filterUsers } from '../MentionsForm/MentionsHelper';

class UserSearch extends Component {
  state = {
    users: this.props.users
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.users !== nextProps.users) {
      this.setState({ users: nextProps.users });
    }
  }

  searchForUsers = e => {
    if (e.target.value.trim() !== '' && this.props.users.length > 0) {
      return this.setState({
        users: filterUsers(
          this.props.users,
          e.target.value,
          this.props.displayEmail
        )
      });
    }
    return this.setState({ users: this.props.users });
  };

  focusSearch = ({ type }) => {
    if (type === 'ACTIVE') {
      this.searchInput.focus();
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  render() {
    const users = this.state.users.map(user => (
      <Dropdown.Action
        action={() => this.props.addUser(user)}
        key={user.id}
        isSubmit={false}
      >
        <Avatar url={user.avatar} initials={user.initials}>
          <AvatarInformation
            email={this.props.displayEmail ? user.email : `@${user.display}`}
            name={user.name}
          />
        </Avatar>
      </Dropdown.Action>
    ));
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
            <Icon name="addPerson" />
          </Dropdown.Trigger>
        </TooltipWrapper>
        <Dropdown.Content collapse fixRight>
          <Dropdown.ActionGroup>
            <span className="user-search__search-heading">
              {this.props.searchHeading}
            </span>
          </Dropdown.ActionGroup>
          <Dropdown.ActionGroup className="user-search__search-wrapper">
            <input
              className="user-search__search-input"
              onChange={this.searchForUsers}
              type="text"
              placeholder="Search people..."
              ref={searchInput => {
                this.searchInput = searchInput;
              }}
              onKeyPress={this.handleKeyPress}
            />
          </Dropdown.ActionGroup>
          <Dropdown.ActionGroup className="user-search__search-results">
            {this.state.users && this.state.users.length > 0 && users}
            {this.state.users &&
              this.state.users.length === 0 && (
                <span className="no-results">Oops! No users found.</span>
              )}
          </Dropdown.ActionGroup>
        </Dropdown.Content>
      </Dropdown>
    );
  }
}

UserSearch.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addUser: PropTypes.func.isRequired,
  displayEmail: PropTypes.bool.isRequired,
  dropdownAutoPosition: PropTypes.bool.isRequired,
  searchHeading: PropTypes.string,
  tooltipText: PropTypes.string,
  className: PropTypes.string
};

UserSearch.defaultProps = {
  searchHeading: 'Search...',
  tooltipText: '',
  className: ''
};

export default UserSearch;
