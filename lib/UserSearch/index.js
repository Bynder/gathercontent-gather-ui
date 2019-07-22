import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import { filterUsers } from '../helpers';
import UserSearchList from './UserSearchList';
import UserSearchHead from './UserSearchHead';

class UserSearch extends Component {
  state = {
    users: this.props.users,
    displayList: this.props.displayList
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

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  toggleListDisplay = () => {
    this.props.onToggle(!this.state.displayList);
    this.setState(prevState => ({
      displayList: !prevState.displayList,
      users: this.props.users
    }));
  };

  render() {
    const {
      searchHeading,
      users,
      addUser,
      selectedUserIds,
      displayEmail,
      noUserDisplay,
      minUserLength,
      inputRef,
      subheading,
      useDisplayToggle,
      hideAfterPerformingAction,
      className
    } = this.props;
    return (
      <div className={`user-search ${className}`}>
        <UserSearchHead
          searchHeading={searchHeading}
          subheading={subheading}
          useDisplayToggle={useDisplayToggle}
          toggleListDisplay={this.toggleListDisplay}
          toggleActive={this.state.displayList}
        />
        {this.state.displayList && (
          <Fragment>
            <Dropdown.ActionGroup className="user-search__search-wrapper">
              <input
                className="user-search__search-input"
                onChange={this.searchForUsers}
                type="text"
                placeholder="Search people..."
                ref={inputRef}
                onKeyPress={this.handleKeyPress}
              />
            </Dropdown.ActionGroup>
            <Dropdown.ActionGroup className="user-search__search-results">
              <UserSearchList
                users={this.state.users}
                noUsers={users.length <= minUserLength}
                addUser={addUser}
                selectedUserIds={selectedUserIds}
                displayEmail={displayEmail}
                noUserDisplay={noUserDisplay}
                hideAfterPerformingAction={hideAfterPerformingAction}
              />
            </Dropdown.ActionGroup>
          </Fragment>
        )}
      </div>
    );
  }
}

UserSearch.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addUser: PropTypes.func.isRequired,
  displayEmail: PropTypes.bool.isRequired,
  searchHeading: PropTypes.string,
  className: PropTypes.string,
  selectedUserIds: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  useDisplayToggle: PropTypes.bool,
  displayList: PropTypes.bool,
  subheading: PropTypes.string,
  minUserLength: PropTypes.number,
  noUserDisplay: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  hideAfterPerformingAction: PropTypes.bool,
  onToggle: PropTypes.func,
  inputRef: PropTypes.shape()
};

UserSearch.defaultProps = {
  searchHeading: 'Search...',
  className: '',
  selectedUserIds: [],
  useDisplayToggle: false,
  displayList: true,
  subheading: null,
  minUserLength: 0,
  noUserDisplay: 'Looks like there are no people!',
  hideAfterPerformingAction: false,
  onToggle: () => {},
  inputRef: {}
};

// disabling linter here since I think its just getting confused with refs
// eslint-disable-next-line react/no-multi-comp
export default React.forwardRef((props, ref) => (
  <UserSearch inputRef={ref} {...props} />
));

export { UserSearch as PureUserSearch };
