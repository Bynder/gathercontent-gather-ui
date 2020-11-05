import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FinderItemContent = ({
  className,
  children,
  active,
  hidden,
  isFolder,
  ...rest
}) => {
  const classNames = cx(`finder__item-content mb-1 rounded ${className}`, {
    'is-active': active,
    'finder__item-content--hidden': hidden,
    'h-8': isFolder,
    'h-10': !isFolder
  });

  return (
    <div className={classNames} {...rest}>
      <div className="finder__item-content-inner">{children}</div>
    </div>
  );
};

FinderItemContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
  hidden: PropTypes.bool
};

FinderItemContent.defaultProps = {
  className: '',
  active: false,
  hidden: false
};

export default FinderItemContent;
