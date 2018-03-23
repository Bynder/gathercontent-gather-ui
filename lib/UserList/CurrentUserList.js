import React from 'react';
import PropTypes from 'prop-types';
import { Button, Avatar, AvatarInformation } from '../';

const CurrentUserList = props => {
  const {
    currentUsers,
    emptyText,
    showUserControls,
    removeUser,
    removeUserText,
    toggleSearch,
    emptyTextButton,
    currentUsersHeading
  } = props;

  const getCurrentUsers = () =>
    currentUsers.map(user => {
      const additional = showUserControls ? (
        <Button
          types={['link-danger', 'size-sm']}
          clickHandler={() => removeUser(user.id)}
          className="user__remove"
        >
          {removeUserText}
        </Button>
      ) : (
        ''
      );
      return (
        <Avatar
          key={user.id}
          wrapperClassName="userlist__item"
          url={user.avatar}
          initials={user.initials}
          additional={additional}
          isOffline={!user.isPresent}
          colour={user.colour}
          smallSize
        >
          <AvatarInformation name={user.name} />
        </Avatar>
      );
    });

  if (currentUsers.length > 0) {
    return (
      <div className="userlist__list">
        <div className="userlist__subheading">
          {currentUsersHeading} ({currentUsers.length})
        </div>
        {getCurrentUsers()}
      </div>
    );
  }
  return (
    <div className="userlist__empty">
      {emptyText} <br />
      {showUserControls && (
        <Button
          types={['link-default', 'size-sm']}
          clickHandler={toggleSearch}
          className="userlist__empty-button"
        >
          {emptyTextButton}
        </Button>
      )}
    </div>
  );
};

CurrentUserList.propTypes = {
  currentUsers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  emptyText: PropTypes.string.isRequired,
  showUserControls: PropTypes.bool.isRequired,
  removeUser: PropTypes.func.isRequired,
  removeUserText: PropTypes.string.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  emptyTextButton: PropTypes.string.isRequired,
  currentUsersHeading: PropTypes.string.isRequired
};

export default CurrentUserList;
