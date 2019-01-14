import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CollectionsTableRow = ({
  children,
  className,
  selected,
  disabled,
  ...props
}) => {
  const classes = cx(`collections-table__row ${className}`, {
    'collections-table__row--selected': selected,
    'collections-table__row--disabled': disabled
  });
  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  );
};

CollectionsTableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool
};

CollectionsTableRow.defaultProps = {
  className: '',
  selected: false,
  disabled: false
};

export default CollectionsTableRow;
