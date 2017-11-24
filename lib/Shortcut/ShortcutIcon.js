import React from 'react';
import PropTypes from 'prop-types';

const ShortcutIcon = props => (
  <span className="shortcut__keyboard">{props.children}</span>
);

ShortcutIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

ShortcutIcon.defaultProps = {
  children: []
};

export default ShortcutIcon;
