import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CollectionsTableCellContent = ({ children, allowOverflow }) => {
  const classNames = cx('collections-table__cell-content', {
    'collections-table__cell-content--allow-overflow': allowOverflow
  });

  return <div className={classNames}>{children}</div>;
};

CollectionsTableCellContent.propTypes = {
  children: PropTypes.node.isRequired,
  allowOverflow: PropTypes.bool
};

CollectionsTableCellContent.defaultProps = {
  allowOverflow: false
};

export default CollectionsTableCellContent;
