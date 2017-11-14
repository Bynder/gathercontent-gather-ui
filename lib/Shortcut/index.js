import React from 'react';
import PropTypes from 'prop-types';

const ShortcutGroup = props => (
  <div className="shortcut">
    <div className={`shortcut__name ${props.styleClass}`}>{props.name}</div>
    <div className="shortcut__wrapper">
      {props.children
        .map(t => t)
        .reduce((prev, curr) => [
          prev,
          <span className="shortcut__plus">+</span>,
          curr
        ])}
    </div>
  </div>
);

ShortcutGroup.propTypes = {
  name: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

ShortcutGroup.defaultProps = {
  name: '',
  styleClass: '',
  children: {}
};

export default ShortcutGroup;
