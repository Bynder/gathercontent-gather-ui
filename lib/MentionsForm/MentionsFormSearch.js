import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon, Avatar, AvatarInformation } from '../../lib/';
import { filterUsers } from './MentionsHelper';

class MentionsFormSearch extends Component {
  state = {
    users: this.props.users
  };

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

  render() {
    const users = this.state.users.map(user => (
      <Dropdown.Action
        action={() => this.props.addMention(user.id, user.display)}
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
        id="mentions-trigger"
        className="mention-form__dropdown"
        onToggle={this.focusSearch}
      >
        <Dropdown.Trigger useButton types={['icon-only']}>
          <Icon name="addPerson" />
        </Dropdown.Trigger>
        <Dropdown.Content collapse fixRight>
          <Dropdown.ActionGroup>
            <span className="mention-form__search-heading">Mention...</span>
          </Dropdown.ActionGroup>
          <Dropdown.ActionGroup className="mention-form__search-wrapper">
            <input
              className="mention-form__search-input"
              onChange={this.searchForUsers}
              type="text"
              placeholder="Search people..."
              ref={searchInput => {
                this.searchInput = searchInput;
              }}
            />
          </Dropdown.ActionGroup>
          <Dropdown.ActionGroup className="mention-form__search-results">
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

MentionsFormSearch.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addMention: PropTypes.func.isRequired,
  displayEmail: PropTypes.bool.isRequired
};

export default MentionsFormSearch;
