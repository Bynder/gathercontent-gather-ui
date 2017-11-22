import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Navigation = props => (
  <ul className="project-nav">
    {React.Children.map(props.children, child => {
      const activeClass = cx({
        'project-nav__item--active': child.props.active
      });

      const currentClasses = child.props.className || '';

      const newProps = {
        className: `project-nav__item ${currentClasses} ${activeClass}`
      };

      return React.cloneElement(child, newProps);
    })}
  </ul>
);

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired
};

export default Navigation;
