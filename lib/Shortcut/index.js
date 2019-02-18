import React from 'react';
import PropTypes from 'prop-types';

const Shortcut = props => (
  <div className="shortcut">
    <div className={`shortcut__name ${props.styleClass}`}>{props.name}</div>
    <div className="shortcut__wrapper">
      {React.Children.map(props.children, (child, idx) => [
        idx > 0 ? <span className="shortcut__plus">+</span> : null,
        child
      ])}
    </div>
  </div>
);

Shortcut.propTypes = {
  name: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Shortcut.defaultProps = {
  name: '',
  styleClass: '',
  children: {},
  mac: false
};

export default Shortcut;
