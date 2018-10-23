import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CollectionsTableRow = ({ children, className, selected, ...props }) => {
  const classes = cx(`collections-table__row ${className}`, {
    'collections-table__row--selected': selected
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
  selected: PropTypes.bool
};

CollectionsTableRow.defaultProps = {
  className: '',
  selected: false
};

export default CollectionsTableRow;
