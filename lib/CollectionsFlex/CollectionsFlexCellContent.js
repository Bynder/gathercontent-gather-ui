import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { defaultProps, propTypes } from './';

const CollectionsFlexCellContent = ({ children, allowOverflow }) => {
  const classNames = cx('collections-flex__cell-content', {
    'collections-flex__cell-content--allow-overflow': allowOverflow
  });

  return <div className={classNames}>{children}</div>;
};

CollectionsFlexCellContent.propTypes = {
  ...propTypes,
  allowOverflow: PropTypes.bool
};

CollectionsFlexCellContent.defaultProps = {
  ...defaultProps,
  allowOverflow: false
};

export default CollectionsFlexCellContent;
