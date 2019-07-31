import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ItemRowName } from './ItemRowName';
import { ItemRowAside } from './ItemRowAside';
import { ItemRowData } from './ItemRowData';
import Icon from '../Icon';

const ItemRow = ({
  children,
  stacked,
  commentCount,
  className,
  bordered,
  ...rest
}) => {
  const classNames = cx(`item-row ${className}`, {
    'item-row--stacked': stacked,
    'item-row--bordered': bordered
  });

  return (
    <div className={classNames} {...rest}>
      {children}

      {commentCount !== '0' && (
        <span className="item-row__comments">
          <Icon name="commentFill" />
          <span className="item-row__comments-count">{commentCount}</span>
        </span>
      )}
    </div>
  );
};

ItemRow.propTypes = {
  stacked: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  commentCount: PropTypes.string
};

ItemRow.defaultProps = {
  stacked: false,
  bordered: false,
  commentCount: '0',
  className: ''
};

ItemRow.Name = ItemRowName;
ItemRow.Aside = ItemRowAside;
ItemRow.Data = ItemRowData;

export { ItemRow };
