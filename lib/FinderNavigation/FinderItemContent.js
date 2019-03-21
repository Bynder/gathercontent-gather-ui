import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FinderItemContent = ({ className, children, active, hidden }) => {
  const classNames = cx(`finder__item-content ${className}`, {
    'is-active': active,
    'finder__item-content--hidden': hidden
  });

  return (
    <div className={classNames}>
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
