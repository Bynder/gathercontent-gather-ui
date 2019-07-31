import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ItemRowName } from './ItemRowName';
import Icon from '../Icon';

const ItemRow = ({
  children,
  label,
  participants,
  stacked,
  commentCount,
  className,
  bordered,
  ...rest
}) => {
  const classNames = cx(`item-row ${className}`, {
    'item-row--stacked': stacked,
    'item-row--bordered': bordered,
    'has-label': label
  });

  return (
    <div className={classNames} {...rest}>
      {children}

      {label && <span className="item-row__label">{label}</span>}

      {participants && (
        <span className="item-row__participants">{participants}</span>
      )}

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
  participants: PropTypes.node,
  label: PropTypes.string,
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
  label: null,
  participants: null,
  commentCount: '0',
  className: ''
};

ItemRow.Name = ItemRowName;

export { ItemRow };
