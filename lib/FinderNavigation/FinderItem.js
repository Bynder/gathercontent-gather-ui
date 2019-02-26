import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FinderItem = ({
  className,
  active,
  hoverSettings,
  selected,
  children,
  ...rest
}) => {
  const classNames = cx(`finder__item ${className}`, {
    'is-active': active,
    'finder__item--hover-settings': hoverSettings,
    'finder__item--selected': selected
  });
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

FinderItem.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  hoverSettings: PropTypes.bool,
  selected: PropTypes.bool
};

FinderItem.defaultProps = {
  active: false,
  className: '',
  hoverSettings: true,
  selected: false
};

export default FinderItem;
