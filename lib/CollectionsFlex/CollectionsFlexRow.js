import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CollectionsFlexRow = ({
  children,
  className,
  selected,
  disabled,
  ...props
}) => {
  const classes = cx(`collections-flex__row ${className}`, {
    'collections-flex__row--selected': selected,
    'collections-flex__row--disabled': disabled
  });
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

CollectionsFlexRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool
};

CollectionsFlexRow.defaultProps = {
  className: '',
  selected: false,
  disabled: false
};

export default CollectionsFlexRow;
