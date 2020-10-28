import React from 'react';
import { node, string, bool } from 'prop-types';
import cx from 'classnames';
import { ItemRowName } from './ItemRowName';
import { ItemRowAside } from './ItemRowAside';
import { ItemRowData } from './ItemRowData';

const ItemRow = ({ children, stacked, className, bordered, list, ...rest }) => {
  const classNames = cx(`item-row ${className}`, {
    'item-row--stacked': stacked,
    'item-row--bordered': bordered,
    'item-row-list': list
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ItemRow.propTypes = {
  children: node.isRequired,
  stacked: bool,
  bordered: bool,
  className: string
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
