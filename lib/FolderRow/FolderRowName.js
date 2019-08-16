import React from 'react';
import { bool, func, node } from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

const FolderRowName = ({
  children,
  showToggle,
  toggle,
  setToggle,
  toggleTitle
}) => {
  return (
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
      <div className="text-overflow-ellipsis h-margin-clear h-width-100">
        {children}
      </div>
    </div>
  );
};

FolderRowName.propTypes = {
  children: node.isRequired,
  toggle: bool.isRequired,
  setToggle: func.isRequired,
  showToggle: bool,
  toggleTitle: node
};

FolderRowName.defaultProps = {
  showToggle: false,
  toggleTitle: 'toggle the contents'
};

export { FolderRowName };
