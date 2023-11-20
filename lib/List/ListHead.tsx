import React from "react";

function ListHead({ title, action }: any) {
  if (!title && !action) {
    return null;
  }

  return (
    <div className="gui-list__head">
      <div className="gui-list__head-inner">
        <span className="gui-list__title">{title}</span>
        <span className="gui-list__actions">{action}</span>
      </div>
    </div>
  );
}

ListHead.defaultProps = {
  title: null,
  action: null,
};

export default ListHead;
