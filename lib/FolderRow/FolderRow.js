import React, { Fragment, useState, useEffect } from 'react';
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
  ...props
}) => {
  const [toggle, setToggle] = useState(open);

  useEffect(() => {
    setToggle(open);
  }, [open]);

  const classNames = cx(`folder-row ${className}`, {
    'folder-row--open': toggle
  });

  return (
    <Fragment>
      <div className={classNames} {...props}>
        <div className="folder-row__name">
          <p className="text-overflow-ellipsis h-margin-clear">{name}</p>
        </div>

        <div className="folder-row__meta">
          {actions && <div className="folder-row__actions">{actions}</div>}
          {metaText && (
            <p className="folder-row__meta-text h-margin-clear">{metaText}</p>
          )}
          {showToggle && (
            <div className="folder-row__toggle h-margin-left-half">
              <Button types={['icon-only']} onClick={() => setToggle(!toggle)}>
                <Icon name={toggle ? 'caretUp' : 'caret'} />
              </Button>
            </div>
          )}
        </div>
      </div>

      {toggle && children}
    </Fragment>
  );
};

FolderRow.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  metaText: PropTypes.string,
  className: PropTypes.string,
  actions: PropTypes.node,
  open: PropTypes.bool,
  showToggle: PropTypes.bool
};

FolderRow.defaultProps = {
  children: null,
  actions: [],
  metaText: null,
  className: '',
  open: false,
  showToggle: false
};

export default FolderRow;
