import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const NavTabs = props => (
  <nav className="nav-tabs">
    {React.Children.map(props.children, child => {
      const activeClass = cx({
        'nav-tabs__item--active': child.props.active
      });

      const currentClasses = child.props.className || '';

      const newProps = {
        className: `nav-tabs__item ${currentClasses} ${activeClass}`
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
