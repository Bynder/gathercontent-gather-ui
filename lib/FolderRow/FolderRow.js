import React, { useState, useEffect } from 'react';
import { bool, node, string } from 'prop-types';
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
  toggleTitle,
  backdrop,
  isEditing,
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

  const folderNameClassNames = cx('folder-row__name', {
    'h-width-100': isEditing
  });

  return (
    <>
      <div className={classNames} {...props}>
        {backdrop && <div className="folder-row__backdrop">{backdrop}</div>}
        <div className={folderNameClassNames}>
          {showToggle && (
            <div className="folder-row__toggle h-margin-clear h-margin-right-half">
              <Button
                types={['icon-only']}
                onClick={() => setToggle(!toggle)}
                title={toggleTitle}
              >
                <Icon name="caret" />
              </Button>
            </div>
          )}
          <Icon name="folder" className="h-margin-right-half" />
          <div className="text-overflow-ellipsis h-margin-clear h-width-100">
            {name}
          </div>
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
  name: node.isRequired,
  children: node,
  metaText: string,
  className: string,
  actions: node,
  open: bool,
  highlight: bool,
  showToggle: bool,
  toggleTitle: string,
  backdrop: node,
  isEditing: bool
};

FolderRow.defaultProps = {
  children: null,
  actions: [],
  metaText: null,
  className: '',
  open: false,
  highlight: false,
  showToggle: false,
  toggleTitle: 'toggle the contents',
  backdrop: null,
  isEditing: false
};

export default FolderRow;
