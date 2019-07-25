import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FolderRow = ({
  children,
  actions,
  metaText,
  open,
  className,
  ...props
}) => {
  const classNames = cx(`folder-row ${className}`, {
    'folder-row--open': open
  });

  return (
    <div className={classNames} {...props}>
      <div className="folder-row__name">
        <div className="text-overflow-ellipsis">{children}</div>
      </div>

      <div className="folder-row__meta">
        {actions && <div className="folder-row__actions">{actions}</div>}
        {metaText && <div className="folder-row__meta-text">{metaText}</div>}
      </div>
    </div>
  );
};

FolderRow.propTypes = {
  children: PropTypes.string.isRequired,
  metaText: PropTypes.string,
  className: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.node),
  open: PropTypes.bool
};

FolderRow.defaultProps = {
  actions: [],
  metaText: null,
  className: '',
  open: false
};

export default FolderRow;
