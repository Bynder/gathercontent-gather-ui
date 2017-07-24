import React from 'react';
import PropTypes from 'prop-types';

const ListHead = ({ title, action }) => {
  if (!title && !action) {
    return null;
  }

  return (
    <div className="list__head">
      <span className="list__title">{title}</span>
      <span className="list__actions">{action}</span>
    </div>
  );
};

ListHead.defaultProps = {
  title: null,
  action: null,
};

ListHead.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node,
};

export default ListHead;
