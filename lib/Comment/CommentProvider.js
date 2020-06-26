import React, { createContext, useState } from 'react';
import { bool, node } from 'prop-types';

const CommentContext = createContext({});

function CommentProvider({ children, isOpen }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const sharedState = {
    isOpen,
    isEditing,
    setIsEditing,
    isDeleting,
    setIsDeleting
  };

  return (
    <CommentContext.Provider value={sharedState}>
      {children}
    </CommentContext.Provider>
  );
}

CommentProvider.propTypes = {
  children: node.isRequired,
  isOpen: bool.isRequired
};

export { CommentProvider, CommentContext };
