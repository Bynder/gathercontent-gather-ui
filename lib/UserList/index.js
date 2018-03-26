import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon, Button, SearchDropdown } from '../';
import CurrentUserList from './CurrentUserList';
import OtherUserList from './OtherUserList';

class UserList extends Component {
  static propTypes = {
    currentUsers: PropTypes.arrayOf(PropTypes.shape()),
    otherUsers: PropTypes.arrayOf(PropTypes.shape()),
    searchResults: PropTypes.arrayOf(PropTypes.shape()),
    removeUser: PropTypes.func.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    handleClearResults: PropTypes.func.isRequired,
    showUserControls: PropTypes.bool,
    emptyText: PropTypes.string,
    userListHeading: PropTypes.string,
    currentUsersHeading: PropTypes.string,
    otherUsersHeading: PropTypes.string,
    emptyTextButton: PropTypes.string,
    removeUserText: PropTypes.string,
    resultsTitle: PropTypes.string
  };

  static defaultProps = {
    currentUsers: [],
    otherUsers: [],
    searchResults: [],
    emptyText: 'There is no one assigned yet',
    showUserControls: false,
    userListHeading: 'User list',
    currentUsersHeading: 'Current users',
    otherUsersHeading: 'Other users',
    emptyTextButton: 'Search for a user now',
    removeUserText: 'Remove',
    resultsTitle: 'Add user...'
  };

  state = {
    showSearch: false
  };

  toggleSearch = () => this.setState({ showSearch: !this.state.showSearch });

  render() {
    const classNames = cx('userlist', {
      'userlist--search-open': this.state.showSearch
    });

    return (
      <div className={classNames}>
        <div className="userlist__heading">
          {this.props.userListHeading}
          {this.props.showUserControls && (
            <Button
              types={['icon-only']}
              clickHandler={this.toggleSearch}
              className="show-search is-active"
            >
              <Icon name="plusCircle" />
            </Button>
          )}
        </div>
        <CurrentUserList
          currentUsers={this.props.currentUsers}
          currentUsersHeading={this.props.currentUsersHeading}
          showUserControls={this.props.showUserControls}
          removeUser={this.props.removeUser}
          removeUserText={this.props.removeUserText}
          toggleSearch={this.toggleSearch}
          emptyText={this.props.emptyText}
          emptyTextButton={this.props.emptyTextButton}
        />
        {this.props.showUserControls &&
          this.state.showSearch && (
            <SearchDropdown
              className="userlist__search"
              results={this.props.searchResults}
              placeholder="Search"
              alignRight
              fullWidth
              handleOnChange={this.props.handleSearchChange}
              onInputClear={this.props.handleClearResults}
              resultsTitle={this.props.resultsTitle}
              focusOnMount
            />
          )}
        {this.props.otherUsers.length > 0 && (
          <OtherUserList
            otherUsers={this.props.otherUsers}
            otherUsersHeading={this.props.otherUsersHeading}
          />
        )}
      </div>
    );
  }
}

export default UserList;
