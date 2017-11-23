import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const NavTabs = props => (
  <nav className="nav-tabs">
    {React.Children.map(props.children, child => {
      const classes = cx('nav-tabs__item', child.props.className || '', {
        'nav-tabs__item--active': child.props.active
      });

      const newProps = {
        className: classes
      };

      return React.cloneElement(child, newProps);
    })}
  </nav>
);

NavTabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired
};

export default NavTabs;
