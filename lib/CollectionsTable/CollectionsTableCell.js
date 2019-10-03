import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CollectionsTableCellContent from './CollectionsTableCellContent';
import { defaultProps, propTypes } from './propTypes';

const CollectionsTableCell = ({
  children,
  className,
  allowOverflow,
  ...props
}) => {
  const classNames = cx(`collections-table__cell ${className}`, {
    'collections-table__cell--allow-overflow': allowOverflow
  });
  return (
    <div className={classNames} {...props}>
      <CollectionsTableCellContent allowOverflow={allowOverflow}>
        {children}
      </CollectionsTableCellContent>
    </div>
  );
};

CollectionsTableCell.propTypes = {
  ...propTypes,
  allowOverflow: PropTypes.bool
};

CollectionsTableCell.defaultProps = {
  ...defaultProps,
  allowOverflow: false
};

export default CollectionsTableCell;
