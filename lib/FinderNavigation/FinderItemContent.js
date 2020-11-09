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
  const classNames = cx(`finder-item-content ${className}`, {
    'finder-item-content-hidden': hidden,
    'finder-item-content-folder': isFolder
  });

  return (
    <div className={classNames} {...rest}>
      <div className="finder-item-content-inner">{children}</div>
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
