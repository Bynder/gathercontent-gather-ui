import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import AvatarInformation from '../Avatar/AvatarInformation';

const OtherUserList = props => {
  const { otherUsers, otherUsersHeading } = props;

  const getOtherUsers = () =>
    otherUsers.map(otherUser => (
      <Avatar
        key={otherUser.id}
        wrapperClassName="viewing-list-item"
        url={otherUser.avatar}
        initials={otherUser.initials}
        colour={otherUser.colour}
        smallSize
      >
        <AvatarInformation name={otherUser.name} />
      </Avatar>
    ));

  return (
    <div className="userlist__list userlist__viewing-list">
      <div className="userlist__subheading">{otherUsersHeading}</div>
      {getOtherUsers()}
    </div>
  );
};

OtherUserList.propTypes = {
  otherUsers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  otherUsersHeading: PropTypes.string.isRequired
};

export default OtherUserList;
