import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

const ItemRow = ({
  children,
  label,
  indicator,
  participants,
  stacked,
  commentCount
}) => {
  const classNames = cx('item-row', {
    'item-row--stacked': stacked,
    'has-indicator': indicator,
    'has-label': label
  });

  return (
    <div className={classNames}>
      {indicator && <span className="item-row__indicator">{indicator}</span>}

      <span className="item-row__title">{children}</span>

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
  participants: PropTypes.node,
  indicator: PropTypes.node,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  commentCount: PropTypes.string
};

ItemRow.defaultProps = {
  stacked: false,
  indicator: null,
  label: null,
  participants: null,
  commentCount: '0'
};

export default ItemRow;
