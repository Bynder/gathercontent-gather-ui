import React, { createContext, useState } from 'react';
import { bool, node } from 'prop-types';

const CommentContext = createContext({});

function CommentProvider({
  children,
  isOpen,
  isEditing: editing,
  isDeleting: deleting,
  hasFailed: failed,
  showBorders
}) {
  const [isEditing, setIsEditing] = useState(editing);
  const [isDeleting, setIsDeleting] = useState(deleting);
  const [hasFailed, setHasFailed] = useState(failed);

  const sharedState = {
    isOpen,
    showBorders,
    isEditing,
    setIsEditing,
    isDeleting,
    setIsDeleting,
    hasFailed,
    setHasFailed
  };

  return (
    <CommentContext.Provider value={sharedState}>
      {children}
    </CommentContext.Provider>
  );
}

CommentProvider.propTypes = {
  children: node.isRequired,
  isOpen: bool.isRequired,
  showBorders: bool,
  isDeleting: bool,
  isEditing: bool,
  hasFailed: bool
};

CommentProvider.defaultProps = {
  isDeleting: false,
  isEditing: false,
  hasFailed: false,
  showBorders: false
};

export { CommentProvider, CommentContext };
