import React from 'react';
import PropTypes from 'prop-types';

function ListHead({
  title,
  action
}: any) {
  if (!title && !action) {
    return null;
  }

  return (
    <div className="list__head">
      <div className="list__head-inner">
        <span className="list__title">{title}</span>
        <span className="list__actions">{action}</span>
      </div>
    </div>
  );
}

ListHead.defaultProps = {
  title: null,
  action: null
};

ListHead.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node
};

export default ListHead;