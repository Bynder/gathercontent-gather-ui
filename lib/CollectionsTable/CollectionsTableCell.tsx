import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CollectionsTableCellContent from './CollectionsTableCellContent';
import { defaultProps, propTypes } from './propTypes';

const CollectionsTableCell = ({
  children,
  className,
  allowOverflow,
  alignRight,
  ...props
}: any) => {
  const classNames = cx(`collections-table__cell ${className}`, {
    'collections-table__cell--allow-overflow': allowOverflow,
    'collections-table__cell--align-right': alignRight
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
  allowOverflow: PropTypes.bool,
  alignRight: PropTypes.bool
};

CollectionsTableCell.defaultProps = {
  ...defaultProps,
  allowOverflow: false,
  alignRight: false
};

export default CollectionsTableCell;
