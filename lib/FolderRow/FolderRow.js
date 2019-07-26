import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FolderRow = ({
  children,
  actions,
  metaText,
  open,
  className,
  toggleAction,
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
        {toggleAction && (
          <div className="folder-row__toggle h-margin-left-half">
            {toggleAction}
          </div>
        )}
      </div>
    </div>
  );
};

FolderRow.propTypes = {
  children: PropTypes.string.isRequired,
  metaText: PropTypes.string,
  className: PropTypes.string,
  toggleAction: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.node),
  open: PropTypes.bool
};

FolderRow.defaultProps = {
  actions: [],
  metaText: null,
  toggleAction: null,
  className: '',
  open: false
};

export default FolderRow;
