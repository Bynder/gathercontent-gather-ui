import React from 'react';
import PropTypes from 'prop-types';

const AvatarGroup = (props) => {
  return (
    <div className="avatar-group-list">
      { React.Children.map(props.children, (child, idx) => {
        return React.cloneElement(child, {
          index: props.children.length - idx,
        });
      }) }
    </div>
  );
};

AvatarGroup.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AvatarGroup;
