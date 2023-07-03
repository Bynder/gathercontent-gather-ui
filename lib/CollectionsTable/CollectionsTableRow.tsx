import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function CollectionsTableRow({
  children,
  className,
  selected,
  disabled,
  isOver,
  ...props
}: any) {
  const classes = cx(`collections-table__row ${className}`, {
    'collections-table__row--selected': selected,
    'collections-table__row--disabled': disabled,
    'collections-table__row--is-over': isOver
  });
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

CollectionsTableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  isOver: PropTypes.bool
};

CollectionsTableRow.defaultProps = {
  className: '',
  selected: false,
  disabled: false,
  isOver: false
};

export default CollectionsTableRow;
