import React, { PropTypes } from 'react';

/*
 @todo: Add FontAwesomeIcon as an option
 */

const NavLink = props =>
  <a
    onClick={e => e.stopPropagation()}
    target={props.target}
    className={props.className}
    href={props.url}
  >
    {props.children}
  </a>;

NavLink.defaultProps = {
  url: '/',
  className: '',
  preventDefault: false,
  target: null,
};

NavLink.propTypes = {
  target: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavLink;
