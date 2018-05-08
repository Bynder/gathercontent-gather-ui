import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ItemRow = ({ children, label, indicator }) => {
  const classNames = cx('item-row', {
    'has-indicator': indicator,
    'has-label': label
  });

  return (
    <div className={classNames}>
      {indicator && <span className="item-row__indicator">{indicator}</span>}

      <span className="item-row__title">{children}</span>

      {label && <span className="item-row__label">{label}</span>}
    </div>
  );
};

ItemRow.propTypes = {
  indicator: PropTypes.node,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

ItemRow.defaultProps = {
  indicator: null,
  label: null,
  participants: null
};

export default ItemRow;
