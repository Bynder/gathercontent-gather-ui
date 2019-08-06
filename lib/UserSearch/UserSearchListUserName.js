import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

const UserSearchListUserName = ({ name, isSelected }) => {
  const classes = cx('user-search-list__user-name', {
    'is-active': isSelected
  });
  return (
    <div className={classes}>
      <span className="text-overflow-ellipsis">{name}</span>
      {isSelected && <Icon className="h-margin-left-quarter" name="boldTick" />}
    </div>
  );
};

UserSearchListUserName.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default UserSearchListUserName;
