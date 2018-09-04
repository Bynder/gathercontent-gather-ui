import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Avatar, AvatarInformation } from '../../lib/';
import { filterUsers } from './MentionsHelper';

class MentionsFormSearch extends Component {
  state = {
    users: this.props.users
  };

  searchForUsers = e => {
    if (e.target.value.trim() !== '' && this.props.users.length > 0) {
      return this.setState({
        users: filterUsers(this.props.users, e.target.value, true)
      });
    }
    return this.setState({ users: this.props.users });
  };

  render() {
    const users = this.state.users.map(user => (
      <Dropdown.Action
        action={() => this.props.addMention(user.id, user.display)}
        key={user.id}
        isSubmit={false}
      >
        <Avatar url={user.avatar} initials={user.initials}>
          <AvatarInformation email={user.email} name={user.name} />
        </Avatar>
      </Dropdown.Action>
    ));
    return (
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
          />
        </Dropdown.ActionGroup>
        <Dropdown.ActionGroup className="mention-form__search-results">
          {this.state.users && this.state.users.length > 0 && users}
          {this.state.users &&
            this.state.users.length === 0 && (
              <span className="no-results">No users found!</span>
            )}
        </Dropdown.ActionGroup>
      </Dropdown.Content>
    );
  }
}

MentionsFormSearch.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addMention: PropTypes.func.isRequired
};

export default MentionsFormSearch;
