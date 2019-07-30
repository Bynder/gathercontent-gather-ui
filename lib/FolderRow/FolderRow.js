import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';

const FolderRow = ({
  children,
  name,
  actions,
  metaText,
  open,
  className,
  showToggle,
  highlight,
  ...props
}) => {
  const [toggle, setToggle] = useState(open);

  useEffect(() => {
    setToggle(open);
  }, [open]);

  const classNames = cx(`folder-row ${className}`, {
    'folder-row--open': toggle,
    'folder-row--highlight': highlight
  });

  return (
    <>
      <div className={classNames} {...props}>
        <div className="folder-row__name">
          {showToggle && (
            <div className="folder-row__toggle h-margin-clear h-margin-right-half">
              <Button types={['icon-only']} onClick={() => setToggle(!toggle)}>
                <Icon name={toggle ? 'caret' : 'caretUp'} />
              </Button>
            </div>
          )}
          <Icon name="folder" className="h-margin-right-half" />
          <p className="text-overflow-ellipsis h-margin-clear">{name}</p>
        </div>

        <div className="folder-row__meta">
          {actions && <div className="folder-row__actions">{actions}</div>}
          {metaText && (
            <p className="folder-row__meta-text h-margin-clear">{metaText}</p>
          )}
        </div>
      </div>

      {toggle && <div className="folder-row__contents">{children}</div>}
    </>
  );
};

FolderRow.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  metaText: PropTypes.string,
  className: PropTypes.string,
  actions: PropTypes.node,
  open: PropTypes.bool,
  highlight: PropTypes.bool,
  showToggle: PropTypes.bool
};

FolderRow.defaultProps = {
  children: null,
  actions: [],
  metaText: null,
  className: '',
  open: false,
  highlight: false,
  showToggle: false
};

export default FolderRow;
