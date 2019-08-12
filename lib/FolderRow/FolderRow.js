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
  name: string.isRequired,
  children: node,
  metaText: string,
  className: string,
  actions: node,
  open: bool,
  highlight: bool,
  showToggle: bool,
  toggleTitle: string
};

FolderRow.defaultProps = {
  children: null,
  actions: [],
  metaText: null,
  className: '',
  open: false,
  highlight: false,
  showToggle: false,
  toggleTitle: 'toggle the contents'
};

export default FolderRow;
