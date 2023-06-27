import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Navigation = props => {
  const classes = cx(`navigation ${props.className}`, {
    'navigation--tabs': props.tabs
  });

  return (
    <nav className={classes}>
      {React.Children.map(props.children, child => {
        if (child?.props) {
          const itemClasses = cx(
            'navigation__item',
            child.props.className || '',
            {
              'navigation__item--active': child.props.active
            }
          );

          const newProps = {
            className: itemClasses
          };

          return React.cloneElement(child, newProps);
        }
      })}
    </nav>
  );
};

Navigation.defaultProps = {
  tabs: false,
  className: ''
};

Navigation.propTypes = {
  tabs: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired,
  className: PropTypes.string
};

export default Navigation;
