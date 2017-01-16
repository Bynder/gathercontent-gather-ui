import React from 'react';

const Nav = props =>
  <a
    onClick={e => e.stopPropagation()}
    target={props.target}
    className={props.className}
    href={props.url}
  >
    {props.children}
  </a>;

Nav.defaultProps = {
  url: '/',
  className: '',
  preventDefault: false,
  target: null,
};

Nav.propTypes = {
  target: React.PropTypes.string,
  url: React.PropTypes.string,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Nav;
