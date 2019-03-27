import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FinderItem = ({
  className,
  active,
  hoverSettings,
  selected,
  children,
  noIndentation,
  ...rest
}) => {
  const classNames = cx(
    `${
      noIndentation ? 'finder__item-no-indentation' : 'finder__item'
    } ${className}`,
    {
      'is-active': active,
      'finder__item--hover-settings': hoverSettings,
      'finder__item--selected': selected
    }
  );

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
  selected: PropTypes.bool,
  noIndentation: PropTypes.bool
};

FinderItem.defaultProps = {
  active: false,
  className: '',
  hoverSettings: true,
  selected: false,
  noIndentation: false
};

export default FinderItem;
