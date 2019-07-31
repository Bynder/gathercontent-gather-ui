import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ItemRowName } from './ItemRowName';
import { ItemRowAside } from './ItemRowAside';
import { ItemRowData } from './ItemRowData';

const ItemRow = ({ children, stacked, className, bordered, ...rest }) => {
  const classNames = cx(`item-row ${className}`, {
    'item-row--stacked': stacked,
    'item-row--bordered': bordered
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ItemRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  stacked: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string
};

ItemRow.defaultProps = {
  stacked: false,
  bordered: false,
  className: ''
};

ItemRow.Name = ItemRowName;
ItemRow.Aside = ItemRowAside;
ItemRow.Data = ItemRowData;

export { ItemRow };
