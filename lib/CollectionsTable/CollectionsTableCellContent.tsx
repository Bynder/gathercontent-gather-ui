import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { defaultProps, propTypes } from './propTypes';

function CollectionsTableCellContent({
  children,
  allowOverflow
}: any) {
  const classNames = cx('collections-table__cell-content', {
    'collections-table__cell-content--allow-overflow': allowOverflow
  });

  return <div className={classNames}>{children}</div>;
}

CollectionsTableCellContent.propTypes = {
  ...propTypes,
  allowOverflow: PropTypes.bool
};

CollectionsTableCellContent.defaultProps = {
  ...defaultProps,
  allowOverflow: false
};

export default CollectionsTableCellContent;
